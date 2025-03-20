import { Navigate } from "react-router-dom";
import React from "react";

const Stats = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  <h5 className="mt-[16vh] text-black">HAloo</h5>
  };

export default Stats;
