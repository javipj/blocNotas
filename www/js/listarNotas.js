Array.prototype.last = function() {return this[this.length-1];}



function onDeviceReady() {

	/*app iniciada correctamente*/

	iniciarFireBase();
	checklogin();


}


function gNota(){

	//guarda nueva nota
	var texto=$("#nuevaNota").text();
	var user = firebase.auth().currentUser;

	firebase.database().ref(user.uid).push({
				    texto: texto,
				    fecha : "xx/xx/xxxx"
				  });

	lNota();

}

function lNota(){
	//lista notas del usuario
	var user = firebase.auth().currentUser;
	var notas = firebase.database().ref(user.uid);
	var str="";

	notas.once("value")
		.then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {

				var key = childSnapshot.key;//contiene el id del documento
				// acceso a los atributos del documento
				var childData = childSnapshot.val();
				//console.log(key+childData.image);
				
				
				//childData.fecha

				str+='<div class="verde notasguardadas" id="'+key+'" contentEditable="false">'+childData.texto+'</div>';

				$("#contenedornotasguardadas").html(str);

				$(".notasguardadas").on( "click", function() {
				  console.log( $( this ).attr("id") );
				});

		  	});
		});



}


function iniciarFireBase(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5EB_-C3eBC7y3h2uQFyTOO4Crmwrx4o4",
    authDomain: "blocnotas-941b6.firebaseapp.com",
    databaseURL: "https://blocnotas-941b6.firebaseio.com",
    projectId: "blocnotas-941b6",
    storageBucket: "blocnotas-941b6.appspot.com",
    messagingSenderId: "22835135050"
  };
  firebase.initializeApp(config);

}


function checklogin(){



	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {

		str="<p><img class=\"fotoUser\" src=\""+user.photoURL+"\"></p><p>Email:"+user.email+"</p><p>Uid:"+user.uid+"</p>"
		$("#datosUsuario").html(str);
		lNota();
		  
	  } else {
	    window.location.replace("index.html");
	  }
	});

}



