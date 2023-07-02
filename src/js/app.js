import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, {Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".intro__swiper", {
    grabCursor: true,
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween:0,
    pagination: {
      el: ".intro__pagination",
      clickable: true,
    },
    breakpoints:{
      992:{
        spaceBetween:30,
      }
    }
});

new Swiper(".reviews__swiper", {
    grabCursor: true,
    modules: [Navigation],
    slidesPerView: 'auto',  
    spaceBetween:30,
    watchSlidesProgress: true,
    navigation:{
      prevEl: '.reviews__btn-prev',
      nextEl: '.reviews__btn-next',
    },
    breakpoints:{
      1400:{
        spaceBetween:35,
        slidesPerView: 4,  
      },
      1200:{
        slidesPerView: 4,  
      },
      992:{
        slidesPerView: 3,  
      },
      768:{
        slidesPerView: 2,  
      },
      575:{
        slidesPerView: 1,  
      }
    }
});
const menu = document.querySelector('.menu');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    headerList.classList.toggle('active')
    body.classList.toggle('hidden')
})
