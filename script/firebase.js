(function(){
  // Inicialização
  const firebaseConfig = {
    apiKey: "AIzaSyAAGqIkpR4nVkdoxgsCDpxYFutEJ0O_mOY",
    authDomain: "diariodoaluno-d32c8.firebaseapp.com",
    projectId: "diariodoaluno-d32c8",
    storageBucket: "diariodoaluno-d32c8.appspot.com",
    messagingSenderId: "843419785955",
    appId: "1:843419785955:web:2fb0903f48c83661a5c3d6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const auth = firebase.auth();
  
  
  // Autenticação Login
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user){
       singUp.reset();
       $('#tela').css('display','none');
       
       document.getElementById('deuCerto').innerHTML = 
      'olá, $(user.displayName || user.email)';
       
    }else{
      $('#tela').css('display','block');
    }
  });
  
  const singUp = document.getElementById('formulario');
  
  singUp.onsubmit = event => {
 
   const email = singUp.querySelector('[name=email]').value; 
   const senha = singUp.querySelector('[name=password]').value;

  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(() => {
      alert("Usuario criado")
    }).catch((error) => {
      console.log(error);
    });













  
//    firebase.auth().signInWithEmailAndPassword(auth, email, password)
//      .then((userCredential) => {
//        // Signed in
//        var user = userCredential.user;
//        console.log("ok");
//        // ...
//      })
//      .catch((error) => {
//        var errorCode = error.code;
//        var errorMessage = error.message;
//        console.log("Deu luara");
//      });
//      // [END auth_signin_password]
//      
//      event.preventDefault()
 };

  
})();




// function signUpWithEmailPassword() {
//   var email = "test@example.com";
//   var password = "hunter2";

// firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
// }
