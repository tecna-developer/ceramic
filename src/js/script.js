"use strict";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import JustValidate from "just-validate";

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
      prevEl: ".icon-left-open",
      nextEl: ".icon-right-open",
    },
    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
        keyboard: true,
      },
      // when window width is >= 1920px
      1920: {
        spaceBetween: 35,
        slidesPerView: 3,
      },
    },

    modules: [Navigation, Pagination],
  });
} catch (error) {}

// Функционал для переключения табов в каталоге
try {
  const tabs = document.querySelectorAll(".catalog__tab");
  const items = document.querySelectorAll(".catalog__content-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Снимаем активный класс со всех табов
      tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
      // Добавляем активный класс выбранному табу
      tab.classList.add("catalog__tab_active");

      // Показываем только соответствующий контент
      items.forEach((item, i) => {
        item.style.display = i === index ? "flex" : "none";
      });
    });
  });
  // Инициализация: показываем только первый контент
  items.forEach((item, i) => {
    item.style.display = i === 0 ? "flex" : "none";
  });
} catch (error) {}

// Валидация формы обратной связи на главной странице

try {
  const validator = new JustValidate("form");

  validator
    .addField("#name", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 2,
      },
    ])
    .addField("#email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField(
      "#question",
      [
        {
          rule: "required",
          errorMessage: "Please enter your question",
        },
        {
          rule: "minLength",
          value: 5,
        },
      ],
      {
        errorsContainer: "#error-message",
      }
    )
    .addField(
      "#agree",
      [
        {
          rule: "required",
          errorMessage: "Please accept the terms and conditions",
        },
      ],
      {
        errorsContainer: "#checkbox-error-message",
      }
    )
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success", data);
          form.reset();
        });
    });
} catch (error) {}

// Валидация формы обратной связи  в футере
try {
  const footerValidator = new JustValidate("#footer-form");

  footerValidator
    .addField(
      "#footer-email",
      [
        {
          rule: "required",
          errorMessage: "Please enter your email",
        },
        {
          rule: "email",
        },
      ],
      {
        errorsContainer: "#footer-error-message",
      }
    )
    .addField(
      "#footer-agree",
      [
        {
          rule: "required",
          errorMessage: "Please accept the terms and conditions",
        },
      ],
      {
        errorsContainer: "#footer-checkbox-error-message",
      }
    )
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success", data);
          form.reset();
        });
    });
} catch (error) {}
