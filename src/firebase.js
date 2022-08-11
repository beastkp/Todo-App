import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzYFkzMvcYUGAKf0iirwGx31yyf1FqfNA",
  authDomain: "todo-app-35aa4.firebaseapp.com",
  projectId: "todo-app-35aa4",
  storageBucket: "todo-app-35aa4.appspot.com",
  messagingSenderId: "1057345833695",
  appId: "1:1057345833695:web:220125a9cb3a096de2f76a",
  measurementId: "G-V8BVY2JN7P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };