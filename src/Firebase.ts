// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd_UkNHbJjNUlKnHcYezmreSj7jRcg1Z8",
  authDomain: "larivedor-a52fc.firebaseapp.com",
  projectId: "larivedor-a52fc",
  storageBucket: "larivedor-a52fc.appspot.com",
  messagingSenderId: "429129138165",
  appId: "1:429129138165:web:117cfa17969f0f96152abc",
  measurementId: "G-P6NFM3J8D2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
