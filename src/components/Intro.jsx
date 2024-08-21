// Intro.js
import React, { useState, useEffect } from 'react';

const Intro = ({ onIntroComplete }) => {
  const [greet, setGreet] = useState("Hello");
  const greeting = [
    "Hello",        // English
    "नमस्कार",      // Marathi
    "Ciao",         // Italian
    "Hola",         // Spanish
    "नमस्ते",       // Hindi
    "Bonjour",      // French
    "Hallo",        // German
    "こんにちは",    // Japanese (Konnichiwa)
    "안녕하세요",     // Korean (Annyeonghaseyo)
    "Olá",          // Portuguese
    "Привет",       // Russian (Privet)
    "مرحبا",        // Arabic (Marhaban)
    "Χαίρετε",      // Greek (Chairete)
    "你好",          // Chinese (Nǐ hǎo)
    "வணக்கம்",      // Tamil (Vanakkam)
  ];
  
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const greetInterval = setInterval(() => {
      if (index < greeting.length - 1) {
        setGreet(greeting[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(greetInterval);
        setTimeout(() => {
          setShow(false);
          onIntroComplete(); // Notify parent component that Intro is complete
        }, 200);
      }
    }, 200);

    return () => clearInterval(greetInterval);
  }, [index, greeting, onIntroComplete]);

  return (
    <div
      className={`w-screen bg-black font-thin text-white flex justify-center items-center mainFont transition-all duration-700 ease-in-out overflow-hidden ${show ? 'h-screen' : 'h-0'}`}
    >
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
        {greet}
      </h1>
    </div>
  );
};

export default Intro;
