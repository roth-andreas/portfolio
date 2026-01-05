import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="section-header">

                    <h2 className="section-title">Über mich</h2>
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
                        </div>
                        <div className="about-bio-text">
                            <p className="lead">
                                AI Engineer, der aktuelle Entwicklungen bei KI tiefgehend versteht und in skalierbare, produktionsreife Systeme übersetzt.
                            </p>
                            <p>
                                Basierend auf meiner Promotion im Bereich KI verfüge ich über ein tiefgehendes Verständnis der algorithmischen und mathematischen Grundlagen moderner KI-Verfahren. Mein Anspruch ist es, diese Expertise in robuste KI-Produkte zu überführen, die messbaren Mehrwert liefern.
                            </p>
                            <p>
                                Bereits während meiner Tätigkeit als studentischer Softwareentwickler bei <strong>Drigus Systeme GmbH</strong> in der Anwendungsentwicklung sowie beim <strong>Fraunhofer ISST</strong> in der Full-Stack-Entwicklung arbeitete ich an der Umsetzung komplexer Softwaresysteme – von der Datenverarbeitung über Backend- und Frontend-Entwicklung bis hin zur App- und Embedded-Entwicklung.
                                Ein besonderer Schwerpunkt lag dabei auf der Containerisierung und dem Betrieb von Microservices.
                                Diese Kombination aus algorithmischer Tiefe und fundierter Software-Engineering-Erfahrung ermöglicht es mir, KI-Systeme zu entwerfen, die skalierbar, wartbar und langfristig einsetzbar sind.
                            </p>
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
