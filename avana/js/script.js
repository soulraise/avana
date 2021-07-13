// alert('Hello world');

$(document).ready(function () {
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

$(document).ready(function () {
   $('.related__items').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,

            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
});;
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
});

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