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
