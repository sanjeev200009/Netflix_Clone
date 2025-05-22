
import React from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Simply return the children without any authentication checks
  return <>{children}</>;
};

export default ProtectedRoute;
