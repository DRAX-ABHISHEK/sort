import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = async (username, password) => {
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    setAuth(response.data.token);
    localStorage.setItem("token", response.data.token);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
