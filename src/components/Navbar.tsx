import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f3f3f3' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/learnings" style={{ marginRight: '1rem' }}>Learnings</Link>
      <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
      <Link to="/resume" style={{ marginRight: '1rem' }}>Resume</Link>
      <Link to="/skills">Skills</Link>
    </nav>
  );
};

export default Navbar;
