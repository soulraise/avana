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