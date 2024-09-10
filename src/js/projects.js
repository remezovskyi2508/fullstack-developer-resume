import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const projectsSectionSlider = document.querySelector(
  '.projects-section-swiper-container'
);

new Swiper(projectsSectionSlider, {
  navigation: {
    nextEl: '.projects-button.next',
    prevEl: '.projects-button.prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  effect: 'cube',
  speed: 1100,
});
