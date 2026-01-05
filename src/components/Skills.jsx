import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();

    const skillGroups = [
        {
            category: 'Modern AI & Machine Learning',
            skills: ['Deep Learning', 'PyTorch / TensorFlow', 'Computer Vision', 'GenAI', 'Large Language Models (LLMs)', 'RAG Applications']
        },
        {
            category: 'Engineering & MLOps',
            skills: ['MLflow', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Weights & Biases', 'Data Engineering (Kafka)']
        },
        {
            category: 'Software & Cloud',
            skills: ['Python', 'JavaScript', 'Azure', 'SQL & NoSQL']
        }
    ];

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="section-header">

                    <h2 className="section-title">{t('skills.title')}</h2>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group, index) => (
                        <div key={index} className="skill-category">
                            <h4>{group.category}</h4>
                            <div className="skill-items">
                                {group.skills.map(skill => (
                                    <span key={skill} className="skill-item">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
