
// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}


$('#subscribe').click(function(){
  var x = $('#emailField');
  if (this.checked){
  	console.log("checked");
    x.css.('display','block');
  }
  else{
     x.css.('display','none');
  }
});

// $('#subscribe').click(function(){
//   $('#emailField').toggle('slow');
// });
