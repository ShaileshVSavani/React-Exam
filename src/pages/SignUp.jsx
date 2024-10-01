

import React, { useState } from 'react';
import { SignUpMethodEmail } from '../config';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { login } from '../redux/UserSlice'; // Import login action
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUp = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch(); // Initialize useDispatch

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlesubmitForm = async (e) => {
    e.preventDefault();
    try {
      let res = await SignUpMethodEmail(user.email, user.password);
      console.log(res);
      setUser({ email: '', password: '' });

      if (res) {
        // Dispatch the login action with user information
        dispatch(login({ email: user.email }));

        // Navigate to home on successful signup
        navigate('/home');
      }
    } catch (error) {
      console.log("Email SignUp Error: ", error);
      setUser({ email: '', password: '' });

      if (error.code === 'auth/email-already-in-use') {
        alert("Email already exists");
        navigate('/login');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handlesubmitForm}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">SignUp</h2>
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
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
