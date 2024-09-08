const modalMenu = document.querySelector(".modal-menu-dialog");
const btnCloseModal = document.querySelector(".btn-svg-modal-icon");
const btnOpenModal = document.querySelector(".footer-send-btn");

export function openModal(data) {
    modalMenu.show();
    const modalTitle = document.querySelector('.modal-title');
    const modalMessage = document.querySelector('.modal-messages');
  
    modalTitle.textContent = data.title;
    modalMessage.textContent = data.message;
  }

const closeModal = () => {
    modalMenu.close();
}

modalMenu.addEventListener('click', (event) =>{
    const modalDiv = event.currentTarget;
    const isOpen = event.target === modalDiv;

    if(isOpen){
        modalMenu.close();
        }
});




btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);