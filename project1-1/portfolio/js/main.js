window.addEventListener("load", function(){
	let isMobile=false;
	
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
	 	isMobile=true;
	}

	let header=document.getElementById("header");
	let video= document.getElementById("my_video");
	let videoList=["header_video1.mp4", "header_video2.mp4", "header_video3.mp4"];
	let controlNumLi=[1,2,3];
	let w=window.innerWidth; 
	video.muted= true;
	video.play();

	let control=header.children[4];
	let controlNum=control.firstElementChild.children[0];
	let videoN=0;
	let control_bar=control.firstElementChild.children[1];
	let barfill=control_bar.firstElementChild;

	barfill.classList.add("on");
	video.addEventListener("ended", function(){
		// const path=video.getAttribute("src");
		if(videoN < 2) {
			videoN++;
		}
		else {
			videoN=0;
		}
		video.setAttribute("src", "images/"+videoList[videoN]);
		video.pause();
		setTimeout(function(){
			video.play();
		}, 100);
		// console.log(video.setAttribute);
		controlNum.innerText="0"+controlNumLi[videoN];
		
		barfill.classList.remove("on");
		setTimeout(function(){
			barfill.classList.add("on");
		},100);

	});
		
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
		video.currentTime=0;
		video.pause();
		setTimeout(function(){
			video.play();
		}, 150);
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
		video.currentTime=0;
		video.play();
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
		if(e.currentTarget.classList.contains("pause")) { // 움직일 때
			e.currentTarget.removeAttribute("class");
			e.currentTarget.classList.add("play");
			video.pause();
		} else { // 멈춰있을 때
			e.currentTarget.removeAttribute("class");
			e.currentTarget.classList.add("pause");
			video.play();
		}
	});

	//scroll
	let headerTop=header.firstElementChild;
	let h;
	let scrollFlag= false;
	let winHalf;
	let pageN=0;
	let darkN=0;
	let section=document.getElementsByTagName("section");
	let download=header.children[5];
	let arrow= download.lastElementChild;
	let page1=document.getElementById("page1");
	let page2=document.getElementById("page2");
	let page3=document.getElementById("page3");
	let page4=document.getElementById("page4");
	let menu=document.getElementById("menu");
	let mobile_menu=menu.firstElementChild;
	let menuLi=mobile_menu.firstElementChild.children;

	window.addEventListener("resize", function(){
		winHalf=window.innerHeight/2;

		let copyright=mobile_menu.lastElementChild;
		h=window.innerHeight;
		if(isMobile && (w > h)){
			copyright.style.display="none";
		} else{
			copyright.style.display="block";
		}
	});
	
	var eventList=document.createEvent("UIEvent");
	eventList.initEvent("resize");
	window.dispatchEvent(eventList);
	
	window.addEventListener("scroll", function(){
		h=window.pageYOffset;
		
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
		
		if (h <= page1.offsetTop-1) {
			darkN=0;
		}
		else if (h <= page2.offsetTop-1) {
			darkN=1;
		}
		else if (h <= page3.offsetTop-1) {
			darkN=2;
		}
		else if (h <= page4.offsetTop-1) {
			darkN=3;
			// console.log(h, document.body.offsetHeight - window.innerHeight);
			if(h == (document.body.offsetHeight - window.innerHeight)){
				darkN=4;
			}
		}
		
		for(var j=0; j<gnbLi.length; j++) {
			if(j== darkN) {
				gnbLi[j].classList.add("on");	
			} else {
				gnbLi[j].classList.remove("on");	
			}
			if(j== pageN) {
				menuLi[j].classList.add("on");	
			} else {
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
				scrollFlag=true;
			} 
		}
	});

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
			gsap.to(window, {scrollTo: targetY, duration: 0.5});
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

	var eventList=document.createEvent("UIEvent");
	eventList.initEvent("scroll");
	window.dispatchEvent(eventList);

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
	
	project[0].classList.add("on");

	for(var i=0; i<project.length; i++) {
		let label=project[i].firstElementChild.lastElementChild;
		let golink=project[i].children[3].children[2].lastElementChild;
		
		golink.addEventListener("click", function(e){
			e.preventDefault();
		});

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
