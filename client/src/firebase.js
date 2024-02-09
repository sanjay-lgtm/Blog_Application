// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e768a.firebaseapp.com",
  projectId: "mern-blog-e768a",
  storageBucket: "mern-blog-e768a.appspot.com",
  messagingSenderId: "353268543146",
  appId: "1:353268543146:web:f426401ef7cdf62d372ad3",
  measurementId: "G-6R55YS25ET"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);