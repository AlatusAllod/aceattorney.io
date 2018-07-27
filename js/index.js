jQuery(function($) {
	$(document).ready( function() {
		$('.navigation').stickUp(); //плавающее меню
		$(".header-menu ul").css("display", "flex"); 
		$(".header-menu ul").hide(); 


		$("a").on("click", function(event) { //отключил ссылки
			event.preventDefault(); 
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

		$(".cases-list .arrow-right").bind("click", function(event) { //карусель, стрелка вправо
			event.preventDefault();
		    let $active = $(".cotent-group.active");
		    let $elements = $(".cotent-group");

		    $elements.css('left', '1500px');
		    $active.css('left', '0px');

		    if ($active[0]  == $elements[4]) {
		    	$('.page-cases ul li:last').toggleClass('active');
		    	$('.page-cases ul li:first').toggleClass('active');    	

				$active.css('transition-property', 'left').css('left', '-1500px');
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

			$active.css('transition-property', 'left').css('left', '-1500px');
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

			$elements.css('left', '-1500px');
			$active.css('left', '0px');

			if ($active[0] == $elements[0]) {
			    $('.page-cases ul li:last').toggleClass('active');
			    $('.page-cases ul li:first').toggleClass('active');

				$active.css('transition-property', 'left').css('left', '1500px');
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

			$active.css('transition-property', 'left').css('left', '1500px');
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
	        event.preventDefault();
		    let $active = $(".cotent-group.active");
		    let $elements = $(".cotent-group");

		    $elements.css('left', '1500px');
		    $active.css('left', '0px');

		    if ($active[0]  == $elements[4]) {
		    	$('.page-cases ul li:last').toggleClass('active');
		    	$('.page-cases ul li:first').toggleClass('active');    	

				$active.css('transition-property', 'left').css('left', '-1500px');
		    	setTimeout(function(){
		        	$active.toggleClass('active');
		        	$active.css('transition-property', 'none');
		    	},500);

		    	var $next = $(".cotent-group:first");
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

			var $next = $(".active + .cotent-group");
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
	        event.preventDefault();
			let $active = $(".cotent-group.active");
			let $elements = $(".cotent-group");

			$elements.css('left', '-1500px');
			$active.css('left', '0px');

			if ($active[0] == $elements[0]) {
			    $('.page-cases ul li:last').toggleClass('active');
			    $('.page-cases ul li:first').toggleClass('active');

				$active.css('transition-property', 'left').css('left', '1500px');
			    setTimeout(function(){
			        $active.toggleClass('active');
			        $active.css('transition-property', 'none');
			    },500);

			    var $next = $(".cotent-group:last");
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

			var $previous = $(".cotent-group.active").prev();
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

		$(".page-cases ul li a").on("click", function(event) {
			$('.page-cases ul li.active').toggleClass('active');
		    $(this).parent().toggleClass('active');
		});

		$("#n1").on("click", function(event) {
			let $active = $(".cotent-group.active");
			let $element = $(".cotent-group:eq(0)");
			if ($active[0] == $element[0]) return;

			$active.fadeOut("slow", function() {
    			$active.css('left', '-1500px').fadeIn(0).toggleClass('active');
    			$element.fadeOut(0).css('left', '0px').fadeIn("slow").toggleClass('active');
    			$(".cotent-group:eq(1)").css('left', '1500px');
    			$(".cotent-group:eq(2)").css('left', '1500px');
    			$(".cotent-group:eq(3)").css('left', '1500px');
    			$(".cotent-group:eq(4)").css('left', '-1500px');
  			});
		});

		$("#n2").on("click", function(event) {
			let $active = $(".cotent-group.active");
			let $element = $(".cotent-group:eq(1)");
			if ($active[0] == $element[0]) return;

			$active.fadeOut("slow", function() {
    			$active.css('left', '-1500px').fadeIn(0).toggleClass('active');
    			$element.fadeOut(0).css('left', '0px').fadeIn("slow").toggleClass('active');
    			$(".cotent-group:eq(0)").css('left', '-1500px');
    			$(".cotent-group:eq(2)").css('left', '1500px');
    			$(".cotent-group:eq(3)").css('left', '1500px');
    			$(".cotent-group:eq(4)").css('left', '1500px');
  			});
		});

		$("#n3").on("click", function(event) {
			let $active = $(".cotent-group.active");
			let $element = $(".cotent-group:eq(2)");
			if ($active[0] == $element[0]) return;

			$active.fadeOut("slow", function() {
    			$active.css('left', '-1500px').fadeIn(0).toggleClass('active');
    			$element.fadeOut(0).css('left', '0px').fadeIn("slow").toggleClass('active');
    			$(".cotent-group:eq(0)").css('left', '-1500px');
    			$(".cotent-group:eq(1)").css('left', '-1500px');
    			$(".cotent-group:eq(3)").css('left', '1500px');
    			$(".cotent-group:eq(4)").css('left', '1500px');
  			});
		});

		$("#n4").on("click", function(event) {
			let $active = $(".cotent-group.active");
			let $element = $(".cotent-group:eq(3)");
			if ($active[0] == $element[0]) return;

			$active.fadeOut("slow", function() {
    			$active.css('left', '-1500px').fadeIn(0).toggleClass('active');
    			$element.fadeOut(0).css('left', '0px').fadeIn("slow").toggleClass('active');
    			$(".cotent-group:eq(0)").css('left', '-1500px');
    			$(".cotent-group:eq(1)").css('left', '-1500px');
    			$(".cotent-group:eq(2)").css('left', '-1500px');
    			$(".cotent-group:eq(4)").css('left', '1500px');
  			});
		});

		$("#n5").on("click", function(event) {
			let $active = $(".cotent-group.active");
			let $element = $(".cotent-group:eq(4)");
			if ($active[0] == $element[0]) return;

			$active.fadeOut("slow", function() {
    			$active.css('left', '-1500px').fadeIn(0).toggleClass('active');
    			$element.fadeOut(0).css('left', '0px').fadeIn("slow").toggleClass('active');
    			$(".cotent-group:eq(0)").css('left', '1500px');
    			$(".cotent-group:eq(1)").css('left', '-1500px');
    			$(".cotent-group:eq(2)").css('left', '-1500px');
    			$(".cotent-group:eq(3)").css('left', '-1500px');
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