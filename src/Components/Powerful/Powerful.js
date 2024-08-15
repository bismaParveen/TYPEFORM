import React from "react";
import "../Powerful/Powerful.css";
import Zapier from "../Images/zapier.webp";
import Google from "../Images/google.webp";
import Slack from "../Images/slack.webp";
import Analytics from "../Images/analytics.webp";
import Hubspot from "../Images/hubspot.webp";
import Salesforce from "../Images/salesforce.webp";

function Powerful() {
  return (
    <div className="powerful-container">
      <div className="powerful">
        <h2>Typeform integrates with all the powerful apps</h2>
      </div>
      <div className="images">
        <div className="img1">
          <img src={Zapier} alt="zapier" width={70}/>
          <p>Zapier</p>
        </div>
        <div className="img2">
          <img src={Google} alt="google"  width={70}/>
          <p>Google Sheets</p>
        </div>
        <div className="img3">
          <img src={Slack} alt="slack"  width={70}/>
          <p>Slack</p>
        </div>
        <div className="img4">
          <img src={Analytics} alt="analytics"  width={70}/>
          <p>Analytics</p>
        </div>
        <div className="img4">
          <img src={Hubspot} alt="hubspot"  width={70}/>
          <p>Hubspot</p>
        </div>
        <div className="img5">
          <img src={Salesforce} alt="salesforce"  width={70}/>
          <p>Salesforce</p>
        </div>
      </div>
    </div>
  );
}

export default Powerful;
