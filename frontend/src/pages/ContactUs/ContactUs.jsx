import './ContactUs.css'
import React, { useState } from 'react'
import axios from 'axios'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const ContactUs = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  
   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
     try {
      const response = await axios.post('http://localhost:4000/addfeedback', {
        name: name,
        email: email,
        message: message
      });
      console.log(response.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Error:', error);
    }
    
  };
   

  return (
    <div>
      <Navbar />
    <div className="container-m">
      <div className="row justify-content-center">
        <div className="col-md-8  col-lg-full">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Contact Us</h2>
              <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input onChange={(e) => {
        setName(e.target.value)}} value={name}
         type="text" className="form-control form-control-lg" id="name"  required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input onChange={(e) => {
        setEmail(e.target.value)}} value={email} type="email" className="form-control form-control-lg" id="email"  required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea onChange={(e) => {
        setMessage(e.target.value)
        }} value={message} className="form-control form-control-lg" id="message" rows="5" required></textarea>
                </div>
                <button  type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;