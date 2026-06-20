document.addEventListener('DOMContentLoaded', function () {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const faqCards = document.querySelectorAll('.faq-card');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function () {
      // Toggle the Tailwind "hidden" utility so the mobile menu shows/hides correctly
      mobileMenu.classList.toggle('hidden');
      const expanded = !mobileMenu.classList.contains('hidden');
      mobileBtn.setAttribute('aria-expanded', expanded);
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
