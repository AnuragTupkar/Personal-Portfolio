// Home.js
import React from 'react';
import { motion } from 'framer-motion';
import Navbars from "../components/Navbars";
import HomePhoto from "../assets/HomePhoto.png";

const Home = () => {
  return (
    <>
 
    <Navbars />
    <div className="">
    <motion.div
        className="container mx-auto p-4 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 1 }}
      >
        <div className="left-side w-full  md:w-1/2 mb-8 md:mb-0">
          <img src={HomePhoto} alt="Home" className="w-full h-auto" />
        </div>

        <div className="right-side w-full md:w-1/2 p-4 flex flex-col items-center md:items-start text-center md:text-left lg:mx-28">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 lg:text-6xl lg:mt-20">
            HEY THERE!
          </h1>
          <p className="text-2xl md:text-3xl mb-4 lg:text-5xl lg:mt-6">
            I'M{" "}
            <span className="bg-black text-white rounded-md px-2 py-1">
              ANURAG_TUPKAR
            </span>
          </p>
          <p className="text-lg md:text-xl font-bold tracking-widest mb-4 lg:text-2xl lg:tracking-[0.3em] lg:mt-4">
            Front-end Developer
          </p>
          <p className="text-xl md:text-2xl lg:mt-24 lg:text-4xl lg:tracking-widest leading-relaxed">
            Turning your <span className="font-bold">vision</span> into a{" "}
            <span className="font-bold">reality</span> with responsive{" "}
            <span className="font-bold">web design.</span>
          </p>
        </div>
      </motion.div>
    </div>
     
      
     
    </>
  );
};

export default Home;
