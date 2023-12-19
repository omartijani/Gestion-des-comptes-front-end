import React from "react";
import { NavLink } from 'react-router-dom';
import { FaHeadset, FaInfoCircle } from "react-icons/fa";
import '../style/Navbar.css'
import lydec from "../images/Lydec.png"
const Navbar = () => {
  return (
    <nav>
      <img className="lg" src={lydec} width={60} height={50}/>
      <h1 className="title">Lydec</h1>
      <div className="a">
        
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'actv' : 'ab')}>
          <i>
            <FaInfoCircle />
          </i>
          About
        </NavLink>
       
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'actv' : 'ab')}>
          <i>
            <FaHeadset />
          </i>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
