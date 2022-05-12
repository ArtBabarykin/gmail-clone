import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYmR_hFkc58iyK9YEHWOUW8d-BEaZWJA0",
  authDomain: "clone-76ba6.firebaseapp.com",
  projectId: "clone-76ba6",
  storageBucket: "clone-76ba6.appspot.com",
  messagingSenderId: "525564748793",
  appId: "1:525564748793:web:1d27030fa7c94275cb1328",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
