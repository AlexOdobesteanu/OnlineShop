import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function menuAdmin() {
  function Logout() {
    localStorage.clear();
    window.location.href = "/Login";
  }
  return (
    <div>
      <br></br>
      <br></br>
      <h2>
        Welcome, <span>admin</span>
      </h2>
      <ul className="menus">
        <Link to="/gestionare">
          <br></br>
          <br></br>
          <li>Gestionare conturi</li>
        </Link>
      </ul>
      <button className="button1" onClick={Logout}>
        Logout
      </button>
    </div>
  );
}

export default menuAdmin;
