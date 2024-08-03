import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { auth, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        {auth ? (
          <li>
            <button onClick={logout}>Logout</button>
            <img src="profile-icon.png" alt="Profile" />
          </li>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
