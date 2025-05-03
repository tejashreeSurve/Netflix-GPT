// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR_lyue3_eger91agNl0xK-oVtDlFjeGQ",
  authDomain: "netflixgpt-55fc9.firebaseapp.com",
  projectId: "netflixgpt-55fc9",
  storageBucket: "netflixgpt-55fc9.firebasestorage.app",
  messagingSenderId: "707784033274",
  appId: "1:707784033274:web:26ec731db9fee7e2a79a43",
  measurementId: "G-R0YQGVE08F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
