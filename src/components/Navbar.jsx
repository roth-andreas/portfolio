import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Über mich', href: '#about' },
    { name: 'Projekte', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Veröffentlichungen', href: '#research' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <span className="logo-text">Andreas Roth</span>
        </a>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
