import React, { useState } from 'react';
import logo from "../uni-logo.png"
import {
    FaTh,
    FaBars,
    
    FaChartBar,
    FaFileAlt,
    FaReceipt,
    FaComments,
    FaBook,
    FaUsers,
    FaCar
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const [isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/timetable",
            name:"Timetable",
            icon:<FaChartBar/>
        },
        {
            path:"/attendence",
            name:"Attendence ",
            icon:<FaFileAlt/>
        },
        {
            path:"/grade-report",
            name:"Grade Report",
            icon:<FaReceipt/>
        },
        {
            path:"/fee-system",
            name:"Fee System",
            icon:<FaUsers/>
        },
        {
            path:"/feedback",
            name:"Feedback",
            icon:<FaComments/>
        },
        {
            path:"/library",
            name:"Digital Library",
            icon:<FaBook/>
        },
        {
            path:"/social-activities",
            name:"Social Activities",
            icon:<FaUsers/>
        },
        {
            path:"/vehicle-registration",
            name:"Vehicle Registration",
            icon:<FaCar/>
        }
    ];
    
    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <img style={{display: isOpen ? "block" : "none"}} src={logo} className="logo" alt='Logo' />
                   <div style={{marginLeft: isOpen ? "105px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active">
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
