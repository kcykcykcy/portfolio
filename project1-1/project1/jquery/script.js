$(function(){
	//header top
	var scrollT= 0;

	$(window).scroll(function(){
	 scrollT=($(window).scrollTop());
	 
	 if(scrollT > 150) { //
		$("#header .top").addClass("fixed");
	 }
	 else {
		$("#header .top").removeClass("fixed");
	 }
	 });

	//reservation 
	$("#header .reservation .desc").click(function(e){
		e.preventDefault();
	});
	
	//slider
	var swiper = new Swiper("#header .slider .mySwiper", {
        loop: true,
		navigation: {
          nextEl: "#header .slider .swiper-button-next",
          prevEl: "#header .slider .swiper-button-prev",
        },
		autoplay: {
			delay: 5000,
		},
      });

	//page1
	$("#page1 .desc li a").hover(
		function(){
			$("#page1 .desc li a img").removeClass("active");
			$(this).children("img").addClass("active");
		},
		function(){
			$(this).children("img").removeClass("active");
		}
	);

	//gnb 
	$("#gnb > ul > li").hover(
		function(){
			$("#header .top").addClass("over");
			$(this).children("a").addClass("over");
		},
		function(){
			$("#header .top").removeClass("over");
			$(this).children("a").removeClass("over");
		}
	);
	$("#gnb > ul > li").focusin(function(){
		$("#header .top").addClass("over");
		$(this).children("a").addClass("over");
	});
	$("#gnb > ul > li").focusout(function(){
		$("#header .top").removeClass("over");
		$(this).children("a").removeClass("over");
	});

	$(".fixed #gnb > ul > li").hover(
		function(){
			$("#header .top").addClass("over");
			$(this).children("a").addClass("over");
		},
		function(){
			$("#header .top").removeClass("over");
			$(this).children("a").removeClass("over");
		}
	);
	$(".fixed #gnb > ul > li").focusin(function(){
		$("#header .top").addClass("over");
		$(this).children("a").addClass("over");
	});
	$("#gnb > ul > li").focusout(function(){
		$("#header .top").removeClass("over");
		$(this).children("a").removeClass("over");
	});

	$("#gnb li li").hover(
		function(){
			$(this).children("a").addClass("over");
		},
		function(){
			$(this).children("a").removeClass("over");
		}
	);
	$(".fixed #gnb li li").hover(
		function(){
			$(this).children("a").addClass("over");
		},
		function(){
			$(this).children("a").removeClass("over");
		}
	);
	$("#gnb li li").focusin(function(){
		$(this).children("a").addClass("over");
	});
	$("#gnb li li").focusout(function(){
		$(this).children("a").removeClass("over");
	});
	$(".fixed #gnb li li").focusin(function(){
		$(this).children("a").addClass("over");
	});
	$(".fixed #gnb li li").focusout(function(){
		$(this).children("a").removeClass("over");
	});


	//page2
	var bannerN=0;
	var xoffset=2500;
	var xtarget=0;
	var total=3;

	$("#page2 .controls .prev").click(function(e){
		e.preventDefault();

		if(bannerN > 0){
			bannerN=bannerN-1;
		}
		else{
			return;
		}

		xtarget=xoffset*bannerN*(-1);
		$(".slider_moving ul").css({left:xtarget});
	});
	$("#page2 .controls .next").click(function(e){
		e.preventDefault();

		if(bannerN < (total-1)){
			bannerN=bannerN+1;
			console.log(bannerN);
		}
		else{
			return;
		}

		xtarget=xoffset*bannerN*(-1); console.log(xtarget);
		$(".slider_moving ul").css({left:xtarget});
	});
	
	$("#page2 .banner_list .text li:first-child").addClass("active");

	//page3
	$("#page3 .banner_list li:first-child").addClass("active");
	
	let slideN=0;
	$("#page3 .controls .next").click(function(e){
		e.preventDefault();
		
		if(slideN < 2) {
			slideN++;
		} else {
			return;
		}
		$("#page3 .banner_list li").removeClass("active");
		$("#page3 .banner_list li").eq(slideN).addClass("active");
	});
	$("#page3 .controls .prev").click(function(e){
		e.preventDefault();
		
		if(slideN > 0) {
			slideN--;
		} else {
			return;
		}
		$("#page3 .banner_list li").removeClass("active");
		$("#page3 .banner_list li").eq(slideN).addClass("active");

	});

	$("#page3 .banner_list li a").hover(
		 function(){
			$(this).parent("li").removeClass("active");
			$(this).addClass("active");
		},
		 function(){
			$(this).removeClass("active");
		}
		);
		$("#page3 .banner_list li a").focusin(function(){
			$(this).parent("li").removeClass("active");
			$(this).addClass("active");
		});
		$("#page3 .banner_list li").focusout(function(){
			$(this).removeClass("active");
		});

	//page4
	$("#page4 .desc li:first-child p").addClass("active");

	var bannerN=0;
	var xoffset=2500;
	var xtarget=0;
	var total=3;

	$("#page4 .controls .prev").click(function(e){
		e.preventDefault();

		if(bannerN > 0){
			bannerN=bannerN-1;
		}
		else{
			return;
		}

		xtarget=xoffset*bannerN*(-1);
		$(".slider_moving ul").css({left:xtarget});
		});
	$("#page4 .controls .next").click(function(e){
		e.preventDefault();

		if(bannerN < (total-1)){
			bannerN=bannerN+1;
		}
		else{
			return;
		}

		xtarget=xoffset*bannerN*(-1);
		$(".slider_moving ul").css({left:xtarget});
	});
	
	$("#page4 .banner_list .text li:first-child").addClass("active");

	//page5
	$("#page5 .control li a").click(function(e){
		e.preventDefault();

		let n=$(this).parent().index();
		xtarget=n*(-180);
		$("#page5 .banner_list .slider_moving ul").css({left : xtarget});
	});
});