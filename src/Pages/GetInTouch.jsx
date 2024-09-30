import React, { useState, useEffect, useRef } from "react";
import GetInTouchPic from "../assets/GetInTouch.png";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const GetInTouch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const getInTouchRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after visible
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% is visible
    );

    if (getInTouchRef.current) {
      observer.observe(getInTouchRef.current);
    }

    return () => {
      if (getInTouchRef.current) {
        observer.unobserve(getInTouchRef.current);
      }
    };
  }, []);

  return (
    <div ref={getInTouchRef} className="bg-gray-100 pt-16">
      <div className="main-div flex flex-col md:flex-row bg-gray-100 p-10 w-screen mt-16 md:h-auto">
        {/* Left Image Section */}
        <motion.div
          className="flex-1 md:block hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={GetInTouchPic}
            alt="Get in Touch"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          className="flex-1 rounded-lg p-8 md:ml-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-5 bg-black md:inline text-white p-4 rounded justify-center flex">
            GET IN TOUCH
          </h2>

          {/* Image for small screens */}
          <div className="flex-1 md:hidden">
            <img
              src={GetInTouchPic}
              alt="Get in Touch"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="mb-5 mt-8">
            Hello there! If you have any questions, collaboration ideas, or just
            want to say hi, feel free to get in touch with me. I'd be thrilled
            to hear from you!
          </p>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-lg w-full p-2"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-lg w-full p-2"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Your Phone no.
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-gray-300 rounded-lg w-full p-2"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="border border-gray-300 rounded-lg w-full p-2"
                placeholder="Type your message here..."
                rows="4"
              />
            </div>

            <div className="md:flex md:items-center">
  
              <div className="w-full flex justify-center md:justify-start mb-4 md:mb-0">
                <button className="bg-black text-white rounded-lg px-6 py-2 hover:bg-white hover:text-black hover:outline hover:outline-1">
                  SEND
                </button>
              </div>

      
              <div className="flex gap-4 justify-center md:justify-end w-full md:w-auto flex-nowrap">
                <div className="hidden md:block"><SocialIcon className="hidden md:block"url="https://www.instagram.com" /></div>
                
                <SocialIcon url="https://www.github.com" />
                <SocialIcon url="mailto:example@email.com" />
                <SocialIcon url="https://www.twitter.com" />
                <SocialIcon url="https://www.linkedin.com" />
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
