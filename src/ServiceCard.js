import React from 'react';
import './ServiceCard.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{service.title}</h5>
            <p className="card-description">{service.description}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default ServiceCard;