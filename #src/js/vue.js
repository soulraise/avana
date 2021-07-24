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
			water: {
				id: 111,
				title: 'ВОДА AVANA 18,9 Л',
				price: 80,
				img: 'img/Bottle.jpg',
				discription: 'Сертификаты: ISO 22000/HACCP, соответствия УКРСЕПРО Источник: артезианская скважина Минирализация: 100-150 мг/дмз',
				count: 1,
			},
			title: "hello",
			showProduct: false,
			modal: {},
			products: [],
			newCat: null,
			burger: false,
		},
		methods: {
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
			directives: {
				'#': { pattern: /[0-9]/ },
				'X': { pattern: /[0-9a-zA-Z]/ },
				'S': { pattern: /[a-zA-Z]/ },
				'A': { pattern: /[a-zA-Z]/, uppercase: true },
				'a': { pattern: /[a-zA-Z]/, lowercase: true },
				'!': { escape: true },
				'*': { repeat: true }
			},
			// options: [
			// 	{ code: '1', country: '07:00 - 09:00' },
			// 	{ code: '2', country: '09:00 - 12:00' },
			// 	{ code: '3', country: '12:00 - 14:00' },
			// 	{ code: '4', country: '14:00 - 18:00' },
			// 	{ code: '5', country: '18:00 - 20:00' },
			// ],
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
				let needPassword = /[A-Z]/gm;
				let needPassword2 = /[a-z]/gm;
				let needPassword3 = /[0-9+]/gm;
				let needPassword4 = /[+]/gm;
				let needPassword5 = /[!@#$%^&*]/gm;
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
				this.creatUser = creatUser

				if (creatUser) {
					alert('уважаемый ' + ' ' + this.name + ' ' + ' ,Ваш заказ принят')
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
			totalProduct: 0,
			products: [],

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
		methods: {

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

if (document.getElementById('app4')) {
	new Vue({
		el: '#app4',
		data: {
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
		},
	})
}