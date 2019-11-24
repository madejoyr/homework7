// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");

// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}

$('#useBilling').click(function(){
	var home = $('#home');
	var billing = $('#billing');

	if (this.checked){
		home.attr('disabled','disabled');
		home.val($(billing).val());}
	else {
		home.val("");
		home.removeAttr('disabled');
	
	}
})