// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };