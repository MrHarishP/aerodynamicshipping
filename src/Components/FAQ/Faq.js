// src/FAQ.js
import React, { useState } from 'react';
import './Faq.css';
import  What_types_of_services_do_you_offer from '../Image/what type of service we offer.jpg'
import  ensure_the_safety from '../Image/How do you ensure the safety of my goods during transportation.jpg'
import track_your_shipment from '../Image/Can I track my shipments in real-time.jpg'
import areas_serve from '../Image/What areas do you serve.jpg'
import customs_clearance from '../Image/How do you handle customs clearance for international shipments.jpg'
import pricing_option from '../Image/What are your pricing options.jpg'
import time_sensitive from '../Image/How do you manage urgent or time-sensitive deliveries.jpg'
import schedule_service from '../Image/How can I request a quote or schedule a service.jpg'
const items = [
  {
    title: '1. What types of services do you offer?',
    description:
      'We provide a full spectrum of logistics services including transportation, warehousing, inventory management, supply chain consulting, customs brokerage, freight forwarding, and last-mile delivery.',
    image: What_types_of_services_do_you_offer, // Replace with the correct path to your image
  },
  {
    title: '2. How do you ensure the safety of my goods during transportation?',
    description:
      'We use high-quality packaging, secure handling procedures, and vehicles equipped with the latest safety technology. Insurance options are also available for added protection.',
    image: ensure_the_safety,
  },
  {
    title: '3. Can I track my shipments in real-time?',
    description: 'Yes, our advanced tracking system allows you to monitor the status and location of your shipments through our online portal.',
    image: track_your_shipment,
  },
  {
    title: '4. What areas do you serve?',
    description: 'We offer both domestic and international logistics services with a global network to ensure timely delivery worldwide.',
    image: areas_serve,
  },
  {
    title: '5. How do you handle customs clearance for international shipments?',
    description: 'Our customs brokerage team manages all aspects of customs clearance, including documentation, tariffs, and duties, ensuring compliance and minimizing delays.',
    image: customs_clearance,
  },
  {
    title: '6. What are your pricing options?',
    description: 'Pricing is customized based on service type, distance, volume, and additional requirements. We offer competitive rates and flexible payment options. Contact us for a tailored quote.',
    image: pricing_option,
  },
  {
    title: '7. How do you manage urgent or time-sensitive deliveries?',
    description: 'We provide expedited and express delivery services and prioritize time-sensitive shipments to ensure timely arrival.',
    image: time_sensitive,
  },
  {
    title: '8. How can I request a quote or schedule a service?',
    description: 'Request a quote or schedule a service via phone, email, or our website. Our team will provide a detailed proposal tailored to your needs.',
    image: schedule_service,
  },
];
 





  
const FAQ = () => {

 
  
  const [activeIndex, setActiveIndex] = useState(0); // State to track the currently selected item index

  // Function to handle the selection of an item
  const handleItemClick = (index) => {
    setActiveIndex(index); // Update the active index state
  };

  return (
    
    <div className="why-choose-us-container">
    {/* Left Panel: List of Items */}
    <div className="left-panel">
      <h2>FREQUENTLY ASKED QUESTIONS (FAQs)</h2>
      <ul className="items-list">
        {items.map((item, index) => (
          <li
            key={index}
            className={`item ${activeIndex === index ? 'active' : ''}`} // Conditional class to highlight the active item
            onClick={() => handleItemClick(index)} // Set the active item on click
          >
            <div className="item-content">
              {item.title}
              {/* Connecting line indicator */}
              {activeIndex === index && <div className="connector-line"></div>}
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Right Panel: Display of the Selected Item's Details */}
    <div className="right-panel">
      <div className="content">
        <h3>{items[activeIndex].title}</h3> {/* Display the title of the selected item */}
        <p>{items[activeIndex].description}</p> {/* Display the description of the selected item */}
        <img
          src={items[activeIndex].image}
          alt={items[activeIndex].title}
          className="content-image"
        /> {/* Display the image of the selected item */}
      </div>
    </div>
  </div>
  );
};

export default FAQ;
