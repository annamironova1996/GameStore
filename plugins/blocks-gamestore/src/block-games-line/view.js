document.addEventListener("DOMContentLoaded", function () {
	let swiperGames = new Swiper(".games-line-slider", {
		loop: true,
		autoplay: {
			delay: 1,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		spaceBetween: 8,
		speed: 3500,
		grabCursor: true,
	});
});
