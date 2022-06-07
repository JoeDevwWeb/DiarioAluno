
// Inicialização

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAy95ksls8xafdJumx4cAbbYF8ly-LGs-o",
  authDomain: "diarioaluno-e6c41.firebaseapp.com",
  databaseURL: "https://diarioaluno-e6c41-default-rtdb.firebaseio.com",
  projectId: "diarioaluno-e6c41",
  storageBucket: "diarioaluno-e6c41.appspot.com",
  messagingSenderId: "843870025665",
  appId: "1:843870025665:web:b78bcd13657d1ca4d7a140",
  measurementId: "G-7YN240WTPZ"

};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Autenticação Login