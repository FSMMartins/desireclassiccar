import React, { useState } from 'react';
import Header from './Header';
import ProjectGrid from './ProjectGrid';
import ProjectModal from './ProjectModal';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';
import MapSection from './MapSection';
import { useProjects } from '@/hooks/useProjects';

interface Project {
  id: string;
  name: string;
  year: string;
  tags: string[];
  description: string;
  thumbnail: string;
  images: string[];
}

const AppLayout: React.FC = () => {
  const { projects, loading, getAllTags, filterByTag } = useProjects();
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filterByTag(selectedTag);
  const allTags = getAllTags();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50/30">
        <div className="text-gray-500 font-light">A carregar projetos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        tags={allTags}
      />
      
      <main>
        <AboutSection />
        <ProjectGrid 
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
        />
        <MapSection />
        <ContactSection />
      </main>
      
      <ProjectModal 
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default AppLayout;