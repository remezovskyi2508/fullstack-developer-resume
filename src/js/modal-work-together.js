const modalMenu = document.querySelector('.modal-menu-dialog');
const btnCloseModal = document.querySelector('.btn-svg-modal-icon');


export function openModal(data) {
    modalMenu.show();
    const modalTitle = document.querySelector('.title-modal');
    const modalMessage = document.querySelector('.paragraph-modal');
  
    modalTitle.textContent = data.title;
    modalMessage.textContent = data.message;

    addEventListener('keydown', escEvt);
  }

const escEvt = e => {
  if (e.keyCode === 27) {
    modalMenu.close();
  }
};

const closeModal = () => {
    modalMenu.close();
    removeEventListener('keydown', escEvt);
}

modalMenu.addEventListener('click', (event) =>{
    const modalDiv = event.currentTarget;
    const isOpen = event.target === modalDiv;

    if(isOpen){
        modalMenu.close();
        }
});





btnCloseModal.addEventListener('click', closeModal);
