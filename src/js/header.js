const burger = document.querySelector('.header-menu-btn');
const closeBtn = document.querySelector('.modal-close-btn');
const menuBtn = document.querySelector('.titel-menu');
const mobileMenu = document.querySelector('.modal-overley');
const desktopMenu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.section-menu a');
const mobileLinks = document.querySelectorAll('#mobile-menu a');
const orderModalBtn = document.querySelector('#mobile-order-btn');

burger.addEventListener('click', toggleMobileMenu);
closeBtn.addEventListener('click', toggleMobileMenu);
orderModalBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.toggle('is-open');

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  desktopMenu.classList.toggle('is-open');
});

links.forEach(function (link) {
  link.addEventListener('click', scrollToSection);
});
mobileLinks.forEach(function (link) {
  link.addEventListener('click', event => {
    scrollToSection(event);
    toggleMobileMenu();
  });
});

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    const yOffset = -60;
    const yPosition =
      targetSection.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  }
}

document.addEventListener('click', event => {
  if (!desktopMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    desktopMenu.classList.remove('is-open');
    menuBtn.classList.remove('active');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (desktopMenu.classList.contains('is-open')) {
      desktopMenu.classList.remove('is-open');
      menuBtn.classList.remove('active');
    }
    return;
  }
});
