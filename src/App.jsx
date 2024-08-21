// App.js or ParentComponent.js
import React, { useState } from 'react';
import Intro from './components/Intro';
import Home from './Pages/Home';

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <>
      {!introComplete && <Intro onIntroComplete={handleIntroComplete} />}
      {introComplete && <Home />}
    </>
  );
};

export default App;
