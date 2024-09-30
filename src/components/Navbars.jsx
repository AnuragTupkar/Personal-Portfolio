import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen bg-[#F3F1EF]">
      <div className="normalFont pt-8 pb-6 mx-5 lg:ml-28 lg:mr-40 ">
        <div className="flex justify-between items-center">
          <motion.div
            className="logo text-xl  "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ANURAG
          </motion.div>
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </motion.button>
          </div>
          {/* Menu items for medium and large screens */}
          <motion.div
            className="hidden md:flex gap-8 font-light md:ml-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink to="/work" >Work</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </motion.div>
        </div>
        {/* Dropdown menu for mobile */}
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col items-end mt-4 space-y-2 "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 12, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <NavLink>Work</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
