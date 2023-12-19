import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaDesktop,
    FaUserCircle,
    FaUserFriends,
    FaRunning
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../style/Sidebar.css'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/action",
            name:"Action",
            icon:<FaRunning/>
        },
        {
            path:"/application",
            name:"Application",
            icon:<FaDesktop/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserCircle/>
        },
        {
            path:"/utilisateur",
            name:"Utilisateur",
            icon:<FaUserFriends/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Gestion</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;