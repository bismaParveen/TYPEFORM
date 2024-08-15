import React from "react";
import "../Presentation/Presentation.css";
import Logo from "../Images/Logo.webp";

function Presentation() {
  return (
    <div className="presentation">
      <div className="heading">
        <h2>
          "The conversion rate of the typeform is at 10.6%. For the pace at
          which I executed this, it beats any smart landing page you could
          make."
        </h2>
      </div>
      <div className="img">
        <img src={Logo} alt="Logo.webp" />
        <h3>Florent Schmahl</h3>
        <p>Digital Marketer @ Shoelace</p>
      </div>
    </div>
  );
}

export default Presentation;
