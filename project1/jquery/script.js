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
	var xtarget;
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
		console.log(bannerN, xtarget);
		$("#page2 .text li").removeClass("active");
		$("#page2 .text li").eq(bannerN).addClass("active");
	});
	$("#page2 .controls .next").click(function(e){
		e.preventDefault();

		if(bannerN < (total-1)){
			bannerN=bannerN+1;
		}
		else{
			return;
		}

		xtarget=xoffset*bannerN*(-1);
		$(".slider_moving ul").css({left:xtarget});
		$("#page2 .text li").removeClass("active");
		$("#page2 .text li").eq(bannerN).addClass("active");
	});
	
	$("#page2 .banner_list .text li:first-child").addClass("active");


	//page3
	let p3_bannerN=0;
	let p3_total=3;
	$("#page3 .banner_list li:first-child").addClass("active");
	
	$("#page3 .controls .next").click(function(e){
		e.preventDefault();
		
		if(p3_bannerN < (p3_total-1)){
			p3_bannerN=p3_bannerN+1;
		}
		else{
			return;
		}

		$("#page3 .image li").removeClass("active");
		$("#page3 .image li").eq(p3_bannerN).addClass("active");
	});
	$("#page3 .controls .prev").click(function(e){
		e.preventDefault();
		
		if(p3_bannerN > 0){
			p3_bannerN=p3_bannerN-1;
		}
		else{
			return;
		}

		$("#page3 .image li").removeClass("active");
		$("#page3 .image li").eq(p3_bannerN).addClass("active");
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

	var p4_bannerN=0;
	var p4_xoffset=2500;
	var p4_xtarget=0;
	var p4_total=3;

	$("#page4 .controls .prev").click(function(e){
		e.preventDefault();

		if(p4_bannerN > 0){
			p4_bannerN=p4_bannerN-1;
		}
		else{
			return;
		}

		p4_xtarget=p4_xoffset*p4_bannerN*(-1);
		$("#page4 .slider_moving ul").css({left:p4_xtarget});
		$("#page4 .banner_list .desc li").removeClass("active");
		$("#page4 .banner_list .desc li").eq(p4_bannerN).addClass("active");
		
	});
	$("#page4 .controls .next").click(function(e){
		e.preventDefault();

		if(p4_bannerN < (p4_total-1)){
			p4_bannerN=p4_bannerN+1;
		}
		else{
			return;
		}

		p4_xtarget=xoffset*p4_bannerN*(-1);
		$("#page4 .slider_moving ul").css({left:p4_xtarget});
		$("#page4 .banner_list .desc li").removeClass("active");
		$("#page4 .banner_list .desc li").eq(p4_bannerN).addClass("active");
		console.log(p4_xtarget);
	});
	
	$("#page4 .banner_list .text li").eq(0).addClass("active");
	$("#page4 .banner_list .desc li").eq(0).addClass("active");

	//page5

	let p5_xtarget;
	
	$("#page5 .control li").eq(0).addClass("on");
	$("#page5 .control li a").click(function(e){
		e.preventDefault(); 
		
		p5_xtarget=$(this).parent().index()*-180;
		$("#page5 .banner_list .slider_moving ul").css({left: p5_xtarget});
		$("#page5 .control li").removeClass("on");
		$(this).addClass("on");
	});
	
});