Array.prototype.last = function() {return this[this.length-1];}



function onDeviceReady() {

	/*app iniciada correctamente*/

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
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}

function lFacebook(){
	
	var provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithRedirect(provider);
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




