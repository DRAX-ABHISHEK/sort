import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/Routes"; // Adjusted import

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
