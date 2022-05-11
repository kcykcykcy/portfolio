$(function(){
	
	//slider
	var n=0;
	$(".slider .slider_group li:nth-child(1)").addClass("active");
	$(".slider .control li:nth-child(1)").addClass("active");
	
	$(".slider .control li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		
		$(".slider .control li").removeClass("active");
		$(this).addClass("active");
		$(".slider .slider_group li").removeClass("active");
		$(".slider .slider_group li").eq(n).addClass("active");
	});
	$(".left").click(function(e){
		e.preventDefault();
		
		if (n > 0) {
			n=n-1;
		}
		else {
			n=2;
		}
		
		$(".slider .control li").removeClass("active");
		$(".slider .control li").eq(n).addClass("active");
		$(".slider .slider_group li").removeClass("active");
		$(".slider .slider_group li").eq(n).addClass("active");
	});
	$(".right").click(function(e){
		e.preventDefault();
		if (n < 2) {
			n=n+1;
		}
		else {
			n=0;
		}
		
		$(".slider .control li").removeClass("active");
		$(".slider .control li").eq(n).addClass("active");
		$(".slider .slider_group li").removeClass("active");
		$(".slider .slider_group li").eq(n).addClass("active");
	});

	//gnb
	$("#gnb > .inner > ul > li").hover(
		function(){
			$("#gnb").addClass("over");
			$(this).children("a").addClass("over");
		},	
		function(){
			$("#gnb").removeClass("over");
			$(this).children("a").removeClass("over");
		}
	);

	$("#gnb > .inner > ul > li").focusin(function(){
		$("#gnb").addClass("over");
		$(this).children("a").addClass("over");
	});
	$("#gnb > .inner > ul > li").focusout(function(){
		$("#gnb").removeClass("over");
		$(this).children("a").removeClass("over");
	});

});