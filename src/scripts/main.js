document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('[data-tab-button]')

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
})

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
