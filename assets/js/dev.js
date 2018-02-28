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

$("section#menu ul.menuTabs>li>a").click(function(e){
    e.preventDefault();
    if (!$( this ).hasClass( "active" )) {
      var index=$( this ).attr('href');
      $('ul.principal').slideUp(150);
      $('section#menu ul.menuTabs>li>a').removeClass('active');
      $('section#menu ul.principal.'+index).slideDown(150);
      $(this).addClass('active');
    }
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var menu=$('section#MenuHamburguer');
    if (scroll>1) {
      menu.addClass('fix');
    }else{
      menu.removeClass('fix');
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
    $('.slideDetalleZoom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slideDetalleThumbs'
    });
    $('.slideDetalleThumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slideDetalleZoom',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
    });
});



$("section.filtroProductos div.itemRound>div.circle").click(function(){
  var index=$(this).attr('index');
  var parent=$(this).parent('div.itemRound');
  if (!parent.hasClass('active')) {
    $('section.filtroProductos div.slideCategorias div.item').slideUp();
    $('section.filtroProductos div.slideCategorias div.item.'+index).slideDown();
    $('section.filtroProductos div.itemRound').removeClass('active');
    parent.addClass('active');
  }
});
$("section.filtroProductos div.containerBordered a.closeAcc").click(function(e){
    e.preventDefault();
    $('section.filtroProductos div.slideCategorias div.item').slideUp();
    $('section.filtroProductos div.itemRound').removeClass('active');
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


