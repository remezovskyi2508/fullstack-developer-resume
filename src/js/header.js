const closeBtn = document.querySelector('.modal-close-btn');
const burger = document.querySelector('.header-menu-btn');
const mobileMenu = document.querySelector('.modal-overley');
const menuBtn = document.querySelector('.titel-menu');
const menu = document.querySelector('.nav-menu');
const orderBtn = document.querySelector('.contacts-menu-submit');
const mobileNavigation = document.querySelector('#mobile-menu');
const mobileOrderBtn = document.querySelector('#mobile-order-btn');

menuBtn.addEventListener('click', toggleMenu);
burger.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMenu);
[...menu.children].forEach(link =>
  link.addEventListener('click', scrollToSection)
);
mobileNavigation.addEventListener('click', scrollToSection);
orderBtn.addEventListener('click', scrollToSectionOrder);
mobileOrderBtn.addEventListener('click', scrollToSectionOrder);

function openMobileMenu() {
  mobileMenu.classList.remove('visually-hidden');
}

function closeMenu() {
  mobileMenu.classList.add('visually-hidden');
}

function toggleMenu() {
  menu.classList.toggle('visually-hidden');
}

function scrollToSection(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'A') {
    return;
  }
  toggleMenu();
  closeMenu();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    const yOffset = -60;
    const y =
      targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function scrollToSectionOrder(event) {
  event.preventDefault();
  closeMenu();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    const yOffset = -60;
    const y =
      targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
