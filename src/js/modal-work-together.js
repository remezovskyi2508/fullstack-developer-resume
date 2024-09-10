const modalMenu = document.querySelector('.modal-menu-dialog');
const btnCloseModal = document.querySelector('.btn-svg-modal-icon');


export function openModal(data) {
    modalMenu.show();
    const modalTitle = document.querySelector('.title-modal');
    const modalMessage = document.querySelector('.paragraph-modal');
  
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





btnCloseModal.addEventListener('click', closeModal);
