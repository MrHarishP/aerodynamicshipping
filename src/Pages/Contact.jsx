import React, {useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Navbar from './Navbar/Navbar'
import Footer from '../Components/Footer'
import contact_image from '../Components/Image/Customs Clearance.jpg'
function Contact() {
  const form = useRef();
  
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    // category: '',
    message: ''
  });

  // Initialize emailJS
  emailjs.init('FzEIxAhpYWKLu_uYT'); // Replace with your actual public key

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Use the 'name' attribute to update the state
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send form using emailjs
    emailjs
      .sendForm('service_g7j4352', 'template_n0m1203', form.current, 'FzEIxAhpYWKLu_uYT')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Form Submitted Successfully');
          setFormData({
            name: '',
            phone: '',
            company: '',
            email: '',
            // category: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
    <Navbar/>
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5" style={{marginBottom: '6rem'}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
            {/* <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                </ol>
            </nav> */}
        </div>
    </div>
    {/* <!-- Page Header End --> */}
     {/* Contact Page Start */}
     <div className="container-fluid overflow-hidden py-5 px-lg-0">
      <div className="container contact-page py-5 px-lg-0">
        <div className="row g-5 mx-lg-0">
          {/* Contact Form */}
          <div className="col-md-6 contact-form wow fadeIn" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Get In Touch</h6>
            <h1 className="mb-4">Contact For Any Query</h1>
            
            <div className="bg-light p-4">
              <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" // Added name attribute
                        placeholder="Your Name" 
                        value={formData.name} // Controlled input
                        onChange={handleChange} 
                        required 
                      />
                      <label>Your Name</label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" // Added name attribute
                        placeholder="Your Email" 
                        value={formData.email} // Corrected value key
                        onChange={handleChange} 
                        required 
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="company" 
                        name="company" // Added name attribute
                        placeholder="Your Company" 
                        value={formData.company} 
                        onChange={handleChange} 
                        required 
                      />
                      <label>Your Company</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="phone" 
                        name="phone" // Added name attribute
                        placeholder="Your Phone Number" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                      />
                      <label>Your Phone Number</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        name="message" // Added name attribute
                        style={{ height: '100px' }}
                        value={formData.message} // Controlled textarea
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                style={{ objectFit: 'cover' }}
                src={contact_image} // Replace with your image URL
                alt="logistic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Contact Page End */}
    <Footer/>
    </>
  )
}

export default Contact
