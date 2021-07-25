// alert('Hello world');

$(document).ready(function () {
	if (document.getElementById('main__slider')) {
		$('.main__slider').slick({
			dots: true,
			arrows: false,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 2000,
			fade: true,
			cssEase: 'linear'
		});
	}
});

let windowHeight = window.innerHeight;

window.addEventListener('resize', function () {
	windowHeight = window.innerHeight;
})


function headerHidden() {
	let posWindow = 0;
	window.addEventListener('scroll', function () {
		let pos = document.getElementById('anchor').getBoundingClientRect();
		let posWindow2 = pos.y;
		if (posWindow < posWindow2) {
			document.querySelector('.header').classList.remove('header__fixed');

		} else {
			document.querySelector('.header').classList.add('header__fixed')
			document.getElementById('menu').classList.add('menu__hidden')
			document.getElementById('burgerline1').classList.remove('burger__line_reversrotate45')
			document.getElementById('burgerline2').classList.remove('burger__line_hidden')
			document.getElementById('burgerline3').classList.remove('burger__line_rotate45')
		}
		posWindow = posWindow2;
	})
}
headerHidden();

function getUp() {
	let upBtn = document.getElementById('up');
	window.addEventListener('scroll', function () {
		if (windowHeight < window.scrollY) {
			upBtn.classList.add('up__active')
		}
		else {
			upBtn.classList.remove('up__active')
		}
	})
	upBtn.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	})
}
getUp();

