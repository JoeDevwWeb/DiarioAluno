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
    

  function loading() {
    const div = document.createElement("div");
    div.classList.add("loading");
    const label = document.createElement("label");
    label.innerHTML = "Carregando...";
    div.appendChild(label);
    document.body.appendChild(div);
  }
  
  function loadingOut() {
   const loadings = document.getElementsByClassName("loading");
   if(loadings.length){
     loadings[0].remove();
   }
  }
  
  // Desconectar a conta
function logout() {
  loading();
  firebase.auth().signOut()
 .then(() => {
  loadingOut();
   window.location.href = "./html/login.html";
 }).catch(() => {
   alert("Erro ao fazer logout");
 });
}