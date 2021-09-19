// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjcBCp29fxN0HSL00vwGSL8XVTBQIbVYI",
  authDomain: "clone-28b1f.firebaseapp.com",
  projectId: "clone-28b1f",
  storageBucket: "clone-28b1f.appspot.com",
  messagingSenderId: "445867470264",
  appId: "1:445867470264:web:0b6f431a63af8c346fb34d",
  measurementId: "G-N7GLQ4MPVV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
