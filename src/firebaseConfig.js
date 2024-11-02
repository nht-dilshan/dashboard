// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBp-ZfFJ3vDGTZFgvHTYHZ4Xlf6TGY1f5M",
  authDomain: "dash-6e2b2.firebaseapp.com",
  projectId: "dash-6e2b2",
  storageBucket: "dash-6e2b2.firebasestorage.app",
  messagingSenderId: "871991038635",
  appId: "1:871991038635:web:f1c56e7a6688abbcda9dee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };


