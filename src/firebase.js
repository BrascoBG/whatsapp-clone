import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAq08hMhgjwL58G9u5KQ3hNDl22QkY2GOk",
  authDomain: "whatsapp-clone-42ba1.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-42ba1.firebaseio.com",
  projectId: "whatsapp-clone-42ba1",
  storageBucket: "whatsapp-clone-42ba1.appspot.com",
  messagingSenderId: "683606661299",
  appId: "1:683606661299:web:5ba053143d8833fce5f8c6",
  measurementId: "G-CZJ8BZMESD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
