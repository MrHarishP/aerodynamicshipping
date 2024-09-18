// src/WhyChooseUs.js
import React from 'react';
import './Why_choose_us.css'; // Import CSS for styling

import global from '../../Components/Image/global.jpg'
import end_to_end from '..//../Components/Image/ent-to-end-solution.jpg'
import realtime_tracking from '../../Components/Image/realtime_tracking.jpg'
import customer_support from '../../Components/Image/customer_support.jpg'
import pricing from '../../Components/Image/pricing.jpg'
import image from '../../Components/Image/Customs Clearance.jpg'
import retial_ecom from '../../Components/Image/Retail and E-commerce.jpg'
import manufacturing from '../../Components/Image/Manufacturing.jpg'
import Automotive from '../../Components/Image/Automotive.jpg'
import technology from '../../Components/Image/Technology and Electronics.jpg'
import pharma from '../../Components/Image/Pharmaceuticals and Healthcare.jpg'
import toy from '../../Components/Image/toys.jpg'
import textile from '../../Components/Image/textile-fabrics-market.jpg'
import food from '../../Components/Image/Food and Beverage.jpg'
const Why_choose_us = () => {
    const sections = [
        {
          imgSrc: global, // Replace with actual paths or use import
          title: 'Global Expertise',
          description: 'Knowledge and connections for smooth import operations.',
        },
        {
          imgSrc: end_to_end,
          title: 'End-to-End Solutions',
          description: 'Full spectrum of services from consultation to delivery.',
        },
        {
          imgSrc: pricing,
          title: 'Transparent Pricing',
          description: 'Competitive rates with no hidden fees.',
        },
        {
          imgSrc: realtime_tracking,
          title: 'Real-Time Tracking',
          description: 'Detailed updates on shipments.',
        },
        {
          imgSrc: customer_support,
          title: 'Dedicated Customer Support',
          description: 'Assistance at every stage of the import process.',
        },
      ];
  return (
    <>
    <div className="logistic-container">
        <h1 className="logistic-heading">Why Choose Us?</h1> {/* Added H1 heading */}
      {sections.map((section, index) => (
        <div className="logistic-card" key={index}>
          <img src={section.imgSrc} alt={section.title} className="logistic-image" />
          <div className="logistic-content">
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        </div>
      ))}
    </div>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#112a50" fill-opacity="1" d="M0,64L1440,32L1440,0L0,0Z"></path>
</svg> */}
    <section className="logistics-section">

      <div className="text-container">
      <h1>Industries We Serve!</h1>
        <div className="services">
          <div className="service">
            <img src={retial_ecom} alt="Sea Freight" />
            <h3>Retail and E-commerce</h3>
            {/* <p>Reliable And Cost-Effective Global Shipping Solutions.</p> */}
          </div>
          <div className="service">
            <img src={manufacturing} alt="Sea Freight" />
            <h3>Manufacturing and Industrial Goods</h3>
            {/* <p>Reliable And Cost-Effective Global Shipping Solutions.</p> */}
          </div>
          <div className="service">
            <img src={Automotive} alt="Sea Freight" />
            <h3>Automotive</h3>
            {/* <p>Reliable And Cost-Effective Global Shipping Solutions.</p> */}
          </div>
          <div className="service">
            <img src={technology} alt="Sea Freight" />
            <h3>Technology and Electronics</h3>
            {/* <p>Reliable And Cost-Effective Global Shipping Solutions.</p> */}
          </div>
          
          <div className="service">
            <img src={pharma} alt="Air Freight" />
            <h3>Pharmaceuticals and Healthcare</h3>
            {/* <p>Reliable And Fast Airfreight Services For Global Reach.</p> */}
          </div>
          <div className="service">
            <img src={food} alt="Air Freight" />
            <h3>Food and Beverage</h3>
            {/* <p>Reliable And Fast Airfreight Services For Global Reach.</p> */}
          </div>
          <div className="service">
            <img src={textile} alt="Air Freight" />
            <h3>Textile</h3>
            {/* <p>Reliable And Fast Airfreight Services For Global Reach.</p> */}
          </div>
          <div className="service">
            <img src={toy} alt="Air Freight" />
            <h3>Toys</h3>
            {/* <p>Reliable And Fast Airfreight Services For Global Reach.</p> */}
          </div>
        </div>
      </div>
      

      <div className="image-container">
        {/* <div className="years-experience">
          <span>15</span>
          <p>Years of Experience</p>
        </div> */}
        <img src={image} alt="Logistics" />
      </div>
    </section>
  </>
  );
};

export default Why_choose_us;
