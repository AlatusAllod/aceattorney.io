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
	$("nav, .header-top").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	    top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function() {
	$('a.callback, .page-header button').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	
	$('#modal_close, #overlay').click( function(){
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
});