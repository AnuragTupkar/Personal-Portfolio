import React, { useState } from "react";
import HomePhoto from "../assets/HomePhoto.png";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const About = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <div
      className="flex flex-col lg:flex-row h-screen w-screen px-4 lg:px-0"
      onMouseEnter={handleMouseEnter}
    >
      {/* Text Section with Animation */}
      <motion.div
        className="w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start mt-10 lg:mt-20 lg:ml-28 text-center lg:text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }} // Animate when hovered
      >
        <p className="text-white bg-black inline-block p-2 text-3xl md:text-4xl font-bold lg:text-6xl  rounded-md">
          About Me
        </p>

        {/* Image for Small Screens - Below "About Me" but Above "Hello! I'm Anurag Tupkar" */}
        <div className="flex justify-center mt-6 lg:hidden">
          <motion.img
            src={HomePhoto}
            alt="Anurag Tupkar"
            className="w-64 md:w-80 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={hovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }} // Animate when hovered
          />
        </div>

        <motion.h1
          className="mt-6 md:mt-10 lg:mt-12 text-3xl md:text-4xl lg:text-5xl font-semibold"
          initial={{ opacity: 0, y: -30 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }} // Animate when hovered
        >
          Hello! I'm Anurag Tupkar
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl mt-2 lg:mt-4 text-gray-700"
          initial={{ opacity: 0, y: -30 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }} // Animate when hovered
        >
          FullStack Developer
        </motion.h2>

        <motion.p
          className="mt-6 md:mt-8 lg:mt-10 text-justify lg:text-left text-base md:text-lg lg:text-lg w-full lg:w-[80%] mx-auto lg:mx-0"
          initial={{ opacity: 0, y: -30 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }} // Animate when hovered
        >
          A passionate and dedicated web developer with a keen eye for detail and a love for crafting clean, efficient code. I've honed my skills in the MERN stack, working on projects ranging from dynamic websites to complex web applications. My journey in web development has been fueled by a desire to create user-friendly and visually appealing digital experiences.
        </motion.p>

        {/* Social Icons for Small Screens */}
        <div className="mt-8 md:mt-10 lg:hidden flex justify-center gap-4">
          {["https://www.instagram.com", "https://www.github.com", "mailto:example@email.com", "https://www.twitter.com", "https://www.linkedin.com"].map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }} // Staggered animation
            >
              <SocialIcon url={url} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image and Social Icons for Larger Screens */}
      <motion.div
        className="hidden lg:flex flex-col lg:flex-row w-full lg:w-[50%] items-center justify-center mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }} // Animate when hovered
      >
        <motion.img
          src={HomePhoto}
          alt="Anurag Tupkar"
          className="w-64 md:w-80 lg:w-96 mb-6 lg:mb-0 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }} // Animate when hovered
        />

        {/* Social Icons for Larger Screens */}
        <div className="hidden lg:flex flex-col items-center ml-8 gap-6 mt-8 lg:mt-0">
          {["https://www.instagram.com", "https://www.github.com", "mailto:example@email.com", "https://www.twitter.com", "https://www.linkedin.com"].map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }} // Staggered animation
            >
              <SocialIcon url={url} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
