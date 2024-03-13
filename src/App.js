// App.jsx

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Attendence from './pages/Attendence.jsx';
import Grade from './pages/Grade.jsx';
import Fee from './pages/Fee.jsx';
import Feedback from './pages/Feedback.jsx';
import Navbar from './components/Navbar.jsx';
import Timetable from './pages/Timetable.jsx'
import Library from './pages/Library.jsx'
import Vehicle from './pages/Vehicle.jsx'
import Social from './pages/Social.jsx'
import LoginForm from './pages/LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loginData) => {
    // You can implement your login logic here
    // For now, let's pretend login is successful if username and password are not empty
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <>
          <Navbar />
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/grade-report" element={<Grade />} />
              <Route path="/attendence" element={<Attendence />} />
              <Route path="/fee-system" element={<Fee />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/library" element={<Library />} />
              <Route path="/social-activities" element={<Social />} />
              <Route path="/vehicle-registration" element={<Vehicle />} />
            </Routes>
          </Sidebar>
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </BrowserRouter>
  );
};

export default App;
