/* Full-screen opening intro for Parameter Collective.
   Plays on a fresh open or a refresh — NOT when navigating between pages via the nav links.
   The brackets fly in to snap around the P, hold briefly, then the whole screen fades +
   zooms away to reveal the site. */
(function () {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  } catch (e) {}

  // Play ONLY on a fresh open or a refresh — not on internal navigation.
  // An internal link click arrives as a "navigate" with a same-origin referrer; a refresh is
  // "reload"; a fresh open (typed URL / bookmark / external link) has no same-origin referrer.
  var play = true;
  try {
    var entries = performance.getEntriesByType('navigation');
    var navType = (entries && entries.length) ? entries[0].type
      : (performance.navigation && performance.navigation.type === 1 ? 'reload' : 'navigate');
    var sameOriginRef = document.referrer && document.referrer.indexOf(location.origin) === 0;
    if (navType === 'reload') play = true;
    else if (navType === 'navigate' && !sameOriginRef) play = true;
    else play = false; // internal link click, back/forward, etc.
  } catch (e) { play = true; }
  if (!play) return;

  var o = document.createElement('div');
  o.className = 'pc-intro';
  // Critical inline styles so it covers the page even before styles.css applies (no flash).
  o.style.cssText = 'position:fixed;inset:0;z-index:1000;background:#1E2A33;' +
    'display:flex;align-items:center;justify-content:center;';
  o.innerHTML =
    '<div class="pc-intro-inner">' +
      '<div class="pc-intro-mark">' +
        '<span class="br-l">[</span><span class="p">P</span><span class="br-r">]</span>' +
      '</div>' +
      '<div class="pc-intro-name"><span>Parameter Collective</span></div>' +
      '<div class="pc-intro-line"></div>' +
    '</div>';

  var root = document.documentElement;
  root.appendChild(o);
  root.style.overflow = 'hidden'; // briefly lock scroll during the intro

  var HOLD = 1150;  // ms shown after the mark settles, before it leaves
  var WIPE = 820;   // ms the layered exit takes (content lift + curtain up)

  setTimeout(function () { o.classList.add('pc-leaving'); }, HOLD);
  setTimeout(function () {
    if (o.parentNode) o.parentNode.removeChild(o);
    root.style.overflow = '';
  }, HOLD + WIPE);
})();
