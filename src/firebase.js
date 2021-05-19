import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBPD8KGRXuqfcIvqW0QN8ede54FrtkT8RQ",
  authDomain: "portfolio-999f1.firebaseapp.com",
  projectId: "portfolio-999f1",
  storageBucket: "portfolio-999f1.appspot.com",
  messagingSenderId: "682964714912",
  appId: "1:682964714912:web:6693a8ae97a069e646d0c5",
  measurementId: "G-KS27SDZTNG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const functions = firebaseApp.functions();
export { auth, functions };
export default db;
//export default firebase;
