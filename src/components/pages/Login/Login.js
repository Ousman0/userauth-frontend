import React, { useState } from 'react';
import { login } from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({ email, password });
            console.log(data)
            localStorage.setItem('token',data.Token);
            navigate('/profile');
        } catch (error) {
            console.error("Login failed", error);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
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
            <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-prompt">
            Don't have an account? <a href="/signup">Sign up here</a>
        </p>
    </div>
    );
};

export default Login;
