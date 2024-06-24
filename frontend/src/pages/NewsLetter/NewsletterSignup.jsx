import React, { useState } from 'react';
import axios from 'axios';
import './NewsLetter.css';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/subscribe', { email });
      setSuccessMessage('You are successfully subscribed!');
      setEmail(''); // Clear email field after successful submission
    } catch (error) {
      setErrorMessage('Subscription failed. Please try again later.');
    } finally {
      // Clear any previous messages after a short delay
      setTimeout(() => {
        setErrorMessage(null);
        setSuccessMessage(null);
      }, 3000);
    }
  };

  return (
    <form className='newsletter' onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}

export default NewsletterSignup;
