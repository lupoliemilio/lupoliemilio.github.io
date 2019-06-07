

//-------------------GALLERY-----------------
var bigPhotos = ["wallpaper1", "wallpaper2"];
var nyFoto;
var bigImg = document.querySelector(".bigpicture");
var index=0;

document.addEventListener("keydown", function(e){ // Listens to a key being pressed / Secret function for an event
		if(e.key==="ArrowLeft"){ // If the event key "ArrowLeft" get pressed, it goes back
			prev();
		}else if(e.key ==="ArrowRight"){	// If the event key "ArrowRight" get pressed, it goes next
		next();
}});

	document.querySelector("#next").addEventListener("click", skift);
    document.querySelector("#prev").addEventListener("click", skift);
    
	function skift(e){
        console.log("Next");
	if(e.target.getAttribute("id") === "prev"){
		if(index > 0){
		index--;	
		}else{
			index = bigPhotos.length-1;
		}
	   	
	   }else{
		   if(index < bigPhotos.length-1){
			  index++;
			   
			  }else{
				  index = 0;
			  }
		   
	   }
		nyFoto = "images/" + bigPhotos[index] + ".jpg";
		bigImg.setAttribute("src", nyFoto);
	
	}
//----------------------------------------------
//-----------------SHOW/HIDE---------------------
var extra = document.querySelector("#moreButton");
var tekst = document.querySelector("#moreInfo");	



$(function(){
	$("#moreButton").click(function(){
		$('#moreInfo').animate({height: "toggle", opacity: "toggle"}, 1000);
		if($("#moreInfo").is(':visible')){
			$('html, body').animate({
				scrollTop: $("#moreButton").offset().top
			}, 1000);
		}

	});
});

//-----------------------------------------------
//-----------------FORM VALIDATION----------------



//------------------------------------------------






































