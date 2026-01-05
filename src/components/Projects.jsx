import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Database, Cpu, Eye } from 'lucide-react';
import pamonoImage from '../assets/pamono.jpg';
import bauteilImage from '../assets/bauteil.jpg';
import logistikImage from '../assets/logistik.jpg';

const Projects = () => {
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

    const projects = [
        {
            title: 'Anomaly Detection (Bosch)',
            description: 'Entwicklung eines Verfahrens zur Echtzeit-Fehlererkennung von Bauteilen in der Produktion in Zusammenarbeit mit der Robert Bosch GmbH.',
            tags: ['Computer Vision', 'Anomaly Detection', 'PyTorch', 'Industrial AI'],
            icon: <Cpu size={24} />,
            image: bauteilImage,
            link: '#'
        },
        {
            title: 'Data Science (bofrost*)',
            description: 'Analyse der Daten von bofrost* zur Identifikation von Potential von daten-basierten Lösungen, z.B. für Empfehlungssysteme,Tourenplanung, Ladeplanung.',
            tags: ['Data Science', 'Predictive Analytics', 'Recommendation Systems'],
            icon: <Database size={24} />,
            image: logistikImage,
            link: '#'
        },
        {
            title: 'Viral Nanoparticle Analytics',
            description: 'Robustes KI-System zur Detektion von viralen Nanopartikeln in verrauschten Sensordaten mittels spatiotemporaler Deep Learning Modelle.',
            tags: ['Computer Vision', 'Signal Processing', 'Noisy Data', 'Preprocessing'],
            icon: <Eye size={24} />,
            image: pamonoImage,
            link: '#'
        }
    ];

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-header">

                    <h2 className="section-title">Projekte</h2>
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
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-placeholder">
                                        {project.icon}
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
                                {/*<div className="project-links">
                                    <a href={project.link} className="project-link">
                                        <Github size={20} />
                                        Source
                                    </a>
                                    <a href="#" className="project-link">
                                        <ExternalLink size={20} />
                                        Demo
                                    </a>
                                </div>*/}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
