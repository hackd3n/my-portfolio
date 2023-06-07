import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './Projects';

const ImageSlideshow = ({ currentPosition }) => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === projectId);

  if (!project || !project.images || project.images.length === 0) {
    return null;
  }

  const imageIndex = Math.min(currentPosition, project.images.length - 1);
  const currentImage = project.images[imageIndex];

  return (
    <div className="flex justify-center items-center max-h-[320px] ">
      <img
        src={project.images[imageIndex]}
        alt={`Image ${imageIndex}`}
        className="object-cover max-h-[320px] max-w-[320px] border-2"
      />
    </div>

  );
};

export default ImageSlideshow;
