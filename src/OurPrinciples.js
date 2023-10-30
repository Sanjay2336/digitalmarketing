import React from 'react';
import './OurPrinciples.css'; // Import the CSS file

const OurPrinciples = () => {
  return (
    <div className="container principles-container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="principle-card">
            <div className="card-body">
              <h5 className="principle-title">Who We Are</h5>
              <p className="principle-description">we redefine how users interact with digital applications by making the interfaces visually appealing We research, solve, design, analyze and develop. Our primary aim is not designing for our clients, but designing for their users. We have our own effective design process which makes life easy and pleasurable for the user</p>
            </div>
          </div>
        </div>

        {/* Add more principle cards as needed */}
      </div>
    </div>
  );
};

export default OurPrinciples;
