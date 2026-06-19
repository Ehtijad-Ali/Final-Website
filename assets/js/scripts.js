document.addEventListener('DOMContentLoaded', function () {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const faqCards = document.querySelectorAll('.faq-card');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('visible');
      mobileBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('visible'));
    });
  }

  faqCards.forEach((card) => {
    card.addEventListener('click', function () {
      card.classList.toggle('active');
      const answer = card.querySelector('.faq-answer');
      if (!answer) return;
      if (card.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
});
