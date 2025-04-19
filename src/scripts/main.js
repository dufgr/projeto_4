document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('[data-tab-button]')
	const questions = document.querySelectorAll('[data-faq-question]')

	const heroSection = document.querySelector('.hero')
	const heroHeight = heroSection.clientHeight

	window.addEventListener('scroll', function () {
		const actualHeight = window.scrollY

		if (actualHeight < heroHeight) {
			hiddenHeader()
		} else {
			showHeader()
		}
	})

	// Seção Franquias
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function (button) {
			const tabTarget = button.target.dataset.tabButton
			const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
			hideTabs()
			tab.classList.add('movies__list--is-active')
			removeBtn()
			button.target.classList.add('movies__tabs__btn--is-active')
		})
	}

	//Seção FAQ
	for (let i = 0; i < questions.length; i++) {
		questions[i].addEventListener('click', OpenCloseQuestion)
	}
})

// Header
function hiddenHeader() {
	const header = document.querySelector('header')
	header.classList.add('header--is-hidden')
}

function showHeader() {
	const header = document.querySelector('header')
	header.classList.remove('header--is-hidden')
}

// FAQ
function OpenCloseQuestion(e) {
	const qClass = 'faq__questions__item--is-open'
	const eParent = e.target.parentNode

	eParent.classList.toggle(qClass)
}

// Franquia
function removeBtn() {
	const buttons = document.querySelectorAll('[data-tab-button]')

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('movies__tabs__btn--is-active')
	}
}

function hideTabs() {
	const tabsContainer = document.querySelectorAll('[data-tab-id]')

	for (let i = 0; i < tabsContainer.length; i++) {
		tabsContainer[i].classList.remove('movies__list--is-active')
	}
}
