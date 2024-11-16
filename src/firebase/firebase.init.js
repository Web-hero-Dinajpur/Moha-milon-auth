// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQhf0lJa70mtQp2wlSmQkD-0Unx42asW8",
  authDomain: "moha-mollon-auth.firebaseapp.com",
  projectId: "moha-mollon-auth",
  storageBucket: "moha-mollon-auth.firebasestorage.app",
  messagingSenderId: "277978618037",
  appId: "1:277978618037:web:e45b0422cb55e23e5b06fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);