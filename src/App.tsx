import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
import { initializeApp } from 'firebase/app'; 

// Import components
import LoginForm from './login';
import RegisterForm from './register';
import Dashboard from './dashboard'; 

// Firebase Configuration
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
const auth = getAuth(app);

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null); // Track authenticated user
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <LoginForm />} />
          <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <RegisterForm />} />
          
          {/* Protected Route */}
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          
          {/* Redirect to login if no match */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
