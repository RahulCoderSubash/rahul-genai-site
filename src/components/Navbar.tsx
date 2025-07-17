import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle: React.CSSProperties = {
  marginRight: '1rem',
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
};

const Navbar = () => {
  return (
    <nav
      style={{
        padding: '1rem 2rem',
        background: '#ffffffcc',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        borderRadius: '0 0 10px 10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/learnings" style={linkStyle}>Learnings</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/resume" style={linkStyle}>Resume</Link>
      <Link to="/skills" style={linkStyle}>Skills</Link>
    </nav>
  );
};

export default Navbar;
