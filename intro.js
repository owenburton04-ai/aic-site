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
      '<svg class="pc-intro-scene" viewBox="0 0 1440 320" aria-hidden="true"' +
        ' preserveAspectRatio="xMidYMax meet" fill="none"' +
        ' stroke-linecap="round" stroke-linejoin="round">' +
        /* detail layer (fades in as a group, keeping each element\'s opacity) */
        '<g class="pfade">' +
          '<circle cx="1150" cy="120" r="40" stroke="#5C9CE0" stroke-width="1.75" opacity=".7"/>' +
          '<path d="M654,120 L668,108 L680,118 L692,106 L706,120" stroke="#5C9CE0" stroke-width="1.5"/>' +
          '<path d="M978,92 q8,-8 16,0 q8,-8 16,0" stroke="#5C9CE0" stroke-width="1.5"/>' +
          '<path d="M1024,112 q6,-6 12,0 q6,-6 12,0" stroke="#5C9CE0" stroke-width="1.5"/>' +
          '<path d="M240,272 L470,272 M600,290 L840,290 M360,306 L560,306 M920,278 L1140,278"' +
            ' stroke="#5C9CE0" stroke-width="1.5" stroke-dasharray="34 20" opacity=".55"/>' +
        '</g>' +
        /* far ridge */
        '<path class="pdraw" pathLength="1" style="animation-delay:.15s"' +
          ' d="M0,250 L150,168 L280,220 L430,150 L560,205 L700,150 L860,210 L1010,158 L1180,210 L1320,168 L1440,205"' +
          ' stroke="#A9C9EC" stroke-width="1.5"/>' +
        /* near mountains */
        '<path class="pdraw" pathLength="1" style="animation-delay:.35s"' +
          ' d="M-10,252 L180,252 L360,150 L470,205 L560,176 L680,95 L820,205 L940,160 L1080,215 L1240,176 L1440,235"' +
          ' stroke="#5C9CE0" stroke-width="2"/>' +
        /* pines */
        '<path class="pdraw" pathLength="1" style="animation-delay:.7s"' +
          ' d="M112,252 L112,224 M94,236 L112,206 L130,236 M98,224 L112,198 L126,224 M102,212 L112,192 L122,212"' +
          ' stroke="#3F7DC0" stroke-width="1.5"/>' +
        '<path class="pdraw" pathLength="1" style="animation-delay:.8s"' +
          ' d="M172,252 L172,230 M158,240 L172,216 L186,240 M161,230 L172,210 L183,230"' +
          ' stroke="#3F7DC0" stroke-width="1.5"/>' +
        /* lake surface */
        '<path class="pdraw" pathLength="1" style="animation-delay:.55s"' +
          ' d="M-10,252 L1440,252" stroke="#5C9CE0" stroke-width="1.5"/>' +
        /* journey trail */
        '<path class="ptrail" d="M520,322 C596,300 616,284 618,266 C620,250 656,250 690,252"' +
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
