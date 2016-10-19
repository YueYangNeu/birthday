
window.onload=function(){
	//alert("hello");
var page1=document.getElementById("page1");
var page2=document.getElementById("page2");
var page3=document.getElementById("page3");

var btn=document.getElementById("playBtn");
var audio=document.getElementsByTagName("audio")[0];
audio.addEventListener("ended",function(event){
	btn.setAttribute("class","");
},false);

btn.addEventListener("touchstart",function(event){

if(audio.paused){
		audio.play();
		this.setAttribute("class","play");
	}else{
		audio.pause();
		this.setAttribute("class","");
	}

},false);

page1.addEventListener("touchstart",function(event){
	page2.style.display="block";
	page1.style.display="none";
	page3.style.display="block";
	page3.style.top="100%";
	setTimeout(function(){
		page2.setAttribute("class","page fadeOut");
		page3.setAttribute("class","page fadeIn");
	},5000)
},false)
}
	


