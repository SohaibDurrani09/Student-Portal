import React from "react";
import "./Dashboard.css";



const Dashboard = () => {
  return (
    <div className="dashboard">
    <div className="uni-info">
      <div className="student-name">
        <h3>M SOHAIB PROFILE</h3>
      </div>
      <table>
        <tr>
          <th colSpan={4}>University Information</th>
        </tr>
        
          <tr>
            <td>Course</td>  
            <td>Bachelor of Computer Science</td>
            <td>Enrolled Class ID</td>
            <td>BECS-F-22-A-26</td>
          </tr>
          <tr>
            <td>Registration ID</td>  
            <td>217940</td>
            <td>Admission form No</td>
            <td>2029301920</td>
          </tr>
          
        
      </table>
      </div>
      <div className="student-info">
      <table>
        <tr>
          <th colSpan={4}>Personal Information</th>
        </tr>
        
          <tr>
            <td>Name</td>  
            <td>M Sohaib</td>
            <td>Father Name</td>
            <td>Zahid</td>
          </tr>
          <tr>
            <td>Gender</td>  
            <td>Male</td>
            <td>NIC</td>
            <td>17301-4691898-5</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>26/09/2003</td>
            <td>Nationality</td>
            <td>Pakistan</td>
          </tr>
          <tr>
            <td>Religion</td>
            <td>Islam</td>
            <td>Martial status</td>
            <td>single</td>
          </tr>
        
      </table>
      </div>
      <div className="other-info">
      <table>
        <tr>
          <th colSpan={4}>Other Information</th>
        </tr>
        
          <tr>
            <td>Course</td>  
            <td>Bachelor of Computer Science</td>
            <td>Enrolled Class ID</td>
            <td>BECS-F-22-A-26</td>
          </tr>
          <tr>
            <td>Registration ID</td>  
            <td>217940</td>
            <td>Admission form No</td>
            <td>2029301920</td>
          </tr>
          
        
      </table>
      </div>
    </div>

  );
};

export default Dashboard;
