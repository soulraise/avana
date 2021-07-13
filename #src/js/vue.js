new Vue({
	el: '#app',
	data: {
		pomps: [
			{
				title: 'Помпа BlueRain',
				price: 130,
				img: 'img/HandPomp.png',
				label: 'mini'
			},
			{
				title: 'Помпа BlueRain2',
				price: 131,
				img: 'img/HandPomp.png',

			},
			{
				title: 'Помпа BlueRain3',
				price: 132,
				img: 'img/HandPomp.png',
				label: 'new'
			},
			{
				title: 'Помпа BlueRain4',
				price: 133,
				img: 'img/PompBox.jpg',

			}
		],
		culers: [
			{
				title: 'Ecotronic H1-T (настольный)',
				price: 130,
				img: 'img/Cooler.png',
				label: 'mini'
			},
			{
				title: 'HotFrost D1150R',
				price: 131,
				img: 'img/cooler1.jpg',

			},
			{
				title: 'Помпа Ecotronic PICNIC',
				price: 132,
				img: 'img/cooler2.jpg',
				label: 'new'
			},
			{
				title: 'Ecotronic H1-LN',
				price: 133,
				img: 'img/cooler3.jpg',

			},
			{
				title: 'Ecotronic H1-LNF',
				price: 133,
				img: 'img/cooler4.jpg',

			}
		],
		title: "hello"

	},
	methods: {
		transition(e) {
			console.log(e)
		}
	}
})