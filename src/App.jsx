import { useState } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import logo from './assets/default-monochrome-white.svg'
import instaLogo from './assets/instalogo.svg'
import linkedinLogo from './assets/linkedin.svg'
import lebronImage from './assets/lebron.png'
import lebronImage2 from './assets/lebron2.png'
import backgroundWave from './assets/layered-waves-haikei.svg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [state, handleSubmit] = useForm("xgegkwzw")
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
            className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button
            className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About
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
            <img src={instaLogo} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/mj-lebrilla-b23413341" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
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
          className="content mobile-adjusted"
        >
          {activeSection === 'home' && (
            <section className="section-fade">
              <h1>Welcome.</h1>
              <p>I’m Meinhard, a front-end developer based in Lipa City, Philippines. With a passion for creating clean, intuitive, and responsive user interfaces, I specialize in turning design concepts into functional, high-performance websites. I thrive on solving complex problems with elegant code and staying ahead of the curve with the latest web technologies. In addition to my freelance work.</p>
              <p>I am also one of the co-owners of TAB Studios, where we focus on Roblox game development, web development freelancing, and academic commissions. Let’s collaborate to bring your digital vision to life. </p>
              
            </section>
          )}
          {activeSection === 'projects' && (
            <section className="section-fade">
              <h1>Projects</h1>
              <div className="projects-list">
                <ul>
                  <li className="project-item">
                    <a href="https://mbrilla.github.io/TodoList/" target="_blank" rel="noopener noreferrer">ToDo-List</a>
                    <p className="project-description">A notion clone with modern task management application built with React and local storage. Features include task creation, completion tracking, and priority management with a clean, intuitive interface.</p>
                  </li>
                  <li className="project-item">
                    <a href="https://mbrilla.github.io/Beats/" target="_blank" rel="noopener noreferrer">Beats</a>
                    <p className="project-description">**IN PROGRESS** (Waiting for Soundcloud API KEY) A showcase platform for my music production work. Listen to my original beats and productions in a clean, modern interface. Made with React and Youtube API integration.</p>
                  </li>
                  <li className="project-item">
                    <a href="https://mbrilla.github.io/FashionAdvisorAI/" target="_blank" rel="noopener noreferrer">Fashion Advisor AI</a>
                    <p className="project-description">An AI-powered fashion recommendation system that provides personalized styling suggestions. Built with React with the implementation of GEMINI API, it helps users discover and create stylish outfits tailored to their preferences.</p>
                  </li>
                </ul>
              </div>
            </section>
          )}
          {activeSection === 'about' && (
            <section className="about-container">
              <h1>About Me</h1>
              <div className="about-content-wrapper">
                <div className="about-content">
                  <p>I'm a passionate front-end developer with a keen eye for design and user experience. I specialize in creating responsive, intuitive web applications using modern technologies.</p>
                </div>
                <div className="about-image">
                  <img src={lebronImage} alt="Profile" className="image-primary" />
                  <img src={lebronImage2} alt="Profile Hover" className="image-secondary" />
                </div>
              </div>
            </section>
          )}
          {activeSection === 'contact' && (
            <section className="section-fade">
              <h1>Get in Touch</h1>
              <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
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
