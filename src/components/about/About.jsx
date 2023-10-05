import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiUsers} from 'react-icons/fi'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward classname='about__icons'/>
              <h5>Experience</h5>
              <small>Student</small>
            </article>
            <article className='about__card'>
              <FaAward classname='about__icons'/>
              <h5>Skills</h5>
              <small>10+</small>
            </article>
            <article className='about__card'>
              <FaAward classname='about__icons'/>
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>As a Software Developer pursuing a major in Information Technology from
Vellore Institute of Technology, I have gained hands-on experience through
academic projects, where I have leveraged various technologies and tools to
develop solutions. I am a quick learner, highly motivated to innovate, and
constantly seek new challenges to enhance my skills.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About