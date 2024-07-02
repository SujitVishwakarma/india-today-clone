// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs_tzGsawRtKSqIOI7NLuvk4Iq0Mpv4DY",
  authDomain: "login-india-today.firebaseapp.com",
  projectId: "login-india-today",
  storageBucket: "login-india-today.appspot.com",
  messagingSenderId: "783715544461",
  appId: "1:783715544461:web:485f27ccec473dd05d21c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);