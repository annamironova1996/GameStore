/******/ (() => { // webpackBootstrap
/*!**********************************!*\
  !*** ./src/block-header/view.js ***!
  \**********************************/
let toggleMenu = document.querySelector(".header-toggle-menu");
let navigation = document.querySelector("nav.wp-block-navigation");

// Функция для создания кнопки закрытия
function createCloseButton() {
  const closeButton = document.createElement("button");
  closeButton.className = "mobile-menu-close";
  closeButton.innerHTML = `
		<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14 22L22 14" stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M22 22L14 14" stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
    `;
  closeButton.setAttribute("aria-label", "Закрыть меню");
  closeButton.addEventListener("click", function () {
    navigation.classList.remove("active");
  });
  return closeButton;
}

// Функция проверки ширины экрана и добавления кнопки
function initMobileMenu() {
  if (window.innerWidth < 1999) {
    if (!navigation.querySelector(".mobile-menu-close")) {
      const closeButton = createCloseButton();
      navigation.appendChild(closeButton);
    }
  } else {
    const existingCloseButton = navigation.querySelector(".mobile-menu-close");
    if (existingCloseButton) {
      existingCloseButton.remove();
    }
  }
}

// Обработчик клика по toggle
toggleMenu.addEventListener("click", function () {
  navigation.classList.toggle("active");
});

// Инициализация при загрузке
document.addEventListener("DOMContentLoaded", initMobileMenu);

// Обновляем при изменении размера окна
window.addEventListener("resize", initMobileMenu);

// Закрытие по клику вне меню
document.addEventListener("click", function (event) {
  if (navigation.classList.contains("active") && !navigation.contains(event.target) && !toggleMenu.contains(event.target)) {
    navigation.classList.remove("active");
  }
});

// Закрытие по ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && navigation.classList.contains("active")) {
    navigation.classList.remove("active");
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map