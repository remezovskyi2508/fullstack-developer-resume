import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';

// import Swiper, { Autoplay, Navigation } from 'swiper';

import 'swiper/css/navigation';

const accordionBtn = document.querySelectorAll('.about-me-btn');

const container = document.querySelector('.accordion-container');

const accordion = new Accordion(container, {
  closeOther: true,
  slideSpeed: 400,
  modal: true,
  duration: 400,
  showMultiple: false,
  collapse: true,
  activeIndex: 0,
  openOnInit: [0],
  onOpen: function (currentElement) {
    currentElement.style.display = 'grid';
  },
  onClose: function (currentElement) {
    currentElement.style.display = 'none';
  },
});

const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 500,
  simulateTouch: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    // when window width is >= 320px
    375: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
swiper.allowSlideNext = true;

// document.querySelectorAll('.swiper-slide').forEach(slide => {
//   slide.style.setProperty('width', '130px', 'important');
// });

accordionBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    btn.classList.toggle('is-active-svg');
    const panel = event.target
      .closest('.about-me-li')
      .querySelector('.ac-panel');
    panel.style.display = panel.style.display === 'grid' ? 'none' : 'grid';
  });
});
