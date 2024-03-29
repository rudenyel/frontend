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
	id: "contact-form",
	title: "We would like to help you",
	content: `<form class="contact-form"><input class="contact-form__input" type="text" name="name" placeholder="Name"><textarea class="contact-form__textarea" name="message" maxlength="340" placeholder="Message"></textarea><p class="contact-form__p">How to answer you?</p><input class="contact-form__input" type="text" name="phone" placeholder="Phone number"><input class="contact-form__input" type="text" name="email" placeholder="Email"><button class="contact-form__button">Send message</button></form>`,
	css: `

	.popup {
        background-color: rgba(0,0,0,0) !important;
	}

	.popup-content {
		background-color: #F5F5FA !important;
		box-shadow: 0px 15px 80px 0px rgba(40, 40, 86, 0.50) !important;
		border-radius: 12px !important;
		max-width: 650px !important;
		padding: 30px !important;
	}

	.popup-header {
		margin-bottom: 30px !important;
		display: flex !important;
		flex-direction: row !important;
		justify-content: space-between !important;
		align-items: flex-start !important;

		text-align: left !important;
	}

	.popup-title {
		margin: 0 !important;

		font-family: Montserrat !important;
		font-size: 38px !important;
		font-weight: 700 !important;

		background: linear-gradient(90deg, #f0145a, #ef8080) !important;
		color: transparent !important;
		background-clip: text !important;
	}

	.popup-close {
		height: 32px !important;
		width: 32px !important;
		position: static !important;
		border-radius: 8px !important;

		font-size: 32px !important;
		text-align: center !important;
		line-height: 28px !important;
		color: #EC6F5D !important;
	}

	.popup-close:hover {
		background-color: #E6E6F0 !important;
	}
	
	.popup-body {
		margin: 0 !important;
		text-align: left !important;
	}

	.popup-body p {
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.contact-form__input, .contact-form__textarea, .contact-form__button {
		display: block !important;
		padding: 15px !important;
		width: 100% !important;
	}

	.contact-form__input, .contact-form__textarea {
		border-radius: 8px !important;
		border: 1px solid #FFF !important;
		background: #FFF !important;

		color:#000 !important;
		font-family: Montserrat !important;
		font-size: 16px !important;

		margin-bottom: 15px !important;
	}

	.contact-form__p, .contact-form__button {
		margin-top: 30px !important;
	}

	.contact-form__p {
		margin-bottom: 15px !important;

		color: #B3B3BA !important;
		font-family: Montserrat !important;
		font-size: 14px !important;
		font-weight: 700 !important;
		letter-spacing: 1px !important;
		text-transform: uppercase !important;
	}

	.contact-form__input::placeholder, .contact-form__textarea::placeholder {
		color: #B3B3BA !important;
		font-family: Montserrat !important;
		font-size: 16px !important;
		font-weight: 400 !important;
	}

	.contact-form__input:focus, .contact-form__textarea:focus {
		outline: 1px solid #24A3FF !important;
	}

	.contact-form__textarea {
		resize: none !important;
		height: 150px !important;
	}
	
	.contact-form__button {
		color: #FFF !important;
		text-align: center !important;
		font-family: Montserrat !important;
		font-size: 16px !important;
		font-weight: 700 !important;

		border-radius: 12px !important;
        background: #24A3FF !important;
        box-shadow: 0px 0px 20px 0px rgba(36, 163, 255, 0.50) !important;
	}

	.contact-form__button:active {
		background: #006CCF !important;
	}

	.contact-form__button:hover {
		background: #0085FF !important;
	}

	`,
	disableScroll: false
});

const contactBtn = document.querySelector('.contact-btn')

contactBtn.addEventListener('click', () => {
	formPopup.show()
})