'use strict';

import "/src/sass/style.scss";


    const burger = document.querySelector(".burger"), 
          navMenu = document.querySelector(".burger__menu"),
          burgerClose = document. querySelector(".burger__close");


burger.addEventListener('click', () => {
    navMenu.classList.add('burger__menu-active')
    document.body.style.overflow = "hidden";
});

burgerClose.addEventListener('click', () => {
    navMenu.classList.remove('burger__menu-active')
    document.body.style.overflow = "";
});