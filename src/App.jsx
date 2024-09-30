// App.js or ParentComponent.js
import React, { useState } from "react";
import Intro from "./components/Intro";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Navbar from "./components/Navbars";
import GetInTouch from "./Pages/GetInTouch";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <>
      <div className="w-full overflow-hidden ">
        {!introComplete && <Intro onIntroComplete={handleIntroComplete} />}
        {introComplete && <Navbar />}
        {introComplete && <Home />}
        {introComplete && <About />}
        {introComplete && <Work />}
        {introComplete && <GetInTouch />}
      </div>
      <Routes>
        <Route to="/work" Component={<Work/>}/>
      </Routes>
    </>
  );
};

export default App;
