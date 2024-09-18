// src/ImportLogistics.js
import React from 'react';
import './Import.css'; // Importing the CSS for styling
import Navbar from '../Navbar/Navbar';
import Footer from '../../Components/Footer';
import Feature from '../../Components/Image/Import.jpg'
import import_image from '../../Components/Image/import_image.jpg'
import Why_choose_us from '../Why_choose_us/Why_choose_us';
import Why_choose_aerodynamic from '../../Components/Why choose us aerodynamic/Why_choose_aerodynamic'
const Import = () => {
  return (
   <div className='image_bg'>
   <Navbar/>
   <div className="logistics-services">
      <div className="image-container">
        <img
          src={import_image} // Replace with your image URL
          alt="Cargo Ship"
        />
      </div>
      <div className="content-container">
        <h2 className="section-title">Import Logistics Services</h2>
        <h1 className="main-title">Seamless Import Solutions for Your Global Business
Simplify international trade with our comprehensive import logistics services.
</h1>
        
        <ul className="features-list">
          <li>	Customs Brokerage: Handling paperwork, tariffs, and compliance.</li>
          <li>	Freight Forwarding: Reliable transportation by sea, air, or land.</li>
          <li>	Import Compliance Consulting: Guidance on trade laws and documentation.</li>
          <li> Insurance and Risk Management: Tailored cargo insurance options.</li>
        </ul>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
    <Why_choose_us/>
    <Why_choose_aerodynamic/>
    {/* <Contact/> */}
    <Footer/>
   </div>
    
  );
};

export default Import;
