jQuery(function($) {
	$(document).ready( function() {
		$(".header-menu ul").css("display", "flex"); 
		$(".header-menu ul").hide();
		$(".content-component").eq(0).toggleClass('active');

		$("a").on("click", function(event) { //отключил ссылки
			event.preventDefault(); 
		});

		$(".header-menu i").on("click", function() { // гамбургер
			$(".header-menu ul").slideToggle(); 
		});

		$(".header-menu ul li").on("click", function() {  //закрытие меню при выборе раздела
			$(".header-menu ul").css('display', 'none');
		});

		$(".header-top, .header-menu, .page-footer").on("click","a", function (event) { //плавная якорная прокрутка
		    let id  = $(this).attr('href'),
		    top = $(id).offset().top;
		    $('body,html').animate({scrollTop: top}, 1000);
		});

		$('a.callback, .page-main button').click( function(event){ //модальное окно
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

		$(".cases-carousel .arrow-right").bind("click", function(event) { //карусель, стрелка вправо
		    let $active = $(".content-component.active");
		    let $elements = $(".content-component");

		    $elements.css('left', '1500px');
		    $active.css('left', '0px');

		    if ($elements.length == 2) {
		    	let $inactive = $(".content-component:not(.active)");
		    	$inactive.css('left', '0').fadeOut(0);
				$active.fadeToggle('slow');
				$inactive.fadeToggle('slow');
		    	setTimeout(function(){
		        	$active.toggleClass('active');
		        	$inactive.toggleClass('active');
		    	},500);
		    	$('.page-cases ul li').toggleClass('active');
		    	return;
		    }

		    if ($active[0]  == $elements[$elements.length - 1]) {
		    	$('.page-cases ul li:last').toggleClass('active');
		    	$('.page-cases ul li:first').toggleClass('active');    	

				$active.css('transition-property', 'left').css('left', '-1500px');
		    	setTimeout(function(){
		        	$active.toggleClass('active');
		        	$active.css('transition-property', 'none');
		    	},500);

		    	let $next = $(".content-component:first");
				$next.css('transition-property', 'left').css('left', '0px');
				setTimeout(function(){
		        	$next.toggleClass('active');
		        	$next.css('transition-property', 'none');
		    	},500);
		    	return;
		    }

			$active.css('transition-property', 'left').css('left', '-1500px');
	    	setTimeout(function(){
	        	$active.toggleClass('active');
	        	$active.css('transition-property', 'none');
	    	},500);

			let $next = $(".active + .content-component");
			$next.css('transition-property', 'left').css('left', '0px');
			setTimeout(function(){
	        	$next.toggleClass('active');
	        	$next.css('transition-property', 'none');
	    	},500);

	    	$('.page-cases ul li.active + li').toggleClass('active');
	    	$('.page-cases ul li.active:first').toggleClass('active');
		});

		$(".cases-carousel .arrow-left").on("click", function(event) { //карусель, стрелка влево
			let $active = $(".content-component.active");
			let $elements = $(".content-component");

			$elements.css('left', '-1500px');
			$active.css('left', '0px');

			if ($elements.length == 2) {
		    	let $inactive = $(".content-component:not(.active)");
		    	$inactive.css('left', '0').fadeOut(0);
				$active.fadeToggle('slow');
				$inactive.fadeToggle('slow');
		    	setTimeout(function(){
		        	$active.toggleClass('active');
		        	$inactive.toggleClass('active');
		    	},500);
		    	$('.page-cases ul li').toggleClass('active');
		    	return;
		    }

			if ($active[0] == $elements[0]) {
			    $('.page-cases ul li:last').toggleClass('active');
			    $('.page-cases ul li:first').toggleClass('active');

				$active.css('transition-property', 'left').css('left', '1500px');
			    setTimeout(function(){
			        $active.toggleClass('active');
			        $active.css('transition-property', 'none');
			    },500);

			    let $next = $(".content-component:last");
				$next.css('transition-property', 'left').css('left', '0px');
				setTimeout(function(){
			        $next.toggleClass('active');
			        $next.css('transition-property', 'none');
			    },500);
			    return;
			}

			$active.css('transition-property', 'left').css('left', '1500px');
		    setTimeout(function(){
		        $active.toggleClass('active');
		        $active.css('transition-property', 'none');
		    },500);

			let $previous = $(".content-component.active").prev();
			$previous.css('transition-property', 'left').css('left', '0px');
			setTimeout(function(){
		        $previous.toggleClass('active');
		        $previous.css('transition-property', 'none');
		    },500);

		    $('.page-cases ul li.active').prev().toggleClass('active');
		    $('.page-cases ul li.active:last').toggleClass('active');
		});

		$(".page-cases").swipe( { //свайпы
	        swipeLeft:leftSwipe,
	        swipeRight:rightSwipe,
	        threshold: 75
		});

		function leftSwipe(event){ //свайп влево
			$(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "none");
			$(".page-cases").swipe( {
			    swipeLeft: null,
			    swipeRight: null,
			    threshold: 75
			});	
		    let $active = $(".content-component.active");
		    let $elements = $(".content-component");

		    if ($elements.length == 2) {
		    	let $inactive = $(".content-component:not(.active)");
		    	$inactive.css('left', '0').fadeOut(0);
				$active.fadeToggle('slow');
				$inactive.fadeToggle('slow');
		    	setTimeout(function(){
		        	$active.toggleClass('active');
		        	$inactive.toggleClass('active');
		    	},500);
		    	$('.page-cases ul li').toggleClass('active');
		    	setTimeout(function(){
		        	$(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "auto");
		        	$(".page-cases").swipe( {
				        swipeLeft:leftSwipe,
				        swipeRight:rightSwipe,
				        threshold: 75
				    });
		    	},500);
		    	return;
		    }

		    $elements.css('left', '1500px');
		    $active.css('left', '0px');

		    if ($active[0]  == $elements[$elements.length - 1]) {
		    	$('.page-cases ul li:last').toggleClass('active');
		    	$('.page-cases ul li:first').toggleClass('active');    	

				$active.css('transition-property', 'left').css('left', '-1500px');
		    	setTimeout(function(){
		        	$active.toggleClass('active');
		        	$active.css('transition-property', 'none');
		    	},500);

		    	let $next = $(".content-component:first");
				$next.css('transition-property', 'left').css('left', '0px');
				setTimeout(function(){
		        	$next.toggleClass('active');
		        	$next.css('transition-property', 'none');
		        	$(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "auto");
			        $(".page-cases").swipe( {
				        swipeLeft:leftSwipe,
				        swipeRight:rightSwipe,
				        threshold: 75
				    });
		    	},500);
		    	return;
		    }

			$active.css('transition-property', 'left').css('left', '-1500px');
	    	setTimeout(function(){
	        	$active.toggleClass('active');
	        	$active.css('transition-property', 'none');
	    	},500);

			let $next = $(".active + .content-component");
			$next.css('transition-property', 'left').css('left', '0px');
			setTimeout(function(){
	        	$next.toggleClass('active');
	        	$next.css('transition-property', 'none');
	        	$(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "auto");
	        	$(".page-cases").swipe( {
			        swipeLeft:leftSwipe,
			        swipeRight:rightSwipe,
			        threshold: 75
			    });
	    	},500);

	    	$('.page-cases ul li.active + li').toggleClass('active');
	    	$('.page-cases ul li.active:first').toggleClass('active');
		}

		function rightSwipe(event){ //свайп вправо
			$(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "none");
			$(".page-cases").swipe( {
			    swipeLeft: null,
			    swipeRight: null,
			    threshold: 75
			});	
			let $active = $(".content-component.active");
			let $elements = $(".content-component");

			$elements.css('left', '-1500px');
			$active.css('left', '0px');

		    if ($elements.length == 2) {
		    	let $inactive = $(".content-component:not(.active)");
		    	$inactive.css('left', '0').fadeOut(0);
				$active.fadeToggle('slow');
				$inactive.fadeToggle('slow');
		    	setTimeout(function(){
		        	$active.toggleClass('active');
		        	$inactive.toggleClass('active');
		    	},500);
		    	$('.page-cases ul li').toggleClass('active');
		    	setTimeout(function(){
		        	$(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "auto");
		        	$(".page-cases").swipe( {
				        swipeLeft:leftSwipe,
				        swipeRight:rightSwipe,
				        threshold: 75
				    });
		    	},500);
		    	return;
		    }

			if ($active[0] == $elements[0]) {
			    $('.page-cases ul li:last').toggleClass('active');
			    $('.page-cases ul li:first').toggleClass('active');

				$active.css('transition-property', 'left').css('left', '1500px');
			    setTimeout(function(){
			        $active.toggleClass('active');
			        $active.css('transition-property', 'none');
			    },500);

			    let $next = $(".content-component:last");
				$next.css('transition-property', 'left').css('left', '0px');
				setTimeout(function(){
			        $next.toggleClass('active');
			        $next.css('transition-property', 'none');
			        $(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "auto");
			        $(".page-cases").swipe( {
				        swipeLeft:leftSwipe,
				        swipeRight:rightSwipe,
				        threshold: 75
				    });
			    },500);
			    return;
			}

			$active.css('transition-property', 'left').css('left', '1500px');
		    setTimeout(function(){
		        $active.toggleClass('active');
		        $active.css('transition-property', 'none');
		    },500);

			let $previous = $(".content-component.active").prev();
			$previous.css('transition-property', 'left').css('left', '0px');
			setTimeout(function(){
		        $previous.toggleClass('active');
		        $previous.css('transition-property', 'none');
		        $(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "auto");
		        $(".page-cases").swipe( {
				    swipeLeft:leftSwipe,
				    swipeRight:rightSwipe,
				    threshold: 75
				});
		    },500);

		    $('.page-cases ul li.active').prev().toggleClass('active');
		    $('.page-cases ul li.active:last').toggleClass('active');
		}

		let $crumbs = $('.page-cases .cases-content').children().length;
		for (let i = 0; i < $crumbs; i++) {
			$('.page-cases ul').append('<li><a></a></li>')
		}
		$('.page-cases ul li:first').toggleClass('active');

		$(".page-cases ul li a").on("click", function(event) { //переключение крошек

			let $activeN = $(".page-cases ul li").index($("li.active"));
			let $elementN = $(".page-cases ul li a").index($(this));
			if ($activeN == $elementN) return;

			$('.page-cases ul li.active').toggleClass('active');
		    $(this).parent().toggleClass('active');

		    $(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "none");
			$(".page-cases").swipe( {
			    swipeLeft: null,
			    swipeRight: null,
			    threshold: 75
			});

			let $active = $(".content-component.active");
			let $element = $(".content-component").eq($elementN);

			$active.fadeOut("fast", function() {
				
				$(".content-component").css('left', '-1500px');
				$(".content-component").eq($elementN + 1).css('left', '1500px');

				if ($elementN == ($(".page-cases ul li").length - 1)) {
					$(".content-component:first").css('left', '1500px');
				}


				$active.fadeIn(0).toggleClass('active');
    			$element.fadeOut(0).css('left', '0px').fadeIn("fast").toggleClass('active');
  			});

  			$(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "auto");
		    $(".page-cases").swipe( {
				swipeLeft:leftSwipe,
				swipeRight:rightSwipe,
				threshold: 75
			});
		});

		$(".page-cases ul li a, .arrow-left, .arrow-right").on("click", function(event) {
			$(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "none");
		    $(".page-cases").swipe( {
			    swipeLeft: null,
			    swipeRight: null,
			    threshold: 75
			});			
			setTimeout(function(){
		        $(".page-cases ul li a, .arrow-left, .arrow-right").css("pointer-events", "auto");
		        $(".page-cases").swipe( {
			        swipeLeft:leftSwipe,
			        swipeRight:rightSwipe,
			        threshold: 75
				});
		    },500);
		});
	});
});