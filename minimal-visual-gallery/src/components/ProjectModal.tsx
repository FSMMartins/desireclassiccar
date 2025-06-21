import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  year: string;
  tags: string[];
  description: string;
  thumbnail: string;
  images: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm"
      >
        <X size={20} />
      </button>
      
      <div className="max-w-5xl w-full max-h-full flex flex-col">
        <div className="relative flex-1 flex items-center justify-center">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.name} - Imagem ${currentImageIndex + 1}`}
            className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
          />
          
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 text-white/80 p-3 rounded-full bg-black/20 backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 text-white/80 p-3 rounded-full bg-black/20 backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        
        <div className="text-white mt-8 text-center">
          <h2 className="text-3xl font-light mb-3 tracking-tight">{project.name}</h2>
          <p className="text-white/70 mb-3 text-lg font-light">{project.year}</p>
          <p className="text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">{project.description}</p>
          <div className="flex justify-center gap-3 mt-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;