const dialog = document.querySelector(".modal-menu");
const btnCloseModal = document.querySelector(".btn-svg-modal-icon");
const btnOpenModal = document.querySelector(".footer-send-btn");


const openModal = () => {
    dialog.showModal();
}

const closeModal = () => {
    dialog.close();
}

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);