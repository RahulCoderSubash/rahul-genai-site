import React from 'react';
import { motion } from 'framer-motion';

const Learnings = () => {
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
        📘 Technical Learnings & Self-Upskilling Journey
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}
      >
        With 6+ years of experience in AI and software development, I actively expand my skills to stay on the edge of the evolving tech space. Below are some key domains I've deep-dived into recently:
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
          🧠 Generative AI & Retrieval Systems
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ LangChain framework and vector-based RAG architectures</li>
          <li>✅ Integration of Azure AI Search and ChromaDB for semantic search</li>
          <li>✅ Prompt engineering for enterprise knowledge retrieval bots</li>
          <li>✅ Embedding strategies, chunking logic, and metadata filtering</li>
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
          🛠️ Full Stack & AI DevOps Workflows
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ Backend: Node.js, Express, Python REST APIs, MongoDB</li>
          <li>✅ Cloud-native tools: AWS Lambda, S3, Glue, Azure AI Services</li>
          <li>✅ Containerization: Docker, Kubernetes, CI/CD via GitHub Actions</li>
          <li>✅ Workflow orchestration: Argo Workflows, CronJobs, Terraform</li>
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
          📦 Intelligent Automation & Crawlers
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ Selenium & BeautifulSoup-based web crawlers (98%+ accuracy)</li>
          <li>✅ Automated SharePoint data extractors & pipeline schedulers</li>
          <li>✅ Multi-source content preprocessing for enterprise knowledge graphs</li>
        </ul>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ marginTop: '2.5rem', fontSize: '1.1rem', color: '#555' }}
      >
        I strive to translate every learning into impactful solutions. Whether building a scalable inventory platform or designing enterprise GenAI systems, my learning mindset keeps me growing every day.
      </motion.p>
    </div>
  );
};

export default Learnings;
