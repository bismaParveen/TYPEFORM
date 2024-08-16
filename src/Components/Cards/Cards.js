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

      <div class="rows-container">
        <div class="rows">
          <div class="row1">
            <h3>Basic</h3>
            <p>Create interactive forms that connect to your workflow</p>
            <h1 class="card-title">
              25 USD
              <small class="text-muted">/mo</small>
            </h1>

            <p className="text-green">Save 58 USD /yr</p>
            <a href="/" className="button">
              <button type="button" className="btn btn-dark">
                Get Basic
              </button>
            </a>
            <hr />
            <span><i class="fa-solid fa-check"></i>
            <li>100 responses/mo included</li>
            </span>
            <hr />
            <i class="fa-solid fa-check"></i>
            <span>1 user</span>
            <hr />
            <i class="fa-solid fa-check"></i>
            <span>Unlimited typeforms</span>
            <hr />
            <i class="fa-solid fa-check"></i>
            <span>Unlimited questions</span>
          </div>
        </div>
        <div class="rows">
          <div class="row2">
            <h3>Plus</h3>
            <p>Make your forms more beautiful and on-brand</p>
            <h1 class="card-title pricing-card-title">
              25 USD
              <small class="text-muted fw-light">/mo</small>
            </h1>

            <p>Save 58 USD /yr</p>
            <a href="/" className="button">
              <button type="button" className="btn btn-dark">
                Get Basic
              </button>
            </a>
            <hr />
            <i class="fa-solid fa-check"></i>
            <li>100 responses/mo included</li>
            <hr />
            <i class="fa-solid fa-check"></i>
            <li>1 user</li>
            <hr />
            <i class="fa-solid fa-check"></i>
            <li>Unlimited typeforms</li>
            <hr />
            <i class="fa-solid fa-check"></i>
            <li>Unlimited questions</li>
          </div>
        </div>
        <div class="rows">
          <div class="row3">
            <h3>Basic</h3>
            <p>Create interactive forms that connect to your workflow</p>
            <h1 class="card-title pricing-card-title">
              25 USD
              <small class="text-muted fw-light">/mo</small>
            </h1>

            <p>Save 58 USD /yr</p>
            <a href="/" className="button">
              <button type="button" className="btn btn-dark">
                Get Basic
              </button>
            </a>
            <hr />
            <i class="fa-solid fa-check"></i>
            <li>100 responses/mo included</li>
            <i class="fa-solid fa-check"></i>
            <li>1 user</li>
            <i class="fa-solid fa-check"></i>
            <li>Unlimited typeforms</li>
            <i class="fa-solid fa-check"></i>
            <li>Unlimited questions</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
