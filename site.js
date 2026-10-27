/* Amrev Consulting Group — shared behaviour.
   Every block is null-safe so the same file runs on pages that have no
   hero device, no sticky bar and no counters. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* mobile menu */
  var nav = document.getElementById('nav');
  var btn = nav && nav.querySelector('.menu-btn');
  if (nav && btn) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.textContent = open ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', false);
        btn.textContent = 'Menu';
      });
    });
  }

  /* count-up numbers */
  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = 1;
    var to = parseFloat(el.dataset.count),
        from = parseFloat(el.dataset.from || 0),
        dec = parseInt(el.dataset.dec || 0, 10);
    if (reduce) { el.textContent = to.toFixed(dec); return; }
    var t0 = null, dur = 1600;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = (from + (to - from) * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = from.toFixed(dec);
    requestAnimationFrame(step);
  }

  /* hero device: charts and counters go live once the laptop has opened */
  var stage = document.getElementById('stage');
  if (stage) {
    var goLive = function () {
      stage.classList.add('live');
      stage.querySelectorAll('[data-count]').forEach(countUp);
    };
    if (reduce) goLive();
    else setTimeout(goLive, window.innerWidth <= 760 ? 1200 : 2000);
  }

  /* phone screen auto-scroll distance */
  function setPhoneScroll() {
    var s = document.querySelector('.p-scroll'),
        scr = document.querySelector('.p-screen');
    if (!s || !scr || !scr.clientHeight) return;
    s.style.setProperty('--dist', Math.max(0, s.scrollHeight - scr.clientHeight) + 'px');
  }
  window.addEventListener('load', setPhoneScroll);
  window.addEventListener('resize', setPhoneScroll);

  /* scroll reveals and metric counters */
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        en.target.querySelectorAll('[data-count]').forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* sticky call bar on phones, once the first screen is passed */
  var mbar = document.getElementById('mbar');
  var firstScreen = document.querySelector('.hero') || document.querySelector('.masthead');
  if (mbar && firstScreen) {
    var onScroll = function () {
      mbar.classList.toggle('show', firstScreen.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
