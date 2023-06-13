
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import TransitionalRoutes from './TransitionalRoutes';

import React, { useEffect, useState } from 'react';
import './components/HomePage.css';

function App() {

  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const offsetX = Math.random() * window.innerWidth;
      const offsetY = Math.random() * window.innerHeight;
      setRipples((prevRipples) => [...prevRipples, { x: offsetX, y: offsetY }]);
    }, 2000); // Adjust the interval (in milliseconds) between each ripple

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleAnimationEnd = (index) => {
    setRipples((prevRipples) => prevRipples.filter((_, i) => i !== index));
  };
  return (



<div className="home-page flex">
      <div className="background">
        {ripples.map((ripple, index) => (
          <span
            key={index}
            className="ripple"
            style={{ left: ripple.x, top: ripple.y }}
            onAnimationEnd={() => handleAnimationEnd(index)}
          />
        ))}
      </div>
      <div className="content bg-white md:w-[800px] h-[600px] md:h-[500px] m-auto flex overflow-hidden">
               
      <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 0.5 }}
              className='m-auto flex place-content-center'>
                <TransitionalRoutes /></motion.div>
                </div>
</div>





  );
}

export default App;
