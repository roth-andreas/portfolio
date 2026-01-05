import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InteractiveGrid from './InteractiveGrid';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <header className="hero" id="hero">
            <div className="hero-background">
                <motion.div
                    className="gradient-orb orb-1"
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.05, 0.95, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="gradient-orb orb-2"
                    animate={{
                        x: [0, -30, 20, 0],
                        y: [0, 30, -20, 0],
                        scale: [1, 0.95, 1.05, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: -10 }}
                />
                <InteractiveGrid />
            </div>

            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="title-line">{t('hero.role_line1')}</span>
                    <span className="title-line gradient-text">{t('hero.role_line2')}</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href="#contact" className="btn btn-primary">
                        {t('hero.cta_primary')}
                        <ArrowRight size={20} />
                    </a>
                    <a href="#projects" className="btn btn-secondary">
                        {t('hero.cta_secondary')}
                    </a>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="stat">
                        <span className="stat-number">{t('hero.stats.phd')}</span>
                        <span className="stat-label">{t('hero.stats.phd_date')}</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-number">{t('hero.stats.expertise')}</span>
                        <span className="stat-label">{t('hero.stats.expertise_sub')}</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-number">{t('hero.stats.role')}</span>
                        <span className="stat-label">{t('hero.stats.role_sub')}</span>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll</span>
                <motion.div
                    className="scroll-line"
                    animate={{ scaleY: [1, 0.7, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </header>
    );
};

export default Hero;
