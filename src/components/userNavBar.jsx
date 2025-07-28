import { Link } from 'react-router-dom';
import { Menu, X ,Tractor} from 'lucide-react';


const UserNavBar=()=>{
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <img src="" alt="Logo" className="h-10 w-auto" /> */}
          
          <Tractor className="h-10 w-auto text-green-600" />
          <span className="text-xl text-green-600 font-bold text-primary-dark">AgroRent</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</Link>
          {/* <Link to="/equipment" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Equipment</Link> */}
          {/* <Link to="/rentals" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Rentals</Link> */}
          <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</Link>
          <Link to="/" className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors">Logout</Link>
     </div>
      </div>
    </nav>
  );

}
export default UserNavBar;