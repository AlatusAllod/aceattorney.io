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