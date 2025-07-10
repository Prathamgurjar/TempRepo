import React from 'react';
import { Tractor, Wrench, Shield, MapPin, ChevronRight } from 'lucide-react';
import Navbar from '../components/navbar';

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
              <button className="flex items-center bg-green-600 bg-primary-light hover:bg-primary transition px-6 py-3 rounded-lg font-semibold group">
                Explore Equipment
                <ChevronRight 
                  className="ml-2 group-hover:translate-x-1 transition" 
                  size={20} 
                />
              </button>
              <button className="border bg-teal-400 border-white hover:bg-teal-600 hover:text-primary-dark px-6 py-3 rounded-lg font-semibold transition flex items-center group">
                Contact Sales
                <ChevronRight 
                  className="ml-2 group-hover:translate-x-1 transition" 
                  size={20} 
                />
              </button>
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
            <button className="border bg-teal-500  border-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center group">
              Learn More
              <ChevronRight 
                className="ml-2 group-hover:translate-x-1 transition" 
                size={20} 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;