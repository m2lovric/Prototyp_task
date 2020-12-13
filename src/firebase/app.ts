import firebase from "../../node_modules/firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDaTY1xW5DtOW2HgVTguhbT89neAwR2008",
  authDomain: "prototyp-todo.firebaseapp.com",
  databaseURL: "https://prototyp-todo.firebaseio.com",
  projectId: "prototyp-todo",
  storageBucket: "prototyp-todo.appspot.com",
  messagingSenderId: "983772207364",
  appId: "1:983772207364:web:42b494e7f03354e1811851",
  measurementId: "G-HWEJSDRLPX"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();