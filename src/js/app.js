import * as functions from "./modules/functions.js";
import $ from "jquery";

functions.isWebp();

import Swiper, {EffectFade, Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".intro__swiper", {
    grabCursor: true,
    modules: [Pagination, EffectFade],
    slidesPerView: 1,
    spaceBetween:0,
    effect: 'fade',
    fadeEffect: {
    crossFade: false,
    },
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

new Swiper(".reports__swiper", {
    grabCursor: true,
    modules: [Navigation],
    slidesPerView: 'auto',  
    spaceBetween:20,
    watchSlidesProgress: true,
    navigation:{
      prevEl: '.reports__btn-prev',
      nextEl: '.reports__btn-next',
    },
    breakpoints:{
      576:{
        slidesPerView: 1,  
        spaceBetween:30,
      }
    }
});

new Swiper(".adhesive__swiper", {
    grabCursor: true,
    modules: [Navigation],
    slidesPerView: 1,  
    spaceBetween:40,
    watchSlidesProgress: true,
    navigation:{
      prevEl: '.adhesive__btn-prev',
      nextEl: '.adhesive__btn-next',
    },
});

$(document).ready(function() {
  $(".accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion__content")
        .slideUp(200);
    } else {
      $(".accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this)
        .siblings(".accordion__content")
        .slideDown(200);
    }
  });
});
const menu = document.querySelector('.menu');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    headerList.classList.toggle('active')
    body.classList.toggle('hidden')
})

const links = document.querySelectorAll('.reviews__link');
const text = document.querySelectorAll('.text');

links.forEach(link=>{
  link.addEventListener('click', (e)=>{
    text.forEach(txt => {
      txt.classList.toggle('active')
    });
    if(link.innerHTML==="Читать полностью "){
      link.innerHTML="Скрыть"
    }else {
      link.innerHTML="Читать полностью "
    }
  })
})


