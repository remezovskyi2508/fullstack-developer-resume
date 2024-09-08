import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';

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
  setWrapperSize: true,
  loop: true,
  speed: 500,
  simulateTouch: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    375: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },

    1400: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
  },
  slidesPerView: 'auto',
  spaceBetween: 0,
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
