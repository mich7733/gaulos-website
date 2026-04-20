document.addEventListener('DOMContentLoaded', function() {
  // Sticky header
  const header = document.querySelector('.header');
  function updateHeader() {
    header.classList.toggle('header--scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // Mobile menu
  const burger = document.querySelector('.header__burger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => mobileNav.classList.add('open'));
    if (mobileClose) mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  }

  // Language toggle
  const langAR = document.getElementById('langAR');
  const langEN = document.getElementById('langEN');
  const arNotice = document.getElementById('arNotice');
  const arClose = document.getElementById('arClose');
  if (langAR && arNotice) {
    langAR.addEventListener('click', () => arNotice.style.display = 'flex');
    arClose.addEventListener('click', () => arNotice.style.display = 'none');
    langEN.addEventListener('click', () => arNotice.style.display = 'none');
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
});
