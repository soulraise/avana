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

function menuHidden() {

	document.getElementById('burger').addEventListener('click', function () {
		document.getElementById('menu').classList.toggle('menu__hidden')
		document.getElementById('burgerline1').classList.toggle('burger__line_reversrotate45')
		document.getElementById('burgerline2').classList.toggle('burger__line_hidden')
		document.getElementById('burgerline3').classList.toggle('burger__line_rotate45')
	})
}
menuHidden();

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

;
if (document.getElementById('app')) {
	new Vue({
		el: '#app',
		data: {
			pomps: [
				{
					id: 123,
					title: 'Помпа BlueRain',
					price: 130,
					rent: 20,
					img: 'img/HandPomp.png',
					label: 'mini',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					count: 1,
				},
				{
					id: 223,
					title: 'Помпа BlueRain2',
					price: 131,
					img: 'img/HandPomp.png',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					count: 1,

				},
				{
					id: 323,
					title: 'Помпа BlueRain3',
					price: 132,
					rent: 20,
					img: 'img/HandPomp.png',
					label: 'new',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					count: 1,
				},
				{
					id: 423,
					title: 'Помпа BlueRain4',
					price: 133,
					img: 'img/PompBox.jpg',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					count: 1,

				}
			],
			culers: [
				{
					id: 523,
					title: 'Ecotronic H1-T (настольный)',
					price: 130,
					rent: 20,
					img: 'img/Cooler.png',
					label: 'mini',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					count: 1,
				},
				{
					id: 623,
					title: 'HotFrost D1150R',
					price: 131,
					img: 'img/cooler1.jpg',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					count: 1,

				},
				{
					id: 723,
					title: 'Помпа Ecotronic PICNIC',
					price: 132,
					rent: 20,
					img: 'img/cooler2.jpg',
					label: 'new',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					count: 1,
				},
				{
					id: 823,
					title: 'Ecotronic H1-LN',
					price: 133,
					img: 'img/cooler3.jpg',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					count: 1,

				},
				{
					id: 923,
					title: 'Ecotronic H1-LNF',
					price: 133,
					rent: 20,
					img: 'img/cooler4.jpg',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					count: 1,

				}
			],
			title: "hello",
			showProduct: false,
			modal: {},
			products: [],
			newCat: null

		},
		methods: {
			transition(pomp) {
				this.showProduct = true
				console.log(pomp)
				this.modal = pomp
			},
			closeProduct() {
				this.showProduct = false
			},
			addProduct(product) {

				let id
				let oldProduct = this.products.find((el, i) => {
					id = i
					return el.id == product.id
				})
				// console.log(id)
				// console.log(oldProduct)
				if (!oldProduct) {
					this.products.push(product);
				} else {
					this.products[id].count++
				}
				this.saveProduct();
			},
			removeProduct(x) {
				this.products.splice(x, 1);
				this.saveProduct();
			},
			saveProduct() {
				const parsed = JSON.stringify(this.products);
				localStorage.setItem('products', parsed);
			},

		},
		mounted() {
			if (localStorage.getItem('products')) {
				try {
					this.products = JSON.parse(localStorage.getItem('products'));
				} catch (e) {
					localStorage.removeItem('products');
				}
			}
		},

	})
}
if (document.getElementById('app2')) {
	Vue.component('v-select', VueSelect.VueSelect)

	new Vue({
		el: '#app2',
		data: {
			options: [
				'07:00 - 09:00',
				'09:00 - 12:00',
				'12:00 - 14:00',
				'14:00 - 18:00',
				'18:00 - 20:00',
			],
			name: '',
			tel: '',
			eMail: '',
			street: '',
			home: '',
			flat: '',
			entrance: '',
			checked: false,
			addComent: false,
			validData: '',
			products: [],
			newCat: null

		},
		filters: {

		},
		methods: {
			addComentText() {
				this.addComent ? this.addComent = false : this.addComent = true
			},
			currentDateTime(n = 0) {
				let today = new Date();
				let tomorrow = new Date(today.getTime() + ((24 * 60 * 60 * 1000) * n));
				const date = tomorrow.getDate() + '.' + (tomorrow.getMonth() + 1) + '.' + tomorrow.getFullYear();
				const dateTime = date;
				return dateTime;
			},
			removeProduct(x) {
				this.products.splice(x, 1);
				this.saveProduct();
			},
			saveProduct() {
				const parsed = JSON.stringify(this.products);
				localStorage.setItem('products', parsed);
			},
			plusCount(x) {
				this.products[x].count++;
				this.saveProduct();
			},
			ndashCount(x) {
				this.products[x].count--;
				this.saveProduct();
			}
		},
		computed: {
			totalProduct() {
				let res = 0
				this.products.forEach(element => {

					res = res + (element.price * element.count)
				});
				return res
			},

		},

		mounted() {
			if (localStorage.checked != 'false') this.checked = localStorage.checked;
			if (localStorage.name && localStorage.checked != 'false') this.name = localStorage.name;
			if (localStorage.tel && localStorage.checked != 'false') this.tel = localStorage.tel;
			if (localStorage.eMail && localStorage.checked != 'false') this.eMail = localStorage.eMail;
			if (localStorage.street && localStorage.checked != 'false') this.street = localStorage.street;
			if (localStorage.entrance && localStorage.checked != 'false') this.entrance = localStorage.entrance;
			if (localStorage.flat && localStorage.checked != 'false') this.flat = localStorage.flat;
			if (localStorage.home && localStorage.checked != 'false') this.home = localStorage.home;
			if (localStorage.getItem('products')) {
				try {
					this.products = JSON.parse(localStorage.getItem('products'));
				} catch (e) {
					localStorage.removeItem('products');
				}
			};
		},
		watch: {
			checked(newchecked) {
				if (newchecked) {
					localStorage.checked = newchecked;
				} else {
					localStorage.checked = false;
				}
			},
			name(newName) {
				localStorage.name = newName;
			},
			tel(newTel) {
				localStorage.tel = newTel;
			},
			eMail(newEmail) {
				localStorage.eMail = newEmail;
			},
			street(newStreet) {
				localStorage.street = newStreet;
			},
			home(newhome) {
				localStorage.home = newhome;
			},
			entrance(newEntrance) {
				localStorage.entrance = newEntrance;
			},
			flat(newFlat) {
				localStorage.flat = newFlat;
			},
		}
	})
}
// if (document.getElementById('app3')) {


// 	new Vue({
// 		el: '#app3',
// 		data: {

// 		}
// 	})
// };

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