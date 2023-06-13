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
        <div className="md:flex m-auto p-4 md:p-10 md:space-x-10">
        <div className="flex w-1/3 max-md:p-2 max-md:mx-auto md:w-1/2 ">
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
