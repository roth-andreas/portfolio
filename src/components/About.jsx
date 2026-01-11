import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Timeline from './Timeline';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
    const { t, language } = useLanguage();

    // Select CV file based on current language
    const cvFile = language === 'de' ? '/cv-de.pdf' : '/cv-en.pdf';

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="section-header">

                    <h2 className="section-title">{t('about.title')}</h2>
                </div>

                <motion.div
                    className="about-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="about-bio-grid">
                        <div className="about-image-container">
                            <div className="profile-image-wrapper">
                                <img src="/andreasroth.jpg" alt="Dr. Andreas Roth" className="profile-image" />
                                <div className="image-border"></div>
                            </div>

                            <a href={cvFile} download className="btn-cv-download">
                                <Download size={18} />
                                {t('about.download_cv')}
                            </a>
                        </div>
                        <div className="about-bio-text">
                            <p className="lead">
                                {t('about.lead')}
                            </p>
                            <p>
                                {t('about.p1')}
                            </p>
                            <p dangerouslySetInnerHTML={{ __html: t('about.p2') }}></p>
                        </div>
                    </div>

                    <div className="about-card-timeline">
                        <Timeline />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
