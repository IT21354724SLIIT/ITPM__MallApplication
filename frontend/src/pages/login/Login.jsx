import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/header_img.png'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

 

const LoginPage = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform validation here, e.g., against a backend API
    if (username === 'admin' && password === '1234') {
      setLoggedIn(true);
      alert('Login successful!');
      // Redirect to the dashboard page after successful login
      navigate('/SlideBar');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return <DashboardPage username={username} handleLogout={handleLogout} />;
  } else {
    return (
      <div>
        <Navbar />
      
      <div className="d-flex vh-100 justify-content-center align-items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className=" rounded p-3 text-center" style={{ width: "60vw", height: "43vw" }}>
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <br />
            <div className="mb-3 d-flex justify-content-center align-items-center">
              <label htmlFor="username" className="form-label me-2">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                style={{ width: "200px" }} // Adjust the width here
              />
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center">
              <label htmlFor="password" className="form-label me-2">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                style={{ width: "200px" }} // Adjust the width here
              />
            </div>
            <br/>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
};

const DashboardPage = ({ username, handleLogout }) => (
  <div className="text-center">
    <h1>Welcome, {username}!</h1>
    <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    {/* Add Dashboard content here */}
    <Footer />
  </div>
  
);

export default LoginPage;
