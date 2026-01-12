import React, { useLayoutEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Database, Cpu, Eye } from 'lucide-react';
import pamonoImage from '../assets/pamono.jpg';
import bauteilImage from '../assets/bauteil.jpg';
import logistikImage from '../assets/logistik.jpg';
import mlopsImage from '../assets/mlops.png';

const Projects = () => {
    const { t } = useLanguage();
    const projectsRef = useRef([]);

    // Equalize heights logic
    useLayoutEffect(() => {
        const equalizeHeights = () => {
            // Reset heights first to allow natural resize
            const tags = document.querySelectorAll('.project-tags');
            const titles = document.querySelectorAll('.project-title-area');
            const descriptions = document.querySelectorAll('.project-description-area');

            [tags, titles, descriptions].forEach(elements => {
                elements.forEach(el => el.style.minHeight = '0px');
            });

            // Calculate max heights
            const alignGroup = (selector) => {
                const elements = document.querySelectorAll(selector);
                let max = 0;
                elements.forEach(el => {
                    if (el.offsetHeight > max) max = el.offsetHeight;
                });
                elements.forEach(el => el.style.minHeight = `${max}px`);
            };

            alignGroup('.project-tags');
            alignGroup('.project-title-area');
            alignGroup('.project-description-area');
        };

        // Run immediately
        equalizeHeights();

        // Run on resize
        window.addEventListener('resize', equalizeHeights);

        // Run after clear timeout to catch image loading shifts if any
        const timeoutId = setTimeout(equalizeHeights, 100);

        return () => {
            window.removeEventListener('resize', equalizeHeights);
            clearTimeout(timeoutId);
        };
    }, []);

    const imageMap = {
        'bauteil': bauteilImage,
        'logistik': logistikImage,
        'pamono': pamonoImage,
        'mlops': mlopsImage
    };

    const projectsData = t('projects.items') || [];

    // Ensure it is an array
    const projects = Array.isArray(projectsData) ? projectsData : [];

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-header">

                    <h2 className="section-title">{t('projects.title')}</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-image">
                                {imageMap[project.imageKey] ? (
                                    <img src={imageMap[project.imageKey]} alt={project.title} />
                                ) : (
                                    <div className="project-placeholder">
                                        <Database size={24} />
                                    </div>
                                )}
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title-area">{project.title}</h3>
                                <p className="project-description-area">{project.description}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
