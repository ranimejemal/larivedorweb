// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd_UkNHbJjNUlKnHcYezmreSj7jRcg1Z8",
  authDomain: "larivedor-a52fc.firebaseapp.com",
  projectId: "larivedor-a52fc",
  storageBucket: "larivedor-a52fc.firebasestorage.app",
  messagingSenderId: "429129138165",
  appId: "1:429129138165:web:117cfa17969f0f96152abc",
  measurementId: "G-P6NFM3J8D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);