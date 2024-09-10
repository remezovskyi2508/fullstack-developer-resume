const burger = document.querySelector('.header-menu-btn');
const closeBtn = document.querySelector('.modal-close-btn');
const menuBtn = document.querySelector('.titel-menu');
const mobileMenu = document.querySelector('.modal-overley');
const desktopMenu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.section-menu a');
const mobileLinks = document.querySelectorAll('#mobile-menu a');
const orderModalBtn = document.querySelector('#mobile-order-btn');

// Відкриття/закриття меню для мобільних пристроїв
burger.addEventListener('click', toggleMobileMenu);
closeBtn.addEventListener('click', toggleMobileMenu);
orderModalBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  const isHidden = mobileMenu.classList.contains('visually-hidden');
  mobileMenu.classList.toggle('visually-hidden');

  if (isHidden) {
    document.body.style.overflow = 'hidden'; // Отключаем прокрутку
  } else {
    document.body.style.overflow = ''; // Включаем прокрутку обратно
  }
}

// Відкриття/закриття меню для десктопних пристроїв
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  desktopMenu.classList.toggle('is-open');
});

// Плавний скрол до секцій
links.forEach(function (link) {
  link.addEventListener('click', scrollToSection);
});
mobileLinks.forEach(function (link) {
  link.addEventListener('click', event => {
    scrollToSection(event);
    toggleMobileMenu(); // Закрити мобільне меню після вибору посилання
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

// Закриття мобільного меню при кліку поза його межами
document.addEventListener('click', event => {
  if (!desktopMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    desktopMenu.classList.remove('is-open'); // Закриваємо десктопне меню
  }
});

// Закриття мобільного і десктопного меню при натисканні клавіші "Escape"
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (desktopMenu.classList.contains('is-open')) {
      desktopMenu.classList.remove('is-open'); // Закриваємо мобільне меню
    }
    return;
  }
});
