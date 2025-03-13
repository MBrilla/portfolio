import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="container">
      <nav className="navigation">
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
    </div>
  )
}

export default App
