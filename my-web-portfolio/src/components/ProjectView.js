import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import projects from './Projects';
import ImageSlideshow from './ProjectImageSlide';
import './HomePage.css';

const ProjectView = () => {
  const { projectId } = useParams();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const scrollingDivRef = useRef(null);
  const navigate = useNavigate(); // Move useNavigate outside of the useEffect hook

  useEffect(() => {
    const scrollingDiv = scrollingDivRef.current;

    const handleScroll = () => {
      const currentPosition = scrollingDiv.scrollTop;
      setScrollPosition(currentPosition);

      const paragraphElements = scrollingDiv.querySelectorAll('p');
      const { top: containerTop } = scrollingDiv.getBoundingClientRect();

      let newParagraphIndex = 0;
      let minDistance = Number.MAX_VALUE;

      paragraphElements.forEach((paragraph, index) => {
        const { top } = paragraph.getBoundingClientRect();
        const distance = Math.abs(containerTop + top);

        if (distance < minDistance) {
          minDistance = distance;
          newParagraphIndex = index;
        }
      });

      setCurrentParagraphIndex(newParagraphIndex);
    };

    scrollingDiv.addEventListener('scroll', handleScroll);

    return () => {
      scrollingDiv.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, techStack, images, text, link } = project;

  const goBack = () => {
    navigate(-1); // Call the navigate function directly
  };

  return (
    <div>
      <div className="flex m-auto p-10 space-x-10 justify-center items-center">
        <div className="w-1/2 max-h-[320px]">
          <ImageSlideshow currentPosition={currentParagraphIndex} />
        </div>
        <div className="w-1/2 m-auto">
          <div className="overflow-y-scroll max-h-[320px] items-center" ref={scrollingDivRef}>
            <h1 className="font-bold uppercase m-auto text-4xl mb-4 text-center">{title}</h1>
            <h2>Tech Stack:</h2>
            <ul className="bg-black text-white inline flex gap-2 text-sm py-2">
              {techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="space-y-8 py-2">
              {text.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex mt-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-customGreen text-white underline m-2 mx-auto hover:text-black"
              >
                {link.title}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex text-center">
        <button className="mx-auto bg-black text-white underline transition-color duration-300 hover:bg-customGreen" onClick={goBack}>
          go back
        </button>
      </div>
    </div>
  );
};

export default ProjectView;
