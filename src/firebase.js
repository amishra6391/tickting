import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBclH7GSkS1JNWORW0yyYJcc9RirceAPBI",
  authDomain: "submit-data-239c3.firebaseapp.com",
  databaseURL: "https://submit-data-239c3-default-rtdb.firebaseio.com",
  projectId: "submit-data-239c3",
  storageBucket: "submit-data-239c3.appspot.com",
  messagingSenderId: "908599133440",
  appId: "1:908599133440:web:83e968b2b7c4043d925fe5"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
