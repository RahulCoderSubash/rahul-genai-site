import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <div
      style={{
        padding: '2rem 1rem',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#222',
        }}
      >
        📄 My Resume
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)',
          color: '#444',
          marginBottom: '2rem',
          lineHeight: 1.6,
        }}
      >
        Download my detailed resume below to explore my professional journey,
        technical skills, and accomplishments.
      </motion.p>

      <motion.a
        href="/Rahul_Kyndryl_Resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'inline-block',
          padding: '0.8rem 1.6rem',
          fontSize: 'clamp(0.9rem, 3.5vw, 1rem)',
          background: '#0070f3',
          color: '#fff',
          borderRadius: '10px',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(0, 118, 255, 0.2)',
          transition: 'all 0.3s ease',
        }}
      >
        📥 Download Resume
      </motion.a>
    </div>
  );
};

export default Resume;
