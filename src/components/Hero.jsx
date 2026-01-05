import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InteractiveGrid from './InteractiveGrid';

const Hero = () => {
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
                {/* <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="badge-dot"></span>
                    Dr. rer. nat. Informatik | Summa Cum Laude
                </motion.div>
                */}

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="title-line">AI Engineer</span>
                    <span className="title-line gradient-text">& Researcher</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Ich entwickle robuste Software-Systeme und bringe tiefes, international anerkanntes Expertenwissen in modernen Machine-Learning-Methoden ein. Mit dieser Kombination möchte ich KI von der Theorie in wirkungsvolle Produkte überführen und damit messbaren Impact schaffen.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href="#contact" className="btn btn-primary">
                        Kontakt aufnehmen
                        <ArrowRight size={20} />
                    </a>
                    <a href="#projects" className="btn btn-secondary">
                        Projekte ansehen
                    </a>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="stat">
                        <span className="stat-number">Dr. rer. nat.</span>
                        <span className="stat-label">Promotion · Nov 2025</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-number">Machine Learning & AI</span>
                        <span className="stat-label">Internationale Expertise</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-number">Full-Stack</span>
                        <span className="stat-label">Software-Engineering</span>
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
