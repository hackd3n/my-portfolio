import React from 'react';
import profile from '../assets/me.webp';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';
function AboutPage() {

    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
  return (
    <div className="flex m-auto p-10 space-x-10">
      <div className="flex w-1/2">
        <img src={profile} alt="my logo image of initials DH" className="object-contain mx-auto" />
      </div>
      <div className="w-1/2 place-content-center  m-auto">
        <div className="w-full text-justify text-sm overflow-y-scroll max-h-[320px] space-y-6 px-4">
            <div className=''>
                <h1 className="font-bold uppercase m-auto text-4xl mb-4 text-center">
                    <span className="text-effect"> About</span> me
                </h1>
            </div>

          <p>
            Hi! I'm Denis, a freelance front-end developer specialising in e-commerce websites,
            architecture, beauty, health, and wellness. In my spare time, I'm working on a
            customisable music consumption project.
          </p>
          <p>
            Before starting my Creative Computing studies at Goldsmiths University in London, I had
            a background in marketing and content creation. I've utilized my creative skills in
            developing marketing campaigns and creating engaging content across various platforms.
          </p>
          <p>
            Throughout my journey, I've discovered my passion for utilising technological
            advancements and thoughtful design to create more opportunities and enhance everyday
            life. I believe that through creativity and technology, we can make a positive impact
            and improve the way people interact with the world.
          </p>
          <p>
            As a front-end developer, my goal is to leverage my skills and expertise to craft
            user-centred experiences that not only meet the needs of users but also bring joy and
            efficiency to their daily lives. I strive to blend creativity, functionality, and
            technology to create solutions that make a difference.
          </p>
          <p>
            Thank you for taking the time to learn a bit about me. If you have any questions or if
            there's anything I can assist you with, feel free to reach out.
          </p>
        </div>
        <div className='w-full flex'>
        <button onClick={goBack} className='my-2 mx-auto text-center bg-black text-white hover:bg-customGreen hover:underline'>go back</button>
        </div>
       
      </div>
    </div>
  );
}

export default AboutPage;
