import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from '../Components/Footer'
// import Service from '../Components/Services/Service'
import './Export.css';
import Export_Documentation_and_Compliance from '../Components/Image/Export Documentation and Compliance.jpg'
import Freight_Forwarding from '../Components/Image/Freight Forwarding.jpg'
import Customs_Clearance from '../Components/Image/Customs Clearance.jpg'
import risk_management from '../Components/Image/risk_management.jpg'
import map from '../Components/Image/our_services.jpg'
import global_reach from '../Components/Image/global_reach.jpg'
import international_trade from '../Components/Image/international_trade.jpg'
import customer_support from '../Components/Image/customer_support_export.jpg'
import real_time_tracking from '../Components/Image/real_time_traking_export.jpg'
import Competitive_Pricing from '../Components/Image/competetive_pricing.jpg'
import Manufacturing_and_Industrial_Goods from '../Components/Image/Manufacturing and Industrial Goods.jpg'
import Agriculture_and_Food_Products from '../Components/Image/Agriculture and Food Products.jpg'
import consumer_good from '../Components/Image/Consumer Goods.jpg'
import Pharmaceuticals_and_Healthcare from '../Components/Image/Pharmaceuticals and Healthcare.jpg'
import Technology_and_Electronics from '../Components/Image/Technology and Electronics.jpg'
import Automotive from '../Components/Image/Automotive.jpg'
import automobile_icon from '../Components/Image/automobile icon.png'
import Manufacturing_and_Industrial_Goods_icon from '../Components/Image/Manufacturing_and_Industrial_Goods icon.png'
import Agriculture_and_Food_Products_icon from '../Components/Image/Agriculture and Food Products.png'
import consumer_good_icon from '../Components/Image/consumer_good_icon.png'
import Pharmaceuticals_and_Healthcare_icon from '../Components/Image/Pharmaceuticals and Healthcare.png'
import Technology_and_Electronics_icon from '../Components/Image/Technology and Electronics icon.png'
// insustry we serve start 
const values = [
  {
    title: 'Manufacturing and Industrial Goods',
    // description: 'WE FULFILL OUR PROMISES. We are committed to being reliable and accountable to all our stakeholders through discipline and fulfilling our promises.',
    image: Manufacturing_and_Industrial_Goods, // Replace with actual paths
    icon: Manufacturing_and_Industrial_Goods_icon,   // Replace with actual paths
  },
  {
    title: 'Agriculture and Food Products',
    // description: 'WE EMBRACE OUR DIFFERENCES. We instill an environment of diversity and inclusion where all our stakeholders are treated with respect and humanity.',
    image: Agriculture_and_Food_Products,
    icon: Agriculture_and_Food_Products_icon,
  },
  {
    title: 'Consumer Goods',
    // description: 'EVERYONE HAS A VOICE. We pledge to treat all our stakeholders with fairness and equality.',
    image: consumer_good,
    icon: consumer_good_icon,
  },
  {
    title: 'Pharmaceuticals and Healthcare',
    // description: 'WE ENVISION TOMORROW. We embrace advances in technology and in the supply chain industry.',
    image: Pharmaceuticals_and_Healthcare,
    icon: Pharmaceuticals_and_Healthcare_icon,
  },
  {
    title: 'Technology and Electronics',
    // description: 'WE ARE REDUCING OUR FOOTPRINT. We are working hard to create a less wasteful, more decarbonized, and eco-conscious global business model.',
    image: Technology_and_Electronics,
    icon: Technology_and_Electronics_icon,
  },{
    title: ' Automotive',
    // description: 'WE ARE REDUCING OUR FOOTPRINT. We are working hard to create a less wasteful, more decarbonized, and eco-conscious global business model.',
    image: Automotive,
    icon: automobile_icon,
  },
]; 
// industry we serve end 

// why choose us start 
function Export() {
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
  // why choose us end 
  return (
    <div>
      <Navbar/>
      

      {/* Page Header Start  */}
    <div className="container-fluid page-header py-5" style={{marginBottom: '6rem'}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Export Logistics Services</h1>
            {/* <p className="text-white">Your Gateway to Global Markets</p>
            <p className="text-white"> Expand your business across borders with our expert export logistics services.</p> */}

            {/* <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Import</li>
                </ol>
                </nav> */}
        </div>
                
    </div>
     {/* Page Header End  */}
     
     <section>
     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f6cccc" fill-opacity="1" d="M0,96L60,101.3C120,107,240,117,360,101.3C480,85,600,43,720,37.3C840,32,960,64,1080,64C1200,64,1320,32,1380,16L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg> */}
     
     <div className="markets-container">
      {/* Automotive Circle */}
      <div className="market automotive">
        <div className="circle">
          <img src={Export_Documentation_and_Compliance} alt="Automotive" />
          <div className="arrow"></div>
        </div>
        <p className="market-text">Export Documentation <br/> & Compliance</p>
      </div>

      {/* Retail Circle */}
      <div className="market retail">
        <div className="circle">
          <img src={Freight_Forwarding} alt="Retail" />
          <div className="arrow"></div>
        </div>
        <p className="market-text">Freight Forwarding</p>
      </div>

      {/* Central Content */}
      <div className="center-content">
        <h1>Our Export Services</h1>
          <img src={map} alt="Industrial" />
        {/* <div className="circle"> */}
          {/* <div className="arrow"></div> */}
        {/* </div> */}
      </div>

      {/* Industrial Circle */}
      <div className="market industrial">
        <div className="circle">
          <img src={Customs_Clearance} alt="Industrial" />
          <div className="arrow"></div>
        </div>
        <p className="market-text">Customs Clearance</p>
      </div>

      {/* Consumer Circle */}
      <div className="market consumer">
        <div className="circle">
          <img src={risk_management} alt="Consumer" />
          <div className="arrow"></div>
        </div>
        <p className="market-text">Insurance and Risk Management</p>
      </div>
    </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#eac483" fill-opacity="1" d="M0,128L26.7,144C53.3,160,107,192,160,181.3C213.3,171,267,117,320,128C373.3,139,427,213,480,218.7C533.3,224,587,160,640,149.3C693.3,139,747,181,800,208C853.3,235,907,245,960,218.7C1013.3,192,1067,128,1120,90.7C1173.3,53,1227,43,1280,58.7C1333.3,75,1387,117,1413,138.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
</svg>

    
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
            {index < solutions.length - 1 && <div className="connector-lines"></div>}
          </div>
        ))}
      </div>
    </section>
    {/* why chhoose us end */}

    {/* industry we serve start */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#eac483" fill-opacity="1" d="M0,64L34.3,58.7C68.6,53,137,43,206,48C274.3,53,343,75,411,96C480,117,549,139,617,160C685.7,181,754,203,823,208C891.4,213,960,203,1029,192C1097.1,181,1166,171,1234,186.7C1302.9,203,1371,245,1406,266.7L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>
    <section className="values-section">
      <h2>Industries We Serve</h2>
      {/* <p className="values-subtitle">SUPPORTING APLL'S VISION, GUIDING BUSINESS & EMPLOYEE ACTIVITIES</p> */}
      <div className="values-container">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <img src={value.image} alt={value.title} className="value-image" />
            <div className="value-content">
              <img src={value.icon} alt={`${value.title} icon`} className="value-icon" />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f6cccc" fill-opacity="1" d="M0,32L40,26.7C80,21,160,11,240,32C320,53,400,107,480,122.7C560,139,640,117,720,96C800,75,880,53,960,58.7C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg> */}
    {/* industry we serve end  */}
     <Footer/>
    </div>
  )
}

export default Export
