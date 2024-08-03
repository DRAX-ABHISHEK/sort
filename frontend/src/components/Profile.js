import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { auth, logout } = useAuth();

  return (
    <div>
      {auth && (
        <div>
          <p>Welcome, user!</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
