import './sass/main.scss';
import p_1_340 from '/images/p_1_340.jpg';
import p_1_1280 from '/images/p_1_1280.jpg';
import p_2_340 from '/images/p_2_340.jpg';
import p_2_1280 from '/images/p_2_1280.jpg';
import p_3_340 from '/images/p_3_340.jpg';
import p_3_1280 from '/images/p_3_1280.jpg';
import p_4_340 from '/images/p_4_340.jpg';
import p_4_1280 from '/images/p_4_1280.jpg';
import p_5_340 from '/images/p_5_340.jpg';
import p_5_1280 from '/images/p_5_1280.jpg';
import p_6_340 from '/images/p_6_340.jpg';
import p_6_1280 from '/images/p_6_1280.jpg';
import p_7_340 from '/images/p_7_340.jpg';
import p_7_1280 from '/images/p_7_1280.jpg';
import p_8_340 from '/images/p_8_340.jpg';
import p_8_1280 from '/images/p_8_1280.jpg';
import p_9_340 from '/images/p_9_340.jpg';
import p_9_1280 from '/images/p_9_1280.jpg';

 export const images = [
    {
      preview: p_1_340,
      original: p_1_1280,
      description: 'Hokkaido Flower',
    },
    {
      preview: p_2_340,
      original: p_2_1280,
      description: 'Container Haulage Freight',
    },
    {
      preview: p_3_340,
      original: p_3_1280,
      description: 'Aerial Beach View',
    },
    {
      preview: p_4_340,
      original: p_4_1280,
      description: 'Flower Blooms',
    },
    {
      preview: p_5_340,
      original: p_5_1280,
      description: 'Alpine Mountains',
    },
    {
      preview: p_6_340,
      original: p_6_1280,
      description: 'Mountain Lake Sailing',
    },
    {
      preview: p_7_340,
      original: p_7_1280,
      description: 'Alpine Spring Meadows',
    },
    {
      preview: p_8_340,
      original: p_8_1280,
      description: 'Nature Landscape',
    },
    {
      preview: p_9_340,
      original: p_9_1280,
      description: 'Lighthouse Coast Sea',
    },
  ];

///1) Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryList = document.querySelector('.gallery');

const creatingMarkupPictures = images.map (({preview, original, description}) => {
const markupPoint = `<li class='gallery__item'><a class='gallery__link' href='${original}'><img
    class='gallery__image'
    src = '${preview}'
    data-source='${original}'
    alt='${description}'/></a></li>`;
return markupPoint;
})

galleryList.innerHTML = creatingMarkupPictures.join("");

//3) Открытие модального окна по клику на элементе галереи.

const modalWindow = document.querySelector('div.lightbox');

const openModalWindow = function (event) {
 event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
 return;
 };
 return modalWindow.classList.add('is-open');
 };

galleryList.addEventListener('click', openModalWindow);

///2) Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
///4) Подмена значения атрибута src элемента img.lightbox__image.

const bigPicture = document.querySelector('.lightbox__image');

const changeImg = function (event) {
  event.preventDefault();
 if (modalWindow.classList.contains('is-open') && event.target.nodeName === 'IMG') {
    const setImg = event.target.dataset.source;
    return bigPicture.src = setImg;
  };
  return;
 };

galleryList.addEventListener('click', changeImg);

//5) Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//6) Очистка значения атрибута src элемента img.lightbox__image

const crossButton = document.querySelector('[data-action="close-lightbox"]');

const closeModalWindow = function () {
  if (modalWindow.classList.contains('is-open')) {
    bigPicture.src = '';
    return modalWindow.classList.remove('is-open');
  } 
  return;
}

crossButton.addEventListener('click', closeModalWindow);

//6) Очистка значения атрибута src элемента img.lightbox__image
//7) Закрытие модального окна по клику на div.lightbox__overlay.

const clickOverlay = document.querySelector('.lightbox__overlay');
clickOverlay.addEventListener('click', closeModalWindow);

//6) Очистка значения атрибута src элемента img.lightbox__image
// 8) Закрытие модального окна по нажатию клавиши ESC.

const closeModal = function (event) {
  if (event.key === 'Escape') {
    bigPicture.src = '';
    return modalWindow.classList.remove('is-open');
  } 
  return;
}

window.addEventListener('keydown', closeModal);
