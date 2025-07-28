import React from 'react';
import { Navigate,Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import LandingPage from './pages/landingPage';
import Navbar from './components/navbar';
import UserRegistrationFrom from './components/userRegisform';
import Login from './components/login'
import AddEquform from './components/addEquform';
import UserDasboard from './pages/userDasBoard';
import EquipmentRentalForm from './components/equpRentalform';
import VendorDashboard from './pages/vendorDasBoard';
import ContectUs from './pages/contectUs';
import About from './pages/about';
import UserNavBar from './components/userNavBar';
function App() {
 const showNavbar=location.pathname.startsWith('/user')|| location.pathname.startsWith('/vendor')

  return (
    <div>
      <Router>
      <Navbar />
      {showNavbar && <UserNavBar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<UserRegistrationFrom />} />
          <Route path="/login" element={<Login />} />

          
            
              <Route path="/userNavBar" element={<UserNavBar />} />
          <Route path='/equipment' element={<UserDasboard />} />

          
          
          
          <Route path='/rent' element={<EquipmentRentalForm/>}/>
          <Route path='/vendor' element={ <VendorDashboard/>}></Route>
          <Route path='//addequipment' element={<AddEquform/>}/>
          <Route path='/contact' element={<ContectUs/>}/>
          <Route path='/about' element={<About/>}/>

          {/* Add more routes as needed */}
        </Routes>
      </Router>
     
       {/* <AddEquform /> */}
      {/* <About /> */}
     
     
      

      
      
     
    </div>
  )
}

export default App
