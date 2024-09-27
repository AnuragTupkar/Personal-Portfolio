import React, { useState } from "react";
import Portfolio from "../assets/Portfolio.png";
import { motion } from "framer-motion";

const Work = () => {
  const [isVisible, setIsVisible] = useState(false); // Use to control visibility

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  return (
    <div
      className="flex flex-col md:flex-row h-screen w-screen bg-[#B9B6B6]"
      onMouseEnter={handleMouseEnter}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-[60%] flex justify-center md:justify-end items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={Portfolio}
          alt="Portfolio Snapshot"
          className="rounded-lg shadow-md max-w-full md:max-w-none hidden md:block"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-full md:w-[40%] flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-white text-2xl p-2 rounded-md text-center md:text-left mt-8 md:mt-24"
          initial={{ scale: 0.9 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-black p-2 rounded-md">MY WORKS</span>
        </motion.h1>

        <motion.img
          src={Portfolio}
          alt="Portfolio Snapshot"
          className="rounded-lg shadow-md max-w-80 md:max-w-none md:hidden mt-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Project Title */}
        <motion.h1
          className="mt-8 font-bold text-3xl md:text-4xl text-center md:text-left"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          PERSONAL PORTFOLIO
        </motion.h1>

        {/* Description */}
        <motion.h3
          className="text-white text-lg md:text-2xl text-center md:text-left mt-8 w-[90%] md:w-96"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Personal Portfolio Responsive Website, To Showcase The Skills,
          Accomplishments.
        </motion.h3>

        {/* Buttons */}
        <div className="flex gap-4 md:gap-32 mt-8 justify-center w-full">
          <motion.button
            className="outline rounded-md py-2 px-8 md:px-12"
            initial={{ scale: 0.95 }}
            animate={isVisible ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            View
          </motion.button>
          <motion.button
            className="outline rounded-md py-2 px-8 md:px-12"
            initial={{ scale: 0.95 }}
            animate={isVisible ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            Code
          </motion.button>
        </div>

        {/* Tech Stack */}
        <motion.h1
          className="font-bold mt-8 text-3xl md:text-4xl text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          TECHSTACK USED
        </motion.h1>
        <motion.div
          className="h-24 bg-white mt-8 w-[100%] mx-auto"
          initial={{ scale: 0.8 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.8 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Work;
