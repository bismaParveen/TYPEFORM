import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="loca">
          <i className="fa-solid fa-location-dot"> </i>
          <span>With love, from Barcelona</span>
        </div>
        <div className="eng">
          <i className="fa-solid fa-earth-americas"></i>

          <span>
            English <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div className="ent">
          <a href="/">Cookie Settings</a>
          <a href="/">Check our Cookie Policy to delete cookies</a>
          <a href="/">Report abuse</a>
        </div>
        <span>&copy; Typeform</span>
      </div>
    </footer>
  );
}

export default Footer;
