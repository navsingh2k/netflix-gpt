// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxF83I2QGRhrFN3hZvwPxjUHNIVsCsbrk",
  authDomain: "netflixgpt-1b3f0.firebaseapp.com",
  projectId: "netflixgpt-1b3f0",
  storageBucket: "netflixgpt-1b3f0.appspot.com",
  messagingSenderId: "449197648806",
  appId: "1:449197648806:web:fd5be14df4010c55f53d67",
  measurementId: "G-88GPPDKH7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();