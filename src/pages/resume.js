import React, { useState } from 'react';
import Header from '../components/header';
import '../styles/resume.css';
import pic from '../images/pic.jpg';

export default function Resume() {
  const sections = ['skills', 'experience', 'education', 'achievements'];
  const [active, setActive] = useState('skills');

  return (
    <>
      <Header />
      <section className="resume">
        <div className="me">
          <img src={pic} alt="John Kenneth Vargas" />
        </div>

        <div className="right-panel">
          <nav className="resume-info">
            {sections.map((sec) => (
              <button
                key={sec}
                className={active === sec ? 'active' : ''}
                onClick={() => setActive(sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
          </nav>

          <div className="res-con">
            <div id="skills" className={`content${active === 'skills' ? ' active' : ''}`}>
              <p className="skilltitle">Programming Languages</p>
              <p className="skilltext">• Python Programming<br />• C++ Programming</p>
              <p className="skilltitle">Bot Development</p>
              <p className="skilltext">• Creating Discord Bot</p>
              <p className="skilltitle">Database Management</p>
              <p className="skilltext">• MySQL Database</p>
              <p className="skilltitle">Web and UI Design</p>
              <p className="skilltext">• Web Design<br />• UI Design</p>
            </div>

            <div id="experience" className={`content${active === 'experience' ? ' active' : ''}`}>
              <p className="exptitle">Discord Bot Development</p>
              <p className="exptext">
                • I created and maintained a Discord bot for my server. Its main functionalities are playing music and managing roles automatically.
              </p>
              <p className="exptitle">Database and Management</p>
              <p className="exptext">
                • Designed and implemented MySQL databases. For a classroom project, we built a parking management system.
              </p>
              <p className="exptitle">Website Creation</p>
              <p className="exptext">
                • Developed a website with UI/UX focus, matching the aesthetic of this portfolio layout.
              </p>
            </div>

            <div id="education" className={`content${active === 'education' ? ' active' : ''}`}>
              <p className="eductitle">2022 - Present</p>
              <p className="eductext">• College – Technological Institute of the Philippines</p>
              <p className="eductitle">2020 - 2022</p>
              <p className="eductext">• Senior High – St. Mary’s Academy Pasay City</p>
              <p className="eductitle">2016 - 2020</p>
              <p className="eductext">• Junior High – St. Mary’s Academy Pasay City</p>
              <p className="eductitle">2010 - 2016</p>
              <p className="eductext">• Elementary – St. Mary’s Academy Pasay City</p>
            </div>

            <div id="achievements" className={`content${active === 'achievements' ? ' active' : ''}`}>
              <p className="achititle">Academic</p>
              <p className="achitext">
                • 1st Year Dean’s Lister<br />• Cisco Certified Entry Networking Technician
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
