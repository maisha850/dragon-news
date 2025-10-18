// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzisE5rFC7rE9B6xPbYopTIrEn1aJndH8",
  authDomain: "dragon-news-69125.firebaseapp.com",
  projectId: "dragon-news-69125",
  storageBucket: "dragon-news-69125.firebasestorage.app",
  messagingSenderId: "745801409541",
  appId: "1:745801409541:web:89aa543845d934f2d7286c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
