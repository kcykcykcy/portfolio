$(function(){
	//#gnb
	$("#gnb > ul > li").hover(
		function(){
			$("#header .menu").addClass("active");
		},
		function(){
			$("#header .menu").removeClass("active");
		}
	);
	$("#gnb > ul > li > a").focusin(function(){
		$("#header .menu").addClass("active");
	});
	$("#gnb li:last-child li:last-child a").focusout(function(){
			$("#header .menu").removeClass("active");
	});

	//slider
	var swiper = new Swiper(".mainSwiper", {
		loop: true,
		autoplay: {},
		pagination: {
			el: ".swiper-pagination",
		},
    });
	
	//section
		$(".news_zone li").eq(0).addClass("on");
		
		$(".news_zone li").click(function(e){
			e.preventDefault();

			$(".news_zone li").removeClass("on");
			$(this).addClass("on");
		});
		
		$(".banner li").hover(
			function(){
				$(this).addClass("on");
			},
			function(){
				$(this).removeClass("on");
			}
		);

		$(".banner_slide .content li").eq(0).addClass("on");
		$(".banner_slide .control li").eq(0).addClass("on");
		$(".slide_img li").eq(0).addClass("on");
		
		$(".brochure").hover(
			function(){
			$(this).find(".lang").find("a").addClass("on");
		},
			function(){
			$(this).find(".lang").find("a").removeClass("on");
		});

		$(".brochure .lang a").click(function(e){
			e.preventDefault();
			$(".brochure .lang a").removeClass("on");
			$(this).addClass("on");
		});

		$(".banner_slide .control li").click(function(e){
			e.preventDefault();
			var controlN= $(this).index();

			$(".banner_slide .control li").removeClass("on");
			$(this).addClass("on");
			$(".slide_img li").removeClass("on");
			$(".slide_img li").eq(controlN).addClass("on");
			$(".banner_slide .content li").removeClass("on");
			$(".banner_slide .content li").eq(controlN).addClass("on");
		});
	
	//footer_banner 
	$(function(){
	var familyPos=0;
	var bannerWidth=164;

	$(".prev").click(function(e){
		e.preventDefault();
		rightMoving();
	});
	$(".next").click(function(e){
		e.preventDefault();
		leftMoving();
	});
	function leftMoving(){
		familyPos-=bannerWidth;
		$(".banner_wrapper ul").animate({left:familyPos}, 500, function(){
			$(this).append($(".banner_wrapper ul li:first-child"));
			familyPos+=bannerWidth;
			$(this).css({left:familyPos});
		});
	}
	function rightMoving(){
		$(".banner_wrapper ul").prepend($(".banner_wrapper ul li:last-child"));
		familyPos-=bannerWidth;
		$(".banner_wrapper ul").css({left:familyPos});
		familyPos+=bannerWidth;
		$(".banner_wrapper ul").animate({left:familyPos}, 500);
		}
	});
});
