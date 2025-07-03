"use strict";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
  navMenu = document.querySelector(".burger__menu"),
  burgerClose = document.querySelector(".burger__close");

burger.addEventListener("click", () => {
  navMenu.classList.add("burger__menu-active");
  document.body.style.overflow = "hidden";
});

burgerClose.addEventListener("click", () => {
  navMenu.classList.remove("burger__menu-active");
  document.body.style.overflow = "";
});

try {
  new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
        mousewheel: true,
        keyboard: true,
      },
      // when window width is >= 1920px
      1920: {
        spaceBetween: 35,
      },
    },

    modules: [Navigation, Pagination],
  });
} catch (error) {}
