import React from 'react'
import "../Home/Home.css"
import Hero from "../Images/Hero1.webp"

function Home() {
  return (
   <div className="home-container">
    <div className="heading">
        <h3>Landing Page Builder</h3>
        <h1>Easily create a no-code landing page using a form</h1>
        <p>Turn your form into an engaging landing page. Stay on-brand, collect data, and automate workflows—all with no need to code.</p>
        <a href="/" className="button">
        <button type="button" className="btn btn-dark">
          Create your page
        </button>
        </a>
    </div>
    <div className="home-img">
        <img src={Hero} width={900} alt="" />
    </div>
   </div>
  )
}

export default Home
