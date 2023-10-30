import React from 'react';
import './AboutUs.css';
import OurPrinciples from './OurPrinciples';
import OurStandards from './OurStandards';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">About Us</li>
        </ol>
      </nav>
      <h2>ABOUT US</h2>
      <div className="col-md-12">
        <div className="standard-card">
          <div className="card-body">
            <p className="standard-description">We are one of the fastest growing digital marketing agency which works on a mission to meet all the needs of our clients in every possible way We are a young and energetic team of enthusiastic professionals who believe in innovative strategies and out-of-the-box solutions. We believe in leading this digital marketing world with our endless desires and addiction to the work. We strive to offer digital planning, strategizing, and creativity, resulting in fully managed and successful online campaigns.</p>
            <p className="standard-description">Our team of experts specializes in SEO, social media marketing, content creation, and more.</p>
          </div>
        </div>
      </div>
      <div className="about-us-container">
        <h2>OUR PRINCIPLES</h2>
      <OurPrinciples /> {/* Include the OurPrinciples component here */}
      <h2>OUR STANDARDS</h2>
      <OurStandards />
    </div>
      {/* Add more content about your company */}
    </div>
  );
}

export default AboutUs;
