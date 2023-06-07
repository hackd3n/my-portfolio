import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { motion } from "framer-motion"
import { Link, Routes, Route } from 'react-router-dom';
import arrowLeft from '../assets/Asset 2.svg';
import arrowRight from '../assets/Asset 3.svg';

function HomeMenu({ onItemClick }) {

  return (

        <div className='m-auto text-center'>
            <h1 className='font-bold uppercase m-auto text-6xl mb-4'><span className='text-effect'>I am</span> Denis Hackett</h1>
            <p className='m-auto block'>I am a creative computing specialist, UX/UI developer & iOS developer.</p>
            
            
            <nav className='m-auto w-full border-t-2 border-black mt-4 inline-flex place-content-center'>
                <img src={arrowLeft} alt='arrow pointing right' className='w-[25px]'/>
                <ul className='inline-flex w-full gap-2  p-4 justify-center items-center'>
                    <li className='mx-auto ' onClick={onItemClick} >my projects</li>
                    <Link to='/about'><li className='mx-auto'>about me</li></Link>
                    <Link to='/contact'><li className='mx-auto'>contact me</li></Link>
                </ul>
                <img src={arrowRight} alt='arrow pointing left' className='w-[25px]' />
            </nav>
        </div>



  );
};

export default HomeMenu;
