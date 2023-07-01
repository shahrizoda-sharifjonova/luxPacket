import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, {Pagination } from 'swiper';

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
const menu = document.querySelector('.menu');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    headerList.classList.toggle('active')
    body.classList.toggle('hidden')
})
