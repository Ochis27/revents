// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-2024-c8709.firebaseapp.com",
  projectId: "revents-2024-c8709",
  storageBucket: "revents-2024-c8709.appspot.com",
  messagingSenderId: "983113686164",
  appId: "1:983113686164:web:7d21b2eee53ba45f0da881",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
