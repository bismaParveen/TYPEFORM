import React from "react";
import "../Cards/Cards.css";

function Cards() {
  return (
    <div className="cards-container">
      <div className="heading">
        <h2>Choose the plan that works for</h2>
        <h2> you</h2>
        <p>
          or get a taste with our <a href="/"> Free plan</a>
        </p>
      </div>
      <div className="cards">
        <div class="btn-group">
          <button type="button" className="btn btn-grey">
            Monthly
          </button>
          <button type="button" className="btn btn-green active">
            Yearly <span>Save 16%</span>
          </button>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <h3>Basic</h3>
          <p>Create interactive forms that connect to your workflow</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
