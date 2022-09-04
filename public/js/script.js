	 // Owl Carousel
$(function () {
	 var owl = $(".owl-carousel");
	 owl.owlCarousel({
		items: 4.4,
		margin: 0,
		loop: true,
		autoplay: true,
		autoPlay: 500,
		stagePaddingLeft: 100,
		nav: true
	 });
  });
  	 // responsive menu
  $(document).ready(function () {
	$('.sidebarbtn').click(function () {
	  $('#mySidenav, body').toggleClass('active');
	});
	$('.closebtn').click(function () {
	  $('#mySidenav, body').removeClass('active');
	});
  });
  
  $(function() {
	$(".circle-text").lettering();
});