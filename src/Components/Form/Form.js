import React from "react";
import "../Form/Form.css";
import Sample from "../Images/product-sample@1x.webp";
import Logo from "../Images/logo.png";
import Type from "../Images/1.png";
import Google from "../Images/google.png";
import Microsoft from "../Images/microsoft.png";

function Form() {
  return (
    <section id="form" className="form">
      {/* <div className="container"> */}
        <div className="form-content">
      <div className="form-pic">
        <h2>Sign up</h2>
        <h2> and come on in</h2>

        <img src={Sample} alt="" />
        <div className="type">&copy; Typeform</div>
      </div>
      <div className="form-text">
        <div className="form-heading">
          <span className="eng">
            <i className="fa-solid fa-earth-americas"></i>
            English <i className="fa-solid fa-angle-down"></i>
          </span>
          <span className="form-button">
            Already have an account?{" "}
            <a href="#form" target="_blank" rel="noreferrer">
              <button type="button" className="form-btn ">
                Log in
              </button>
            </a>
          </span>
        </div>
        <div className="form-logo">
          <a href="/">
            <span className="logo-img">
              <img src={Logo} height={60} alt="logo" />

              <img src={Type} height={60} alt="logo" />
            </span>
          </a>
        </div>
        <p>Get better data with conversational forms, surveys,</p>
        <p> quizzes & more.</p>
        <div className="social-buttons">
          <li>
            <img src={Google} width={28} alt="" />

            <span>Sign up with Google</span>
          </li>
          <br />
          <li>
            <img src={Microsoft} width={28} alt="" />
            <span>Sign up with Microsoft</span>
          </li>
        </div>
        <span className="or">OR</span>
        <div className="forms-button">
          <a href="/">
            <button type="button" className="btn btn-dark">
              Sign up with email
            </button>
          </a>
        </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Form;
