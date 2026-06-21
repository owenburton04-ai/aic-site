/* Opening intro for Applied Intelligence Collective.
   Plays ONCE per browser-tab session — never on internal navigation (Home/Research/Apply)
   or refresh. The [ AI ] mark settles in, holds, then the whole panel dissolves
   (gentle zoom-through + soft blur + fade) to reveal the site. */
(function () {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  } catch (e) {}

  // Once per tab session. Clicking between pages or refreshing won't replay it;
  // a brand-new visit (new tab / reopened browser) plays it again.
  try {
    if (sessionStorage.getItem('aic_intro_played')) return;
    sessionStorage.setItem('aic_intro_played', '1');
  } catch (e) { /* storage blocked (private mode etc.) — fall through and play once */ }

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
