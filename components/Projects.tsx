"use client"
// components/Projects/Projects.tsx
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import {
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Check,
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Database,
  Cloud
} from 'lucide-react';
import styles from '../styles/Projects.module.css';
import Link from 'next/link';

interface Project {
  id: number;
  icon: React.ReactElement;
  title: string;
  description: string;
  tech: string[];
  duration: string;
  features: string[];
  image: string;
  category: string;
  page: string;
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationDirection, setAnimationDirection] = useState('next');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const projects = useMemo((): Project[] => [
    {
      id: 1,
      icon: <Globe size={32} />,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "3 months",
      features: ["Responsive design", "Payment processing", "User authentication", "Admin panel"],
      image: "/assets/projects/ecommerce.jpg",
      category: "Full Stack",
      page: "/portfolio#ecommerce",
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      icon: <Smartphone size={32} />,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for fitness tracking with social features and progress analytics.",
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      duration: "2 months",
      features: ["Workout tracking", "Progress analytics", "Social features", "Offline support"],
      image: "/assets/projects/fitness.jpg",
      category: "Mobile",
      page: "/portfolio#fitness",
      github: "https://github.com/username/fitness-app",
      demo: "https://fitness-app.demo.com"
    }
  ], []);

  // Auto-play functionality
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setAnimationDirection('next');
        setActiveProject((prev) => (prev + 1) % projects.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isPlaying, projects.length]);

  const nextProject = useCallback(() => {
    setAnimationDirection('next');
    setActiveProject((prev) => (prev + 1) % projects.length);
    resetAutoPlay();
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setAnimationDirection('prev');
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    resetAutoPlay();
  }, [projects.length]);

  const resetAutoPlay = useCallback(() => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const timeoutId = setTimeout(() => {
      setIsPlaying(true);
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const goToProject = useCallback((index: number) => {
    setAnimationDirection(index > activeProject ? 'next' : 'prev');
    setActiveProject(index);
    resetAutoPlay();
  }, [activeProject, resetAutoPlay]);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.backgroundElements}>
        <div className={styles.bgElement1}></div>
        <div className={styles.bgElement2}></div>
        <div className={styles.bgElement3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Projects</h2>
          <p className={styles.subtitle}>
            Explore my portfolio of innovative projects showcasing modern development practices and creative solutions
          </p>
        </div>

        <div className={styles.projectsContainer}>
          <div className={styles.projectsNavigation}>
            <div className={styles.navDots}>
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={`${styles.dot} ${index === activeProject ? styles.active : ''}`}
                  onClick={() => goToProject(index)}
                  aria-label={`View ${project.title} project`}
                />
              ))}
            </div>

            <div className={styles.navControls}>
              <button
                className={styles.navButton}
                onClick={prevProject}
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`}
                onClick={toggleAutoPlay}
                aria-label={isPlaying ? "Pause auto play" : "Start auto play"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              <button
                className={styles.navButton}
                onClick={nextProject}
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className={styles.projectsContent}>
            <div className={styles.projectImage}>
              <div className={`${styles.imageContainer} ${styles[animationDirection]}`}>
                <Image
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  fill
                  className={styles.image}
                  priority
                />
                <div className={styles.imageOverlay}></div>

                <div className={styles.categoryBadge}>
                  {projects[activeProject].category}
                </div>

                <div className={styles.projectIndicator}>
                  <span className={styles.currentNumber}>0{activeProject + 1}</span>
                  <span className={styles.totalNumber}>/0{projects.length}</span>
                </div>
              </div>
            </div>

            <div className={`${styles.projectDetails} ${styles[animationDirection]}`}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>
                  {projects[activeProject].icon}
                </div>
                <h3 className={styles.projectTitle}>
                  {projects[activeProject].title}
                </h3>
              </div>

              <p className={styles.projectDescription}>
                {projects[activeProject].description}
              </p>

              <div className={styles.projectMeta}>
                <div className={styles.metaItem}>
                  <Clock size={18} />
                  <span>{projects[activeProject].duration}</span>
                </div>
              </div>

              <div className={styles.techStack}>
                <h4 className={styles.techTitle}>Tech Stack:</h4>
                <div className={styles.techList}>
                  {projects[activeProject].tech.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresList}>
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index} className={styles.featuresItem}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.ctaButtons}>
                {projects[activeProject].demo && (
                  <a href={projects[activeProject].demo} target="_blank" rel="noopener noreferrer">
                    <button className={styles.primaryButton}>
                      <span>Live Demo</span>
                      <ArrowRight size={20} />
                    </button>
                  </a>
                )}
                {projects[activeProject].github && (
                  <a href={projects[activeProject].github} target="_blank" rel="noopener noreferrer">
                    <button className={styles.secondaryButton}>
                      <span>View Code</span>
                      <ArrowRight size={20} />
                    </button>
                  </a>
                )}
                <Link href={projects[activeProject].page}>
                  <button className={styles.secondaryButton}>
                    <span>Details</span>
                    <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;