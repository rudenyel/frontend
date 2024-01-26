(() => {
	const burgerOpen = document.querySelector('.header__box-burger')
	const burgerClose = document.querySelector('.header__nav-close')
	const navigationMenu = document.querySelector('.header__nav')

	burgerOpen.addEventListener('click', () => {
		navigationMenu.classList.add('active')
	})
	burgerClose.addEventListener('click', () => {
		navigationMenu.classList.remove('active')
	})
})();

(() => {
	const tabsitem = document.querySelectorAll('.tabs__links-item')
	const tabsBlocks = document.querySelectorAll('.tabs__content-item')
	
	tabsitem.forEach((tab, index) => {
		tab.addEventListener('click', () => {

			tabsBlocks.forEach((content) => {
				content.classList.remove('active')
			})
			tabsitem.forEach((content) => {
				content.classList.remove('active')
			})
			tabsitem[index].classList.add('active')
			tabsBlocks[index].classList.add('active')
		})
	})
})();

(() => {
	const swiper = new Swiper('.swiper', {
		loop: true,
		spaceBetween: 25,
		speed: 400,
		grabCursor: true,

		// effect: 'fade',
		// fadeEffect: {
		// 	crossFade: true
		// },

		pagination: {
			el: '.swiper-pagination',
		}
	});
})();

const formPopup = new Popup({
	id: "form-class",
	title: "My First Popup",
	content: `<form class="form__test"><input type="email"><input type="password"></form>.`,
	disableScroll: false
});

const randomBtn = document.querySelector('.random-btn')

randomBtn.addEventListener('click', () => {
	formPopup.show()
})