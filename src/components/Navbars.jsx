import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="normalFont mt-8 mb-6 mx-5 lg:mx-28 ">
      <div className="flex justify-between items-center">
        <motion.div 
          className="logo text-xl"
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
          <h1>Work</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </motion.div>
      </div>
      {/* Dropdown menu for mobile */}
      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-end mt-4 space-y-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 12, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Work</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
