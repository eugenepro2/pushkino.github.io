$(function() {

	//Активация табов
  $( "#tabs" ).tabs();
  $( "#tabs-doc" ).tabs();


  //Слайдер на главной
	var swiper = new Swiper('.slider', {
	  pagination: '.swiper-pagination',
	  paginationClickable: true,
	  nextButton: '.swiper-button-next',
	  prevButton: '.swiper-button-prev',
	  spaceBetween: 30
	});

	//Слайдер отзывов
	var swiper = new Swiper('.review-slider', {
	    slidesPerView: 2,
	    nextButton: '.swiper-button-next',
	 		prevButton: '.swiper-button-prev'
	});


	//Галерея
	baguetteBox.run('.gallery', {
    // Custom options
	});



	//Заказ обратного звонка
	var modalContent = new tingle.modal();
  var btn = document.querySelector('.button-callback');
  btn.addEventListener('click', function(){
      modalContent.open();
  });
  modalContent.setContent(document.querySelector('.callback').innerHTML);

  //Стилизация Селектов
	$('select').select2();

});


// var slideout = new Slideout({
//     'panel': document.getElementById('panel'),
//     'menu': document.getElementById('menu'),
//     'padding': 256,
//     'tolerance': 70
//   });

// document.querySelector('.menu-open').addEventListener('click', function() {
//   slideout.toggle();
// });