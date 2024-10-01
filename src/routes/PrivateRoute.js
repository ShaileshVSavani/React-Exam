import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate =useNavigate()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? children : navigate("/login" );
};

export default PrivateRoute;
