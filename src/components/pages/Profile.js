// src/pages/Profile.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../services/authService';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUserDetails = async () => {
      
        const token = localStorage.getItem('token');
        if (!token) {
        // Redirect to login if there's no token
        navigate('/');
        return;
      }

      try {
        const response = await getUserDetails(token);
        console.log(response.data)
        setUserDetails(response.data); 
      } catch (error) {
        console.error('Error fetching user details:', error);
        //  redirect to login 
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/');
  };



  if (loading) return <p>Loading user details...</p>;


  return (
    <div>
      <h2>User Profile</h2>
      {userDetails ? (
        <div>
          <p>Username: {userDetails.userName}</p>
          <p>Email: {userDetails.email}</p>

          <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Profile;
