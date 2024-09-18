import React from 'react'
import './Why_choose_use_export.css'
import global_reach from '../../Components/Image/global_reach.jpg'
import international_trade from '../Image/international_trade.jpg'
import customer_support from '../Image/customer_support.jpg'
import real_time_tracking from '../Image/real_time_traking_export.jpg'
import Competitive_Pricing from '../Image/competetive_pricing.jpg'


const Why_choose_use_export = () => {
    const solutions = [
        {
          title: 'Global Reach',
          description: 'Services to virtually any destination worldwide.',
          icon: global_reach, // Replace with actual paths to your icons
        },
        {
          title: 'Expertise in International Trade',
          description: 'Deep understanding of trade regulations and market challenges.',
          icon: international_trade,
        },
        {
          title: 'Customized Solutions',
          description: 'Tailored logistics solutions to fit your needs.',
          icon: customer_support,
        },
        {
          title: 'Real-Time Tracking',
          description: 'Advanced tracking systems for full visibility.',
          icon: real_time_tracking,
        },
        {
          title: 'Competitive Pricing',
          description: 'Transparent rates with no hidden fees.',
          icon: Competitive_Pricing,
        },
      ];

  return (
    <>    
      {/* why chhoose us start  */}
      <section className="roadmap-section">
     
      <h2>Why Choose Us?</h2>
      {/* <p className="subtitle">Scalable for every project, adaptable for every need</p>
      <p className="description">
      We are constantly updating our time-tested processes to meet modern market demands.
      We dive deep into your unique supply chain process, creating tailor-made solutions that work for you.
      Go ahead...challenge us.
      </p> */}
      <div className="roadmap-container">
        {solutions.map((solution, index) => (
          <div key={index} className="roadmap-item">
            <div className="icon-wrapper">
              <img src={solution.icon} alt={solution.title} className="solution-icon" />
            </div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            {index < solutions.length - 1 && <div className="connector-line"></div>}
          </div>
        ))}
      </div>
    </section>
        
   
    {/* why chhoose us end */}
    </>
  )
}

export default Why_choose_use_export
