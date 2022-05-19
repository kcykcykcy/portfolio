$(function(){
	//mousewheel
	var pageN=0;
	var pageH=$(window).height();
	var scrollTimer=0;
	var pos;
	var w;
	var h;

	$("#header").addClass("on");

	$(window).resize(function(){
		w=$(window).width();
		h=$(window).height();
		
		if(isMobile) {
			if(w > h) {
				$("#page1, #page2, #page3, #page4, #footer").addClass("mobile");
			}
			else {
				$("#page1, #page2, #page3, #page4, #footer").removeClass("mobile");				
			}
		} 
		else {
			$("#page1, #page2, #page3, #page4, #footer").removeClass("mobile");
		}
		
		clearTimeout(scrollTimer);

		scrollTimer=setTimeout(function(){
			pageH=$(window).height();
			
			pos=pageN*pageH;
			$("html").animate({scrollTop:pos}, 500);
		},100);
	});
	$(window).trigger("resize");
	
	$(window).mousewheel(function(e, delta){

		if($("html").is(":animated")) return;
		// console.log(delta);

		if(delta > 0) { //올릴 때
			if(pageN > 0) {
				pageN--;
			}
			else {
				return;
			}
		}
		else { //내릴 때
			if (pageN < 6) {
				pageN++;
			}
			else {
				return;
			}
		}
		if(pageN == 0) {
			$("section, #footer").removeClass("on");
			$("#header").addClass("on");
		}
		else if (pageN == 5) {
			$("section, #header").removeClass("on");
			$("#footer").addClass("on");
		}
		else {
			$("#header, section, #footer").removeClass("on");
			$("#page"+pageN).addClass("on");
		}
		
		pos=pageN*pageH;
		$("html").animate({scrollTop:pos}, 500, function(){
			$(".controller li").removeClass("on");
			$(".controller li").eq(pageN).addClass("on");
		});
	});
	$(window).keydown(function(e){

		if($("html").is(":animated")) return;

		if(e.keyCode == 38) { //올릴 때
			if(pageN > 0) {
				pageN--;
			}
			else {
				return;
			}
		}
		else if(e.keyCode ==40) { //내릴 때
			if (pageN < 6) {
				pageN++;
			}
			else {
				return;
			}
		}
		if(pageN == 0) {
			$("section, #footer").removeClass("on");
			$("#header").addClass("on");
		}
		else if (pageN == 5) {
			$("section, #header").removeClass("on");
			$("#footer").addClass("on");
		}
		else {
			$("#header, section, #footer").removeClass("on");
			$("#page"+pageN).addClass("on");
		}
		
		pos=pageN*pageH;
		$("html").animate({scrollTop:pos}, 500, function(){
			$(".controller li").removeClass("on");
			$(".controller li").eq(pageN).addClass("on");
		});
	});
	
	$(".controller li").eq(0).addClass("on");
	$(".controller li").click(function(e){
		e.preventDefault();

		if($("html").is(":animated")) return;

		pageN=$(this).index();
		pos=pageN*pageH;

		$("html").animate({scrollTop:pos}, 500, function(){
			if(pageN == 0) {
				$("section, #footer").removeClass("on");
				$("#header").addClass("on");
			}
			else if (pageN == 5) {
				$("section, #header").removeClass("on");
				$("#footer").addClass("on");
			}
			else {
				$("#header, section, #footer").removeClass("on");
				$("#page"+pageN).addClass("on");
			}
			$(".controller li").removeClass("on");
			$(".controller li").eq(pageN).addClass("on");
		});	

	});
	
	//gnb
	var scrollT=0;

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT > 100) {
			$("#header .top").addClass("fixed");
			$("#header .fixed_arrow").addClass("fixed");
		}
		else {
			$("#header .top").removeClass("fixed");
			$("#header .fixed_arrow").removeClass("fixed");
		}
	});
	
	
	//header
	var video=document.getElementById("header_video");
	video.muted=true;
	video.play();

	$("#header .lang li").eq(0).addClass("on");
	$("#header .lang, #header top.fixed .lang").click(function(e){
		e.preventDefault();
		if($("#header .lang ul").css("display")== "none" ) {
			$("#header .lang ul").slideDown(300);
		}
		else {
			$("#header .lang ul").slideUp(300);
		}
	});

	$("#header .lang li, #header .top.fixed .lang li").hover(
		function(){
			$(this).css("background", "#eaeaea");
		},
		function(){
			$(this).css("background", "transparent");
		}
	);
	$("#header .lang li a, #header .top.fixed .lang li a").focusin(function(){
		$(this).parent().css("background", "#eaeaea");
	});
	$("#header .lang li a, #header .top.fixed .lang li a").focusout(function(){
		$(this).parent().css("background", "transparent");
	});
	$("#header .lang a, #header .top.fixed .lang li a").focusin(function(){	
		$("#header .lang ul").slideDown(300);
	});
	$("#header .lang li:last-child a, #header .top.fixed .lang li:last-child a").focusout(function(){
		$("#header .lang ul").slideUp(300);
	});
	
	$("#menu").click(function(e){
		e.preventDefault();

		$(this).toggleClass("on");	
		$("#mobile_menu").toggleClass("on");
		$("body").toggleClass("fixed");
	});
	$("#mobile_menu > ul > li > a").click(function(e){
		e.preventDefault();

		if($(this).next("ul").css("display")== "none") {
			$("#mobile_menu li ul").slideUp(300);
			$(this).next("ul").slideDown(300);
		}
		else {
			$(this).next("ul").slideUp(300);
		}

		// $("#mobile_menu li ul").slideUp(300);
		// $(this).next("ul").slideDown(300);
	});


	//nav
	var count=0;
	var total=$("#slide .swiper-slide").length;

	$("#header .nav .current").addClass("active");

	setInterval(function(){
		$("#header .nav .next").trigger("click");
	}, 7000);

	$("#header .nav .next").click(function(e){
		e.preventDefault();
		clearTimeout(timer);
		var timer=0;

		timer=setTimeout(function(){
			$("#header .nav .current").removeClass("active");

			if(count < total-1) {
				count++;
			}
			else {
				count=0;
			}
			
			slideMotion();
			swiper.slideNext();
		},100);
	});

	$("#header .nav .prev").click(function(e){
		e.preventDefault();
		var timer=0;

		clearTimeout(timer);

		timer=setTimeout(function(){
			$("#header .nav .current").removeClass("active");

			if(count > 0) {
				count--;
			}
			else {
				count=total-1;
			}
			slideMotion();
			swiper.slidePrev();
		},100);
	});

	function slideMotion(){
		setTimeout(function(){
			$("#header .nav .current .num").text(count+1);
			$("#header .nav .current").addClass("active");
		}, 100);
	}

	//slider
	var swiper = new Swiper("#slide .mySwiper", {
		centeredSlides: true,
		speed: 2000,
		loop: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
	});

	//fixed_arrow 
	$("#header .fixed_arrow").hover(
		function(){
			$(this).addClass("on");
		},
		function(){
			$(this).removeClass("on");
		}
	);
	$("#header .fixed_arrow").click(function(){
		$("html").animate({scrollTop : 0}, 400);
	});
	
	

	//page1
	var scrollN=0;

	function scrollMotion(n){
		for(var i=0; i<$("#p1_content .text li").length; i++){
			if(i == n){
				$("#p1_content .text li").eq(i).show();
			}
			else{
				$("#p1_content .text li").eq(i).hide();
			}
		}

		$("#p1_content .text li").removeClass("on");
		$("#bar_fill").removeClass("on");

		setTimeout(function(){
			$("#p1_content .text li").eq(n).addClass("on");
			$("#bar_fill").addClass("on");
		}, 50);
	}
	function intervalAction(){
		//console.log("intervalAction!!");
		if(scrollN < $("#p1_content .text li").length-1) {
			scrollN++;
		}
		else {
			scrollN=0;
		}

		$("#p1_content .progress .current").text("0"+(scrollN+1));
		scrollMotion(scrollN);
	}

	scrollMotion(scrollN);

	var p1timer=setInterval(intervalAction, 5000);

	$("#play_pause").click(function(){
		if ($(this).hasClass("play")) { //멈춰있을때
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$("#bar_fill").addClass("on");
			p1timer=setInterval(intervalAction, 5000);
		}
		else { //움직일때
			$(this).removeAttr("class");
			$(this).addClass("play");
			$("#bar_fill").removeClass("on");
			clearInterval(p1timer);
		}
	});


});