//====================== CONSTS ===============================
// MOBILE MENU
const mobileMenuBtnOpen = document.querySelector('.nav__mobile__open')
const mobileMenuBtnClose = document.querySelector('.nav__mobile__popup__close')
const mobileMenuPopup = document.querySelector('.nav__mobile__popup')
// FACEBOOK POPUP
const facebookAdPopupCloseArrow = document.querySelector('.header__facebook-banner__like__text__close-icon')
const facebookAdPopup = document.querySelector('.header__facebook-banner')
// SECTION KNOW MORE HINTS
const knowMoreHints = document.querySelectorAll('.know-more__text__table__element')
const knowMoreHintsArrow = document.querySelectorAll('.know-more__text__table__element__arrow')
// SECTION FAQ HINTS
const faqHints = document.querySelectorAll('.faq__table__element')
const faqhintsPlus = document.querySelectorAll('.faq__table__element__plus')

//====================== CONSTS ===============================

//====================== FUNCTIONS ===============================
//============= MOBILE MENU OPEN & CLOSE ====================
const mobileMenuOpen = () => {
	mobileMenuPopup.classList.add('showMenuPopup')
}
const mobileMenuClose = () => {
	mobileMenuPopup.classList.remove('showMenuPopup')
}
mobileMenuBtnOpen.addEventListener('click', mobileMenuOpen)
mobileMenuBtnClose.addEventListener('click', mobileMenuClose)
//============= MOBILE MENU OPEN & CLOSE ====================

//============= SECTION FACEBOOK POPUP CLOSE ====================
const facebookAdPopupCloseFunc = () => {
	facebookAdPopup.classList.add('hide')
}
facebookAdPopupCloseArrow.addEventListener('click', facebookAdPopupCloseFunc)
//============= SECTION FASCEBOOK POPUP CLOSE ====================

//============= SECTION KNOW MORE HINTS OPEN & CLOSE ====================
knowMoreHints.forEach(element => {
	const knowMoreOpenHint = () => {
		element.children[1].classList.toggle('show')
		element.children[0].children[1].classList.toggle('spin90')
	}
	element.addEventListener('click', knowMoreOpenHint)
})
//============= SECTION KNOW MORE HINTS OPEN & CLOSE ====================

//============= SECTION FAQ HINTS OPEN & CLOSE ====================
faqHints.forEach(element => {
	const faqOpenHint = () => {
		element.children[1].classList.toggle('show')
		element.children[0].children[1].classList.toggle('spin45')
	}
	element.addEventListener('click', faqOpenHint)
})
//============= SECTION FAQ HINTS OPEN & CLOSE ====================
