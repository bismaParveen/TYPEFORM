import React from "react";
import "../Project/Project.css";
import Project1 from "../Images/project1.webp";
import Project2 from "../Images/project2.webp";
import Project3 from "../Images/project3.webp";

function Project() {
  return (
    <div className="project-container">
      <div className="project">
        <div className="project-img">
          <img src={Project1} alt="" />
        </div>
        <div className="heading">
          <h3>No Code Website Builder</h3>
          <h1>Pick a template and publish in minutes</h1>
          <p>
            Choose from a variety of templates for lead generation, feedback,
            event registration, and more. Then, once someone fills out your
            form, you can redirect them—be it to your website, socials, or
            elsewhere.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="heading">
          <h3>Lead form Pages</h3>
          <h1>Effortlessly collect lead insights</h1>
          <p>
            Using a typeform as a landing page means you can collect the data
            you need more easily. Generate valuable insights about your
            potential customers and use them to focus your marketing strategies.
          </p>
        </div>
        <div className="project-img">
          <img src={Project2} alt="" />
        </div>
      </div>
      <div className="project">
        <div className="project-img">
          <img src={Project3} alt="" />
        </div>
        <div className="heading">
          <h3>Landing Page Design</h3>
          <h1>Stay on-brand and interactive</h1>
          <p>
            Create a captivating landing page by customizing fonts, colors, and
            buttons. Easily add interactive elements, tweak the layout, and make
            sure everything fits your brand perfectly.
          </p>
        </div>
      </div>
      <a href="/" className="button">
        <button type="button" className="btn btn-dark">
          Create your page
        </button>
      </a>
    </div>
  );
}

export default Project;
