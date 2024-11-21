import React from 'react'
import '../intro/intro.css'
import freelancer from "../../assets/photo.jpg"
import { Link } from 'react-router-dom'
function Intro() {
  return (

    <>
      <div className='main_outer'>
    <div className="intro_outer">
    <div className="left_outer">
    <div class="animated-text">
        I'm a <span></span>
    </div>
      <div className="description">
      Just like the ideal pair of shoes, I create websites that are both stylish and functional. Every line of code is carefully crafted for performance, comfort, and responsiveness, ensuring a seamless fit across all devices. I stay ahead of the curve with cutting-edge tech, delivering digital solutions that walk the fine line between creativity and precision.
      </div>
      <div className="buttons">
       <Link to="/resume"  ><button className="resume_btn">View Resume</button></Link> 
      </div>
    </div>
    <div className="right_outer">
    <img src={freelancer} className='myimage' alt="photo" />
    </div>
  </div>
  </div>


  
  </>
  )
}

export default Intro
