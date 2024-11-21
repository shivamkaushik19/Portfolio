import React, { useEffect, useState } from 'react';
import '../about/About.css';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-me-section');
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.5;

      if (sectionTop < screenPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   <section className="about-me-section" id="about">
  <div className="about-me-content">
    <h1 className={`about-me-title ${isVisible ? 'visible' : ''}`}>
      What I Do
    </h1>
    <p className={`about-me-description ${isVisible ? 'visible' : ''}`}>
      Hello! I’m a web developer, entrepreneur, and founder of <strong>Tech Innovations</strong>, dedicated to empowering businesses through powerful online solutions. With a year of experience, I focus on crafting websites that aren’t just visually appealing but are also built to drive business growth and engagement.
    </p>
    <p className={`about-me-description ${isVisible ? 'visible' : ''}`}>
      At <strong>Tech Innovations</strong>, we work with startups and small businesses, creating user-friendly and scalable websites tailored to their goals. From sleek designs to high-performance backend solutions, we build sites that are not only modern but optimized for conversions. Staying ahead of industry trends, we incorporate the latest web technologies, ensuring every project is sustainable and adaptable to future changes.
    </p>
    <p className={`about-me-description ${isVisible ? 'visible' : ''}`}>
      More than just development, our team provides strategic insights on digital marketing and branding to help clients succeed in a competitive online landscape. We offer guidance in areas like SEO and content strategy, making sure our solutions are comprehensive.
    </p>
    <p className={`about-me-description ${isVisible ? 'visible' : ''}`}>
      I invite you to view my <span className="about-me-resume">online resume</span> to learn more about my qualifications and explore my <span className="about-me-portfolio">portfolio</span> to see the impact we’ve created for clients. Let’s work together to bring your vision to life and help your business thrive!
    </p>
  </div>
</section>

    


    </>
  );
};

export default About
