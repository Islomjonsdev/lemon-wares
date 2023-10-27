import firebase from "firebase";
import "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkoh1RFcuX3t3zuVe1ZNoX4mvS1XlYyKY",
    authDomain: "lemon-wares-db74c.firebaseapp.com",
    projectId: "lemon-wares-db74c",
    storageBucket: "lemon-wares-db74c.appspot.com",
    messagingSenderId: "17921544254",
    appId: "1:17921544254:web:41c6f6ed87a754a21c816f",
    measurementId: "G-4X7YCK5SEY"
  };

  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth()
  const provider = new firebase.auth.GoogleAuthProvider();
  
export { auth, provider, backend }