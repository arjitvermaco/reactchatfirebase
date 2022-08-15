// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALF8ix172KEh2mtxvc0mxO9od-49jgunA",
  authDomain: "chatapptest-3b9fb.firebaseapp.com",
  projectId: "chatapptest-3b9fb",
  storageBucket: "chatapptest-3b9fb.appspot.com",
  messagingSenderId: "425461629763",
  appId: "1:425461629763:web:9043d42894e13502ce25f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)