import React from 'react';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="section-header">

                        <h2 className="section-title">{t('contact.title')}</h2>
                    </div>
                    <p className="contact-text">
                        {t('contact.text')}
                    </p>
                    <div className="contact-links">
                        <a href="mailto:andreas52.roth@gmail.com" className="contact-link">
                            <Mail size={24} />
                            <span>andreas52.roth@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/andreas-roth-b91109183/" target="_blank" rel="noopener" className="contact-link">
                            <Linkedin size={24} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/roth-andreas" target="_blank" rel="noopener" className="contact-link">
                            <Github size={24} />
                            <span>GitHub</span>
                        </a>
                        <a href="https://scholar.google.de/citations?user=qAhTT6wAAAAJ" target="_blank" rel="noopener" className="contact-link">
                            <Globe size={24} />
                            <span>Google Scholar</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
