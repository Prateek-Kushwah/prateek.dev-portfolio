// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Portfolio</span>
            <div className={styles.logoGlow}></div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navMenu}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${styles.navLink} ${
                  pathname === item.path ? styles.active : ''
                }`}
              >
                {item.name}
                <span className={styles.linkUnderlay}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className={styles.navActions}>
            <Link href="/contact" className={`${styles.ctaButton} btn btn-primary`}>
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuOpen : ''
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuActive : ''}`}>
          <div className={styles.mobileMenuContent}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${styles.mobileNavLink} ${
                  pathname === item.path ? styles.active : ''
                }`}
              >
                {item.name}
                <span className={styles.mobileLinkGlow}></span>
              </Link>
            ))}
            <div className={styles.mobileCta}>
              <Link href="/contact" className={`${styles.ctaButton} btn btn-primary`}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayActive : ''}`}
        onClick={toggleMenu}
      />
    </>
  );
};

export default Navbar;