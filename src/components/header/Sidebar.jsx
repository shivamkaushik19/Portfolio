import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '..header/../Sidebar.css'
const Sidebar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleNavigation = (section) => {
    setIsChecked(false); // Close the sidebar menu
    navigate(`/home?section=${section}`); // Navigate with section
  };

  return (
    <nav>
      <input
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={handleMenuToggle}
      />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo bloody-font">Welcome</label>
      <ul className={isChecked ? 'active-menu' : ''}>
        <li>
          <Link to="/home" className="nav-home">Home</Link>
        </li>
        <li  >
          <button
            onClick={() => handleNavigation('about')}
            className="nav-about"
          >
            About
          </button>
        </li>
        <li   >
          <button
            onClick={() => handleNavigation('skills')}
            className="nav-services"
          >
            Skills
          </button>
        </li>
        <li>
        <Link to="/blogs" className="nav-home">Blogs</Link>
        </li>
        <li > 
          <button
            onClick={() => handleNavigation('contact')}
            className="nav-contact"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
