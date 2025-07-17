import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learnings from './pages/Learnings';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Skills from './pages/Skills';

function App() {
  return (
    <Router basename="/rahul-genai-site">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnings" element={<Learnings />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
