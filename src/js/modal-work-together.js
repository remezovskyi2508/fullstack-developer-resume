const modalMenu = document.querySelector('.modal-menu-dialog');
const btnCloseModal = document.querySelector('.btn-svg-modal-icon');

export function openModal(data) {
  modalMenu.show();
  const modalTitle = document.querySelector('.title-modal');
  const modalMessage = document.querySelector('.paragraph-modal');

  modalTitle.textContent = data.title;
  modalMessage.textContent = data.message;

  document.body.style.overflow = 'hidden';
  addEventListener('keydown', escEvt);
}

const escEvt = e => {
  if (e.keyCode === 27) {
    closeModal();
  }
};

const closeModal = () => {
  const sendBtn = document.querySelector('.footer-send-btn');
  sendBtn.classList.remove('is-active');
  modalMenu.close();
  document.body.style.overflow = '';
  removeEventListener('keydown', escEvt);
};

modalMenu.addEventListener('click', event => {
  const modalDiv = event.currentTarget;
  const isOpen = event.target === modalDiv;

  if (isOpen) {
    modalMenu.close();
  }
});

btnCloseModal.addEventListener('click', closeModal);
