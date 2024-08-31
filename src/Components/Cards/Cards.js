import React from "react";
import "../Cards/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="container">
        <div className="cards-content">
      <div className="heading">
        <h2>Choose the plan that works for</h2>
        <h2> you</h2>
        <p>
          or get a taste with our <a href="/"> Free plan</a>
        </p>
      </div>
      <div className="cards">
        <div className="btn-group">
          <button type="button" className="btn btn-grey">
            Monthly
          </button>
          <button type="button" className="btn btn-green active">
            Yearly <span>Save 16%</span>
          </button>
        </div>
      </div>

      <div className="rows">
        <div className="container">
        <div className="rows-content">
          <div className="row">
            <h3>Basic</h3>
            <p>Create interactive forms that connect to your workflow</p>
            <h1 className="card-title">
              25 USD
              <small className="text-muted">/mo</small>
            </h1>

            <p className="text-green">Save 58 USD /yr</p>
            <a href="/" className="button">
              <button type="button" className="btn btn-dark">
                Get Basic
              </button>
            </a>
            <hr />
            <li>
            <i className="fa-solid fa-check">
            </i>

            100 responses/mo included</li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            1 user</li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            Unlimited typeforms</li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            Unlimited questions</li>
          </div>
        {/* </div> */}
        {/* <div className="rows-content"> */}
          <div className="row">
            <h3>Plus</h3>
            <p>Make your forms more beautiful and on-brand</p>
            <h1 className="card-title pricing-card-title">
            50 USD

              <small className="text-muted fw-light">/mo</small>
            </h1>

            <p className="text-green">Save 118 USD /yr</p>
            <a href="/" className="button">
              <button type="button" className="btn btn-dark">
                Get Plus
              </button>
            </a>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            1,000 responses/mo included</li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            3 users</li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            Everything in <strong className="text-green"> Basic </strong></li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
           Remove Typeform branding</li>
           <hr />
           <li>
            <i className="fa-solid fa-check"></i>
            Custom subdomain</li>
          </div>
        {/* </div> */}
        {/* <div className="rows-content"> */}
          <div className="row">
            <h3>Business</h3>
            <p>Analyze performance and do more with your data</p>
            <h1 className="card-title pricing-card-title">
            83 USD
              <small className="text-muted fw-light">/mo</small>
            </h1>

            <p className="text-green">Save 198 USD /yr</p>
            <a href="/" className="button">
              <button type="button" className="btn btn-dark">
                Get Business
              </button>
            </a>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            10,000 responses/mo included</li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            5 users</li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            Everything in <strong className="text-green"> Plus </strong></li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            Drop-off rates</li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            Conversion tracking</li>
            <hr />
            <li>
            <i className="fa-solid fa-check"></i>
            Priority support and live chat</li>
          </div>
          </div>
        </div>
      </div>
      <div className="landing-page">
        <h2>Ready to launch your landing page?</h2>
      </div>
      <a href="/" className="button">
              <button type="button" className="btn btn-dark">
                Get Started - it's free
              </button>
            </a>
            </div>
            </div>
    </div>
  );
}

export default Cards;
