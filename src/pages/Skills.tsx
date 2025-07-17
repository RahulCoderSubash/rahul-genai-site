import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
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
        🧰 Technical Skills Snapshot
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}
      >
        My diverse skillset spans across full stack development, GenAI systems, DevOps workflows, and intelligent automation — empowering me to deliver scalable solutions and innovation at Kyndryl India Pvt Ltd.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        style={{
          marginTop: '2rem',
          background: '#f3f3f3',
          padding: '1.8rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333' }}>
          🔧 Languages, Frameworks & Platforms
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ JavaScript (ES6+), TypeScript, Python, Bash</li>
          <li>✅ Angular, React, Node.js, Express, Django</li>
          <li>✅ REST APIs, WebSockets, GraphQL</li>
          <li>✅ MongoDB, PostgreSQL, Redis</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        style={{
          marginTop: '2rem',
          background: '#f1f8ff',
          padding: '1.8rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333' }}>
          🧠 AI/ML & GenAI Tools
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ LangChain, LlamaIndex, ChromaDB, Pinecone</li>
          <li>✅ OpenAI APIs, Azure AI Services, HuggingFace</li>
          <li>✅ Semantic Search, Prompt Engineering, Embeddings</li>
          <li>✅ Scikit-learn, TensorFlow (basic level)</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        style={{
          marginTop: '2rem',
          background: '#fff5e6',
          padding: '1.8rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333' }}>
          ☁️ Cloud & DevOps Tools
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ AWS (Lambda, S3, Glue), Azure DevOps, GCP basics</li>
          <li>✅ GitHub Actions, Terraform, Docker, Kubernetes</li>
          <li>✅ Argo Workflows, CI/CD pipelines, Helm Charts</li>
          <li>✅ Monitoring: Grafana, Prometheus, CloudWatch</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{
          marginTop: '2rem',
          background: '#f9f9f9',
          padding: '1.8rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333' }}>
          🤖 Automation & Productivity Stack
        </h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
          <li>✅ Selenium, Puppeteer, Playwright, BeautifulSoup</li>
          <li>✅ SharePoint Data Extractors, Notion API Bots</li>
          <li>✅ ChatGPT Agents, Custom CronJobs, Zapier</li>
          <li>✅ VSCode, Git CLI, Postman, Swagger, JIRA</li>
        </ul>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        style={{ marginTop: '2.5rem', fontSize: '1.1rem', color: '#555' }}
      >
        I continuously refine these tools to build robust and future-proof tech solutions.
      </motion.p>
    </div>
  );
};

export default Skills;
