import firebase from "firebase/app";
import "firebase/auth";

var form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert("ok");

    // impede o envio do form
    e.preventDefault();
});

function signInWithEmailPassword() {
    // var email = "test@example.com";
    // var password = "hunter2";

    var password = document.getElementById('campo');
    var email = document.grtElementyById('email');

    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    // [END auth_signin_password]
  }
