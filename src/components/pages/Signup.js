// src/pages/Signup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signup } from '../../services/authService';
import "./Login/login.css"
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({ username,email, password });
      if (response.data) {
        localStorage.setItem('token', response.data.Token);
        alert('Registration successful!');
        navigate('/profile');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (

    <>
    {/* <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div> */}



    <div className="login-container">
        <h2 className="login-title">Signup</h2>
        <form onSubmit={handleSignup} className="login-form">
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
                    type="text"
                    id="Username"
                    className="form-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter your Name"
                    
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                />
            </div>
            <button type="submit" className="login-button">SignUp</button>
        </form>
        <p className="signup-prompt">
           Already have an account? <a href="/">Sign in here</a>
        </p>
    </div>


    </>
  );
};

export default Signup;
