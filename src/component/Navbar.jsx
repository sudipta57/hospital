import { useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white py-4 h-auto shadow-md">
        <div className=" mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="text-3xl font-bold text-blue-900">
            <span>MED</span>
            <span className="text-blue-500">DICAL</span>
          </div>

          {/* Info Section */}
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-8 text-sm text-gray-700">
            {/* Emergency */}
            <div className="flex items-center space-x-2">
              <img
                src="/landing/emer.png"
                alt="Emergency Icon"
                className="w-8 h-8"
              />
              <div>
                <p className="font-semibold">EMERGENCY</p>
                <p className="text-blue-500">(237) 681-812-255</p>
              </div>
            </div>

            {/* Work Hour */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <img
                src="/landing/work.png"
                alt="Work Hour Icon"
                className="w-8 h-8"
              />
              <div>
                <p className="font-semibold">WORK HOUR</p>
                <p className="text-blue-500">09:00 - 20:00 Everyday</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <img
                src="/landing/location.png"
                alt="Location Icon"
                className="w-8 h-8"
              />
              <div>
                <p className="font-semibold">LOCATION</p>
                <p className="text-blue-500">110025-New Delhi, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-[#053F94] p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Menu (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white font-semibold hover:text-[#58B7FF]"
            >
              HOME
            </Link>
            <Link
              to="about-us"
              className="text-white font-semibold hover:text-[#58B7FF]"
            >
              ABOUT US
            </Link>
            <Link
              to="our-service"
              className="text-white font-semibold hover:text-[#58B7FF]"
            >
              SERVICES
            </Link>
            <Link
              to="our-doctors"
              className="text-white font-semibold hover:text-[#58B7FF]"
            >
              DOCTORS
            </Link>
            <Link
              to={"/our-news"}
              className="text-white font-semibold hover:text-[#58B7FF]"
            >
              NEWS
            </Link>
            <Link
              to="/our-contact"
              className="text-white font-semibold hover:text-[#58B7FF]"
            >
              CONTACT
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Icon */}
            <FaSearch className="text-white text-lg cursor-pointer" />

            {/* Appointment Button */}
            <Link
              to="/our-appointment"
              className="bg-[#A8C8FF] text-blue-900 font-semibold px-4 py-2 rounded-full hover:bg-[#58B7FF] hover:text-white"
            >
              Appointment
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
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
                className="text-white font-semibold hover:text-[#58B7FF]"
                onClick={toggleMenu}
              >
                HOME
              </Link>
              <Link
                to="about-us"
                className="text-white font-semibold hover:text-[#58B7FF]"
                onClick={toggleMenu}
              >
                ABOUT US
              </Link>
              <Link
                to="our-service"
                className="text-white font-semibold hover:text-[#58B7FF]"
                onClick={toggleMenu}
              >
                SERVICES
              </Link>
              <Link
                to="our-doctors"
                className="text-white font-semibold hover:text-[#58B7FF]"
                onClick={toggleMenu}
              >
                DOCTORS
              </Link>
              <Link
                to={"/our-news"}
                className="text-white font-semibold hover:text-[#58B7FF]"
                onClick={toggleMenu}
              >
                NEWS
              </Link>
              <Link
                to="/our-contact"
                className="text-white font-semibold hover:text-[#58B7FF]"
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
              <div className="flex justify-center items-center space-x-4 mt-4">
                {/* Search Icon */}
                <FaSearch className="text-white text-lg cursor-pointer" />
                {/* Appointment Button */}
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
