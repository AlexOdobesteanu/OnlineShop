import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function menuClient() {
  function Logout() {
    localStorage.clear();
    window.location.href = "/Login";
  }
  return (
    <div>
      <br></br>
      <br></br>
      <h2>
        Welcome, <span>client</span>
      </h2>
      <ul className="menus">
        <Link to="/edit">
          <br></br>
          <br></br>
          <li>Editare cont</li>
        </Link>
      </ul>
      <button className="button1" onClick={Logout}>
        Logout
      </button>
    </div>
  );
}

export default menuClient;
