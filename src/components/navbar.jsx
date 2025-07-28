
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Tractor } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Tractor className="h-10 w-auto text-green-600" />
          <span className="text-xl text-green-600 font-bold">AgroRent</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</Link>
          <Link to="/equipment" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Equipment</Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</Link>
          <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors">Login</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <X
              className="h-6 w-6 text-green-600 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <Menu
              className="h-6 w-6 text-green-600 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium">Home</Link>
            <Link to="/equipment" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium">Equipment</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium">About Us</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium">Contact</Link>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-500">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;