


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/UserSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setIsMobileMenuOpen(false); // Close mobile menu on logout
  };

  return (
    <div className="bg-gray-800">
      <nav className="flex items-center justify-between px-4 py-3">
        <div className="text-white text-xl font-semibold">
          <Link to="/">MyApp</Link>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex space-x-4`}>
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
            Home
          </Link>
          <Link to="/user" className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
            User Product
          </Link>
          <Link to="/addProducts" className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
            Add Products
          </Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
                Login
              </Link>
              <Link to="/signup" className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <Link to="/" className="block text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
          Home
        </Link>
        <Link to="/user" className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
            User Product
          </Link>
        <Link to="/addProducts" className="block text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
          Add Products
        </Link>
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="block text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
              Login
            </Link>
            <Link to="/signup" className="block text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
              Signup
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="block text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300 w-full text-left"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
