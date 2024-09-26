import React from "react";
import Portfolio from "../assets/Portfolio.png";
const Work = () => {
  return (
    <>
      <div className="flex h-screen w-screen bg-[#B9B6B6]">
      <div className="w-[60%] flex items-center justify-center">
        <img
          src={Portfolio}
          alt="Portfolio Snapshot"
          className=" rounded-lg shadow-md"
        />
      </div>
        <div className="w-[40%]">
          <h1 className=" text-white text-2xl p-2 rounded-md items-center text-center mt-24">
            <span className="bg-black p-2 rounded-md ">MY WORKS</span>
          </h1>

          <h1 className="mt-8 font-bold text-4xl ">PERSONAL PORTFOLIO</h1>
          <h3 className=" text-white text-2xl text-justify mt-8 w-96 ">
            Personal Portfolio Responsive Website, To Showcase The Skills,
            Accomplishments
          </h3>

          <div className="flex gap-8 mt-4">
            <button className="outline rounded-md py-2 px-12">View</button>
            <button className="outline rounded-md py-2 px-12">Code</button>
          </div>
          <h1 className="font-bold mt-2">TECHSTACK USED</h1>
          <div className="h-8 w-24 bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Work;
