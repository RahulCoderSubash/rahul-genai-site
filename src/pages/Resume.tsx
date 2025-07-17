import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <div style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
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
        style={{ fontSize: '1.2rem', color: '#444', marginBottom: '2rem' }}
      >
        Download my detailed resume below to explore my professional journey, technical skills, and accomplishments.
      </motion.p>

      <motion.a
        href="/Rahul_Kyndryl_Resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'inline-block',
          padding: '0.8rem 1.5rem',
          fontSize: '1.1rem',
          background: '#0070f3',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(0, 118, 255, 0.2)',
        }}
      >
        📥 Download Resume
      </motion.a>
    </div>
  );
};

export default Resume;