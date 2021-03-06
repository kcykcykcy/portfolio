window.addEventListener("load", function(){
	let header=document.getElementById("header");
	let video= document.getElementById("my_video");
	let videoList=["header_video1.mp4", "header_video2.mp4", "header_video3.mp4"];
	let controlNumLi=[1,2,3];
	video.muted= true;
	videoDimmed();

	let control=header.children[4];
	let controlNum=control.firstElementChild.children[0];
	let videoN=0;

	function videoDimmed(){
		video.style.display="none";

		setTimeout(function(){
			video.style.display="block";
			video.play();
			gsap.fromTo(video, {opacity: 0}, {opacity: 1, duration: 0.6});
		}, 200);
	}

	video.addEventListener("ended", function(){
		// const path=video.getAttribute("src");
		if(videoN < 2) {
			videoN++;
		}
		else {
			videoN=0;
		}

		setTimeout(function(){
			video.setAttribute("src", "images/"+videoList[videoN]);
			videoDimmed();
		}, 100);
		// console.log(video.setAttribute);
		controlNum.innerText="0"+controlNumLi[videoN];
		
		barfill.classList.remove("on");
		setTimeout(function(){
			barfill.classList.add("on");
		},100);
	});

	//bar_fill
	let control_bar=control.firstElementChild.children[1];
	let barfill=control_bar.firstElementChild;
	barfill.classList.add("on");
	
	let prevnext=header.children[3];
	let prev=prevnext.firstElementChild;
	let next=prevnext.lastElementChild;

	//arrow
	next.addEventListener("click", function(e){
		e.preventDefault();
		
		if(videoN < 2) {
			videoN++;
		}
		else {
			videoN=0;
		}
		video.setAttribute("src", "images/"+videoList[videoN]);
		videoDimmed();
		controlNum.innerText="0"+controlNumLi[videoN];

		barfill.classList.remove("on");
		setTimeout(function(){
			barfill.classList.add("on");
		},100);
	});
	prev.addEventListener("click", function(e){
		e.preventDefault();

		if(videoN > 0) {
			videoN--;
		}
		else {
			videoN= 2;
		}
		video.setAttribute("src", "images/"+videoList[videoN]);
		videoDimmed();
		controlNum.innerText="0"+controlNumLi[videoN];

		barfill.classList.remove("on");
		setTimeout(function(){
			barfill.classList.add("on");
		},100);
	});

	//play,pause
	let playpause=document.getElementById("playpause");
	
	playpause.addEventListener("click", function(e){
		e.preventDefault();
		if(e.currentTarget.classList.contains("pause")) { // ????????? ???
			e.currentTarget.removeAttribute("class");
			e.currentTarget.classList.add("play");
			video.pause();
		} else { // ???????????? ???
			e.currentTarget.removeAttribute("class");
			e.currentTarget.classList.add("pause");
			video.play();
		}
	});

	//scroll
	let headerTop=header.firstElementChild;
	let h;
	let w;
	let scrollFlag= false;
	let winHalf;
	let pageN=0;
	let darkN=0;
	let section=document.getElementsByTagName("section");
	let download=header.children[6];
	let arrow= download.lastElementChild;
	// console.log(arrow);
	let page1=document.getElementById("page1");
	let page2=document.getElementById("page2");
	let page3=document.getElementById("page3");
	let page4=document.getElementById("page4");
	let menu=document.getElementById("menu");
	let mobileMenu=menu.children[0];
	let menuLi=mobileMenu.firstElementChild.children;
	let menuSpan=mobileMenu.lastElementChild;

	window.addEventListener("resize", function(){
		eventResize();		
	});
	
	function eventResize() {
		winHalf=window.innerHeight/2;
		w=window.innerWidth;
		h=window.innerHeight;
	
		if(isMobile) {
			if(w > h) {
				menuSpan.style.display="none";
			} else {
				menuSpan.style.display="inline-block";
			}
		} else {
			menuSpan.removeAttribute("style");
		} 
	}
	eventResize();


	let gnb=document.getElementById("gnb");
	let gnbLi=gnb.firstElementChild.children;
	let targetY=0;
	
	gnbLi[0].classList.add("on");
	
	for(var i=0; i<gnbLi.length; i++) { //0 1 2 3 4
		gnbLi[i].index=i;

		gnbLi[i].addEventListener("click", function(e){
			e.preventDefault();
			var n=e.currentTarget.index;
			
			if(n==0) {
				targetY=0;
			}
			else {
				targetY=section[n-1].offsetTop;
			}
			gsap.to(window, {scrollTo: targetY-50, duration: 0.5});
		});
	}

	menuLi[0].classList.add("on");
	for(i=0; i<gnbLi.length; i++) {
		menuLi[i].index=i;

		menuLi[i].addEventListener("click", function(e){
			e.preventDefault();
			var n=e.currentTarget.index;

			if(n==0) {
				targetY=0;
			}
			else {
				targetY=section[n-1].offsetTop;
			}

			tab.classList.remove("on");
			menu.classList.remove("on");
			body.classList.remove("fixed");
			gsap.to(window, {scrollTo: targetY-50, duration: 0.5, delay: 0.5});
		});
	}

	window.addEventListener("scroll", function(){
		h=window.pageYOffset;
		eventScroll(h);
	});

	function eventScroll(h=0) {
		if (h <= page1.offsetTop-winHalf) {
			pageN=0;
		}
		else if (h <= page2.offsetTop-winHalf) {
			pageN=1;
		}
		else if (h <= page3.offsetTop-winHalf) {
			pageN=2;
		}
		else if (h <= page4.offsetTop-winHalf) {
			pageN=3;
			
			if(h == (document.body.offsetHeight - window.innerHeight)) {
				pageN=4;
			}
		}
		// console.log(pageN);
		
		if (h <= page1.offsetTop-100) {
			darkN=0;
		}
		else if (h <= page2.offsetTop-100) {
			darkN=1;
		}
		else if (h <= page3.offsetTop-100) {
			darkN=2;
		}
		else if (h <= page4.offsetTop-100) {
			darkN=3;

			// console.log(h, document.body.offsetHeight-window.innerHeight);
			if(h >= (document.body.offsetHeight - window.innerHeight - 50)) {
				darkN=4;
			}
		}
		// console.log(darkN);

		for(var j=0; j<gnbLi.length; j++) {
			if(j== darkN) {
				gnbLi[j].classList.add("on");
				menuLi[j].classList.add("on");
			} else {
				gnbLi[j].classList.remove("on");
				menuLi[j].classList.remove("on");
			}
		}

		if(h >= 100) {
			headerTop.classList.add("fixed");
			arrow.classList.add("on");
		}
		else {
			headerTop.classList.remove("fixed");
			arrow.classList.remove("on");
		}

		if(scrollFlag == true) return;
		
		if(pageN == 0) {
			header.classList.add("on");
		}
		else {
			section[pageN-1].classList.add("on");	
			if(pageN == section.length) {
				for (var i=0; i<section.length; i++) {
					section[i].classList.add("on");
				}
				if(pageN== 4) scrollFlag=true;
			} 
		}
	}
	eventScroll();

	//tab 
	let tab=headerTop.children[1];
	let body=document.body

	tab.addEventListener("click", function(e){
		e.preventDefault();
		e.currentTarget.classList.toggle("on");
		menu.classList.toggle("on");
		body.classList.toggle("fixed");
	});


	// page3
	let project=page3.getElementsByClassName("project");
	let project1=document.getElementById("project1");
	let project2=document.getElementById("project2");
	let project1Link=project1.children[3].children[2].children[1];
	let project2Link=project2.children[3].children[2].children[1];	
	
	function portfolioLink() {
		if(isMobile) {
			project1Link.setAttribute("href", "project1/mobile/index.html");
			project2Link.setAttribute("href", "project2/mobile/index.html");
		} else {
			project1Link.setAttribute("href", "project1/index.html");
			project2Link.setAttribute("href", "project2/index.html");
		}
	}
	portfolioLink();

	project[0].classList.add("on");

	for(var i=0; i<project.length; i++) {
		let label=project[i].firstElementChild.lastElementChild;
		
		label.addEventListener("click", function(e){
		 	e.preventDefault();
		
			for(var j=0; j<project.length; j++) {
				project[j].classList.remove("on");
			}
			e.currentTarget.parentElement.parentElement.classList.add("on");
			gsap.to(window, {scrollTo:e.currentTarget.offsetTop-100});
		});	
	}	
});
