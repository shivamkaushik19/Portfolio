import React from 'react'
import '../Resume/Resume.css'
import banner from '../../assets/resume.jpeg'
import ContactForm from '../contactform/Contactform'

function Resume() {
  return (
    <>

<div className="banner">
      <img
        className="banner-img"
        src={banner}
        alt="Banner"
      />
      <div className="outer-content">
        <div className="inner-content">
          
        </div>
      </div>
    </div>
{/* resume */}


<div>
      <h2 className='download'>Download My Resume</h2>
      <a
        href="/ShivamSharma.pdf"
        download="My_Resume.pdf"
        className="button" >
        Download Resume
      </a>
    </div>


    <section class="resume-section">
  <div class="resume-container">
    <header class="resume-header">
      <h1>Shivam Sharma</h1>
      <p>Delhi | Shahdara</p>
      <p>Email: Shivamkhaushik@gmail.com | Phone: 7838973961</p>
    </header>

    <div class="resume-content">
      <h2>Profile</h2>
      <p>
        Energetic web developer with a solid foundation in front-end and back-end
        technologies. Skilled in building interactive, responsive designs with
        HTML, CSS, JavaScript, and React, and experienced in back-end development
        using Node.js, Express, MongoDB, and MySQL. Passionate about creating
        seamless, user-friendly applications and continuously expanding my
        technical expertise.
      </p>

      <h2>Experience</h2>
      <div class="experience-item">
        <h3>Frontend Developer - Chainalytical</h3>
        <p>Feb 2024 - Jul 2024</p>
        <p>
          As a Front-End Developer at Chainalytical for 6 months, I designed and
          optimized responsive web interfaces to enhance user engagement.
          Collaborated with designers and back-end developers to implement
          seamless UI elements using HTML, CSS, and JavaScript, and integrated
          React components for dynamic user flows.
        </p>
      </div>
      <div class="experience-item">
        <h3>Full-Stack Developer - Tech Innovations</h3>
        <p>Aug 2024 - Sep 2024</p>
        <p>
          Built a full-stack website for Tech Innovations, a startup focused on
          driving business growth and offering tech courses to students.
          Developed a responsive front-end with HTML, CSS, and JavaScript, and a
          robust back-end with Node.js, Express, and MongoDB.
        </p>
      </div>

      <h2>Education & Certifications</h2>
      <p>Computer Science and Engineering, Maharaja Agrasen Institute of Technology</p>
      <p>Java Full Stack Web Development, DUCAT</p>

      <h2>Skills</h2>
      <div class="skills">
        <p><strong>Languages:</strong> Java, JavaScript, Python, SQL</p>
        <p><strong>Frontend:</strong> HTML, CSS, React, Redux, Bootstrap, Swiper.js</p>
        <p><strong>Backend:</strong> Node.js, Express</p>
        <p><strong>Database:</strong> MongoDB, MySQL, SQL</p>
        <p><strong>Deployment:</strong> Git, GitHub</p>
        <p><strong>Tools:</strong> Visual Studio, IntelliJ</p>
        <p><strong>Other:</strong> WordPress, Social Media Management</p>
      </div>

      <h2>Extracurricular Activities</h2>
      <p>Social Media Management: Instagram, Facebook, Twitter</p>
      <p>Photo & Video Editing: VN Studio, Capcut, Canva</p>
      <p>Content Writing: Website Content</p>

      <h2>Links</h2>
      <div class="links">
        <p><a href="https://www.linkedin.com/in/shivam-sharma-332944285">LinkedIn</a></p>
        <p><a href="https://github.com/shivamkaushik19">GitHub</a></p>
      </div>
    </div>
  </div>
</section>
{/* the adding the contact form */}
<div  className='contact'>
  
  <ContactForm></ContactForm>
  
  
   </div>
</>
  )
}

export default Resume