import { useState } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion'
import logo from './assets/default-monochrome-white.svg'
import instaLogo from './assets/instalogo.svg'
import linkedinLogo from './assets/linkedin.svg'
import lebronImage from './assets/lebron.png'
import lebronImage2 from './assets/lebron2.png'
import backgroundWave from './assets/layered-waves-haikei.svg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  }

  return (
    <div className="container">
      <nav className="navigation">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-links">
          <button
            className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => setActiveSection('home')}
          >
            Home
          </button>
          <button
            className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About
          </button>
          <button
            className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button
            className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          className="content mobile-adjusted"
        >
          {activeSection === 'home' && (
            <section className="section-fade">
              <h1>Welcome to My Portfolio</h1>
              <p>I love Lebron James</p>
            </section>
          )}

          {activeSection === 'about' && (
            <section className="section-fade">
              <div className="about-container">
                <div className="about-header">
                  <h2>About Me</h2>
                  <div className="about-social-links">
                    <a href="https://instagram.com/lebrilla_mj" target="_blank" rel="noopener noreferrer" className="social-link">
                      <img src={instaLogo} alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/mj-lebrilla-b23413341" target="_blank" rel="noopener noreferrer" className="social-link">
                      <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                    </a>
                  </div>
                </div>
                <div className="about-content-wrapper">
                  <div className="about-image">
                    <img src={lebronImage} alt="Profile" className="image-primary" />
                    <img src={lebronImage2} alt="Profile Hover" className="image-secondary" />
                  </div>
                  <div className="about-content">
                    <p>I'm a web developer.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'projects' && (
            <section className="section-fade">
              <h2>My Projects</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <h3>Music Portfolio Website</h3>
                  <p>A Web portfolio that showcases my beats</p>
                </div>
                <div className="project-card">
                  <h3>Task Organizer + File Organizer</h3>
                  <p>A web app similar to notion but has JsZip to sort your files instantly.</p>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'contact' && (
            <section className="section-fade">
              <h2>Contact Me</h2>
              <form
                className="contact-form"
                action="https://formspree.io/f/xaneygnv"
                method="POST"
              >
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your email"
                    className="form-input"
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your message"
                    className="form-input"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send</button>
              </form>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
