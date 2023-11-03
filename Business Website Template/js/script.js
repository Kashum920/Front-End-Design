

/*=== hero section start ===*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=== navbar toggle ===*/
let menuBar = document.querySelector('#menuBtn');
let navLinks = document.querySelector('.navLinks');

menuBar.onclick = () => {
    navLinks.classList.toggle('toggle');
}

/*==== team section start ===*/
  var swiper = new Swiper(".myTeam", {
    watchSlidesProgress: true,
    slidesPerView: 4,
    loop:true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    breakpoints: {
        240:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        550: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
    },   
  });

  /*==== gallery section start ===*/
  var swiper = new Swiper(".myGallery", {
    watchSlidesProgress: true,
    slidesPerView: 6,
    loop:true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    breakpoints: {
        240:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        550: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView:5,
          spaceBetween:20,
        },
    },   
  });

  /*=== client section ===*/
  var swiper = new Swiper(".myClient", {
    watchSlidesProgress: true,
    slidesPerView: 2,
    loop:true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    breakpoints: {
        240:{
            slidesPerView: 1,
            spaceBetween:20,
        },
        550: {
          slidesPerView:1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        1024: {
          slidesPerView:2,
          spaceBetween:100,
        },
    },   
  });

  /*=== preloader === */
  var loader = document.querySelector('.preLoader');

  window.addEventListener("load", function () {
      loader.classList.add("loader");
  });

