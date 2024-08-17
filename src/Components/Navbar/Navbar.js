import React from "react";
import Logo from "../Images/logo.png";
import Type from "../Images/1.png";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="header-logo">
        <a href="/">
          <span className="logo-img">
            <img src={Logo} height={60} alt="logo" />
          </span>
          <span className="logo-img">
            <img src={Type} height={60} alt="logo" />
          </span>
        </a>
      </div>
      <a href="#form" target="_blank" rel="noreferrer" className="button">
        <button type="button" className="btn btn-dark">
          Create your page
        </button>
      </a>
    </header>
  );
}

export default Navbar;
