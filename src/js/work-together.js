import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { openModal } from './modal-work-together';

const form = document.querySelector('.work-together-form-js');

form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  const { email, comment } = event.currentTarget.elements;

  const sendBtn = document.querySelector('.footer-send-btn');

  try {
    const data = await sendRequest({
      email: email.value.trim(),
      comment: comment.value.trim(),
    });
    sendBtn.classList.add('is-active');
    setTimeout(() => {
      openModal(data);
      form.reset();
    }, 700);
  } catch (error) {
    console.log(error);
    iziToast.show({
      class: 'error',
      messageColor: '#FAFAFA',
      title: error.message,
      titleColor: '#FAFAFA',
      message: error.response.data.message,
      image: '/img/work-together/Error.png',
      imageWidth: 60,
      color: '#ED3B44',
      position: 'topCenter',
    });
  }
}

async function sendRequest(request) {
  axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
  const { data } = await axios.post('/requests', request);
  return data;
}
