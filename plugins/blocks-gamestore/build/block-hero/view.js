/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/block-hero/view.js ***!
  \********************************/
document.addEventListener("DOMContentLoaded", function () {
  let swiperHero = new Swiper(".hero-slider .slider-container", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: "auto",
    spaceBetween: 80,
    speed: 1000,
    grabCursor: true,
    mousewheel: {
      enabled: true,
      sensitivity: 0.5,
      eventsTarget: ".hero-slider"
    },
    keyboard: {
      enabled: true
    },
    effect: "slide",
    followFinger: true,
    touchRatio: 0.5,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    threshold: 5,
    breakpoints: {
      1441: {
        spaceBetween: 100
      }
    }
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map