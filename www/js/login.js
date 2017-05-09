Array.prototype.last = function() {return this[this.length-1];}

var a="nada";

function onDeviceReady() {

	/*app iniciada correctamente*/
	alert("start");
	//inicializar firebase
	iniciarFireBase();
	checkloginInicio();


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


function lGoogle(){
alert("hola");
	try{
	var provider = new firebase.auth.GoogleAuthProvider();
}catch(err) {
	    alert(err.message);
	}
	alert("hola2");
	
		a=firebase.auth().signInWithRedirect(provider);
	alert(a);
	setTimeout(function(){ alert(a.ra.code); }, 1000);
	setTimeout(function(){ alert(a.ra.message); }, 1000);

}

function lFacebook(){
	
	var provider = new firebase.auth.FacebookAuthProvider();
	try{
		firebase.auth().signInWithRedirect(provider);
	}catch(err) {
	    alert(err.message);
	}
}


function checkloginInicio(){

	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
		  window.location.replace("listarNotas.html");
	  } else {
	    // No user is signed in.
	  }
	});

}




