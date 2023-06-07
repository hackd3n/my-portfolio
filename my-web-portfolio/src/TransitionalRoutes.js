import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import your route components
import Home from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import ProjectView from './components/ProjectView';

function TransitionalRoutes({ projects }) {
  const location = useLocation();

  return (
    <AnimatePresence on='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:projectId" element={<ProjectView />} />
      </Routes>
    </AnimatePresence>
  );
}

export default TransitionalRoutes;
