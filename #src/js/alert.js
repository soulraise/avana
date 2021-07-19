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

function menuHidden() {

	document.getElementById('burger').addEventListener('click', function () {
		document.getElementById('menu').classList.toggle('menu__hidden')
		document.getElementById('burgerline1').classList.toggle('burger__line_reversrotate45')
		document.getElementById('burgerline2').classList.toggle('burger__line_hidden')
		document.getElementById('burgerline3').classList.toggle('burger__line_rotate45')
	})
}
menuHidden();