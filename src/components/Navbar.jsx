import React, { useState } from "react";
import { FaBell, FaComments, FaSignOutAlt, FaVideo } from "react-icons/fa";
import profile from "../assets/Profile.png";

const Navbar = ({ open }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleProfileClick = () => {
    toggleMenu();
  };
  return (
    <div>
      <nav
        className={`${
          open
            ? "fixed top-0 right-0 left-[20%] px-2 py-2 flex w-[80%]"
            : "fixed top-0 right-0 left-[8%] px-2 py-2 flex w-[92%]"
        } duration-500 z-10  border-b h-12 border-custom-green justify-end items-center bg-white`}
      >
        <div className="flex items-center gap-5">
          <FaVideo className="text-xl cursor-pointer" />
          <FaBell className="text-xl cursor-pointer" />
          <FaComments className="text-xl cursor-pointer" />
          <FaSignOutAlt className="text-xl cursor-pointer" />
          <div className="relative">
            <img
              src={profile}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={handleProfileClick}
            />

            {/* Profile Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-custom-orange"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-custom-orange"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-custom-orange"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;