import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';

const accordionBtn = document.querySelectorAll('.about-me-btn');
const container = document.querySelector('.accordion-container');
const aboutMeSlider = document.querySelector('.about-me-swiper-container');

const accordion = new Accordion(container, {
  // elementClass: 'about-me-li',
  // triggerClass: 'ac-trigger',
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

const aboutMeSwiper = new Swiper(aboutMeSlider, {
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

accordionBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    btn.classList.toggle('is-active-svg');
    const panel = event.target
      .closest('.about-me-li')
      .querySelector('.ac-panel');
    panel.style.display = panel.style.display === 'grid' ? 'none' : 'grid';
  });
});
