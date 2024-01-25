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