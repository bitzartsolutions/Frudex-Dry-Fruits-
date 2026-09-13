import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../data/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <NavLink className="wordmark" to="/" onClick={() => setIsOpen(false)}>
        <span className="brand-logo-crop brand-logo-crop-light"><img src="/images/frudex-logo-light.png" alt="Frudex" /></span>
      </NavLink>
      <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
        <span /> <span />
      </button>
      <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <NavLink key={item.href} to={item.href} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <NavLink className="header-cta mobile-menu-cta" to="/contact#inquiry" onClick={() => setIsOpen(false)}>Get in Touch</NavLink>
      </nav>
      <NavLink className="header-cta" to="/contact#inquiry">Get in Touch </NavLink>
    </header>
  );
}
