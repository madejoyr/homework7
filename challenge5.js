// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }

// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }







var imgs = $("img");
var msg = "Hover over an image below.";

$("img").each(function() {

	$(this).mouseover( function() {
 		$('#image').css("background-image", "url('"+this.src+"')");
 	$	('#image').html(this.alt);

 	})

 	$(this).mouseleave( function() {
 		$('#image').css("background-image", "url('')");
 		$('#image').html(msg);
	})

 	$(this).focus( function() {
 		$('#image').css("background-image", "url('"+this.src+"')");
 		$('#image').html(this.alt);
	})

 	$(this).blur( function() {
 		$('#image').css("background-image", "url('')");
 		$('#image').html(msg);

 })


})


