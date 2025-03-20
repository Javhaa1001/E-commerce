import React from "react";
import {Outlet} from 'react-router-dom'

function Posts() {
    return (
      <div style={{ padding: 20 ,  marginTop: "15vh" }}>
        <h2>Blog</h2>
        <Outlet />
      </div>
    );
  }

  export default Posts;