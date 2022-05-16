$(function(){
	var t=0;
	var n=0;
	let w;

	$(window).scroll(function(){
		t=$(window).scrollTop();
		
		if(t < $("#page1").offset().top-winHalf) {
			n=0;
		}
		else if(t < $("#page2").offset().top-winHalf) {
			n=1;
		}
		else if(t < $("#page3").offset().top-winHalf) {
			n=2;
		}
		else if(t < $("#page4").offset().top-winHalf) {
			n=3;
		}
		else if(t < $("#page5").offset().top-winHalf) {
			n=4;
		}
		else {
			n=5;
		}

		if(n == 0) {
			$("#header").addClass("on");
		}
		else {
			$("#page"+n).addClass("on");
		}
		

		if(t > 100) {
			$("#header .menu_zone").addClass("on");
			$("#gnb li a").addClass("on");
			$("#footer .btn_top").fadeIn(300);
		}
		else {
			$("#header .menu_zone").removeClass("on");
			$("#gnb li a").removeClass("on");
			$("#footer .btn_top").fadeOut(300);
		}
		$("#gnb li").removeClass("on");
		$("#gnb li").eq(n).addClass("on");
		$("#m_gnb li").removeClass("on");
		$("#m_gnb li").eq(n).addClass("on");
	});
	var winHalf;

	$(window).resize(function(){
		winHalf=$(window).height()/2;
		w=$(window).width();

		if( w > 940) {
			$("#header .mobile, #header .tab, #header .dim").removeClass("on");
		}
	});
	$(window).trigger("resize");
	$(window).trigger("scroll");

	$(".menu_zone .tab").click(function(e){
		e.preventDefault();

		$(".menu_zone .tab").toggleClass("on");
		$(".mobile").toggleClass("on");
		$(".dim").toggleClass("on");
		$("body").toggleClass("on");
	});
	$(".dim").click(function(){
		$(".menu_zone .tab").removeClass("on");
		$(".mobile").removeClass("on");
		$(".dim").removeClass("on");
		$("body").removeClass("on");
	});

	var topArea;
	var topPos;
	$("#gnb li").click(function(e){
		e.preventDefault();

		topArea=$(this).find("a").attr("href");
		topPos=$(topArea).offset().top;

		$("html").animate({scrollTop : topPos}, 300);
	});
	$("#m_gnb li").click(function(e){
		e.preventDefault();
		$(".menu_zone .tab").removeClass("on");
		$(".mobile").removeClass("on");
		$(".dim").removeClass("on");
		$("body").removeClass("on");

		topArea=$(this).find("a").attr("href");
		topPos=$(topArea).offset().top;

		$("html").delay(500).animate({scrollTop : topPos}, 300);

	});
});