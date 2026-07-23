/* Opening intro for Applied Intelligence Collective.
   Plays ONCE per browser-tab session — never on internal navigation (Home/Research/Apply)
   or refresh. The brand's blue mountain outline sketches itself in on graphite (ridges
   draw on, the journey trail's dots march up toward the peak), holds, then the whole panel
   dissolves to reveal the site (which opens on the same mountains). No text — the drawing
   is the whole moment. */
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
      '<svg class="pc-intro-scene" viewBox="0 0 1200 640" aria-hidden="true"' +
        ' preserveAspectRatio="xMidYMax meet" fill="none"' +
        ' stroke-linecap="round" stroke-linejoin="round">' +
        /* detail layer (fades in as a group, keeping each element\'s opacity) */
        '<g class="pfade">' +
          '<circle cx="980" cy="120" r="46" stroke="#5C9CE0" stroke-width="1.75" opacity=".7"/>' +
          '<circle cx="966" cy="104" r="5" stroke="#5C9CE0" stroke-width="1.25" opacity=".55"/>' +
          '<circle cx="998" cy="132" r="7.5" stroke="#5C9CE0" stroke-width="1.25" opacity=".55"/>' +
          '<circle cx="970" cy="140" r="4" stroke="#5C9CE0" stroke-width="1.25" opacity=".55"/>' +
          '<path d="M702,200 L712,188 L722,198 L734,185 L746,200" stroke="#5C9CE0" stroke-width="1.5"/>' +
          '<path d="M300,150 q10,-9 20,0 q10,-9 20,0" stroke="#5C9CE0" stroke-width="1.5"/>' +
          '<path d="M366,182 q8,-7 16,0 q8,-7 16,0" stroke="#5C9CE0" stroke-width="1.5"/>' +
          '<path d="M180,545 L430,545 M540,565 L800,565 M320,588 L560,588 M880,552 L1120,552"' +
            ' stroke="#5C9CE0" stroke-width="1.5" stroke-dasharray="34 20" opacity=".55"/>' +
        '</g>' +
        /* far ridge */
        '<path class="pdraw" pathLength="1" style="animation-delay:.15s"' +
          ' d="M0,430 L150,330 L300,400 L470,315 L640,395 L820,310 L1000,390 L1200,345"' +
          ' stroke="#A9C9EC" stroke-width="1.5"/>' +
        /* near mountains */
        '<path class="pdraw" pathLength="1" style="animation-delay:.35s"' +
          ' d="M-10,520 L110,520 L300,300 L430,420 L560,340 L720,175 L900,420 L1010,330 L1120,440 L1210,505"' +
          ' stroke="#5C9CE0" stroke-width="2"/>' +
        /* ocean surface */
        '<path class="pdraw" pathLength="1" style="animation-delay:.55s"' +
          ' d="M-10,520 L1210,520" stroke="#5C9CE0" stroke-width="1.5"/>' +
        /* pines */
        '<path class="pdraw" pathLength="1" style="animation-delay:.7s"' +
          ' d="M150,520 L150,478 M128,494 L150,458 L172,494 M132,478 L150,448 L168,478 M136,466 L150,442 L164,466"' +
          ' stroke="#3F7DC0" stroke-width="1.5"/>' +
        '<path class="pdraw" pathLength="1" style="animation-delay:.8s"' +
          ' d="M210,520 L210,486 M192,500 L210,470 L228,500 M196,486 L210,462 L224,486"' +
          ' stroke="#3F7DC0" stroke-width="1.5"/>' +
        /* the journey: ocean, up over the mountains, to the moon */
        '<path class="ptrail" d="M360,600 C430,560 445,538 485,518 C565,483 585,428 645,358 C712,268 820,198 900,160 C925,148 945,150 958,150"' +
          ' stroke="#5C9CE0" stroke-width="2.25" stroke-dasharray="1 10"/>' +
      '</svg>' +
    '</div>';

  var root = document.documentElement;
  root.appendChild(o);
  root.style.overflow = 'hidden'; // briefly lock scroll during the intro

  var HOLD = 2100;  // ms: lets the range fully draw + the trail march a beat before it leaves
  var EXIT = 780;   // ms the dissolve takes

  setTimeout(function () { o.classList.add('pc-leaving'); }, HOLD);
  setTimeout(function () {
    if (o.parentNode) o.parentNode.removeChild(o);
    root.style.overflow = '';
  }, HOLD + EXIT);
})();
