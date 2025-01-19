import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If there's no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children; // Render the protected component (Dashboard)
};

export default PrivateRoute;
