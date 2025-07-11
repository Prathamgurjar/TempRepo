// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#a8e063] to-[#56ab2f] flex items-center justify-center px-4">
//       <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8">
//         <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Contact Us</h2>
//         <form className="grid grid-cols-1 gap-6">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Message</label>
//             <textarea
//               rows="5"
//               placeholder="Your message..."
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Optional Contact Info */}
//         <div className="mt-10 border-t pt-6 text-center text-sm text-gray-600">
//           <p>Email: support@agrorental.com</p>
//           <p>Phone: +91 9876543210</p>
//           <p>Location: Bhopal, Madhya Pradesh, India</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;




import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#56ab2f] to-[#a8e063] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* Left Panel */}
        <div className="bg-green-700 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-sm mb-6">
            Have a question, suggestion, or feedback? We’d love to hear from you.
            Fill out the form and our team will get back to you shortly!
          </p>
          <div className="space-y-3 text-sm">
            <p>📞 +91 98765 43210</p>
            <p>✉️ support@agrorental.com</p>
            <p>📍 Bhopal, Madhya Pradesh, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 bg-white">
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
