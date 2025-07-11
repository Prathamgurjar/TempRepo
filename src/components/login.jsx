import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';


const login=()=>{
  return(
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#a8e063] to-[#56ab2f] px-4">
  <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-green-800 backdrop-blur-md border border-white/30">
      
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        <form action="" className='space-y-5'>
          <div>
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            required
            placeholder='Enter your email'
            className="w-full px-4 py-2  bg-white text-black placeholder-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
             />

          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            required
            placeholder='Enter your password'
            className="w-full px-4 py-2  bg-white text-black placeholder-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
             />
          </div>
          <select name="role" id="role" required>
            <option value="user" className='text-black'>User</option>
            <option value="vendor" className='text-black' >Vendor</option>
          </select>
          {/* <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-green-600 hover:underline">Forgot password?</a>
          </div> */}
          <p className='text-white'>New User? {" "}
           
            <Link to="/register" className='text-green-600 hover:underline'>Register</Link>
          </p>
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
            >
              Login</button>

        </form>
        </div>
     </div>
  )
}
export default login;