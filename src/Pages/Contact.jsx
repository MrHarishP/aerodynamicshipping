import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from '../Components/Footer'
import contact_image from '../Components/Image/Customs Clearance.jpg'
function Contact() {
  return (
    <>
    <Navbar/>
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5" style={{marginBottom: '6rem'}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
     {/* Contact Page Start */}
    <div className="container-fluid overflow-hidden py-5 px-lg-0">
      <div className="container contact-page py-5 px-lg-0">
        <div className="row g-5 mx-lg-0">
          <div className="col-md-6 contact-form wow fadeIn" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Get In Touch</h6>
            <h1 className="mb-4">Contact For Any Query</h1>
            <p className="mb-4">
              The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code, and you're done.{' '}
              <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>
            <div className="bg-light p-4">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '100px' }}
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
          <div className="col-md-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
            <div className="position-relative h-100">
            <img
                  className="position-absolute w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  src={contact_image}
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
