import React from 'react'
import logo from '../../Components/Image/logo.png'
// import './Navbar.css'
function Navbar() {
  return (
    // <!-- Navbar Start -->
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
        <a href="/" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
            {/* Replace the text with an image */}
            <img src={logo} alt="Logistica Logo" className="navbar-logo" />
        </a>
        <button
  type="button"
  className="navbar-toggler me-4"
  data-bs-toggle="collapse"
  data-bs-target="#navbarCollapse"
  aria-controls="navbarCollapse"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                {/* <a href="/" className="nav-item nav-link">Home</a> */}
                <a href="Import" className="nav-item nav-link ">Import</a>
                <a href="Export" className="nav-item nav-link">Export</a>
                <a href="About" className="nav-item nav-link ">About</a>
                <a href="Contact" className="nav-item nav-link">Contact</a>
            </div>
            <h4 className="m-0 pe-lg-5 d-none d-lg-block">
                <i className="fa fa-headphones text-primary me-3"></i>+91 9315699345
            </h4>
        </div>
    </nav>
    // <!-- Navbar End -->
  )
}

export default Navbar
