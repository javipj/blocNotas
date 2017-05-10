Array.prototype.last = function() {return this[this.length-1];}



function onDeviceReady() {

	/*app iniciada correctamente*/
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


function signup(){


		var email=document.getElementById("email").value;
		var password=document.getElementById("password").value;

		var usuario=firebase.auth().createUserWithEmailAndPassword(email, password)

		 .then(function(firebaseUser) {
			//usuario registrado correctamente
			//assignado customid equivalente al de firebase en batch.com para no tener dobles identidades		


			window.location.href = "listarNotas.html";
		   })

		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  alert(errorMessage);
		});



}

function signin(){

		var user=document.getElementById("email").value;
		var pass=document.getElementById("password").value;


		firebase.auth().signInWithEmailAndPassword(user, pass)

		 .then(function(firebaseUser) {
			alert("login correcto");
			window.location.href = "listarNotas.html";
		
		   })
		    .catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  if (errorCode === 'auth/wrong-password') {
		    alert('Wrong password.');
		  } else {
		    alert(errorMessage);
		  }
		  console.log(error);
		});



}




function checkloginInicio(){

var user = firebase.auth().currentUser;

if (user) {
	window.location.href = "listarNotas.html";
}



}




