import React, { useState } from 'react';
import './HomePage.css';
import { motion } from 'framer-motion';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import arrowLeft from '../assets/Asset 2.svg';
import arrowRight from '../assets/Asset 3.svg';

function ProjectsMenu({ onItemClick }) {
  const [showSubList, setShowSubList] = useState([false, false, false, false]);

  const toggleSubList = (index) => {
    setShowSubList((prevShowSubList) => {
      const updatedShowSubList = [...prevShowSubList];
      updatedShowSubList[index] = !updatedShowSubList[index];
      return updatedShowSubList;
    });
  };

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.5 }}
      className=''
    >
      <div className='text-center'>
        <h1 className='font-bold uppercase m-auto text-4xl mb-4'>
          <span className='text-effect'>The</span> Projects
        </h1>
        <p className='m-auto block text-sm'>
          The projects I have participated in have been creative. Following music, games, design, beauty, wellness
        </p>

        <nav>
          <div className='m-auto w-full border-t-2 border-black mt-4 inline-flex place-content-center pb-2'>
            <img src={arrowLeft} alt='arrow pointing right' className='w-[25px]' />
            <ul className='w-full gap-4 grid grid-rows-3 p-4 justify-center items-center'>
              <li className='mx-auto'>
                <button className='focus:outline-none' onClick={() => toggleSubList(0)}>
                  ux/ui design
                </button>
                <ul className={showSubList[0] ? 'block' : 'hidden'}>
                  <li>AXS - Signature</li>
                  <li>Diversity and Ability</li>
                  <li>partum_es</li>
                </ul>
              </li>
              <li className='mx-auto'>
                <button className='focus:outline-none' onClick={() => toggleSubList(1)}>
                  web & software development
                </button>
                <ul className={showSubList[1] ? 'block' : 'hidden'}>
                  <li>AXS - Signature</li>
                  <li>Diversity and Ability</li>
                </ul>
              </li>
              <li className='mx-auto'>
                <button className='focus:outline-none' onClick={() => toggleSubList(2)}>
                  physical computingdd
                </button>
                <ul className={showSubList[2] ? 'block' : 'hidden'}>
                  <li>Stem Player</li>
                </ul>
              </li>
              <li className='mx-auto'>
                <button className='focus:outline-none' onClick={() => toggleSubList(3)}>
                  iOS Development
                </button>
                <ul className={showSubList[3] ? 'block' : 'hidden'}>
                  <li>Lyre - dynamic music consumption</li>
                </ul>
              </li>
            </ul>
            <img src={arrowRight} alt='arrow pointing left' className='w-[25px]' />
          </div>

          <button onClick={onItemClick} className='bg-black text-white hover:bg-customGreen hover:underline'>
            Go Back
          </button>
        </nav>
      </div>
    </motion.div>
  );
}

export default ProjectsMenu;
