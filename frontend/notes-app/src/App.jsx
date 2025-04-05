import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import SignUp from './pages/SignUp/signup';

const App = () => {
  // Check for a token (or any indicator of a signed-in user)
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        {/* Redirect root to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Dashboard route is accessible only if token exists; otherwise, redirect to /login */}
        <Route
          path="/dashboard"
          element={token ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
