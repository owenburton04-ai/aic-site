/* Opening intro for Applied Intelligence Collective.
   Plays ONCE per browser-tab session — never on internal navigation (Home/Research/Apply)
   or refresh. The [ AI ] mark settles in, holds, then the whole panel dissolves
   (gentle zoom-through + soft blur + fade) to reveal the site. */
(function () {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  } catch (e) {}

  // Skip on internal navigation. If you got here by clicking a link from another
  // page on this same site (Home/Research/About/Apply), the intro already played
  // this visit, so don't replay it. This check works even when storage is blocked
  // (e.g. Safari Private Browsing), which is the reliable signal.
  try {
    if (document.referrer) {
      var ref = new URL(document.referrer);
      if (ref.origin === window.location.origin) return;
    }
  } catch (e) {}

  // Fresh entry to the site. Still gate with sessionStorage as a backup so a
  // refresh of the landing page doesn't replay it. Best-effort: if storage is
  // blocked this simply no-ops, and the referrer check above does the real work.
  try {
    if (sessionStorage.getItem('aic_intro_played')) return;
    sessionStorage.setItem('aic_intro_played', '1');
  } catch (e) { /* storage blocked (private mode etc.) — rely on the referrer check */ }

  var o = document.createElement('div');
  o.className = 'pc-intro';
  // Critical inline styles so it covers the page even before styles.css applies (no flash).
  o.style.cssText = 'position:fixed;inset:0;z-index:1000;background:#1E2A33;' +
    'display:flex;align-items:center;justify-content:center;';
  o.innerHTML =
    '<div class="pc-intro-inner">' +
      '<div class="pc-intro-mark">' +
        '<span class="br-l">[</span><span class="p">AI</span><span class="br-r">]</span>' +
      '</div>' +
      '<div class="pc-intro-name"><span>Applied Intelligence Collective</span></div>' +
      '<div class="pc-intro-line"></div>' +
    '</div>';

  var root = document.documentElement;
  root.appendChild(o);
  root.style.overflow = 'hidden'; // briefly lock scroll during the intro

  var HOLD = 1000;  // ms the mark holds after settling, before it leaves
  var EXIT = 780;   // ms the dissolve takes

  setTimeout(function () { o.classList.add('pc-leaving'); }, HOLD);
  setTimeout(function () {
    if (o.parentNode) o.parentNode.removeChild(o);
    root.style.overflow = '';
  }, HOLD + EXIT);
})();
