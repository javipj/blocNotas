document.addEventListener("deviceready", onDeviceReady, false);
window.addEventListener("load", function(event) {
	//inicializar firebase
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






