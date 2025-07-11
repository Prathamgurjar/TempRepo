// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#a8e063] to-[#56ab2f] flex items-center justify-center px-4 py-20">
//       <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-4xl font-bold text-green-700 text-center mb-6">About AgroRental</h1>

//         <p className="text-gray-700 text-lg mb-4">
//           AgroRental is a modern platform designed to empower farmers by providing access to a wide range
//           of agricultural equipment on rent. We believe that every farmer, regardless of land size or
//           resources, should have access to the tools they need to grow and harvest efficiently.
//         </p>

//         <p className="text-gray-700 text-lg mb-4">
//           With rising costs in farming equipment, not every farmer can afford to buy and maintain heavy
//           machinery. AgroRental bridges this gap by connecting equipment vendors and farmers, ensuring
//           affordability, convenience, and trust.
//         </p>

//         <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">Our Mission</h2>
//         <p className="text-gray-700 text-lg mb-4">
//           To revolutionize Indian agriculture by democratizing access to farming technology and equipment
//           through seamless rentals.
//         </p>

//         <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">Our Vision</h2>
//         <p className="text-gray-700 text-lg mb-4">
//           A future where no farmer is limited by tools or technology. We aim to support sustainable farming
//           by making equipment easily available, affordable, and accessible.
//         </p>

//         <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">Meet the Team</h2>
//         <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
//           <li>Pratham Gurjar – Frontend & Project Lead</li>
//           <li>[Teammate Name] – Backend & Firebase Integration</li>
//         </ul>

//         <div className="mt-10 text-center text-sm text-gray-600 border-t pt-4">
//           <p>© {new Date().getFullYear()} AgroRental. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;





import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a8e063] to-[#56ab2f] text-white">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
        <p className="text-lg max-w-2xl mx-auto">
          AgroRental is an innovative platform that connects farmers with vendors to rent agricultural equipment affordably and efficiently.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white text-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-green-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-green-800 mb-3">🌱 Our Mission</h2>
            <p>
              Our mission is to democratize access to modern agricultural equipment for every farmer, helping boost productivity while reducing costs.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-yellow-800 mb-3">🌍 Our Vision</h2>
            <p>
              We envision a future where no farmer is left behind due to lack of tools. AgroRental aims to be a backbone for modern, sustainable agriculture in India.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose AgroRental?</h2>
          <p className="mb-10 text-lg">
            Our platform simplifies the rental process with verified vendors, real-time availability, and easy booking.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2">✅ Reliable Vendors</h3>
              <p>Each vendor is verified to ensure trust and transparency.</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2">📆 Easy Booking</h3>
              <p>Book equipment with just a few clicks, from anywhere.</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2">💸 Affordable Rates</h3>
              <p>Choose rental options that suit your budget and needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">👨‍🌾 Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-green-100 p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-green-700 text-white flex items-center justify-center text-2xl rounded-full mx-auto mb-4">
                PG
              </div>
              <h3 className="font-bold text-lg text-green-900">Pratham Gurjar</h3>
              <p className="text-sm text-gray-700">Frontend Developer & Project Lead</p>
            </div>
            <div className="bg-green-100 p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-green-700 text-white flex items-center justify-center text-2xl rounded-full mx-auto mb-4">
                TM
              </div>
              <h3 className="font-bold text-lg text-green-900">Teammate Name</h3>
              <p className="text-sm text-gray-700">Backend Developer & Firebase Integration</p>
            </div>
            <div className="bg-green-100 p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-green-700 text-white flex items-center justify-center text-2xl rounded-full mx-auto mb-4">
                UX
              </div>
              <h3 className="font-bold text-lg text-green-900">You?</h3>
              <p className="text-sm text-gray-700">We are hiring passionate farmers & techies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} AgroRental. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
