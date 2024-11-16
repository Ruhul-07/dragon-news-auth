// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrGbeoyPgl9pnFG2v2dEPgeFw83qlqN_s",
  authDomain: "dragon-news-9699f.firebaseapp.com",
  projectId: "dragon-news-9699f",
  storageBucket: "dragon-news-9699f.firebasestorage.app",
  messagingSenderId: "279489598321",
  appId: "1:279489598321:web:1f13377df34fd942645cd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;