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
			document.querySelector('.header').classList.remove('header__fixed')
		} else {
			document.querySelector('.header').classList.add('header__fixed')
		}
		posWindow = posWindow2;
	})
}
headerHidden();

;
if (document.getElementById('app')) {
	new Vue({
		el: '#app',
		data: {
			pomps: [
				{
					title: 'Помпа BlueRain',
					price: 130,
					rent: 20,
					img: 'img/HandPomp.png',
					label: 'mini',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
				},
				{
					title: 'Помпа BlueRain2',
					price: 131,
					img: 'img/HandPomp.png',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',

				},
				{
					title: 'Помпа BlueRain3',
					price: 132,
					rent: 20,
					img: 'img/HandPomp.png',
					label: 'new',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
				},
				{
					title: 'Помпа BlueRain4',
					price: 133,
					img: 'img/PompBox.jpg',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',

				}
			],
			culers: [
				{
					title: 'Ecotronic H1-T (настольный)',
					price: 130,
					rent: 20,
					img: 'img/Cooler.png',
					label: 'mini',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
				},
				{
					title: 'HotFrost D1150R',
					price: 131,
					img: 'img/cooler1.jpg',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',

				},
				{
					title: 'Помпа Ecotronic PICNIC',
					price: 132,
					rent: 20,
					img: 'img/cooler2.jpg',
					label: 'new',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
				},
				{
					title: 'Ecotronic H1-LN',
					price: 133,
					img: 'img/cooler3.jpg',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',

				},
				{
					title: 'Ecotronic H1-LNF',
					price: 133,
					rent: 20,
					img: 'img/cooler4.jpg',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',

				}
			],
			title: "hello",
			showProduct: false,
			modal: [],

		},
		methods: {
			transition(pomp) {
				this.showProduct = true
				this.modal = pomp

			},
			closeProduct() {
				this.showProduct = false
			}
		}
	})
};

function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});