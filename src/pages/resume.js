"use client"

import { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/resume.css"
import pic from "../images/pic.jpg"
import jsPDF from "jspdf"

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

  const extractSkillsData = () => {
    const skillsData = []
    const skillsContent = document.getElementById("skills-content")
    if (skillsContent) {
      const contentBlocks = skillsContent.querySelectorAll(".content-block")
      contentBlocks.forEach((block) => {
        const title = block.querySelector(".section-title")?.textContent || ""
        const skills = []
        const skillItems = block.querySelectorAll(".skill-item")
        skillItems.forEach((item) => {
          skills.push(item.textContent || "")
        })
        if (title && skills.length > 0) {
          skillsData.push({ title, skills })
        }
      })
    }
    return skillsData
  }

  const extractExperienceData = () => {
    const experienceData = []
    const experienceContent = document.getElementById("experience-content")
    if (experienceContent) {
      const contentBlocks = experienceContent.querySelectorAll(".content-block")
      contentBlocks.forEach((block) => {
        const title = block.querySelector(".section-title")?.textContent || ""
        const description = block.querySelector(".experience-description")?.textContent || ""
        if (title) {
          experienceData.push({ title, description })
        }
      })
    }
    return experienceData
  }

  const extractEducationData = () => {
    const educationData = []
    const educationContent = document.getElementById("education-content")
    if (educationContent) {
      const contentBlocks = educationContent.querySelectorAll(".content-block")
      contentBlocks.forEach((block) => {
        const title = block.querySelector(".section-title")?.textContent || ""
        const badge = block.querySelector(".education-badge")?.textContent || ""
        const university = block.querySelector(".university-name")?.textContent || ""
        const description = block.querySelector(".experience-description")?.textContent || ""
        if (title) {
          educationData.push({ title, badge, university, description })
        }
      })
    }
    return educationData
  }

  const extractProjectsData = () => {
    const projectsData = []
    const projectsContent = document.getElementById("projects-content")
    if (projectsContent) {
      const contentBlocks = projectsContent.querySelectorAll(".content-block")
      contentBlocks.forEach((block) => {
        const title = block.querySelector(".section-title")?.textContent || ""
        const description = block.querySelector(".experience-description")?.textContent || ""
        const tags = []
        const tagElements = block.querySelectorAll(".project-tag")
        tagElements.forEach((tag) => {
          tags.push(tag.textContent || "")
        })
        const links = []
        const linkElements = block.querySelectorAll(".project-link")
        linkElements.forEach((link) => {
          links.push({
            text: link.textContent || "",
            url: link.href || "",
          })
        })
        if (title) {
          projectsData.push({ title, description, tags, links })
        }
      })
    }
    return projectsData
  }

  const splitTextToLines = (doc, text, maxWidth) => {
    const words = text.split(" ")
    const lines = []
    let currentLine = ""

    words.forEach((word) => {
      const testLine = currentLine + (currentLine ? " " : "") + word
      const testWidth = doc.getTextWidth(testLine)

      if (testWidth > maxWidth && currentLine) {
        lines.push(currentLine)
        currentLine = word
      } else {
        currentLine = testLine
      }
    })

    if (currentLine) {
      lines.push(currentLine)
    }

    return lines
  }

  const downloadResume = () => {
    // Short bond paper size (8.5" x 11") with 1 inch margins
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [612, 792], // 8.5" x 11" in points
    })

    const margin = 72 // 1 inch in points
    const contentWidth = 612 - margin * 2 // 6.5 inches
    const pageHeight = 792
    const contentHeight = pageHeight - margin * 2
    let yPosition = margin

    const checkPageBreak = (requiredSpace) => {
      if (yPosition + requiredSpace > pageHeight - margin) {
        doc.addPage()
        yPosition = margin
      }
    }

    // Header
    doc.setFontSize(24)
    doc.setFont(undefined, "bold")
    doc.text("John Kenneth Vargas", margin, yPosition)
    yPosition += 30

    doc.setFontSize(16)
    doc.setFont(undefined, "normal")
    doc.text("Computer Engineer", margin, yPosition)
    yPosition += 25

    // Contact Info
    doc.setFontSize(10)
    doc.text("Email: vargaskenneth656@gmail.com", margin, yPosition)
    yPosition += 12
    doc.text("Phone: 09610388470 / 09922708018", margin, yPosition)
    yPosition += 12
    doc.text("Location: Taguig City, Philippines", margin, yPosition)
    yPosition += 25

    // Skills Section
    const skillsData = extractSkillsData()
    if (skillsData.length > 0) {
      checkPageBreak(50)
      doc.setFontSize(14)
      doc.setFont(undefined, "bold")
      doc.text("SKILLS", margin, yPosition)
      yPosition += 20

      skillsData.forEach((skillCategory) => {
        checkPageBreak(30)
        doc.setFontSize(11)
        doc.setFont(undefined, "bold")
        doc.text(skillCategory.title + ":", margin, yPosition)
        yPosition += 15

        doc.setFontSize(10)
        doc.setFont(undefined, "normal")
        skillCategory.skills.forEach((skill) => {
          checkPageBreak(15)
          const lines = splitTextToLines(doc, "• " + skill, contentWidth - 20)
          lines.forEach((line, index) => {
            doc.text(line, margin + (index === 0 ? 0 : 10), yPosition)
            yPosition += 12
          })
        })
        yPosition += 8
      })
      yPosition += 10
    }

    // Experience Section
    const experienceData = extractExperienceData()
    if (experienceData.length > 0) {
      checkPageBreak(50)
      doc.setFontSize(14)
      doc.setFont(undefined, "bold")
      doc.text("EXPERIENCE", margin, yPosition)
      yPosition += 20

      experienceData.forEach((experience) => {
        checkPageBreak(40)
        doc.setFontSize(11)
        doc.setFont(undefined, "bold")
        doc.text(experience.title, margin, yPosition)
        yPosition += 15

        if (experience.description) {
          doc.setFontSize(10)
          doc.setFont(undefined, "normal")
          const lines = splitTextToLines(doc, experience.description, contentWidth)
          lines.forEach((line) => {
            checkPageBreak(12)
            doc.text(line, margin, yPosition)
            yPosition += 12
          })
        }
        yPosition += 15
      })
      yPosition += 10
    }

    // Education Section
    const educationData = extractEducationData()
    if (educationData.length > 0) {
      checkPageBreak(50)
      doc.setFontSize(14)
      doc.setFont(undefined, "bold")
      doc.text("EDUCATION", margin, yPosition)
      yPosition += 20

      educationData.forEach((education) => {
        checkPageBreak(40)
        doc.setFontSize(11)
        doc.setFont(undefined, "bold")
        const titleWithDate = education.title + (education.badge ? " (" + education.badge + ")" : "")
        doc.text(titleWithDate, margin, yPosition)
        yPosition += 15

        if (education.university && education.university !== ".") {
          doc.setFontSize(10)
          doc.setFont(undefined, "italic")
          doc.text(education.university, margin, yPosition)
          yPosition += 12
        }

        if (education.description) {
          doc.setFontSize(10)
          doc.setFont(undefined, "normal")
          const lines = splitTextToLines(doc, education.description, contentWidth)
          lines.forEach((line) => {
            checkPageBreak(12)
            doc.text(line, margin, yPosition)
            yPosition += 12
          })
        }
        yPosition += 15
      })
      yPosition += 10
    }

    // Projects Section
    const projectsData = extractProjectsData()
    if (projectsData.length > 0) {
      checkPageBreak(50)
      doc.setFontSize(14)
      doc.setFont(undefined, "bold")
      doc.text("PROJECTS", margin, yPosition)
      yPosition += 20

      projectsData.forEach((project) => {
        checkPageBreak(60)
        doc.setFontSize(11)
        doc.setFont(undefined, "bold")
        doc.text(project.title, margin, yPosition)
        yPosition += 15

        if (project.tags.length > 0) {
          doc.setFontSize(9)
          doc.setFont(undefined, "normal")
          doc.text("Technologies: " + project.tags.join(", "), margin, yPosition)
          yPosition += 12
        }

        if (project.description) {
          doc.setFontSize(10)
          doc.setFont(undefined, "normal")
          const lines = splitTextToLines(doc, project.description, contentWidth)
          lines.forEach((line) => {
            checkPageBreak(12)
            doc.text(line, margin, yPosition)
            yPosition += 12
          })
        }

        if (project.links.length > 0) {
          project.links.forEach((link) => {
            checkPageBreak(12)
            doc.setFontSize(9)
            doc.setFont(undefined, "normal")
            doc.text(link.text + ": " + link.url, margin, yPosition)
            yPosition += 12
          })
        }
        yPosition += 15
      })
    }

    // Save the PDF
    doc.save("John_Kenneth_Vargas_Resume.pdf")
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="resume-wrapper">
          {/* Left Side - Photo and Download Button */}
          <div className="photo-section">
            <div className="photo-container">
              <img src={pic || "/placeholder.svg"} alt="John Kenneth Vargas" className="profile-photo" />
            </div>

            {/* Download Resume Button */}
            <button onClick={downloadResume} className="download-resume-btn">
              <i className="ri-download-line"></i>
              Download Resume
            </button>
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
                  <h3 className="section-title">Web & Software Development</h3>
                  <ul className="skill-list">
                    <li>
                      <span className="skill-item">JavaScript, React, HTML5, CSS3, Node.js</span>
                    </li>
                    <li>
                      <span className="skill-item">Responsive Design, UI/UX Design</span>
                    </li>
                    <li>
                      <span className="skill-item">Git, Agile Development</span>
                    </li>
                    <li>
                      <span className="skill-item">Python, C Programming</span>
                    </li>
                  </ul>
                </div>

                <div className="content-block">
                  <h3 className="section-title">Problem-Solving & Collaboration</h3>
                  <ul className="skill-list">
                    <li>
                      <span className="skill-item">Adaptability, Time Management</span>
                    </li>
                    <li>
                      <span className="skill-item">Creative Problem Solving</span>
                    </li>
                    <li>
                      <span className="skill-item">Critical Thinking, Team Collaboration</span>
                    </li>
                  </ul>
                </div>

                <div className="content-block">
                  <h3 className="section-title">Electronics & Embedded Systems</h3>
                  <ul className="skill-list">
                    <li>
                      <span className="skill-item">Microcontrollers, Breadboarding</span>
                    </li>
                    <li>
                      <span className="skill-item">Digital & Logic Circuit Design, Schematic Design</span>
                    </li>
                    <li>
                      <span className="skill-item">Embedded Systems Programming</span>
                    </li>
                  </ul>
                </div>

                <div className="content-block">
                  <h3 className="section-title">Computer Science Fundamentals</h3>
                  <ul className="skill-list">
                    <li>
                      <span className="skill-item">Computer Networks</span>
                    </li>
                    <li>
                      <span className="skill-item">Data Structures</span>
                    </li>
                    <li>
                      <span className="skill-item">Operating Systems</span>
                    </li>
                    <li>
                      <span className="skill-item">System Architecture</span>
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
                    <h3 className="section-title">Elementary - Senior High School</h3>
                    <span className="education-badge">2010 - 2022</span>
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
                    Created an interactive website that serves as a personal catalog of quirky and creative coding
                    experiments, inspired by neal.fun. Each project showcases a different idea or concept brought to
                    life through code, with an emphasis on playfulness and exploration.
                  </p>
                  <div className="project-links">
                    <a href="https://vargass.netlify.app/" className="project-link">
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
                    Built a comprehensive Discord bot with music playbook capabilities and automated role management
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
