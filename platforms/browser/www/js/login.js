Array.prototype.last = function() {return this[this.length-1];}



function onDeviceReady() {

	/*app iniciada correctamente*/
	alert("phonegap cargado");

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

	firebase.auth().getRedirectResult().then(function(result) {
	  if (result.credential) {
	    // This gives you a Google Access Token.
	    // You can use it to access the Google API.
	    var token = result.credential.accessToken;
	    // The signed-in user info.
	    var user = result.user;
		alert("logado");
	  }
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
		alert(error.message);
	});

}


function lGoogle(){


	try{
	var provider = new firebase.auth.GoogleAuthProvider();
	}catch(err) {
	    alert(err.message);
	}
	


	firebase.auth().signInWithRedirect(provider).then(function() {
	  firebase.auth().getRedirectResult().then(function(result) {
	    // This gives you a Google Access Token.
	    // You can use it to access the Google API.
	    var token = result.credential.accessToken;
	    // The signed-in user info.
	    var user = result.user;
	    alert("login");
	  }).catch(function(error) {
	    // Handle Errors here.
	    var errorCode = error.code;
	    var errorMessage = error.message;
	    alert("error");
	  });
	});




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
alert("inicio checklogin");
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
		  window.location.replace("listarNotas.html");
	  } else {
	    // No user is signed in.
		alert("nousersigin");
	  }
	});

}




