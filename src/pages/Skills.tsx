import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <div
      style={{
        padding: '2rem 1rem',
        maxWidth: '1000px',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#222',
          textAlign: 'center',
        }}
      >
        🧰 Technical Skills Snapshot
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
          lineHeight: '1.8',
          color: '#444',
          textAlign: 'center',
        }}
      >
        My diverse skillset spans across full stack development, GenAI systems,
        DevOps workflows, and intelligent automation — empowering me to deliver
        scalable solutions and innovation at Kyndryl India Pvt Ltd.
      </motion.p>

      {/** Skill Sections */}
      {[
        {
          title: '🔧 Languages, Frameworks & Platforms',
          bg: '#f3f3f3',
          items: [
            'JavaScript (ES6+), TypeScript, Python, Bash',
            'Angular, React, Node.js, Express, Django',
            'REST APIs, WebSockets, GraphQL',
            'MongoDB, PostgreSQL, Redis',
          ],
        },
        {
          title: '🧠 AI/ML & GenAI Tools',
          bg: '#f1f8ff',
          items: [
            'LangChain, LlamaIndex, ChromaDB, Pinecone',
            'OpenAI APIs, Azure AI Services, HuggingFace',
            'Semantic Search, Prompt Engineering, Embeddings',
            'Scikit-learn, TensorFlow (basic level)',
          ],
        },
        {
          title: '☁️ Cloud & DevOps Tools',
          bg: '#fff5e6',
          items: [
            'AWS (Lambda, S3, Glue), Azure DevOps, GCP basics',
            'GitHub Actions, Terraform, Docker, Kubernetes',
            'Argo Workflows, CI/CD pipelines, Helm Charts',
            'Monitoring: Grafana, Prometheus, CloudWatch',
          ],
        },
        {
          title: '🤖 Automation & Productivity Stack',
          bg: '#f9f9f9',
          items: [
            'Selenium, Puppeteer, Playwright, BeautifulSoup',
            'SharePoint Data Extractors, Notion API Bots',
            'ChatGPT Agents, Custom CronJobs, Zapier',
            'VSCode, Git CLI, Postman, Swagger, JIRA',
          ],
        },
      ].map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + index * 0.3, duration: 0.7 }}
          style={{
            marginTop: '2rem',
            background: section.bg,
            padding: '1.8rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.2rem, 4vw, 1.4rem)',
              marginBottom: '1rem',
              color: '#333',
              textAlign: 'center',
            }}
          >
            {section.title}
          </h3>
          <ul
            style={{
              paddingLeft: '1.2rem',
              lineHeight: '1.7',
              fontSize: 'clamp(1rem, 3.2vw, 1.1rem)',
              margin: 0,
            }}
          >
            {section.items.map((item, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>
                ✅ {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        style={{
          marginTop: '2.5rem',
          fontSize: 'clamp(1rem, 3.5vw, 1.1rem)',
          color: '#555',
          textAlign: 'center',
        }}
      >
        I continuously refine these tools to build robust and future-proof tech solutions.
      </motion.p>
    </div>
  );
};

export default Skills;
