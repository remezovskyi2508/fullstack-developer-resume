import Accordion from 'accordion-js';
import Swiper from 'swiper';
import 'swiper/css';

const accordionEl = document.querySelectorAll('.is-open-accordeon');
const accordionBtn = document.querySelectorAll('.about-me-btn');
const activeEl = document.querySelectorAll('.js-is-active');
const skillsBtn = document.querySelector('.skills-btn');

const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   // Responsive breakpoints
  //   breakpoints: {
  //     // when window width is >= 320px
  //     375: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     // when window width is >= 480px
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     // when window width is >= 640px
  //     1400: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //   },
});

accordionBtn.forEach(btn => {
  btn.addEventListener('click', () => {});
});

skillsBtn.addEventListener('click', onSkillsBtn);
