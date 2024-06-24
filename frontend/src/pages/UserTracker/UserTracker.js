import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import for making API requests

const UserTracker = () => {
  const [loginCount, setLoginCount] = useState(0);

  useEffect(() => {
    const trackLogin = async () => {
      try {
        const response = await axios.post('/api/track-login'); // Send POST request to backend
        setLoginCount(response.data.loginCount); // Update state with received count
      } catch (error) {
        console.error('Error tracking login:', error);
      }
    };

    trackLogin();
  }, []);

  return (
    <div>
      <p>Total Logins: {loginCount}</p>
    </div>
  );
};

export default UserTracker;
