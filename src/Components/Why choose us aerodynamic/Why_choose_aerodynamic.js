import React from 'react'
import './Why_choose_aerodynamic.css';
const services = [
  {
    name: 'Reliability and Timeliness',
    icon: '⌚', // Replace with actual icons or images
    description: 'Consistently meeting delivery deadlines to ensure your goods arrive on time, every time.',
  },
  {
    name: 'Comprehensive Services',
    icon: '🚚', // Replace with actual icons or images
    description: 'From transportation and warehousing to inventory management and supply chain solutions, we tailor our services to meet your specific needs.',
  },
  {
    name: 'Advanced Technology',
    icon: '🤖', // Replace with actual icons or images
    description: 'Utilizing cutting-edge technology for real-time shipment tracking and management.',
  },
  {
    name: 'Cost-Effective Solutions',
    icon: '💰', // Replace with actual icons or images
    description: 'Competitive pricing and efficient strategies to minimize costs without compromising quality.',
  },
  {
    name: 'Expertise and Experience',
    icon: '👷‍♂️', // Replace with actual icons or images
    description: 'Years of industry experience handling complex logistics challenges smoothly.',
  },
  {
    name: 'Customer-Centric Approach',
    icon: '📦', // Replace with actual icons or images
    description: 'Personalized service and responsive support, dedicated to understanding and meeting your unique requirements.',
  },
  {
    name: 'Global Reach',
    icon: '✈️', // Replace with actual icons or images
    description: 'An extensive network for seamless international transportation and delivery.',
  },
  
  {
    name: 'Sustainability Initiatives',
    icon: '🚚', // Replace with actual icons or images
    description: 'Commitment to environmentally responsible practices with green logistics solutions.',
  },
];

const Why_choose_aerodynamic = () => {
  
  return (
  <section className="services-section">
    <h2 className="services-title">Why Choose Aero Dynamic Shipping?</h2>
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-item" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-name">{service.name}</h3>
          <p className="service-description">
            {service.description} <span className="read-more-arrow"></span>
          </p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Why_choose_aerodynamic
