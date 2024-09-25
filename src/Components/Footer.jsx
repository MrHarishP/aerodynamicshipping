import React from 'react';
// import 'path/to/your/css/styles.css'; // Ensure your CSS styles are linked properly

const Footer = () => {
  return (
    // Footer Start
   
    <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: '6rem' }}>
   
     
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            {/* <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p> */}
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9315699345</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@aerodynamicshipping.com</p>
            {/* <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Services</h4>
            <a href="/" className="btn btn-link" >Home</a>
            <a href="/Export"className="btn btn-link" >Export</a>
            <a href="/Import"className="btn btn-link" >Import</a>
            {/* <a className="btn btn-link" href="#">Logistic Solutions</a>
            <a className="btn btn-link" href="#">Industry solutions</a> */}
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <a className="btn btn-link" href="/About">About Us</a>
            <a className="btn btn-link" href="/Contact">Contact Us</a>
            {/* <a className="btn btn-link" href="/Service">Our Services</a> */}
            <a className="btn btn-link" href="#">Terms & Condition</a>
            {/* <a className="btn btn-link" href="#">Support</a> */}
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p> Our services are designed to make domestic and international shipping smooth and stress-free, no matter the size or complexity of your needs.

</p>
            {/* <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Aero Dynamic</a>, All Right Reserved.
            </div>
            
          </div>
        </div>
      </div>
     
    </div>
   
    // Footer End
  );
};

   
export default Footer;
