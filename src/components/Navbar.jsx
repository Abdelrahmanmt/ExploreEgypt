import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');}
    const handleExploreClick = () => {
      navigate('/explore');
    }

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <img src="./images/icon-menu.png" alt="" onClick={handleHomeClick}/>
      </div>
      <ul className="navbar-links">
        <li onClick={handleHomeClick}>Home</li>
        <li onClick={handleExploreClick}>Explore</li>
        <li>Museum</li>
        <li>ChatBot</li>
        <li>Contact</li>
      </ul>
      <div className="navbar-title">ANCIENT EGYPT</div>
    </nav>
  );
}

export default Navbar;