import axios from 'axios';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


const reviewsList = document.querySelector('.reviews-list');
const swiperContainer = document.querySelector('.swiper-container');
const reviewsSwiperBtnNext = document.querySelector('.swiper-button-next');
const reviewsSwiperBtnPrev = document.querySelector('.swiper-button-prev');
const getReviews = async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    console.log(response);
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
    new Swiper(swiperContainer, {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 400,
      spaceBetween: 16,
      slidesPerView: 1,
    });
  } catch (err) {
    console.log('Error fetching reviews:', err);
  }
};
getReviews();
