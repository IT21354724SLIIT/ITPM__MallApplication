import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-2">
        <div className="row">
          <div className="col-md-4">
          <img src={assets.logo} alt="" width="80" height="80"/>
            <h5>SkyLine Mall</h5>
          </div>
          <div className="col-md-4">
            <h5></h5>
            <ul className="list-unstyled">
              <li className='py-2'><a href="#" className="text-white">AboutUs</a></li>
              <li className='py-2'><a href="#" className="text-white">ContactUs</a></li>
              <li className='py-2'><a href="#" className="text-white">Events</a></li>
              <li className='py-2'><a href="#" className="text-white">Shopping</a></li>
            </ul>
          </div>
           
          <div className="col-md-4">
            
            <ul className="list-unstyled">
              <li className='py-2'><a href="#" className="text-white">42,Galle Road,Colombo</a></li>
              <li className='py-2'><a href="#" className="text-white">+94 77485955</a></li>
              <li className='py-2'><a href="#" className="text-white">skylinemall@gmail.com</a></li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-dark py-3">
        <div className="container text-center">
          <p className="mb-0">© 2020 Company Name. All rights reserved.</p>
          <div>
            <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-google"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;