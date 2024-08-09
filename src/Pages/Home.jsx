import React from "react";
import Navbars from "../components/Navbars";
import Intro from "../components/Intro";
import HomePhoto from "../assets/HomePhoto.png";
const Home = () => {
  return (
    <>
      <div className="bg-[#F3F1EF]">
      <Intro />
      <Navbars />
      <div className="flex justify-between mx-14 ">
        <div className="ml-6 mt-24">
          <div className="left-upper">
            <h2 className="text-6xl mt-8">HEY THERE!</h2>
            <h1 className="text-7xl mt-8">
              I'M{" "}
              <span className="bg-black text-white p-2 rounded-sm">
                ANURAG TUPKAR
              </span>
            </h1>
            <h6 className="text-4xl mt-8 tracking-[0.5rem]">
              FRONTEND DEVLOPER
            </h6>
          </div>
          <div className="left-bottom mt-28">
            <p className="text-4xl leading-[2.8rem]">
              Turning your vision<br/> into a reality with <br/> responsive web design.
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-[40.25rem] w-min-[100%]">

          <img className="" src={HomePhoto} />
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Home;
