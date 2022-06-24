const nav = document.querySelector('.nav__mobile-items')
const navBtn = document.querySelector('.burger-box')
const navItems = document.querySelectorAll('.nav__mobile-item')
const navBtnBars=document.querySelector('.burger-btn__bars')
const footerYear=document.querySelector('.footer__year')
const logo = document.querySelector('.nav__logo-box')
const handleNav = () => {
	nav.classList.toggle('nav__mobile-items--active')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__mobile-items--active')
			navBtn.classList.remove('close')
		})
		logo.addEventListener('click', () => {
			nav.classList.remove('nav__mobile-items--active')
			navBtn.classList.remove('close')
		})
	})
	handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
	let delayTime=0;
	navItems.forEach(item =>{
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay='.'+delayTime+'s';
		delayTime++;
	})
}

const handleCurrentYear=()=>{
	const year=(new Date).getFullYear();
	footerYear.innerText= year ;
}
const burgerBtnClose=()=>{
	navBtn.classList.toggle('close')
}


navBtn.addEventListener('click', ()=> {
	handleNav()
	burgerBtnClose()
})
handleCurrentYear();


