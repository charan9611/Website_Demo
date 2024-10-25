import React from 'react';
import logo from '../../assets/images/Logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-50 bg-transparent p-4 mb-8 backdrop-blur-md"> {/* Added backdrop-blur-md for better visibility */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Terms and Conditions</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Services offered</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Projects and Reports</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Announcements</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Consultancy</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Help Desk</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>
        {/* Logo or Image */}
        <img src={logo} alt="Exe Factor Logo" className="mr-2 h-10 rounded-badge" />
        <a className="text-xl font-bold cursor-pointer text-black">EFAH</a> {/* Changed text color to white */}
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black font-semibold"> {/* Changed text color to white */}
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-blue-500">Services offered</a></li>
            <li><a href="#" className="hover:text-blue-500">Projects and Reports</a></li>
            <li><a href="#" className="hover:text-blue-500">Announcements</a></li>
            <li><a href="#" className="hover:text-blue-500">Consultancy</a></li>
            <li><a href="#" className="hover:text-blue-500">Help Desk</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <a className="bg-white text-blue-500 font-bold hover:bg-slate-500 hover:text-white px-3 py-2 rounded-md duration-300" href="#">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
