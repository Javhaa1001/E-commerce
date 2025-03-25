import { Navigate } from "react-router-dom"; 
import React from "react";

const User = ({ user, token }) => {
  if (!user || !token) {
    return <Navigate to="/login" replace />; 
  }

  return (
    <div style={{marginTop:"100px"}}>
      <h2>Хэрэглэгчийн мэдээлэл:</h2>
      <p>Нэр: {user.username}</p>
    </div>
  );
};

export default User;
