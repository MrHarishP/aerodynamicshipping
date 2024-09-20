import React from 'react';
import logo from '../../Components/Image/logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
      <NavLink to="/" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
        <img src={logo} alt="Logistica Logo" className="navbar-logo" />
      </NavLink>

      {/* Toggle button for mobile screens */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar collapse */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink to="/Import" className="nav-item nav-link">Import</NavLink>
          <NavLink to="/Export" className="nav-item nav-link">Export</NavLink>
          <NavLink to="/About" className="nav-item nav-link">About</NavLink>
          <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
        </div>
        <h4 className="m-0 pe-lg-5 d-none d-lg-block">
          <i className="fa fa-headphones text-primary me-3"></i>+91 9315699345
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;
