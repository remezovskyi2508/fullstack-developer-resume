import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const aboutMeSlider = document.querySelector('.about-me-swiper-container');

const accordionAboutMe = new Accordion('.about-me-accordion-container', {
  duration: 600,
  showMultiple: true,
});
accordionAboutMe.open(0);

new Swiper(aboutMeSlider, {
  loop: true,
  speed: 700,
  simulateTouch: true,
  spaceBetween: 0,
  slidesPerView: 2,
  navigation: {
    nextEl: '.about-me-swiper-btn',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
