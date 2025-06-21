import { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  year: string;
  tags: string[];
  description: string;
  thumbnail: string;
  images: string[];
}

interface ProjectInfo {
  name: string;
  year: string;
  tags: string[];
  description: string;
  thumbnail?: string;
  images?: string[];
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Get all project folders by trying to fetch known projects
        // In a real implementation, you'd need a backend API to list directories
        const projectFolders = [
          'porsche-911', 'ferrari-250gt', 'jaguar-e-type', 'mustang-fastback',
          'corvette-stingray', 'bmw-2002', 'alfa-romeo-giulia', 'mercedes-280sl',
          'aston-martin-db5', 'triumph-tr6', 'lotus-elan', 'datsun-240z'
        ];
        
        const loadedProjects: Project[] = [];
        
        for (const folder of projectFolders) {
          try {
            const response = await fetch(`/projects/${folder}/info.json`);
            if (response.ok) {
              const info: ProjectInfo = await response.json();
              loadedProjects.push({
                id: folder,
                name: info.name,
                year: info.year,
                tags: info.tags,
                description: info.description,
                thumbnail: info.thumbnail || '/placeholder.svg',
                images: info.images || ['/placeholder.svg']
              });
            }
          } catch (error) {
            console.log(`Project ${folder} not found, skipping`);
          }
        }
        
        setProjects(loadedProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const getAllTags = () => {
    const tagSet = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  };

  const filterByTag = (tag: string) => {
    if (!tag) return projects;
    return projects.filter(project => project.tags.includes(tag));
  };

  return {
    projects,
    loading,
    getAllTags,
    filterByTag
  };
};