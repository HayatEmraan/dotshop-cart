import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const localToken = localStorage.getItem("token");
  const location = useLocation();
  if (!localToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default Private;
