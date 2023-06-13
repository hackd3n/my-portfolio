import React, { useState } from 'react';
import './HomePage.css';
import { motion } from 'framer-motion';
import myLogo from '../assets/initial.png';
import { Link, useNavigate } from 'react-router-dom';
import HomeMenu from './HomeMenu';
import ProjectsMenu from './ProjectsMenu';

function HomePage() {
  const [showHomeMenu, setHomeMenu] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    if(showHomeMenu){
        setHomeMenu(false);
    }
    else{
        setHomeMenu(true);
    }

  };

  return (
        <div className="flex m-auto p-10 space-x-10">
        <div className="md:flex md:w-1/2 ">
            <img src={myLogo} alt="my logo image of initials DH" className="object-contain mx-auto " />
        </div>
        <div className="md:w-1/2 place-content-center flex">
            {showHomeMenu ? (
            <HomeMenu onItemClick={handleClick} />
            ) : (
            <ProjectsMenu onItemClick={handleClick} />
            )}
        </div>
        </div>


  );
}

export default HomePage;
