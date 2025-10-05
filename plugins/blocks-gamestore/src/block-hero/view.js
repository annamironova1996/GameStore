document.addEventListener("DOMContentLoaded", function () {
	let swiperHero = new Swiper(".hero-slider .slider-container", {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		speed: 1500,
		grabCursor: true,
		mousewheel: {
			enabled: true,
		},
		keyboard: {
			enabled: true,
		},
	});
});
