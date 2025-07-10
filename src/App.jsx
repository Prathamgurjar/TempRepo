import React from 'react';
import { Navigate,Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landingPage';
import Navbar from './components/navbar';
import UserRegistrationFrom from './components/userRegisform';
import Login from './components/login'
import AddEquform from './components/addEquform';
function App() {


  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<UserRegistrationFrom />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      
      </Router>
      <AddEquform />
     
    </div>
  )
}

export default App
