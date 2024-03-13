import React, {useState} from 'react';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileLogo from "../profile-logo.png"
import studentImg from "../student.png"

import {  faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
const Navbar = () => {
    const [showProfile, setShowProfile] = useState(true);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
      };
    return (
        <div className="navbar">
            <div className="navbar-left">
                
                <div className="uni-name">
                    {/* University name */}
                    <span>University of Peshawar</span>
                </div>
            </div>
            <div className="navbar-middle">
                {/* Welcome text */}
                <span>Welcome to Student Portal</span>
            </div>
            <div className="navbar-right">
          <img src={profileLogo} alt="profile-img" />
          <FontAwesomeIcon
            className='down-icon'
            icon={faAngleDown}
            onClick={toggleProfile}
            style={{ cursor: 'pointer' }}
          />
        </div>
        {showProfile && (
          <div className="profile-section">
            <div className="student-info">
              <img src={studentImg} alt="student" />
              <h4>M Sohaib</h4>
            </div>
            <div className="student-btns">
              <a href='change.html'>Change Password</a>
              <button className='btn btn-logout'>Logout</button>
            </div>
          </div>
        )}
      </div>
      
    );
}

export default Navbar;
