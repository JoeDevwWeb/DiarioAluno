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
  
  
  // Autenticação Cadrastar
  
  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user){
  //      singUp.reset();
       
  //      window.location.href = "../index.html";
       
  //   }else{
  //     alert(error);
  //   }
  // });
  
  const singUp = document.getElementById('formulario');
  
  singUp.onsubmit = event => {
 
   const email = singUp.querySelector('[name=email]').value; 
   const senha = singUp.querySelector('[name=password]').value;

  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(() => {
      alert("Usuario criado");
    }).catch((error) => {
      console.log(error);
    });

    event.preventDefault()
 };



//  Logar

const singIn = document.getElementById('formulario-Entrar');

singIn.onsubmit = event => {
 
  const email = singIn.querySelector('[name=email]').value; 
  const senha = singIn.querySelector('[name=password]').value;

  firebase.auth().singInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "../index.html";
    })
    .catch((error) => {
      if (error.code == 'auth/wrong-password' || error.code == "auth/user-not-found"){
        alert('E-mail ou senha inválidos');
        return;
      }
      alert('Nao foi possivel efetuar')
    })

   event.preventDefault()
};
