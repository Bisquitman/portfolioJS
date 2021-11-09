const presentOrderBtn = document.querySelector('.present__order-btn');
const pageOverlayModal = document.querySelector('.page__overlay_modal');
const modalClose = document.querySelector('.modal__close');

const toggleModal = (openBtn, modal, openSelector, closeSelector, overlaySelector, sk) => {
  let opacity = 0;
  const speed = {
    slow: 10,
    normal: 5,
    fast: 1,
    default: 5,
  }

  openBtn.addEventListener('click', () => {
    modal.style.opacity = opacity;
    modal.classList.add(openSelector);
    const timer = setInterval(() => {
      opacity += 0.02;
      modal.style.opacity = opacity;
      if (opacity >= 1) clearInterval(timer);
    }, speed[sk] ? speed[sk] : speed.default);
  });

  modal.addEventListener('click', (event) => {
    if (event.target.matches(overlaySelector) || event.target.closest(closeSelector)) {
      const timer = setInterval(() => {
        opacity -= 0.02;
        modal.style.opacity = opacity;
        if (opacity <= 0) {
          clearInterval(timer);
          modal.classList.remove(openSelector);
        };
      }, speed[sk] ? speed[sk] : speed.default);
    }
  });
};

toggleModal(
  presentOrderBtn,
  pageOverlayModal,
  'page__overlay_modal_open',
  '.modal__close',
  '.page__overlay_modal',
  'normal'
);
