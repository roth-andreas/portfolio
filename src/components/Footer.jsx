import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Dr. Andreas Roth. Alle Rechte vorbehalten.</p>
                <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', opacity: 0.5 }}>
                    Built with React, Vite & Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
