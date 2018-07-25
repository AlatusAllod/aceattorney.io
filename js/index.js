jQuery(function($) {
	$(document).ready( function() {
		$('.navigation').stickUp(); 
	}); 
});

$("nav i").on("click", function() {
	let $nav = $("nav ul");
    if ($nav.css('display')=='none') {
	  $nav.css('display', 'flex');
	} else {
	  $nav.css('display', 'none');
	}
});

$("nav ul li").on("click", function() {
	$("nav ul").css('display', 'none');
});

$(document).ready(function(){
	$(".header-menu nav").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	    top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1500);
	});
});