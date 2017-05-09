document.addEventListener("deviceready", onDeviceReady, false);
window.addEventListener("load", function(event) {
	//inicializar firebase
	alert("onload");
	iniciarFireBase();
	checkloginInicio();
});

$("#loginGoogle").click(function() {
  lGoogle();
});
$("#loginFacebook").click(function() {
  lFacebook();
});
$("#guardarNota").click(function() {
  gNota();
});






