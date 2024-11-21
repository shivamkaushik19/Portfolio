import React from 'react';
import  { useState } from "react";
import { useLocation } from 'react-router-dom';
import  { useEffect } from 'react';
import '../blogs/blog.css';
import Coding from '../../assets/coding.webp';
import master from "../../assets/master.jpeg"
import dollar from "../../assets/dollar.webp"
import business from "../../assets/codebusiness.jpeg"

function Blog() {

  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && newComment.trim() !== "") {
      const newCommentObj = { name, email, comment: newComment.trim() };
      setComments([...comments, newCommentObj]);
      setName("");
      setEmail("");
      setNewComment("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleRemove = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);



  return (
    <>

<div className="learning-to-code-container" id='blog1'  >
  <h2 className="heading-learning-to-code"   >Learning to Code</h2>
  <div className="content-container">
    <div className="text-container">
      <h3>Opening a Door to the Future</h3>
      <p>
        Learning to code opens up a world of possibilities, allowing you to bring your ideas to life through technology.
      </p>
      <p>
        Whether you're looking to build websites, mobile apps, or solve real-world problems, coding equips you with the tools to create meaningful innovations. Mastering programming languages such as JavaScript, Python, or Java can unlock opportunities in virtually every industry. It's a skill that enhances creativity, problem-solving abilities, and logical thinking.
      </p>
      <p>
        By learning to code, you're not just acquiring a technical skill—you're gaining the ability to shape the future.
      </p>
    </div>
    <div className="image-container">
      <img 
        className="content-image" 
        src={Coding} 
        alt="Learning to Code"
      />
    </div>
  </div>
</div>


 {/* blog2 */}

      <div className="mastering-language-container" id='blog2'>
        <h2 className="heading-mastering-language">Mastering the Language</h2>
        <div className="content-container">
          <div className="content-left">
            <h3>Java is Not the Same as JavaScript</h3>
            <p>
              Java and JavaScript are two of the most widely used programming languages in the world, yet they are often confused by beginners. Despite their similar names, they are designed for very different purposes.
            </p>
            <p>
              <strong>Java</strong> is a powerful, object-oriented programming language commonly used for building large-scale, platform-independent applications. It is often used in enterprise environments, mobile development (Android apps), and backend services due to its robustness and scalability. Java applications run on the Java Virtual Machine (JVM), making them cross-platform compatible.
            </p>
            <p>
              On the other hand, <strong>JavaScript</strong> is primarily used for building interactive and dynamic content on websites. It runs in the browser, enabling real-time updates and interactive features. JavaScript is crucial for front-end web development and is increasingly used on the backend (thanks to Node.js). Unlike Java, JavaScript is not an object-oriented language by default, though it supports object-oriented principles.
            </p>
          </div>
          <div className="content-right">
            <img 
              className="content-image" 
              src={master} 
              alt="Java vs JavaScript"
            />
          </div>
        </div>
      </div>

      {/* blog3 */}
      <div className="business-innovation-container" id='blog3'  >
  <h2 className="heading-business-innovation">The Role of Coding in Business Innovation</h2>
  <div className="innovation-content">
    <div className="innovation-image">
      <img 
        className="business-image" 
        src={business} 
        alt="Business Innovation"
      />
    </div>
    <div className="innovation-text">
      <h3>Code Your Way to Competitive Advantage</h3>
      <p>
        In today’s rapidly evolving technological landscape, coding has become more than just a skill—it’s a cornerstone for business growth and success. Companies that embrace coding are unlocking their potential to innovate and adapt to changing market demands.
      </p>
      <p>
        Mastering coding creates endless opportunities, driving impactful solutions through technology. From streamlining operations to creating custom tools tailored to unique business needs, coding empowers organizations to work smarter and stay ahead of competitors.
      </p>
      <p>
        Whether it’s developing software to improve customer experiences, analyzing data for strategic insights, or automating repetitive tasks, coding enhances efficiency, scalability, and creativity. 
      </p>
     
    </div>
  </div>
</div>
{/* blog4 */}
<div className="invest-coding-container"  id='blog4' >
  <h2 className="heading-invest-coding">Why Every Business Should Invest in Coding Skills</h2>
  <div className="coding-content-container">
    <div className="coding-content-left">
      <h3>Coding Skills Are Essential for Modern Success</h3>
      <p>
        As technology continues to reshape industries, coding skills have emerged as a critical asset for businesses aiming to stay competitive. Investing in these skills equips teams with the ability to innovate, adapt, and drive growth in a digital-first world.
      </p>
      <p>
        <strong>Efficiency and Automation:</strong> Coding allows businesses to streamline operations by automating repetitive tasks, saving time and reducing costs. From creating custom tools to developing efficient workflows, the possibilities are limitless.
      </p>
      <p>
        <strong>Data-Driven Decision Making:</strong> With coding knowledge, businesses can harness the power of data analytics, gaining insights that inform strategies and drive better decision-making. Programming languages like Python and R are particularly useful for analyzing and visualizing large datasets.
      </p>
     
    </div>
    <div className="coding-content-right">
      <img
        className="coding-image"
        src={dollar}
        alt="Coding Skills in Business"
      />
    </div>
  </div>
</div>

{/* comment boxk */}


<div className="comment-box-container">
      <div className="comment-box">
        <div className="comment-box-header">Leave a Comment</div>
        <form onSubmit={handleSubmit} className="comment-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="input-field"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="input-field"
            required
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            className="comment-input"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <div className="comment-list">
          {comments.length > 0 ? (
            comments.map((commentObj, index) => (
              <div key={index} className="comment-item">
                <div className="comment-text">
                  <strong>{commentObj.name}</strong> ({commentObj.email}):{" "}
                  {commentObj.comment}
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="no-comments">No comments yet. Be the first!</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Blog;
