// OurStandards.js
import React from 'react';
import './OurStandards.css'

const OurStandards = () => {
  return (
    <div className="container standards-container mt-5">
    <div className="row">
      <div className="col-md-12">
        <div className="standard-card">
          <div className="card-body">
            <h5 className="standard-title">Why Choose Us?</h5>
            <p className="standard-description">We are the best platform to bring your product on the top in this digital world. We have all the sources that would make your business come to the next level, and by turning out your website into a profitable online business. Our main work is not only introducing your brand, its products, and services to the market, we also provide online customer support 24/7 to make customers feel promoted and high-powered. We have just One Goal. Delivering outstanding ROI for your Digital Marketing Budget. Come and join us to mark your place in this competitive business world. Call for Free Web Audit & SEO Quote!</p>
          </div>
        </div>
      </div>
      {/* Add more standard cards as needed */}
      <div className="col-md-6">
          <div className="new-card-style-1">
            <div className="card-body">
              <h5 className="new-card-title-1">Our Approach</h5>
              <p className="new-card-description-1">Our approach is built on a foundation of creativity, collaboration, and data-driven insights. We understand that every brand is distinctive, which is why we take the time to understand your business, industry, and target audience. From there, we craft bespoke strategies that seamlessly integrate with your brand's identity, resonating with your audience and driving tangible results.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="new-card-style-2">
            <div className="card-body">
              <h5 className="new-card-title-2">Expertise</h5>
              <p className="new-card-description-2">Our team comprises skilled professionals with diverse backgrounds in digital marketing, design, content creation, and more. With a wealth of experience under our belts, we bring a holistic perspective to every project.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="new-card-style-2">
            <div className="card-body">
              <h5 className="new-card-title-2">Innovation</h5>
              <p className="new-card-description-2">We don't just follow trends; we set them. We're committed to staying ahead of the curve by exploring new technologies, platforms, and strategies that can elevate your brand's digital presence.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="new-card-style-1">
            <div className="card-body">
              <h5 className="new-card-title-1">Transparency</h5>
              <p className="new-card-description-1">Open communication is at the core of our client relationships. We keep you informed every step of the way, ensuring that you're involved in the process and aligned with our strategies. We measure our success by your success. Our focus on data and analytics allows us to continuously refine our strategies for optimal performance and growth.</p>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
};

export default OurStandards;
