import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the current route matches the menu item
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Header Section */}
      <header className="bg-white py-4 h-auto shadow-md">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <h2 className="text-3xl font-[400] text-[#1F2B6C] font-yeseva">
            <span>MED</span>
            <span className="text-[#159EEC]">DICAL</span>
          </h2>
          {/* Info Section */}
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-8 text-sm text-gray-700">
            {/* Emergency */}
            <div className="flex items-center space-x-2">
              <img
                src="/landing/emer.png"
                alt="Emergency Icon"
                className="w-8 h-8"
              />
              <div className="text-[14px] font-[500] font-poppins">
                <p className=" text-[#1F2B6C]">EMERGENCY</p>
                <p className="text-[#159EEC]">(237) 681-812-255</p>
              </div>
            </div>

            {/* Work Hour */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <img
                src="/landing/work.png"
                alt="Work Hour Icon"
                className="w-8 h-8"
              />
              <div className="text-[14px] font-[500] font-poppins">
                <p className=" text-[#1F2B6C]">WORK HOUR</p>
                <p className="text-[#159EEC]">09:00 - 20:00 Everyday</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <img
                src="/landing/location.png"
                alt="Location Icon"
                className="w-8 h-8"
              />
              <div className="text-[14px] font-[500] font-poppins">
                <p className=" text-[#1F2B6C]">LOCATION</p>
                <p className="text-[#159EEC]">110025-New Delhi, Noida</p>
              </div>
            </div>
        </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#002B9A] p-4 ">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          {/* Menu (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8 text-[18px] font-[600] font-poppins">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-white" : "text-[#BFD2F8]"
              } font-semibold hover:text-white`}
            >
              HOME
            </Link>
            <Link
              to="/about-us"
              className={`${
                isActive("/about-us") ? "text-white" : "text-[#BFD2F8]"
              } font-semibold hover:text-white`}
            >
              ABOUT US
            </Link>
            <Link
              to="/our-service"
              className={`${
                isActive("/our-service") ? "text-white" : "text-[#BFD2F8]"
              } font-semibold hover:text-white`}
            >
              SERVICES
            </Link>
            <Link
              to="/our-doctors"
              className={`${
                isActive("/our-doctors") ? "text-white" : "text-[#BFD2F8]"
              } font-semibold hover:text-white`}
            >
              DOCTORS
            </Link>
            <Link
              to="/our-news"
              className={`${
                isActive("/our-news") ? "text-white" : "text-[#BFD2F8]"
              } font-semibold hover:text-white`}
            >
              NEWS
            </Link>
            <Link
              to="/our-contact"
              className={`${
                isActive("/our-contact") ? "text-white" : "text-[#BFD2F8]"
              } font-semibold hover:text-white`}
            >
              CONTACT
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <FaSearch className="text-white text-lg cursor-pointer" />
            <Link
              to="/our-appointment"
              className="bg-[#BFD2F8] w-[177px] h-[50px] text-[#1F2B6C] text-[14px] font-[500] font-poppins rounded-full flex items-center justify-center"
            >
              Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex justify-end w-full">
            <button
              className="text-white text-2xl focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden inset-0 bg-[#053F94] p-4 z-50">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={toggleMenu}
            >
              ✕
            </button>
            <div className="flex flex-col space-y-4 text-center h-full justify-center">
              <Link
                to="/"
                className={`${
                  isActive("/") ? "text-white" : "text-[#BFD2F8]"
                } font-semibold hover:text-white`}
                onClick={toggleMenu}
              >
                HOME
              </Link>
              <Link
                to="/about-us"
                className={`${
                  isActive("/about-us") ? "text-white" : "text-[#BFD2F8]"
                } font-semibold hover:text-white`}
                onClick={toggleMenu}
              >
                ABOUT US
              </Link>
              <Link
                to="/our-service"
                className={`${
                  isActive("/our-service") ? "text-white" : "text-[#BFD2F8]"
                } font-semibold hover:text-white`}
                onClick={toggleMenu}
              >
                SERVICES
              </Link>
              <Link
                to="/our-doctors"
                className={`${
                  isActive("/our-doctors") ? "text-white" : "text-[#BFD2F8]"
                } font-semibold hover:text-white`}
                onClick={toggleMenu}
              >
                DOCTORS
              </Link>
              <Link
                to="/our-news"
                className={`${
                  isActive("/our-news") ? "text-white" : "text-[#BFD2F8]"
                } font-semibold hover:text-white`}
                onClick={toggleMenu}
              >
                NEWS
              </Link>
              <Link
                to="/our-contact"
                className={`${
                  isActive("/our-contact") ? "text-white" : "text-[#BFD2F8]"
                } font-semibold hover:text-white`}
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
              <div className="flex justify-center items-center space-x-4 mt-4">
                <FaSearch className="text-white text-lg cursor-pointer" />
                <Link
                  to="/our-appointment"
                  className="bg-[#A8C8FF] text-blue-900 font-semibold px-4 py-2 rounded-full hover:bg-[#58B7FF] hover:text-white"
                  onClick={toggleMenu}
                >
                  Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
