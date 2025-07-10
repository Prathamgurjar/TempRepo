// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // const navItems = [
//   //   { label: 'Home', path: '/' },
//   //   { label: 'Equipment', path: '/equipment' },
//   //   { label: 'Rentals', path: '/rentals' },
//   //   { label: 'About Us', path: '/about' },
//   //   { label: 'Contact', path: '/contact' }
//   // ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="fixed w-full z-50 bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img 
//             src="/logo.svg" 
//             alt="Agriculture Equipment Rental Logo" 
//             className="h-10 w-auto"
//           />
//           <span className="text-xl font-bold text-primary-dark">AgriRent</span>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-6 items-center">
//           {navItems.map((item) => (
//             <Link 
//               key={item.path} 
//               to={item.path} 
//               className="text-gray-700 hover:text-primary-light transition-colors font-medium"
//             >
//               {item.label}
//             </Link>
//           ))}
//           <Link 
//             to="/quote" 
//             className="bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
//           >
//             Get a Quote
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button 
//             onClick={toggleMenu} 
//             className="text-primary-dark focus:outline-none"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
//             <div className="flex flex-col items-center py-4 space-y-4">
//               {navItems.map((item) => (
//                 <Link 
//                   key={item.path} 
//                   to={item.path} 
//                   className="text-gray-700 hover:text-primary-light transition-colors"
//                   onClick={toggleMenu}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <Link 
//                 to="/quote" 
//                 className="bg-primary-light text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
//                 onClick={toggleMenu}
//               >
//                 Get a Quote
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from 'react-router-dom';


const Navbar=()=>{
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
          <span className="text-xl text-green-600 font-bold text-primary-dark">AgriRent</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</Link>
          <Link to="/equipment" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Equipment</Link>
          <Link to="/rentals" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Rentals</Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</Link>
          <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors">Login</Link>
     </div>
      </div>
    </nav>
  );

}
export default Navbar;