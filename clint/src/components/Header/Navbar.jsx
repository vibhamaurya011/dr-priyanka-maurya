import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-blue-900 fixed top-0 w-full z-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* Your mobile menu button SVG icons here */}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <FaUserMd className="text-white mr-2" />
              <Link
                to="/"
                className="text-white rounded-md px-3 py-2 text-xl font-medium"
                aria-current="page"
              >
                Dr. Priyanka Maurya
              </Link>
            </div>
            <div className="hidden sm:flex ml-auto">
              <div className="flex items-center space-x-4 sm:space-x-10">
                <Link
                  to="/"
                  className="text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Appointment
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Service
                </Link>
                <Link
                  to="/calendar"
                  className="text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Blog
                </Link>
                <Link
                  to="/calendar"
                  className="text-white border-2 border-white hover:bg-blue-800 hover:text-white rounded-full px-3 py-2 text-sm font-medium"
                >
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
    </nav>
  );
}

export default Navbar;
