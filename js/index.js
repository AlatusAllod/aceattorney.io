jQuery(function($) {
	$(document).ready( function() {
		$('.navigation').stickUp(); //плавающее меню

		$("a").on("click", function(event) { //отключил ссылки
			event.preventDefault(); 
		});

		$("nav i").on("click", function() { //переключение меню по нажатию на гамбургер
			let $nav = $("nav ul");
		    if ($nav.css('display')=='none') {
			  $nav.css('display', 'flex');
			} else {
			  $nav.css('display', 'none');
			}
		});

		$("nav ul li").on("click", function() {  //закрытие меню при выборе раздела
			$("nav ul").css('display', 'none');
		});

		$("nav, .header-top").on("click","a", function (event) { //плавная якорная прокрутка
		    event.preventDefault();
		    let id  = $(this).attr('href'),
		    top = $(id).offset().top;
		    $('body,html').animate({scrollTop: top}, 1000);
		});

		$('a.callback, .page-header button').click( function(event){ //модальное окно
			event.preventDefault();
			$('#overlay').fadeIn(400,
			 	function(){ 
					$('#modal_form') 
						.css('display', 'block')
						.animate({opacity: 1, top: '50%'}, 200);
			});
		});
		
		$('#modal_close, #overlay').click( function(){ //выход из модального окна
			$('#modal_form')
				.animate({opacity: 0, top: '45%'}, 200,
					function(){
						$(this).css('display', 'none');
						$('#overlay').fadeOut(400);
					}
				);
		});

		$(".cases-list .arrow-right").on("click", function(event) { //карусель, стрелка вправо
			event.preventDefault();
		    let $active = $(".cotent-group.active");
		    let $elements = $(".cotent-group");

		    $(".cotent-group").css('left', '1000px');
		    $(".cotent-group.active").css('left', '0px');

		    if ($active[0]  == $elements[4]) {
		    	$('.page-cases ul li:last').toggleClass('active');
		    	$('.page-cases ul li:first').toggleClass('active');    	

				$active.css('transition-property', 'left').css('left', '-1000px');
		    	setTimeout(function(){
		        	$active.toggleClass('active');
		        	$active.css('transition-property', 'none');
		    	},500);

		    	var $next = $(".cotent-group:first");
				$next.css('transition-property', 'left').css('left', '0px');
				setTimeout(function(){
		        	$next.toggleClass('active');
		        	$next.css('transition-property', 'none');
		    	},500);
		    	return;
		    }

			$active.css('transition-property', 'left').css('left', '-1000px');
	    	setTimeout(function(){
	        	$active.toggleClass('active');
	        	$active.css('transition-property', 'none');
	    	},500);

			var $next = $(".active + .cotent-group");
			$next.css('transition-property', 'left').css('left', '0px');
			setTimeout(function(){
	        	$next.toggleClass('active');
	        	$next.css('transition-property', 'none');
	    	},500);

	    	$('.page-cases ul li.active + li').toggleClass('active');
	    	$('.page-cases ul li.active:first').toggleClass('active');
		});

		$(".cases-list .arrow-left").on("click", function(event) { //карусель, стрелка влево
		    event.preventDefault();
			let $active = $(".cotent-group.active");
			let $elements = $(".cotent-group");

			$(".cotent-group").css('left', '-1000px');
			$(".cotent-group.active").css('left', '0px');

			if ($active[0] == $elements[0]) {
			    $('.page-cases ul li:last').toggleClass('active');
			    $('.page-cases ul li:first').toggleClass('active');

				$active.css('transition-property', 'left').css('left', '1000px');
			    setTimeout(function(){
			        $active.toggleClass('active');
			        $active.css('transition-property', 'none');
			    },500);

			    var $next = $(".cotent-group:last");
				$next.css('transition-property', 'left').css('left', '0px');
				setTimeout(function(){
			        $next.toggleClass('active');
			        $next.css('transition-property', 'none');
			    },500);
			    return;
			}

			$active.css('transition-property', 'left').css('left', '1000px');
		    setTimeout(function(){
		        $active.toggleClass('active');
		        $active.css('transition-property', 'none');
		    },500);

			var $previous = $(".cotent-group.active").prev();
			$previous.css('transition-property', 'left').css('left', '0px');
			setTimeout(function(){
		        $previous.toggleClass('active');
		        $previous.css('transition-property', 'none');
		    },500);

		    $('.page-cases ul li.active').prev().toggleClass('active');
		    $('.page-cases ul li.active:last').toggleClass('active');
		});

		$(".cotent-group").swipe( {
	        swipeLeft:leftSwipe,
	        swipeRight:rightSwipe,
	        threshold: 75
		});

		function leftSwipe(event){
	        event.preventDefault();
		    let $active = $(".cotent-group.active");
		    let $elements = $(".cotent-group");

		    $(".cotent-group").css('left', '1000px');
		    $(".cotent-group.active").css('left', '0px');

		    if ($active[0]  == $elements[4]) {
		    	$('.page-cases ul li:last').toggleClass('active');
		    	$('.page-cases ul li:first').toggleClass('active');    	

				$active.css('transition-property', 'left').css('left', '-1000px');
		    	setTimeout(function(){
		        	$active.toggleClass('active');
		        	$active.css('transition-property', 'none');
		    	},500);

		    	var $next = $(".cotent-group:first");
				$next.css('transition-property', 'left').css('left', '0px');
				setTimeout(function(){
		        	$next.toggleClass('active');
		        	$next.css('transition-property', 'none');
		    	},500);
		    	return;
		    }

			$active.css('transition-property', 'left').css('left', '-1000px');
	    	setTimeout(function(){
	        	$active.toggleClass('active');
	        	$active.css('transition-property', 'none');
	    	},500);

			var $next = $(".active + .cotent-group");
			$next.css('transition-property', 'left').css('left', '0px');
			setTimeout(function(){
	        	$next.toggleClass('active');
	        	$next.css('transition-property', 'none');
	    	},500);

	    	$('.page-cases ul li.active + li').toggleClass('active');
	    	$('.page-cases ul li.active:first').toggleClass('active');
		}

		function rightSwipe(event){
	        event.preventDefault();
			let $active = $(".cotent-group.active");
			let $elements = $(".cotent-group");

			$(".cotent-group").css('left', '-1000px');
			$(".cotent-group.active").css('left', '0px');

			if ($active[0] == $elements[0]) {
			    $('.page-cases ul li:last').toggleClass('active');
			    $('.page-cases ul li:first').toggleClass('active');

				$active.css('transition-property', 'left').css('left', '1000px');
			    setTimeout(function(){
			        $active.toggleClass('active');
			        $active.css('transition-property', 'none');
			    },500);

			    var $next = $(".cotent-group:last");
				$next.css('transition-property', 'left').css('left', '0px');
				setTimeout(function(){
			        $next.toggleClass('active');
			        $next.css('transition-property', 'none');
			    },500);
			    return;
			}

			$active.css('transition-property', 'left').css('left', '1000px');
		    setTimeout(function(){
		        $active.toggleClass('active');
		        $active.css('transition-property', 'none');
		    },500);

			var $previous = $(".cotent-group.active").prev();
			$previous.css('transition-property', 'left').css('left', '0px');
			setTimeout(function(){
		        $previous.toggleClass('active');
		        $previous.css('transition-property', 'none');
		    },500);

		    $('.page-cases ul li.active').prev().toggleClass('active');
		    $('.page-cases ul li.active:last').toggleClass('active');
		}
	});
});