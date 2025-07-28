import React from 'react';
import { Tractor, Wrench, Shield, MapPin, ChevronRight } from 'lucide-react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: Tractor,
      title: 'Comprehensive Fleet',
      description: 'Cutting-edge agricultural machinery for every farming need.'
    },
    {
      icon: Wrench,
      title: 'Expert Maintenance',
      description: 'Professionally serviced equipment ensuring peak performance.'
    },
    {
      icon: Shield,
      title: 'Reliable Support',
      description: 'Dedicated technical assistance and rapid maintenance.'
    },
    {
      icon: MapPin,
      title: 'Nationwide Reach',
      description: 'Equipment available across multiple agricultural regions.'
    }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#a8e063] to-[#56ab2f] bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-primary-dark text-white pt-24">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-10">
          <div className="space-y-6 animate-fade-in-left">
            <h1 className="text-4xl text-white md:text-5xl font-bold leading-tight">
              Revolutionize Your Farming with <br /> Smart Equipment Rental
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Empowering agricultural success through innovative, high-performance equipment solutions
            </p>
            <div className="flex space-x-4">
              <Link to="/equipment">
              <button className="flex items-center bg-green-600 bg-primary-light hover:bg-primary transition px-6 py-3 rounded-lg font-semibold group">
                Explore Equipment
                <ChevronRight 
                  className="ml-2 group-hover:translate-x-1 transition" 
                  size={20} 
                />
              </button>
              </Link>

              <Link to="/contact">
              <button className="border bg-teal-400 border-white hover:bg-teal-600 hover:text-primary-dark px-6 py-3 rounded-lg font-semibold transition flex items-center group">
                Contact Sales
                <ChevronRight 
                  className="ml-2 group-hover:translate-x-1 transition" 
                  size={20} 
                />
              </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in-right">
            <img 
              src="public/pics/tractor.jpg" 
              alt="Agricultural Equipment" 
              className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Transforming Agricultural Efficiency
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative rental solutions designed to elevate your farming operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-green-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-all group transform hover:-translate-y-2"
            >
              <div className="mb-4 text-primary-light group-hover:scale-110 transition">
                <feature.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-light text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
            Accelerate Your Agricultural Potential
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Discover how our tailored equipment rental solutions can revolutionize your farming efficiency
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-600 text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-green500 transition flex items-center group">
              Request Quote
              <ChevronRight 
                className="ml-2 group-hover:translate-x-1 transition" 
                size={20} 
              />
            </button>
           <Link to="/about">
            <button className="border bg-teal-500  border-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center group">
              Learn More
              <ChevronRight 
                className="ml-2 group-hover:translate-x-1 transition" 
                size={20} 
              />
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
     
          <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="inline-block fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p className="font-bold">
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
      
    </div>
  );
};

export default LandingPage;