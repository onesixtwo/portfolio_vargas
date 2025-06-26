"use client"

import { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/resume.css"
import pic from "../images/pic.jpg"

export default function Resume() {
  const [activeTab, setActiveTab] = useState("skills")

  useEffect(() => {
    // Animate content blocks when tab changes
    const sections = document.querySelectorAll(".content-block")
    sections.forEach((section) => {
      section.classList.remove("show")
    })

    setTimeout(() => {
      const activeSections = document.querySelectorAll(`#${activeTab}-content .content-block`)
      activeSections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add("show")
        }, 100 * index)
      })
    }, 50)
  }, [activeTab])

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="resume-wrapper">
          {/* Left Side - Photo */}
          <div className="photo-section">
            <div className="photo-container">
              <img src={pic || "/placeholder.svg"} alt="John Kenneth Vargas" className="profile-photo" />
            </div>
          </div>

          {/* Right Side - Resume Content */}
          <div className="content-section">
            {/* Tabs */}
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab === "skills" ? "tab-active" : ""}`}
                onClick={() => handleTabClick("skills")}
              >
                Skills
              </button>
              <button
                className={`tab-btn ${activeTab === "experience" ? "tab-active" : ""}`}
                onClick={() => handleTabClick("experience")}
              >
                Experience
              </button>
              <button
                className={`tab-btn ${activeTab === "education" ? "tab-active" : ""}`}
                onClick={() => handleTabClick("education")}
              >
                Education
              </button>
              <button
                className={`tab-btn ${activeTab === "projects" ? "tab-active" : ""}`}
                onClick={() => handleTabClick("projects")}
              >
                Projects
              </button>
            </div>

            {/* Content */}
            <div className="tab-content">
              {/* Skills */}
              <div id="skills-content" className={`tab-pane ${activeTab === "skills" ? "active" : ""}`}>
                <div className="content-block show">
                  <h3 className="section-title">Programming Languages</h3>
                  <ul className="skill-list">
                    <li>
                      <span className="skill-item">Python Programming</span>
                    </li>
                    <li>
                      <span className="skill-item">C++ Programming</span>
                    </li>
                  </ul>
                </div>

                <div className="content-block">
                  <h3 className="section-title">Bot Development</h3>
                  <ul className="skill-list">
                    <li>
                      <span className="skill-item">Creating Discord Bot</span>
                    </li>
                  </ul>
                </div>

                <div className="content-block">
                  <h3 className="section-title">Database Management</h3>
                  <ul className="skill-list">
                    <li>
                      <span className="skill-item">MySQL Database</span>
                    </li>
                  </ul>
                </div>

                <div className="content-block">
                  <h3 className="section-title">Web and UI Design</h3>
                  <ul className="skill-list">
                    <li>
                      <span className="skill-item">Web Design</span>
                    </li>
                    <li>
                      <span className="skill-item">UI Design</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience */}
              <div id="experience-content" className={`tab-pane ${activeTab === "experience" ? "active" : ""}`}>
                <div className="content-block">
                  <h3 className="section-title">Discord Bot Development</h3>
                  <p className="experience-description">
                    I created and maintained a Discord bot for my server. Its main functionalities are playing music and
                    managing roles automatically.
                  </p>
                </div>

              </div>

              {/* Education */}
              <div id="education-content" className={`tab-pane ${activeTab === "education" ? "active" : ""}`}>
                <div className="content-block">
                  <div className="experience-header">
                    <h3 className="section-title">Computer Engineering</h3>
                    <span className="education-badge">2022 - Present</span>
                  </div>
                  <h4 className="university-name">.</h4>
                  <p className="experience-description">
                    Currently pursuing Bachelor's degree in Computer Engineering, 4th Year.
                  </p>
                </div>

                <div className="content-block">
                  <div className="experience-header">
                    <h3 className="section-title">Senior High School</h3>
                    <span className="education-badge">2020 - 2022</span>
                  </div>
                  <h4 className="university-name">St. Mary's Academy Pasay City</h4>
                </div>

                <div className="content-block">
                  <div className="experience-header">
                    <h3 className="section-title">Junior High School</h3>
                    <span className="education-badge">2016 - 2020</span>
                  </div>
                  <h4 className="university-name">St. Mary's Academy Pasay City</h4>
                </div>

                <div className="content-block">
                  <div className="experience-header">
                    <h3 className="section-title">Elementary</h3>
                    <span className="education-badge">2010 - 2016</span>
                  </div>
                  <h4 className="university-name">St. Mary's Academy Pasay City</h4>
                </div>
              </div>

              {/* Projects */}
              
              <div id="projects-content" className={`tab-pane ${activeTab === "projects" ? "active" : ""}`}>
                
                <div className="content-block">
                  <h3 className="section-title">Website Catalog</h3>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">TailwindCSS</span>
                    <span className="project-tag">Creative Web Apps</span>
                  </div>
                  <p className="experience-description">
                    Created an interactive website that serves as a personal catalog of quirky and creative coding experiments, inspired by neal.fun. Each project showcases a different idea or concept brought to life through code, with an emphasis on playfulness and exploration.
                  </p>
                  <div className="project-links">
                    <a href="https://vargasss.netlify.app/" className="project-link">
                      Live Demo
                    </a>
                    <a href="https://github.com/onesixtwo" className="project-link">
                      GitHub
                    </a>
                  </div>
                </div>



                <div className="content-block">
                  <h3 className="section-title">Discord Bot Development</h3>
                  <div className="project-tags">
                    <span className="project-tag">Python</span>
                    <span className="project-tag">Discord.py</span>
                    <span className="project-tag">MySQL</span>
                  </div>
                  <p className="experience-description">
                    Built a comprehensive Discord bot with music playback capabilities and automated role management
                    system for server administration.
                  </p>
                  <div className="project-links">
                    <a href="https://github.com/onesixtwo" className="project-link">
                      GitHub
                    </a>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
