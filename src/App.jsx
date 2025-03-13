import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  }
=======

function App() {
  const [activeSection, setActiveSection] = useState('home')
>>>>>>> a8180768063ba19f9dff882acdc75224ad404e37

  return (
    <div className="container">
      <nav className="navigation">
<<<<<<< HEAD
        <img src="./src/assets/default-monochrome-white.svg" alt="Logo" className="logo" />
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
        <div className="social-links">
          <a href="https://instagram.com/lebrilla_mj" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="./src/assets/instalogo.svg" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/mj-lebrilla-b23413341" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="./src/assets/linkedin.svg" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          className="content"
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
                <h2>About Me</h2>
                <div className="about-content-wrapper">
                  <div className="about-image">
                    <img src="./src/assets/lebron.png" alt="Profile" className="image-primary" />
                    <img src="./src/assets/lebron2.png" alt="Profile Hover" className="image-secondary" />
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
                  <h3>Project 1</h3>
                  <p>A description of your first project</p>
                </div>
                <div className="project-card">
                  <h3>Project 2</h3>
                  <p>A description of your second project</p>
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
=======
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
      </nav>

      <div className="content">
        {activeSection === 'home' && (
          <section className="section-fade">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm a passionate developer creating amazing web experiences.</p>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="section-fade">
            <h2>About Me</h2>
            <p>I'm a full-stack developer with a passion for creating beautiful and functional web applications.</p>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="section-fade">
            <h2>My Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Project 1</h3>
                <p>A description of your first project</p>
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <p>A description of your second project</p>
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
      </div>
>>>>>>> a8180768063ba19f9dff882acdc75224ad404e37
    </div>
  )
}

export default App
