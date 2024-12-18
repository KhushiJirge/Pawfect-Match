// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { processColor } from "react-native";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pet-adopt-4a20f.firebaseapp.com",
  projectId: "pet-adopt-4a20f",
  storageBucket: "pet-adopt-4a20f.firebasestorage.app",
  messagingSenderId: "1027576711506",
  appId: "1:1027576711506:web:d253937a3c7cc11e3f928b",
  measurementId: "G-SN8MMQ2X0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);
// const analytics = getAnalytics(app);