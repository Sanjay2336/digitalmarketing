import React from 'react';
import ServiceCard from './ServiceCard';
import serviceData from './ServiceData';

const Services = () => {
  return (
    <div className="services-page container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Services</li>
        </ol>
      </nav>
      <h1>Our Services</h1>
      <div className="container">
      <div className="row">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Services;

{/* Add more service cards as needed */}
