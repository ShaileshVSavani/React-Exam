

import React, { useState } from 'react';
import { GoogleAuth, SignInMethodEmail } from '../config'; // Assume these handle Google and Email sign-in
import { useDispatch } from 'react-redux'; // Import useDispatch
import { login } from '../redux/UserSlice'; // Import login action
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch(); // Initialize useDispatch

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginWithGoogle = async () => {
    try {
      const res = await GoogleAuth();
      console.log("Google Login Response:", res);

      if (res) {
        // Dispatch the login action with user information
        dispatch(login({ email: res.user.email }));

        // Navigate to home on successful login
        navigate('/');
      }
    } catch (error) {
      console.log("Google Login Error:", error);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //   try {
    //     let res = await SignInMethodEmail(user.email, user.password);
    //     console.log("Email Login Response:", res);

    //     if (res) {
    //       // Dispatch the login action with user information
    //       dispatch(login({ email: user.email }));

    //       // Navigate to home on successful login
    //       navigate('/home');
    //     }
    //   } catch (error) {
    //     console.log("Email Login Error:", error);
    //     setUser({ email: '', password: '' });
    //     alert('Invalid credentials, please try again.');
    //   }
    // };
    try {
      let res = await SignInMethodEmail(user.email, user.password);
      console.log("Email Login Response:", res);

      if (res) {
        // Dispatch the login action with user information
        dispatch(login({ uid: res.user.uid, email: user.email })); // Include uid
        navigate('/'); // Navigate to the home or products page
      }
    } catch (error) {
      console.log("Email Login Error:", error);
      setUser({ email: '', password: '' });
      alert('Invalid credentials, please try again.');
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmitForm}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Login
        </button>
        <h6 className="text-center my-4">OR</h6>
        <button
          type="button" // Prevent form submission on Google login button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={loginWithGoogle}
        >
          Login With Google
        </button>
      </form>
    </div>
  );
};

export default Login;
