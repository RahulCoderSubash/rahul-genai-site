import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
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
        💼 Project Highlights & Engineering Impact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}
      >
        Throughout my 6+ years of experience at Kyndryl India Pvt Ltd, I have designed and engineered impactful digital solutions. Here are some noteworthy projects:
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        style={{
          marginTop: '2rem',
          background: '#f2f2f2',
          padding: '1.8rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333' }}>
          🧾 Cognitive Contract Intelligence System
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ Developed RAG-based contract analysis engine using LangChain & OpenAI</li>
          <li>✅ Integrated Azure AI Search & vector DBs for fast legal clause retrieval</li>
          <li>✅ Built admin dashboard for legal metadata tagging and contract grouping</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        style={{
          marginTop: '2rem',
          background: '#f9f9f9',
          padding: '1.8rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333' }}>
          🔍 GenAI-Powered Knowledge Discovery Bot
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ Led development of assistant bot for enterprise IT support & SOPs</li>
          <li>✅ Created PDF parsing and embedding pipelines for domain ingestion</li>
          <li>✅ Delivered secure backend APIs with RBAC, audit logs, and query analytics</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        style={{
          marginTop: '2rem',
          background: '#f1f8ff',
          padding: '1.8rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333' }}>
          📊 Enterprise Dashboard & Automation Portal
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ Built real-time operational metrics dashboard using Angular & REST APIs</li>
          <li>✅ Integrated GitHub Actions for CI/CD, automated Azure deploy pipelines</li>
          <li>✅ Added multi-tenant support for managing 20+ teams' data flows</li>
        </ul>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ marginTop: '2.5rem', fontSize: '1.1rem', color: '#555' }}
      >
        Each project has helped me sharpen my ability to solve complex problems at scale, while staying aligned with enterprise security, performance, and user expectations.
      </motion.p>
    </div>
  );
};

export default Projects;
