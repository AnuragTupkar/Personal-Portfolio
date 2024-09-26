// App.js or ParentComponent.js
import React, { useState } from 'react';
import Intro from './components/Intro';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <>
      {!introComplete && <Intro onIntroComplete={handleIntroComplete} />}
      {introComplete && <Home />}
      {introComplete && <About/>}
      {introComplete && <Work/>}
    </>
  );
};

export default App;
