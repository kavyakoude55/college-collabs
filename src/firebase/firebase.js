// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
<<<<<<< HEAD
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlj_ieTHpDcg_YzxesTpqOqyTc6EZgLOI",
  authDomain: "college-collabs-cc135.firebaseapp.com",
  projectId: "college-collabs-cc135",
  storageBucket: "college-collabs-cc135.firebasestorage.app",
  messagingSenderId: "932264807849",
  appId: "1:932264807849:web:394ce3ad35aa84d1ba08b8",
  measurementId: "G-G75YXPPR1X"
};

=======
import { getAuth } from "firebase/auth" ;
import {getFireStore} from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVYdxKWHb8A8P7KqJgyaGgk-1N8p_vsCA",
  authDomain: "college-collab-28555.firebaseapp.com",
  projectId: "college-collab-28555",
  storageBucket: "college-collab-28555.firebasestorage.app",
  messagingSenderId: "759927340557",
  appId: "1:759927340557:web:a320a903c8f1ddcc6a9f44",
  measurementId: "G-W0DYB73KV6"
};
>>>>>>> ce0c2e3 (frontend fully developed)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
<<<<<<< HEAD
const db = getFirestore(app);

export { app, analytics, auth, db };
=======
const db = getFireStore(app);

export {app, analytics, auth , db};
>>>>>>> ce0c2e3 (frontend fully developed)
