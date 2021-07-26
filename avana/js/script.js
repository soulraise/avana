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

;
if (document.getElementById('app')) {
	new Vue({
		el: '#app',
		data: {
			rus: false,
			ukr: false,
			usa: false,
			pomps: [
				{
					id: 123,
					title: 'Помпа BlueRain',
					titleUkr: 'Помпа BlueRain',
					titleUsa: 'Pomp BlueRain',
					price: 130,
					rent: 20,
					img: 'img/HandPomp.png',
					label: 'mini',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					discriptionUkr: 'Помпа – то механічний насос, надягнутий на горло пляшки. Кріпится після зняття кришки. Не змінює температуру води.',
					discriptionUsa: 'A pump is a mechanical pump put on the neck of the bottle. It is fixed after removing the cover. Does not change water temperature.',
					count: 1,
				},
				{
					id: 223,
					title: 'Помпа BlueRain2',
					titleUkr: 'Помпа BlueRain2',
					titleUsa: 'Pomp BlueRain2',
					price: 131,
					img: 'img/HandPomp.png',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					discriptionUkr: 'Помпа – то механічний насос, надягнутий на горло пляшки. Кріпится після зняття кришки. Не змінює температуру води.',
					discriptionUsa: 'A pump is a mechanical pump put on the neck of the bottle. It is fixed after removing the cover. Does not change water temperature.',
					count: 1,

				},
				{
					id: 323,
					title: 'Помпа BlueRain3',
					titleUkr: 'Помпа BlueRain3',
					titleUsa: 'Pomp BlueRain3',
					price: 132,
					rent: 20,
					img: 'img/HandPomp.png',
					label: 'new',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					discriptionUkr: 'Помпа – то механічний насос, надягнутий на горло пляшки. Кріпится після зняття кришки. Не змінює температуру води.',
					discriptionUsa: 'A pump is a mechanical pump put on the neck of the bottle. It is fixed after removing the cover. Does not change water temperature.',
					count: 1,
				},
				{
					id: 423,
					title: 'Помпа BlueRain4',
					titleUkr: 'Помпа BlueRain4',
					titleUsa: 'Pomp BlueRain4',
					price: 133,
					img: 'img/PompBox.jpg',
					discription: 'Помпа – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					discriptionUkr: 'Помпа – то механічний насос, надягнутий на горло пляшки. Кріпится після зняття кришки. Не змінює температуру води.',
					discriptionUsa: 'A pump is a mechanical pump put on the neck of the bottle. It is fixed after removing the cover. Does not change water temperature.',
					count: 1,

				}
			],
			culers: [
				{
					id: 523,
					title: 'Ecotronic H1-T (настольный)',
					titleUkr: 'Ecotronic H1-T (настільний)',
					titleUsa: 'Ecotronic H1-T (table)',
					price: 130,
					rent: 20,
					img: 'img/Cooler.png',
					label: 'mini',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					discriptionUkr: 'Кулер - то механічний насосос, який вдягають на горлечко пляшки. Закріплюється після знятт кришки. Не міняє температуру води.',
					discriptionUsa: 'The cooler is a mechanical pump that is put on the neck of the bottle. It is fixed after removing the cover. Does not change water temperature.',
					count: 1,
				},
				{
					id: 623,
					title: 'HotFrost D1150R',
					titleUkr: 'HotFrost D1150R',
					titleUsa: 'HotFrost D1150R',
					price: 131,
					img: 'img/cooler1.jpg',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					discriptionUkr: 'Кулер - то механічний насосос, який вдягають на горлечко пляшки. Закріплюється після знятт кришки. Не міняє температуру води.',
					discriptionUsa: 'The cooler is a mechanical pump that is put on the neck of the bottle. It is fixed after removing the cover. Does not change water temperature.',
					count: 1,

				},
				{
					id: 723,
					title: 'Помпа Ecotronic PICNIC',
					titleUkr: 'Помпа Ecotronic PICNIC',
					titleUsa: 'Pomp Ecotronic PICNIC',
					price: 132,
					rent: 20,
					img: 'img/cooler2.jpg',
					label: 'new',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					discriptionUkr: 'Кулер - то механічний насосос, який вдягають на горлечко пляшки. Закріплюється після знятт кришки. Не міняє температуру води.',
					discriptionUsa: 'The cooler is a mechanical pump that is put on the neck of the bottle. It is fixed after removing the cover. Does not change water temperature.',
					count: 1,
				},
				{
					id: 823,
					title: 'Ecotronic H1-LN',
					titleUkr: 'Ecotronic H1-LN',
					titleUsa: 'Ecotronic H1-LN',
					price: 133,
					img: 'img/cooler3.jpg',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					discriptionUkr: 'Кулер - то механічний насосос, який вдягають на горлечко пляшки. Закріплюється після знятт кришки. Не міняє температуру води.',
					discriptionUsa: 'The cooler is a mechanical pump that is put on the neck of the bottle. It is fixed after removing the cover. Does not change water temperature.',
					count: 1,

				},
				{
					id: 923,
					title: 'Ecotronic H1-LNF',
					titleUkr: 'Ecotronic H1-LNF',
					titleUsa: 'Ecotronic H1-LNF',
					price: 133,
					rent: 20,
					img: 'img/cooler4.jpg',
					discription: 'Кулер – то механический насосос, надеваемый на горлышко бутылки. Закрепляется после сняти крышки. Не меняет температуру воды.',
					discriptionUkr: 'Кулер - то механічний насосос, який вдягають на горлечко пляшки. Закріплюється після знятт кришки. Не міняє температуру води.',
					discriptionUsa: 'The cooler is a mechanical pump that is put on the neck of the bottle. It is fixed after removing the cover. Does not change water temperature.',
					count: 1,

				}
			],
			water: {
				id: 111,
				title: 'ВОДА AVANA 18,9 Л',
				titleUkr: 'ВОДА AVANA 18,9 Л',
				titleUsa: 'Water AVANA 18,9 L',
				price: 80,
				img: 'img/Bottle.jpg',
				discription: 'Сертификаты: ISO 22000/HACCP, соответствия УКРСЕПРО Источник: артезианская скважина Минирализация: 100-150 мг/дмз',
				discription: 'Сертифікати: ISO 22000 / HACCP, відповідності УкрСЕПРО Джерело: артезіанська свердловина мініралізаціі: 100-150 мг / дмз',
				discription: 'Certificates: ISO 22000 / HACCP, type UkrSEPRO Dzherelo: artesian vertices of minializatsii: 100-150 mg / dmz',
				count: 1,
			},
			title: "hello",
			showProduct: false,
			modal: {},
			products: [],
			newCat: null,
			burger: false,
			mail: '',
			mailError: false,
			mailSend: false,
		},
		methods: {
			testF =(argneed, argU) => (argU.search(argneed) != -1) ? true : false,
			createMail() {
				let needEmail = /@./gm;
				if (testF(needEmail, this.mail) == false || this.mail === '') {
					creatUser = false
					this.mailError = true
					this.mailSend = false
				} else {
					this.mailError = false
					this.mailSend = true
				}
			},
			burgerMenu() {
				this.burger ? this.burger = false : this.burger = true
			},
			transition(pomp) {
				this.showProduct = true
				console.log(pomp)
				this.modal = pomp
			},
			closeProduct() {
				this.showProduct = false
			},
			buyOneClick(product) {
				this.addProduct(product)
				document.location.href = 'cart.html'
			},
			addProduct(product) {
				let id
				let oldProduct = this.products.find((el, i) => {
					id = i
					return el.id == product.id
				})
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
			langRus() {
				this.rus = localStorage.rus = true
				this.ukr = localStorage.ukr = false
				this.usa = localStorage.usa = false
			},
			langUkr() {
				this.rus = localStorage.rus = false
				this.ukr = localStorage.ukr = true
				this.usa = localStorage.usa = false
			},
			langUsa() {
				this.rus = localStorage.rus = false
				this.ukr = localStorage.ukr = false
				this.usa = localStorage.usa = true
			},
		},
		mounted() {
			if (this.rus == false || this.usa == false) {
				this.ukr = true
			}
			if (localStorage.rus) {
				if (localStorage.rus == 'false') {
					this.rus = false
				} else {
					this.rus = true
				}
			};
			if (localStorage.usa) {
				if (localStorage.usa == 'false') {
					this.usa = false
				} else {
					this.usa = true
				}
			};
			if (localStorage.ukr) {
				if (localStorage.ukr == 'false') {
					this.ukr = false
				} else {
					this.ukr = true
				}
			};
			if (localStorage.getItem('products')) {
				try {
					this.products = JSON.parse(localStorage.getItem('products'));
				} catch (e) {
					localStorage.removeItem('products');
				}
			}
		},
		computed: {
			countProduct() {
				let res = 0
				this.products.forEach(el => {
					res = res + el.count
				})
				return res
			}
		}
	})
}

if (document.getElementById('app2')) {
	Vue.use('maska', Maska)
	Vue.component('v-select', VueSelect.VueSelect)
	new Vue({
		el: '#app2',
		data: {
			rus: false,
			ukr: false,
			usa: false,
			directives: {
				'#': { pattern: /[0-9]/ },
				'X': { pattern: /[0-9a-zA-Z]/ },
				'S': { pattern: /[a-zA-Z]/ },
				'A': { pattern: /[a-zA-Z]/, uppercase: true },
				'a': { pattern: /[a-zA-Z]/, lowercase: true },
				'!': { escape: true },
				'*': { repeat: true }
			},
			options: [
				'07:00 - 09:00',
				'09:00 - 12:00',
				'12:00 - 14:00',
				'14:00 - 18:00',
				'18:00 - 20:00',
			],
			selected: '',
			name: '',
			tel: '',
			eMail: '',
			street: '',
			home: '',
			flat: '',
			entrance: '',
			coment: '',
			checked: false,
			addComent: false,
			validData: '',
			products: [],
			newCat: null,
			burger: false,
			creatUser: false,
			deliveryDate: '',
			deliveryTime: false,
			payment: '',
			paymentTitle: '',
			paymentTitleUkr: '',
			paymentTitleUsa: '',
			nameError: false,
			telError: false,
			mailError: false,
			streetError: false,
			homeError: false,
			deliveryDateError: false,
			paymentError: false,
			selectedError: false,

		},

		methods: {
			testF =(argneed, argU) => (argU.search(argneed) != -1) ? true : false,
			CloseInvoice() {
				this.creatUser = false
			},
			burgerMenu() {
				this.burger ? this.burger = false : this.burger = true
			},
			addComentText() {
				this.addComent ? this.addComent = false : this.addComent = true
			},
			currentDateTime(n = 0) {
				let today = new Date();
				let tomorrow = new Date(today.getTime() + ((24 * 60 * 60 * 1000) * n));
				let day = tomorrow.getDate()
				if (day < 10) {
					day = "0" + tomorrow.getDate()
				}
				let month = tomorrow.getMonth() + 1
				if (month < 10) {
					month = "0" + (tomorrow.getMonth() + 1)
				}
				const date = day + '.' + month + '.' + tomorrow.getFullYear();
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
				if (this.products[x].count == 0) {
					this.removeProduct(x)
				}
				this.saveProduct();
			},
			createUser() {
				let needEmail = /@./gm;
				let creatUser = true

				if ((this.name.length > 2) == false) {
					creatUser = false
					this.nameError = true
				} else {
					this.nameError = false
				}
				if (this.tel === '' || this.tel.length > 19 || this.tel.length < 19) {
					creatUser = false
					this.telError = true
				} else {
					this.telError = false
				}
				if (testF(needEmail, this.eMail) == false || this.eMail === '') {
					creatUser = false
					this.mailError = true
				} else {
					this.mailError = false
				}
				if (this.street === '' || (this.street.length > 2) == false) {
					creatUser = false
					this.streetError = true
				} else {
					this.streetError = false
				}
				if (this.home === '') {
					creatUser = false
					this.homeError = true
				} else {
					this.homeError = false
				}
				if (this.deliveryDate === '') {
					creatUser = false
					this.deliveryDateError = true
				} else {
					this.deliveryDateError = false
				}
				if (this.selected === '') {
					creatUser = false
					this.selectedError = true
				} else {
					this.selectedError = false
				}
				if (this.payment === '') {
					creatUser = false
					this.paymentError = true
				} else {
					this.paymentError = false
				}
				if (this.products.length === 0) {
					creatUser = false
					alert('Добавте что-то к заказу')
				}
				this.creatUser = creatUser

				if (this.payment == "cash") {
					this.paymentTitle = 'Наличными курьеру'
					this.paymentTitleUkr = "Готівкою кур'єру"
					this.paymentTitleUsa = 'Сash courier'
				}
				if (this.payment == "paymentWeb") {
					this.paymentTitle = 'Оплата картой на сайте'
					this.paymentTitleUkr = "Оплата карткою на сайті"
					this.paymentTitleUsa = 'Payment by card on the site'
				}
				if (this.payment == "cahsless") {
					this.paymentTitle = 'Безналичный расчет (для юр. лиц)'
					this.paymentTitleUkr = "Безготівковий розрахунок (для юр. Осіб)"
					this.paymentTitleUsa = 'Cashless payment (for legal entities)'
				}

			},
		},
		computed: {

			totalProduct() {
				let res = 0
				this.products.forEach(element => {
					res = res + (element.price * element.count)
				});
				return res
			},
			countProduct() {
				let res = 0
				this.products.forEach(el => {
					res = res + el.count

				})
				return res
			}

		},
		mounted() {
			if (this.rus == false || this.usa == false) {
				this.ukr = true
			}
			if (localStorage.rus) {
				if (localStorage.rus == 'false') {
					this.rus = false
				} else {
					this.rus = true
				}
			};
			if (localStorage.usa) {
				if (localStorage.usa == 'false') {
					this.usa = false
				} else {
					this.usa = true
				}
			};
			if (localStorage.ukr) {
				if (localStorage.ukr == 'false') {
					this.ukr = false
				} else {
					this.ukr = true
				}
			};
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

if (document.getElementById('app3')) {
	new Vue({
		el: '#app3',
		data: {
			rus: false,
			ukr: false,
			usa: false,
			totalProduct: 0,
			burger: false,
			products: [],
			mail: '',
			mailError: false,
			mailSend: false,
		},
		watch: {
		},
		mounted() {
			if (this.rus == false || this.usa == false) {
				this.ukr = true
			}
			if (localStorage.rus) {
				if (localStorage.rus == 'false') {
					this.rus = false
				} else {
					this.rus = true
				}
			};
			if (localStorage.usa) {
				if (localStorage.usa == 'false') {
					this.usa = false
				} else {
					this.usa = true
				}
			};
			if (localStorage.ukr) {
				if (localStorage.ukr == 'false') {
					this.ukr = false
				} else {
					this.ukr = true
				}
			};

			if (localStorage.getItem('products')) {
				try {
					this.products = JSON.parse(localStorage.getItem('products'));
				} catch (e) {
					localStorage.removeItem('products');
				}
			};
		},
		methods: {
			langRus() {
				this.rus = localStorage.rus = true
				this.ukr = localStorage.ukr = false
				this.usa = localStorage.usa = false
			},
			langUkr() {
				this.rus = localStorage.rus = false
				this.ukr = localStorage.ukr = true
				this.usa = localStorage.usa = false
			},
			langUsa() {
				this.rus = localStorage.rus = false
				this.ukr = localStorage.ukr = false
				this.usa = localStorage.usa = true
			},
			testF = (argneed, argU) => (argU.search(argneed) != -1) ? true : false,
			createMail() {
				let needEmail = /@./gm;
				if (testF(needEmail, this.mail) == false || this.mail === '') {
					creatUser = false
					this.mailError = true
					this.mailSend = false
				} else {
					this.mailError = false
					this.mailSend = true
				}
			},
			burgerMenu() {
				this.burger ? this.burger = false : this.burger = true
			},
		},
		computed: {
			countProduct() {
				let res = 0
				this.products.forEach(el => {
					res = res + el.count

				})
				return res
			}
		}
	})
}

// if (document.getElementById('app4')) {
// 	new Vue({
// 		el: '#app4',
// 		data: {
// 			mail: '',
// 			mailError: false,
// 			mailSend: false,
// 		},
// 		methods: {
// 			testF =(argneed, argU) => (argU.search(argneed) != -1) ? true : false,
// 			createMail() {
// 				let needEmail = /@./gm;
// 				if (testF(needEmail, this.mail) == false || this.mail === '') {
// 					creatUser = false
// 					this.mailError = true
// 					this.mailSend = false
// 				} else {
// 					this.mailError = false
// 					this.mailSend = true
// 				}
// 			},
// 		},
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