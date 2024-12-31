const mobileMenuBtnOpen = document.querySelector('.nav__mobile__open')
const mobileMenuBtnClose = document.querySelector('.nav__mobile__popup__close')
const mobileMenuPopup = document.querySelector('.nav__mobile__popup')
const knowMoreHints = document.querySelectorAll('.know-more__text__table__element')

//============= MOBILE MENU OPEN & CLOSE ====================
const mobileMenuOpen = () => {
	mobileMenuPopup.classList.add('show')
}
const mobileMenuClose = () => {
	mobileMenuPopup.classList.remove('show')
}
mobileMenuBtnOpen.addEventListener('click', mobileMenuOpen)
mobileMenuBtnClose.addEventListener('click', mobileMenuClose)
//============= MOBILE MENU OPEN & CLOSE ====================

//============= SECTION KNOW MORE HINTS OPEN & CLOSE ====================
const knowMoreOpenHint = element => {
	console.log(element.children[1].classList.add('show'))
}
knowMoreHints.forEach(element => {
	element.addEventListener('click', knowMoreOpenHint(element))
})

// const arrowButtons = document.querySelectorAll('.know-more__text__table__element__arrow')

// arrowButtons.forEach(element => element.addEventListener(element.classList.toggle('rotateArrow ')))
