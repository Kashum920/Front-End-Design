
/*=== hero section ===*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});

/*=== toggle navbar ===*/
let navBar = document.querySelector('.navLink');
let menuBar = document.querySelector('#menuBar');

menuBar.onclick = () => {
    navBar.classList.toggle('active');
    menuBar.classList.toggle('bx-x');
}

/*=== Trending Product Section Start ===*/
var swiper = new Swiper(".myProduct", {
  watchSlidesProgress: true,
  loop:true,
  spaceBetween: 30,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


/*=== Trending Product Section Start ===*/
var swiper = new Swiper(".myArrival", {
  watchSlidesProgress: true,
  loop:true,
  spaceBetween: 30,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

/*=== brands Section Start ===*/
var swiper = new Swiper(".myBrand", {
  watchSlidesProgress: true,
  loop:true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    550: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/*=== brands Section Start ===*/
var swiper = new Swiper(".myBlog", {
  watchSlidesProgress: true,
  loop:true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});