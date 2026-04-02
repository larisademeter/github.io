import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJkNtiqJv5MXUe1XNPJf4lBI3KSl9ns0w",
  authDomain: "proiect-de-diploma-larisa.firebaseapp.com",
  projectId: "proiect-de-diploma-larisa",
  storageBucket: "proiect-de-diploma-larisa.firebasestorage.app",
  messagingSenderId: "1080817521080",
  appId: "1:1080817521080:web:329b2b604d2cd4056bbf4d",
  measurementId: "G-F0HM8NZCJ8"
};

// Initializăm Firebase și baza de date
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
