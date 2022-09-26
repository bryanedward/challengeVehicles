import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
interface props {
  children: JSX.Element | JSX.Element[];
}

export const RouterPrivate = ({ children }: props) => {
  const { authState } = useContext(AuthContext);
  return authState.isAuthenticated ? (
    <div>{children}</div>
  ) : (
    <Navigate to="/login" />
  );
};
