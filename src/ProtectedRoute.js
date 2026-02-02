// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('authToken');
  // If token exists, render the child component; otherwise redirect to login
  return token ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
