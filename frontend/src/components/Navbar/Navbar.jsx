import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("menu");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={assets.logo} alt="" width="80" height="80"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-white"> {/* Add text-white class */}
            <li className="nav-item">
            <Link to="/Home" className="nav-link fs-6" aria-current="page">Home</Link> {/* Added fs-4 class for font size */}
            </li>
            <li className="nav-item">
            <Link to="/AboutUs" className="nav-link fs-6" aria-current="page">AboutUs</Link>
            </li>
            <li className="nav-item">
            <Link to="/ContactUs" className="nav-link fs-6" aria-current="page">ContactUs</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6" href="#">Shopping</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6" href="#">Food & Beverages</a>
            </li>
            <li className="nav-item">
              <Link to="/Advertisements" className="nav-link fs-6">Advertisements</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6" href="#">Games & Entertainment</a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <Link to="/Login" className="btn btn-outline-success text-white fs-6">Admin</Link>
          <button className="btn btn-outline-primary me-2 text-white fs-6">ShopOwner</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
