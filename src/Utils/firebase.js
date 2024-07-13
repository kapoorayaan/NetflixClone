// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyGqVX9nOFIWfxh9DW-ZX6GRwBYfGXXqA",
  authDomain: "netflix-gpt-47798.firebaseapp.com",
  projectId: "netflix-gpt-47798",
  storageBucket: "netflix-gpt-47798.appspot.com",
  messagingSenderId: "146631895286",
  appId: "1:146631895286:web:d3ca73d7355b68a4b324d7",
  measurementId: "G-86LG6NC32N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
