import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANYWXUViFvd3djJoGb9ImF9dM_l3REKK4",
  authDomain: "fb-messenger-clone-5a32a.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-5a32a.firebaseio.com",
  projectId: "fb-messenger-clone-5a32a",
  storageBucket: "fb-messenger-clone-5a32a.appspot.com",
  messagingSenderId: "8219271232",
  appId: "1:8219271232:web:ff44651c12068847a87fa5",
  measurementId: "G-TPH9ETECL0",
});

const db = firebaseApp.firestore();

export default db;
