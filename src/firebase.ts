// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_q_P16uOMxqcT9u1F2j-o72MsJszbbSw",
  authDomain: "lms-login-3fa3b.firebaseapp.com",
  projectId: "lms-login-3fa3b",
  storageBucket: "lms-login-3fa3b.firebasestorage.app",
  messagingSenderId: "605972172498",
  appId: "1:605972172498:web:843d5139c7ffaa6c30670b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export auth to use in other parts of the app
export { auth };
