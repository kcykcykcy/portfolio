$(function(){
	//header 
	var scrollT= 0;

	$(window).scroll(function(){
		scrollT= $(window).scrollTop();

		if(scrollT > 100) {
			$("#header .top").addClass("on");
		}	
		else {
			$("#header .top").removeClass("on");
		}
	});
	
	//slider
	var mainswiper = new Swiper("#header .slider .mySwiper", {
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
		on: {
			touchEnd: function () {
				mainswiper.autoplay.start();		
			},
		  },
	});
	$("#header .playbtn .pause").click(function(e){
		e.preventDefault();
		$("#header .playbtn .play").addClass("on");
		$("#header .playbtn .pause").addClass("on");
		mainswiper.autoplay.stop();
	});
	$("#header .playbtn .play").click(function(e){
		e.preventDefault();
		$("#header .playbtn .pause").removeClass("on");
		$("#header .playbtn .play").removeClass("on");
		mainswiper.slideNext();
		mainswiper.autoplay.start();
	});
	

	//menu
	$(".tab").click(function(e){
		e.preventDefault();

		$("body").toggleClass("fixed");
		$("#mobile").toggleClass("on");
		$(".menu li").toggleClass("on");
	});

	$("#mobile > ul > li > a").click(function(e){
		e.preventDefault();

		if($(this).parent().hasClass("on") == true) {
			$(this).next("ul").slideUp(300);
			$(this).parent().removeClass("on");
		}
		else {
			$("#mobile > ul > li").removeClass("on");
			$(this).parent().addClass("on");

			$("#mobile li ul").slideUp(300);
			$(this).next("ul").slideDown(300);
		}
	});

	//page1
	var swiper = new Swiper("#page1_slider .mySwiper", {
		slidesPerView: 1.5,
        spaceBetween: 10,
      });

	//page2
	var n=0;
	$("#page2 .content li").eq(n).addClass("on");
	
	$("#page2  ul > li").click(function(e){
		e.preventDefault();
		$("#page2 .content li").removeClass("on");
		$(this).addClass("on");

	});
	
	$("#page2 .content .list li").click(function(e){
		e.preventDefault();
	});

	//page3
	$("#page3 .content .list li").click(function(e){
		e.preventDefault();
	});

	//page4
	$("#page4_slider").click(function(e){
		e.preventDefault();
	});
	var page4swiper = new Swiper("#page4_slider .mySwiper", {
        loop: true,
		slidesPerView: 2,
        spaceBetween: 10,
      });
	
	$("#page4 .content .left").click(function(e){
		e.preventDefault();
		page4swiper.slidePrev();

	});
	$("#page4 .content .right").click(function(e){
		e.preventDefault();
		page4swiper.slideNext();
	});
});