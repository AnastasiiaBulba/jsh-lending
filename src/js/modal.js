(() => {
  const refs = {
    burgerBtn: document.querySelector('[data-modal-open]'),
    backdrop: document.querySelector('[data-backdrop]'),
    modalNav: document.querySelector('[data-modal]'),
    links: document.querySelectorAll('.modal-nav-link'),
  };

  refs.burgerBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', event => {
    // Закриваємо тільки якщо клік саме на бекдроп (а не по модалці всередині)
    if (event.target === refs.backdrop) {
      closeModal();
    }
  });

  refs.links.forEach(link => {
    link.addEventListener('click', closeModal);
  });

  function toggleModal() {
    refs.modalNav.classList.toggle('is-hidden');
    refs.backdrop.classList.toggle('is-hidden');
  }

  function closeModal() {
    refs.modalNav.classList.add('is-hidden');
    refs.backdrop.classList.add('is-hidden');
  }
})();
