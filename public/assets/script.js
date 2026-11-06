// Back-to-top button shared by every page
(function () {
  var btn = document.querySelector('.to-top');
  if (!btn) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });
  window.addEventListener('scroll', function () {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
})();

// Light/dark toggle. Dark is the default; a visitor's choice is remembered.
(function () {
  var root = document.documentElement;
  var item = document.querySelector('.theme-toggle');
  if (!item) return;
  var btn = item.querySelector('button');
  var meta = document.querySelector('meta[name="theme-color"]');
  function apply(theme) {
    var light = theme === 'light';
    if (light) root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    btn.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    if (meta) meta.setAttribute('content', light ? '#1b4332' : '#111c16');
  }
  apply(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  item.hidden = false;
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
  });
})();
