$(function(){
	// header
	$("#header .tab").click(function(e){
		e.preventDefault();

		$(this).toggleClass("on");
		$("#logo").toggleClass("on");
		$("#header .select").toggleClass("on");
		$("#header .search").toggleClass("on");
		$("#menu").toggleClass("on");
		$("body").toggleClass("fixed");
	});

	//menu
	$("#menu > ul > li > a").click(function(e){
		e.preventDefault();
	
		if($(this).next("ul").css("display") == "none") {
			$("#menu > ul > li").removeClass("on");
			$(this).parent().addClass("on");
			$("#menu li ul").slideUp(300);
			$(this).next("ul").slideDown(300);
		}
		else {
			$(this).parent().removeClass("on");
			$(this).next("ul").slideUp(300);
		}
	});

	//page3
	var swiper = new Swiper("#cardslide .mySwiper", {});
	
	$("#page3 li .page3_title").click(function(){
		if($(this).parent().hasClass("on") == false) {
			$(this).parent().addClass("on");
		}
		else {
			$(this).parent().removeClass("on");
		}
	});
	$("#page3 li .page3_arrow").click(function(e){
		e.preventDefault();

		if($("#page3 > ul > li").hasClass("on")) {
			$(this).parent().removeClass("on");
		}
		else {
			$(this).parent().addClass("on");
		}
	});

	//footer
	 var swiper = new Swiper("#footer .f_slide .mySwiper", {
		loop: true,
		slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
		   delay: 0,
		},
   		speed: 3000,
      });
	
});