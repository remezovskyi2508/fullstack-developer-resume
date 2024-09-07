const modalMenu = document.querySelector(".modal-menu-dialog");
// const modalInner = document.querySelector(".modal-inner");
const btnCloseModal = document.querySelector(".btn-svg-modal-icon");
const btnOpenModal = document.querySelector(".footer-send-btn");

const openModal = () => {    
    modalMenu.showModal();
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