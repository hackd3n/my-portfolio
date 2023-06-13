import React, { useState } from 'react';
import './HomePage.css';
import { motion } from 'framer-motion';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import arrowLeft from '../assets/Asset 2.svg';
import arrowRight from '../assets/Asset 3.svg';

function ProjectsMenu({ onItemClick }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [projectView, setProjectView] = useState('');

  const toggleSubList = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const resetProjectView = () => {
    setActiveIndex(-1);
    setProjectView('');
  };

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.5 }}
      className='max-h-[320px]'
    >
      <div className='text-center'>
        <h1 className='font-bold uppercase m-auto text-4xl mb-4'>
          <span className='text-effect'>The</span> Projects
        </h1>
        <p className='m-auto block text-sm'>
          This projects are both personal and work projects utilising my skills in design, web and software developement.
        </p>

        <nav>
          <div className='m-auto w-full border-t-2 border-black mt-4 inline-flex place-content-center pb-2 max-h-[200px]'>
            <img src={arrowLeft} alt='arrow pointing right' className='w-[25px]' />
            <ul className='w-full  p-4 justify-center items-center space-y-2'>

                  <li>
                    <a href='https://denishackett.com/work/partumes'>
                      partum_es
                    </a>
                  </li>

                  <li>
                    <Link to='/project/axs-signature'>
                      AXS - Signature
                    </Link>
                  </li>
                  <li>
                    <Link to='/project/learner-portal'>
                      Diversity and Ability
                    </Link>
                  </li>
        
                  <li>
                    <a href='https://medium.com/@dhack001/developing-a-stem-player-74781b9f5739' >
                      Stem Player
                    </a>
                  </li>
                  <li>
                    <Link to='/project/lyre'>
                      Lyre
                    </Link>
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
