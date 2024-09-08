const closeBtn = document.querySelector('.modal-close-btn');
const burger = document.querySelector('.header-menu-btn');
const mobileMenu = document.querySelector('.modal-overley');

burger.addEventListener('click', openMenu);
function openMenu() {
  mobileMenu.classList.remove('visually-hidden');
}
closeBtn.addEventListener('click', closeMenu);
function closeMenu() {
  mobileMenu.classList.add('visually-hidden');
}
