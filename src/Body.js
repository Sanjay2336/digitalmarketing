import React from 'react';
import './Body.css'
import PPC from './Assets/Images/ppc.png'
import WD from './Assets/Images/webdev.png'
import SMM from './Assets/Images/SMM.png'
import SB from './Assets/Images/SB.png'

const Body = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>From strategy to execution, Services we excel in</h2>
        <div className="service">
        <div className="service-content">
          <h3>Web Development</h3>
          <p>Web development refers to the process of creating and maintaining websites and web applications for the internet. It encompasses a wide range of tasks, including web design, programming, content creation, server-side scripting, client-side scripting, and database management. The primary goal of web development is to build functional and visually appealing websites that are accessible and responsive across various devices and web browsers.</p>
          </div>
          <div className="service-image">
        <img src= {WD} alt="wd" />
        </div>
        </div>

        <div className="service">
        <div className="service-content">
          <h3>Pay-Per-Click Advertising (PPC)</h3>
          <p>pay-per-click (PPC) campaigns involves crafting compelling and concise ad copy that drives clicks, engagement, and conversions . This content is typically paid for by advertisers, who bid on keywords that are relevant to their target audience.</p>
        </div>
        <div className="service-image">
        <img src= {PPC} alt="ppc" />
        </div>
        </div>
        
        <div className="service">
        <div className="service-content">
          <h3>Social Media Marketing</h3>
          <p>We understand that social media is not just a platform; it's a powerful tool to connect, engage, and build relationships with your audience. Our skilled social media marketing team is passionate about creating data-driven strategies that drive brand awareness, foster meaningful interactions, and generate measurable results.</p>
        </div>
        <div className="service-image">
        <img src= {SMM} alt="smm" />
        </div>
        </div>

        <div className="service">
        <div className="service-content">
          <h3>Strategic Branding</h3>
          <p>Your brand is more than just a logo or a tagline – it's the essence of your business, the promise you make to your customers, and the emotional connection that drives loyalty. we specialize in strategic branding that goes beyond aesthetics, helping you define your brand's purpose, values, and voice.</p>
        </div>
        <div className="service-image">
        <img src= {SB} alt="sb" />
        </div>
        </div>
      </div>
    </section>
  );
}

export default Body;