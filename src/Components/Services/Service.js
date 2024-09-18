import React from 'react';
import './Service.css';
import courier_service from '../Image/Courier Services.jpg'
import air_service from '../Image/air service 1.jpg'
import road_freight from '../Image/road_freight.jpg'
const Service = () => {
    const steps = [
        {
          id: 1,
          title: " Courier Services",
          description: "Swift and dependable delivery for documents and small parcels. We ensure safe, on-time delivery to your doorstep and facilitate direct accounts with top international courier partners like DHL, UPS, FedEx, and Aramex.",
          imageUrl: courier_service, // Update this path as needed
        },
        {
          id: 2,
          title: "Air Freight ",
          description: "Ideal for larger shipments, our sea freight solutions are cost-effective, with full tracking and handling. When urgency is key, our air freight services provide fast and efficient transportation of goods, regardless of distance     ",
          imageUrl: air_service,
        },
        {
          id: 3,
          title: "Road Freight",
          description: "We provide dependable and cost-effective road freight services that ensure your goods reach their destination on time. Our extensive network and modern fleet guarantee safe and efficient transport across all routes.",
          imageUrl: road_freight,
        },
      ];

  return (
    <div className="logistics-container">
      <h1 className="logistics-title">Our Services</h1>
      <div className="logistics-steps">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-number">{step.id}</div>
            <img src={step.imageUrl} alt={`Step ${step.id}`} className="step-image" />
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
