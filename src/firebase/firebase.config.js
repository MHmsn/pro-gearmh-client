// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBaPCLXAzRF9lRouStXkDwlOhE_Mjk1XM",
  authDomain: "pro-gear-mh.firebaseapp.com",
  projectId: "pro-gear-mh",
  storageBucket: "pro-gear-mh.firebasestorage.app",
  messagingSenderId: "436989246174",
  appId: "1:436989246174:web:8a99679d7c540069b7e04f",
  measurementId: "G-QGB6VC4PRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
