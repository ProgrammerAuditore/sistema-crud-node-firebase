// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
//import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn4XllRHnJEjC7hC-F_ykZuOCGm2FmAcI",
  authDomain: "crud-sistema-loggin.firebaseapp.com",
  projectId: "crud-sistema-loggin",
  storageBucket: "crud-sistema-loggin.appspot.com",
  messagingSenderId: "581078388223",
  appId: "1:581078388223:web:9e9bbae5da5d35c89fabca"
};

// Initialize Firebase
document.firebase = initializeApp(firebaseConfig);
document.firestore = getFirestore(document.firebase);
