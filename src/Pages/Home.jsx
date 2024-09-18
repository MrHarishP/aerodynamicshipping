
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from './Navbar/Navbar'
import Faq from '../Components/FAQ/Faq'
import Reliability_and_Timeliness from '../Components/Image/Reliability and Timeliness.jpg'
import Service from '../Components/Services/Service'
import landing_page from '../Components/Image/landing_image.jpg'
import Why_choose_aerodynamic from '../Components/Why choose us aerodynamic/Why_choose_aerodynamic'
const Home = () => {
  
  
  return (
    <>
     {/* Spinner Start */}
     
     {/* <div
  id="spinner"
  className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
>
  <div
    className="spinner-grow text-primary"
    style={{ width: '3rem', height: '3rem' }}
    role="status"
  >
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
     */}
      {/* Spinner End */}

      {/* Navbar Start */}
     <Navbar/>

      {/* Navbar End */}

      {/* Carousel Start */}
      <div className="container-fluid p-0 pb-5">
  <div className="owl-carousel header-carousel position-relative mb-5">
    <div className="owl-carousel-item position-relative">
      <img className="img-fluid" src={landing_page} alt="" />
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{ background: 'rgba(6, 3, 21, 0.5)' }}
      >
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-10 col-lg-8">
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                Transport & Logistics Solution
              </h5>
              <h1 className="display-3 text-white animated slideInDown mb-4">
                #1 Place For Your <span className="text-primar"
                style={{color: 'orange'}}>Logistics</span> Solution
              </h1>
              <p className="fs-5 fw-medium text-white mb-4 pb-2">
              At Aero Dynamic Shipping, we simplify and enhance your logistics experience!
              </p>
              <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                Read More
              </a>
              {/* <a href="about us " className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
                Free Quote
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="owl-carousel-item position-relative">
      <img className="img-fluid" src="assets/img/carousel-2.jpg" alt="" />
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{ background: 'rgba(6, 3, 21, 0.5)' }}
      >
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-10 col-lg-8">
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                Transport & Logistics Solution
              </h5>
              <h1 className="display-3 text-white animated slideInDown mb-4">
                #1 Place For Your <span className="text-primary">Transport</span> Solution
              </h1>
              <p className="fs-5 fw-medium text-white mb-4 pb-2">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo
                clita et kasd rebum sea elitr.
              </p>
              <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                Read More
              </a>
              <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
                Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</div>

      {/* Carousel End */}


     {/* About Start */}
     <div className="container-fluid overflow-hidden py-5 px-lg-0">
  <div className="container about py-5 px-lg-0">
    <div className="row g-5 mx-lg-0">
      <div
        className="col-lg-6 ps-lg-0 wow fadeInLeft"
        data-wow-delay="0.1s"
        style={{ minHeight: '400px' }}
      >
        <div className="position-relative h-100">
          <img
            className="position-absolute img-fluid w-100 h-100"
            src="assets/img/about.jpg"
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </div>
      </div>
      <div
        className="col-lg-6 about-text wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <h2 className="text-secondary text-uppercase mb-3">About Us</h2>
        <h1 className="mb-5">Welcome to Aero Dynamic Shipping!</h1>
        <p className="mb-5">
        At Aero Dynamic Shipping, we simplify and enhance your logistics experience.
         Whether you're looking for courier services, air freight, sea freight, or comprehensive
          domestic and international solutions, our mission is to make shipping seamless and stress-free.
         Let us manage the logistics so you can focus on what truly matters to you!
        </p>
        <div className="row g-4 mb-5">
          <div
            className="col-sm-6 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <i className="fa fa-globe fa-3x text-primary mb-3"></i>
            <h5>Global Coverage</h5>
            {/* <p className="m-0">
              Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
              diam justo.
            </p> */}
          </div>
          <div
            className="col-sm-6 wow fadeIn"
            data-wow-delay="0.7s"
          >
            <i className="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
            <h5>On Time Delivery</h5>
            {/* <p className="m-0">
              Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
              diam justo.
            </p> */}
          </div>
        </div>
        <a href="About" className="btn btn-primary py-3 px-5">
          Explore More
        </a>
      </div>
    </div>
  </div>
</div>

{/* About End */}


{/* why choose us start */}
<Why_choose_aerodynamic/>
{/* why choose us end  */}
{/* Service Start */}
<Service/>

{/* Service End */}
{/* Faq start  */}
<Faq/>
{/* faq end  */}
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
                            {/* <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p> */}
                        </div>
                    </div>
                    <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                        <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>On Time Delivery</h5>
                            {/* <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p> */}
                        </div>
                    </div>
                    <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                        <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>24/7 Telephone Support</h5>
                            {/* <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="assets/img/about_bg.jpg" style={{objectFit: 'cover'}} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* Feature End */}



{/* Quote Start */}
<div className="container-xxl py-5">
  <div className="container py-5">
    <div className="row g-5 align-items-center">
      <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-secondary text-uppercase mb-3">Get A Quote</h6>
        <h1 className="mb-5">Request A Free Quote!</h1> {/* Fixed typo from "Qoute" to "Quote" */}
        <p className="mb-5">
        Request a free quote and explore our affordable rates with no strings attached. Let us show you how we can optimize your logistics and reduce your costs.
        </p>
        <div className="d-flex align-items-center">
        <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
          <div className="ps-4">
            <h6>Call for any query!</h6>
            <h3 className="text-primary m-0">+91 9958654792</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
          <form>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: '55px' }} />
              </div>
              <div className="col-12 col-sm-6">
                <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: '55px' }} />
              </div>
              <div className="col-12 col-sm-6">
                <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{ height: '55px' }} />
              </div>
              <div className="col-12 col-sm-6">
                <select className="form-select border-0" style={{ height: '55px' }}>
                  <option value="" disabled selected>Select A Freight</option> {/* Added disabled and empty value for better UX */}
                  <option value="1">Freight 1</option>
                  <option value="2">Freight 2</option>
                  <option value="3">Freight 3</option>
                </select>
              </div>
              <div className="col-12">
                <textarea className="form-control border-0" placeholder="Special Note" rows="4"></textarea> {/* Added rows for better appearance */}
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Quote End */}

{/* Footer start */}
    <Footer/>

{/* Footer End */}

  


   {/* Back to Top */}


    </>
  )
}
export default Home
