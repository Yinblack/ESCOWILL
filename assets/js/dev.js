var base_url;
window.base_url = "http://localhost/EscoWill/";
$( document ).ready(function() {
    checkMenuType();
    $('.parallax').parallax();
    window.sr = ScrollReveal({ duration: 1000 }).reveal('.reveal');
});


$('.scrollTo').click(function(e){
	e.preventDefault();
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
   	  	var target = $(this.hash);
   	  	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
   	  	if (target.length) {
   	  	  	$('html, body').animate({
   	  	  	  scrollTop: target.offset().top
   	  	  	}, 800);
   	  	  	return false;
   	  	}
   	}
});

window.addEventListener("load", function () {
    window.loaded = true;
});

(function listen () {
    if (window.loaded) {
      $('div.loaderPage').hide();
       checkMenuType();
    } else {
      window.setTimeout(listen, 50);
    }
})();



$(window).resize(function(){
	checkMenuType();
});
function checkMenuType(){
	if ($(window).width() < 768) {
    hideMenu();
	}else{
    displayMenu();
	}
}
$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    if ($( this ).hasClass( "is-active" )) {
    	displayMenu();
    }else{
    	hideMenu();
    }
});

function displayMenu(){
  //$('section#menu').slideDown(350);
  $('section#menu').addClass('display');
  $(".hamburger").addClass('is-active');
}
function hideMenu(){
  //$('section#menu').slideUp(350);
  $('section#menu').removeClass('display');
  $(".hamburger").removeClass('is-active');
}

$( document ).ready(function() {
  $('div.slideProductos').slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    draggable: false,
    swipe: false,
    touchMove: false
  });
  $('div.slideCapacidad').slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    draggable: false,
    swipe: false,
    touchMove: false
  });
});


$("section.filtroProductos div.itemRound>div.circle").click(function(){
  var index=$(this).attr('index');
  $('div.slideCapacidad').slick('slickGoTo', index);
});

$("section.filtroProductos div.containerBordered div.slideCapacidad ul>li>a").click(function(){
  var index=$(this).attr('index');
  $('div.slideCapacidad').slick('slickGoTo', index);
});

$("section#menu ul.principal>li>a>svg").click(function(e){
  e.preventDefault();
  if ($(this).parent('a').hasClass('active')) {
    $(this).parent('a').next('ul').slideUp(250);
    $(this).parent('a').removeClass('active');
  }else{
    $(this).parent('a').next('ul').slideDown(250);
    $(this).parent('a').addClass('active');
  }
  
});
