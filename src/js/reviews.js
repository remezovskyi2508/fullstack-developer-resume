import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const reviewsList = document.querySelector('.reviews-list');
const reviewsSwiperContainer = document.querySelector(
  '.reviews-swiper-container'
);
const reviewsNextButton = document.querySelector('.reviews-swiper-button-next');
const reviewsPrevButton = document.querySelector('.reviews-swiper-button-prev');

const getReviews = async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (response.data.length === 0) {
      iziToast.error({
        message: 'No reviews found',
        position: 'topCenter',
      });
      reviewsList.innerHTML = `<li class="review-item review-item-not-found">Not found</li>`;
      reviewsNextButton.disabled = true;
      reviewsPrevButton.disabled = true;
      return;
    }
    const createReviewCard = reviewInfo => {
      return `
        <li class="review-item swiper-slide">
          <img src="${reviewInfo.avatar_url}" alt="" class="review-img">
          <h3 class="review-name">${reviewInfo.author}</h3>
          <p class="review-desc">${reviewInfo.review}</p>
        </li>`;
    };
    const reviewCardTemplate = response.data
      .map(reviewDetails => createReviewCard(reviewDetails))
      .join('');
    reviewsList.innerHTML = reviewCardTemplate;
    const reviewsSwiper = new Swiper(reviewsSwiperContainer, {
      modules: [Navigation, Keyboard],
      navigation: {
        nextEl: reviewsNextButton,
        prevEl: reviewsPrevButton,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        invert: true,
      },
      spaceBetween: 16,
      speed: 400,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 4,
        },
      },
    });
  } catch (err) {
    console.log('Error fetching reviews:', err);
    iziToast.error({
      message: 'Failed to load reviews. Please try again later.',
      position: 'topCenter',
    });
    reviewsList.innerHTML = `<li class="review-item review-item-not-found">Not found</li>`;
    reviewsNextButton.disabled = true;
    reviewsPrevButton.disabled = true;
  }
};

getReviews();
