import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div
      style={{
        padding: '2rem 1rem',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#222',
          textAlign: 'center',
        }}
      >
        Rahul Subash – AI & Generative AI Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          lineHeight: '1.8',
          color: '#444',
          textAlign: 'justify',
        }}
      >
        I’m a Developer II at <strong>Kyndryl India Pvt Ltd</strong> with over <strong>6 years of experience</strong> building scalable AI-driven applications, enterprise-grade APIs, and cloud-native platforms.
        My expertise spans <strong>Generative AI</strong>, <strong>LLMs</strong>, <strong>semantic search</strong>, and <strong>vector-based retrieval</strong> using tools like <strong>LangChain</strong>, <strong>ChromaDB</strong>, and <strong>Azure AI Search</strong>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          marginTop: '2rem',
          background: '#f9f9f9',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h3
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
            marginBottom: '1rem',
            color: '#333',
          }}
        >
          🔧 What I Do
        </h3>
        <ul
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            paddingLeft: '1.2rem',
            lineHeight: '1.7',
          }}
        >
          <li>🔍 Build GenAI-powered chatbots with advanced semantic search</li>
          <li>⚙️ Architect scalable multi-cloud pipelines with AWS, Azure & GCP</li>
          <li>📊 Deliver real-time dashboards & monitoring systems using MongoDB and Python</li>
          <li>🧠 Integrate LLMs, LangChain, ChromaDB, Azure AI Search</li>
          <li>🚀 MLOps, DevOps, serverless workflows & automation using Argo Workflows, GitHub Actions</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          marginTop: '3rem',
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
          color: '#555',
          textAlign: 'justify',
        }}
      >
        <p>
          My work is focused on solving real-world business problems using AI, optimizing infrastructure, and driving automation across data-rich
          ecosystems. I’m deeply passionate about building <strong>impactful, secure, and scalable solutions</strong> that blend innovation with performance.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
