import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import '../card/Card.css';
import html from "../../assets/html.png"
import Css from "../../assets/css.webp"
import JavaScript from "../../assets/javaScript.webp"
import react from "../../assets/react.png"
import  bootstrap from "../../assets/bootstrap.png"
import node from "../../assets/node1.webp"
import Express from "../../assets/expressjs.png"
import MongoDB from "../../assets/mongo.svg"
import mysql from "../../assets/mysql.png"
import WordPress from "../../assets/wordpress.png"
import coding from "../../assets/coding.webp"
import master from "../../assets/master.jpeg"
import dollar from "../../assets/dollar.webp"
import business from "../../assets/codebusiness.jpeg"
import sider from "../../assets/sider.jpeg"

const Card = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.about-me-section');
            if (aboutSection) {
                const sectionTop = aboutSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 5;

                if (sectionTop < screenPosition) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])



    const handleNavigation = (section) => {
        navigate(`/blogs?section=${section}`);
      };

    
    
    
    

    return (
        <>
        <div className="card-container" id='skills'>
            <div className={`card ${isVisible ? 'visible' : ''}`}>
                <div className="icon">
                    <img src={html } alt="JavaScript Logo" />
                    <img src={Css } alt="JavaScript Logo" />
                </div>
                <h3>HTML & CSS</h3>
                <p>I possess a solid understanding of HTML and CSS, which allows me to design responsive and aesthetically pleasing websites.</p>
            </div>

            <div className={`card ${isVisible ? 'visible' : ''}`}>
                <div className="icon">
                    <img src={JavaScript} alt="React Logo" />
                </div>
                <h3>JavaScript</h3>
                <p>I possess a deep understanding of JavaScript, empowering me to create dynamic, interactive web experiences that captivate users.</p>
            </div>

            <div className={`card ${isVisible ? 'visible' : ''}`}>
                <div className="icon">
                    <img src={react} alt="Node.js Logo" />
                </div>
                <h3>React</h3>
                <p>Armed with a strong command of React, I create seamless and interactive user interfaces that elevate the way users interact with web applications.</p>
            </div>

            <div className={`card ${isVisible ? 'visible' : ''}`}>
                <div className="icon">
                    <img src={bootstrap} alt="Bootstrap Logo" />
                </div>
                <h3>Bootstrap</h3>
                <p>With a keen understanding of Bootstrap, I design sleek and responsive web layouts that adapt effortlessly to any screen size.</p>
            </div>
        </div>

        {/* // the card part 2 */}
        <div className="card-container">
        <div className={`card ${isVisible ? 'visible' : ''}`}>
            <div className="icon">
                <img src={node} alt="JavaScript Logo" />
                <img src={Express} alt="JavaScript Logo" />
            </div>
            <h3>Node.js & Express</h3>
            <p>Equipped with in-depth knowledge of Node.js and Express, I build powerful and efficient server-side applications that deliver seamless performance and an exceptional user experience across all devices</p>
        </div>

        <div className={`card ${isVisible ? 'visible' : ''}`}>
            <div className="icon">
                <img src={MongoDB} alt="React Logo" />
            </div>
            <h3> MongoDB</h3>
            <p>With a solid command of MongoDB, I design robust and scalable databases that efficiently manage data for dynamic applications, ensuring fast retrieval and seamless integration</p>
        </div>

        <div className={`card ${isVisible ? 'visible' : ''}`}>
            <div className="icon">
                <img src={mysql} alt="Node.js Logo" />
            </div>
            <h3>MySQL</h3>
            <p>Leveraging my expertise in MySQL, I architect reliable and efficient relational databases, optimizing queries to ensure smooth, high-performance data management for complex applications</p>
        </div>

        <div className={`card ${isVisible ? 'visible' : ''}`}>
            <div className="icon">
                <img src={WordPress} alt="Bootstrap Logo" />
            </div>
            <h3>WordPress</h3>
            <p>Harnessing the power of WordPress, I create dynamic, customizable websites that offer seamless content management and engaging user experiences, tailored to meet diverse business needs</p>
        </div>
    </div>
  {/* the  blog is started */}
  
  <div className="blog-wrapper"   >
    <div className="sidebar">
    
    <img src={sider} alt="Sidebar Image" className="sidebar-image" />
    </div>

    <div className="blog-container">
        <h1 className="blog-heading">My Blog</h1>

        <div className="blog-card">
            <div className="image-container">
                <img className="card-image" src={coding} alt="Learning to Code" />
            </div>
            <div className="content">
                <h2 className="card-title">Learning to Code</h2>
                <h4 className="card-subtitle">Opening a Door to the Future</h4>
                <p className="card-description">Learning to code opens up a world of possibilities, allowing you to bring your ideas to life through technology</p>
                <button
            onClick={() => handleNavigation('blog1')}
             className="card-link"
          >
            Read More          </button>
            </div>
        </div>

        <div className="blog-card">
            <div className="image-container">
                <img className="card-image" src={master} alt="Mastering the Language" />
            </div>
            <div className="content">
                <h2 className="card-title">Mastering the Language</h2>
                <h4 className="card-subtitle">Java is Not the Same as JavaScript</h4>
                <p className="card-description">Java and JavaScript are often confused, but they serve different purposes in the programming world. While Java is a versatile, object-oriented language used for building applications</p>
                <button
            onClick={() => handleNavigation('blog2')}
             className="card-link"
          >
            Read More          </button>
    
            </div>
        </div>

        <div className="blog-card">
            <div className="image-container">
                <img className="card-image" src={business} alt="Learning to Code" />
            </div>
            <div className="content">
                <h2 className="card-title"> The Role of Coding in Business Innovation</h2>
                <h4 className="card-subtitle">Code Your Way to Competitive Advantage: Harnessing Technology for Growth.</h4>
                <p className="card-description">In today's fast-paced digital landscape, coding has become an essential skill for driving business innovation</p>
                <p className="card-description">Java and JavaScript are often confused, but they serve different purposes in the programming world. While Java is a versatile, object-oriented language used for building applications</p>
                <button
            onClick={() => handleNavigation('blog3')}
             className="card-link"
          >
            Read More          </button>
            </div>
        </div>

        <div className="blog-card">
            <div className="image-container">
                <img className="card-image" src={dollar} alt="Mastering the Language" />
                
            </div>
            <div className="content">
                <h2 className="card-title">Why Every Business Should Invest in Coding Skills</h2>
                <h4 className="card-subtitle"> Coding Skills Are Essential for Modern Success.</h4>
                <p className="card-description">As technology continues to reshape industries, coding skills have become increasingly valuable in the workforce.</p>
                <p className="card-description">Java and JavaScript are often confused, but they serve different purposes in the programming world. While Java is a versatile, object-oriented language used for building applications</p>
                <button
            onClick={() => handleNavigation('blog4')}
             className="card-link"
          >
            Read More          </button>
            </div>
        </div>
       





    </div>
</div>

    



    
    </>

    );
};

export default Card;
