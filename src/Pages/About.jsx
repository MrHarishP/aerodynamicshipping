import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from '../Components/Footer'
import about_image from '../Components/Image/about_bg.jpg'
// import aboutImage from '..\public\assets\img\about.jpg'
function About() {
  return (
    <>
    {/* // <!-- Spinner Start --> */}
    {/* <div */}
       {/* id="spinner"
       classNameName="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
     > */}
       {/* <div */}
        {/* classNameName="spinner-grow text-primary" */}
        {/* style={{ width: '3rem', height: '3rem' }} */}
        {/* role="status" */}
      {/* > */}
        {/* <span classNameName="visually-hidden">Loading...</span> */}
     {/* </div> */}
     {/* </div> */}
    {/* //  Spinner End  */}
    <Navbar/>
    {/* // Page Header Start */}
    <div className="container-fluid page-header py-5" style={{ marginBottom: '6rem' }}>
    <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
  
    </div>
    {/* // <!-- Page Header End -->
    // <!-- About Start --> */}
   
    </div>
    <div className="container-fluid overflow-hidden py-5 px-lg-0" 
      style={{ background:  'radial-gradient(black, transparent)',
        // backgroundImage : about_image ,
       }}
>
   
    <div className="container about py-5 px-lg-0">
      <div className="row g-5 mx-lg-0">
        <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
          <div className="position-relative h-100">
            <img className="position-absolute img-fluid w-100 h-100"src={about_image} style={{ objectFit: 'cover' }} alt="About Us" />
          </div>
        </div>
        <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="text-secondary text-uppercase mb-3" style={{
    color: 'white'
}}>About Us</h6>
          <h1 className="mb-5">Welcome to Aero Dynamic Shipping!</h1>
          <p className="mb-5" style={{
    color: 'white'
}}>
          At Aero Dynamic Shipping, we simplify and enhance your logistics experience. Whether you're looking for courier services, air freight, sea freight, or comprehensive domestic and international solutions, our mission is to make shipping seamless and stress-free. Let us manage the logistics so you can focus on what truly matters to you!
          </p>
          <div className="row g-4 mb-5">
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
              <i className="fa fa-globe fa-3x text-primary mb-3"></i>
              <h5>Global Coverage</h5>
              {/* <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p> */}
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
              <i className="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
              <h5>On Time Delivery</h5>
              {/* <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p> */}
            </div>
          </div>
          {/* <a href="#" className="btn btn-primary py-3 px-5">Explore More</a> */}
        </div>
      </div>
    </div>
  </div>
 
{/* //    <!-- About End --> */}
{/* Fact Start */}
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
            <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
            <p className="mb-5">
            Gain full visibility and control over your shipments with our easy-to-use management tool. Monitor, track, and optimize your shipments from a single, intuitive dashboard.            </p>
            <div className="d-flex align-items-center">
            <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
              <div className="ps-4">
                <h6>Call for any query!</h6>
                <h3 className="text-primary m-0">+91 9958654792</h3>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6"> */}
            {/* <div className="row g-4 align-items-center">
              <div className="col-sm-6">
                <div className="bg-primary p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                  <i className="fa fa-users fa-2x text-white mb-3"></i>
                  <h2 className="text-white mb-2" data-toggle="counter-up">4356</h2>
                  <p className="text-white mb-0">Happy Clients</p>
                </div>
                <div className="bg-secondary p-4 wow fadeIn" data-wow-delay="0.5s">
                  <i className="fa fa-ship fa-2x text-white mb-3"></i>
                  <h2 className="text-white mb-2" data-toggle="counter-up">4356</h2>
                  <p className="text-white mb-0">Complete Shipments</p>
                </div>
              </div>
              
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    
     {/* Fact End */}
     {/* Feature Start */}
    <div className="container-fluid overflow-hidden py-5 px-lg-0">
      <div className="container feature py-5 px-lg-0">
        <div className="row g-5 mx-lg-0">
          <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
            <h2 className="text-secondary text-uppercase mb-3">Our Features</h2>
            {/* <h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1> */}

            <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
              <i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
              <div className="ms-4">
                <h5>Worldwide Service</h5>
                {/* <p className="mb-0">
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet
                </p> */}
              </div>
            </div>

            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
              <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
              <div className="ms-4">
                <h5>On Time Delivery</h5>
                {/* <p className="mb-0">
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet
                </p> */}
              </div>
            </div>

            <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
              <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
              <div className="ms-4">
                <h5>24/7 Telephone Support</h5>
                {/* <p className="mb-0">
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet
                </p> */}
              </div>
            </div>
          </div>

          <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="assets/img/feature.jpg" // Update the path as per your project
                style={{ objectFit: 'cover' }}
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* Feature End */}
     <Footer/>
</>
  )
}

export default About
