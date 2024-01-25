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
