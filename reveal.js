/* Scroll reveal + stat count-up for Applied Intelligence Collective.
   Progressive enhancement: the hidden state is CSS-gated on html.anim, which is
   set synchronously by a tiny inline marker in each page's <head> (and never set
   under prefers-reduced-motion). So no-JS / reduced-motion visitors see everything
   normally, with no flash. This file just reveals elements as they scroll into
   view (lightly staggered per group) and counts up the single-number stats. */
(function () {
  var root = document.documentElement;
  if (!root.classList.contains('anim')) return;          // reduced motion → nothing to do
  if (!('IntersectionObserver' in window)) {              // old browser → just show everything
    root.classList.remove('anim');
    return;
  }

  var SEL = '.section-kicker,.tracks-head,.tracks-lead,.statement,.who h2,' +
    '.founders-figure,.founders-intro h2,.founders-intro p,.path-card,.feature-card,' +
    '.stat-card,.price-card,.brief-card,.paper-card,.step,.lens-strip li,.checks li,' +
    '.callout,.reader';

  var keyCounter = 0;

  function run() {
    var nodes = [].slice.call(document.querySelectorAll(SEL))
      .filter(function (el) { return !el.closest('.hero'); });
    if (!nodes.length) return;

    // stagger siblings so grids and lists cascade in instead of popping together
    var seen = {};
    nodes.forEach(function (el) {
      var p = el.parentNode;
      var key = p.__rvKey || (p.__rvKey = ++keyCounter);
      var i = seen[key] == null ? 0 : seen[key] + 1;
      seen[key] = i;
      el.style.transitionDelay = Math.min(i, 6) * 70 + 'ms';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add('rv-in');
        if (el.classList.contains('stat-card')) {
          var n = el.querySelector('.stat-num');
          if (n) countUp(n);
        }
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    nodes.forEach(function (el) { io.observe(el); });
  }

  // Count a stat number up from zero, preserving its prefix/suffix (~, $, %, ×, +).
  // Only runs on stats with exactly one number, so ranges like "$8-14B" are left as-is.
  function countUp(el) {
    if (el.__counted) return;
    el.__counted = true;
    var text = el.textContent;
    var m = text.match(/\d[\d,]*\.?\d*/g);
    if (!m || m.length !== 1) return;
    var numStr = m[0];
    var idx = text.indexOf(numStr);
    var pre = text.slice(0, idx);
    var post = text.slice(idx + numStr.length);
    var decimals = (numStr.split('.')[1] || '').length;
    var target = parseFloat(numStr.replace(/,/g, ''));
    if (isNaN(target)) return;
    var dur = 1100, t0 = null;
    function fmt(v) {
      return v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    }
    function frame(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + fmt(target * eased) + post;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = pre + numStr + post;         // restore exact original glyphs
    }
    requestAnimationFrame(frame);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
