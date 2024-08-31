import React from "react";
import Logo from "../Images/logo.png";
import Type from "../Images/1.png";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <a href="/">
              <span className="logo-img">
                <img src={Logo} height={60} alt="logo" />
              </span>
              <span className="logo-img translate">
                <img src={Type} height={60} alt="logo" />
              </span>
            </a>
          </div>
          <div className="header-button">
            <a href="#form" target="_blank" rel="noreferrer">
              <button type="button" className="btn btn-dark">
                Create your page
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
