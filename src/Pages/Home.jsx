import React from "react";
import { motion } from "framer-motion";
import Navbars from "../components/Navbars";
import HomePhoto from "../assets/HomePhoto.png";

const Home = () => {
  return (
    <>
      <div className="w-screen bg-[#F3F1EF]">
        <motion.div
          className="container mx-auto p-4 flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 1 }}
        >
          <div className="left-side w-full md:w-1/2 mb-8 md:mb-0 md:ml-[-1.8rem]">
            <img 
              src={HomePhoto} 
              alt="Home" 
              className="w-full h-auto lg:h-[38rem] lg:w-auto 3xl:h-[42rem] 3xl:w-auto" 
            />
          </div>

          <div className="right-side w-full md:w-1/2 lg:w-[80%] p-4 flex flex-col md:items-start text-center md:text-left lg:ml-24 3xl:ml-32">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 lg:text-[4.4rem] lg:mt-20 lg:mb-10 3xl:text-[4.4rem]">
              HEY THERE!
            </h1>
            <p className="text-2xl md:text-3xl mb-4 lg:text-[4.4rem] lg:mt-6 3xl:text-[4.4rem]">
              I'M{" "}
              <span className="bg-black text-white rounded-md px-2 py-1">
                ANURAG_TUPKAR
              </span>
            </p>
            <p className="text-lg md:text-xl font-bold tracking-widest mb-4 lg:text-3xl lg:tracking-[0.3em] lg:mt-6 3xl:text-3xl">
              Front-end Developer
            </p>
            <p className="text-xl md:text-2xl lg:mt-24 lg:text-4xl lg:tracking-widest leading-relaxed 3xl:text-4xl">
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
