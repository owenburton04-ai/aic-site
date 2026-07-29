/* Website -> hub intake forms.

   The two public AIC forms (business inquiry on businesses.html, cohort
   application on apply.html) POST JSON to the hub at
   hub.appliedintelligencecollective.com. The hub owns the data. This file's whole
   job is: collect the fields, post them, show a thank-you or an error.

   FIELD NAMES ARE THE API. They are the contract documented in the hub repo at
   Platform/WEBSITE-INTAKE.md. Rename one here and the form breaks silently, so
   change both in the same breath.

   No API key, on purpose: a key in a public page is not a secret. The protections
   live on the hub side (origin allowlist, honeypot, length caps, review queue).

   JAVASCRIPT IS REQUIRED, and that is deliberate rather than lazy. The endpoints
   read a JSON body, so a native HTML form POST (urlencoded) gets a 400, and the
   request is cross-origin so the browser would navigate away to raw JSON. Each
   submit button therefore ships disabled in the markup and is enabled here, and
   each form carries a <noscript> block with the email fallback. A no-JS visitor
   gets told what to do instead of a button that silently does nothing. */
(function () {
  'use strict';

  var FALLBACK_EMAIL = 'owen@appliedintelligencecollective.com';

  /* Matches the hub's deliberately loose check in src/lib/intake/intake.ts, so
     the client and the server agree on what counts as an email. Strict regexes
     reject valid addresses; the real test is whether a reply arrives. */
  function looksLikeEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 254;
  }

  /* ---------- field-level errors ---------- */

  function errorNodeFor(el) {
    var host = el.closest('.field');
    if (!host) return null;
    var node = host.querySelector('.field-error');
    if (!node) {
      node = document.createElement('p');
      node.className = 'field-error';
      node.id = (el.id || el.name) + '-error';
      host.appendChild(node);
    }
    return node;
  }

  function setFieldError(el, message) {
    el.setAttribute('aria-invalid', 'true');
    var node = errorNodeFor(el);
    if (node) {
      node.textContent = message;
      el.setAttribute('aria-describedby', node.id);
    }
  }

  function clearFieldErrors(form) {
    form.querySelectorAll('.field-error').forEach(function (node) {
      node.textContent = '';
    });
    form.querySelectorAll('[aria-invalid]').forEach(function (el) {
      el.removeAttribute('aria-invalid');
      el.removeAttribute('aria-describedby');
    });
  }

  /* People type "linkedin.com/in/jordan". Make that a URL rather than bounce it
     back at them, and show the change so nothing is sent behind their back. */
  function normalizeUrl(el) {
    var value = (el.value || '').trim();
    if (value && value.indexOf('.') > -1 && !/^https?:\/\//i.test(value)) {
      el.value = 'https://' + value;
    }
  }

  /* Catch the common mistakes on the page so they never round-trip. Returns the
     first offending element (for focus) and how many fields failed. */
  function validate(form) {
    clearFieldErrors(form);
    var first = null;
    var count = 0;

    form.querySelectorAll('[name]').forEach(function (el) {
      if (el.name === 'website_url') return;              // the honeypot, never validated
      var value = (el.value || '').trim();
      var label = el.getAttribute('data-label') || el.name;
      var max = Number(el.getAttribute('data-max') || 0);
      var message = '';

      if (el.hasAttribute('required') && !value) {
        message = 'Please add your ' + label + '.';
      } else if (value && el.getAttribute('data-check') === 'email' && !looksLikeEmail(value)) {
        message = 'That email does not look right.';
      } else if (value && max && value.length > max) {
        /* Caps are validated here rather than with maxlength so a long paste is
           never silently truncated. Losing what someone wrote loses the lead. */
        message = 'That is longer than we can store. Please trim it to ' + max +
          ' characters (it is ' + value.length + ' right now).';
      }

      if (message) {
        setFieldError(el, message);
        count++;
        if (!first) first = el;
      }
    });

    return { first: first, count: count };
  }

  /* ---------- request body ---------- */

  function payload(form) {
    var body = {};

    form.querySelectorAll('[name]').forEach(function (el) {
      /* The honeypot is always sent, even (especially) when empty. */
      if (el.name === 'website_url') {
        body.website_url = el.value || '';
        return;
      }
      var value = (el.value || '').trim();
      if (!value) return;                                  // blank means "not answered"
      body[el.name] = el.hasAttribute('data-number') ? Number(value) : value;
    });

    return body;
  }

  /* ---------- status region ---------- */

  function showStatus(status, kind, message, offerEmail) {
    if (!status) return;
    status.hidden = false;
    status.className = 'form-status is-' + kind;
    status.textContent = '';

    var line = document.createElement('p');
    line.textContent = message;                            // server copy, never as HTML
    status.appendChild(line);

    if (offerEmail) {
      var extra = document.createElement('p');
      extra.className = 'form-status-extra';
      extra.appendChild(document.createTextNode('So this does not get lost, email us at '));
      var link = document.createElement('a');
      link.href = 'mailto:' + FALLBACK_EMAIL;
      link.textContent = FALLBACK_EMAIL;
      extra.appendChild(link);
      extra.appendChild(document.createTextNode(' and we will pick it up from there.'));
      status.appendChild(extra);
    }
  }

  /* ---------- wiring ---------- */

  function wire(form) {
    var endpoint = form.getAttribute('data-endpoint');
    if (!endpoint) return;

    var status = form.querySelector('[data-form-status]');
    var button = form.querySelector('[data-submit]');
    var thanksSel = form.getAttribute('data-thanks');
    var thanks = thanksSel ? document.querySelector(thanksSel) : null;
    if (!button) return;

    var restLabel = button.innerHTML;
    var busyLabel = button.getAttribute('data-busy-label') || 'Sending…';

    /* The only thing that makes this form usable. See the header note. */
    button.disabled = false;
    form.removeAttribute('data-needs-js');

    function release() {
      form.dataset.busy = '';
      button.disabled = false;
      button.removeAttribute('aria-busy');
      button.innerHTML = restLabel;
    }

    function succeed() {
      if (status) status.hidden = true;
      if (!thanks) {
        showStatus(status, 'ok', 'Thanks, that is in. We will be in touch.', false);
        release();
        return;
      }
      form.hidden = true;
      thanks.hidden = false;
      try { thanks.focus({ preventScroll: true }); } catch (e) { thanks.focus(); }
      try { thanks.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      catch (e) { thanks.scrollIntoView(); }
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (form.dataset.busy === '1') return;               // a double-post is a duplicate lead

      form.querySelectorAll('[data-check="url"]').forEach(normalizeUrl);

      var bad = validate(form);
      if (bad.count > 0) {
        showStatus(status, 'error',
          bad.count === 1
            ? 'Please check the highlighted field and try again.'
            : 'Please check the ' + bad.count + ' highlighted fields and try again.',
          false);
        bad.first.focus();
        return;
      }

      form.dataset.busy = '1';
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      button.innerHTML = busyLabel;
      showStatus(status, 'pending', form.getAttribute('data-pending') || 'Sending…', false);

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload(form))
      }).then(function (res) {
        return res.json()
          .catch(function () { return {}; })
          .then(function (data) { return { ok: res.ok, code: res.status, data: data }; });
      }).then(function (res) {
        if (res.ok) { succeed(); return; }

        var error = res.data && res.data.error;

        if (res.code === 403) {
          /* Should never happen in production. If it does, the origin is the
             whole diagnosis, so put it on screen where it can be reported. */
          showStatus(status, 'error',
            (error || 'Not an allowed origin.') + ' This page is served from ' +
            window.location.origin + ', which the hub does not recognise. Send that ' +
            'exact address to Owen so it can be added to the allowlist.', true);
        } else if (res.code >= 500 || !error) {
          showStatus(status, 'error', error || 'Something went wrong on our end.', true);
        } else {
          /* 400s are written for a visitor to read, so show them as they are. */
          showStatus(status, 'error', error, false);
        }
        release();
      }).catch(function () {
        showStatus(status, 'error',
          'We could not reach our system just now. Everything you typed is still ' +
          'here, so you can try again in a moment.', true);
        release();
      });
    });
  }

  function init() {
    document.querySelectorAll('form[data-endpoint]').forEach(wire);

    /* Pricing cards jump to the form with that package already selected. */
    document.querySelectorAll('[data-tier-pick]').forEach(function (link) {
      link.addEventListener('click', function () {
        var select = document.querySelector('select[name="tier_interest"]');
        if (select) select.value = link.getAttribute('data-tier-pick');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
