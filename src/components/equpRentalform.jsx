// import { useState } from 'react';


// const equipmentRentalForm = () => {
//   const[formData, setFormData]= useState({
//     name:'',
//     email:'',
//     contect:'',
//     time:'',
//     address:'',
//     role:'user',
//   })

//   const handleChange = (e) => {
//    const {name, value}= e.target;
//    setFormData((prevData)=>({
//     ...prevData,
//     [name]: value
//    }))
    

//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // You can add backend API call here
//   };


//   return(
//     <div className="min-h-screen bg-gradient-to-r from-[#a8e063] to-[#56ab2f] bg-background py-20 px-4">
//       <h2 className='text-2xl font-bold mb-4'> Rent Equpment Form</h2>
//       <form onSubmit={handleSubmit} className='space-y-4'>
//         <input 
//         type="text" 
//         name="name"
//         placeholder='Enter your name'
//         value={formData.name}
//         onChange={handleChange}
//         required
//         className='input input-bordered w-full max-w-xs'
//         />
//          {/* Email */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           className="input input-bordered w-full"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         {/* Contact */}
//         <input
//           type="tel"
//           name="contect"
//           placeholder="Contact Number"
//           className="input input-bordered w-full"
//           value={formData.contect}
//           onChange={handleChange}
//           required
//         />

//         {/* Time */}
//         <input
//           type="datetime-local"
//           name="time"
//           className="input input-bordered w-full"
//           value={formData.time}
//           onChange={handleChange}
//           required
//         />

//         {/* Address */}
//         <textarea
//           name="address"
//           placeholder="Address"
//           className="textarea textarea-bordered w-full"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         ></textarea>

//         {/* Role (Hidden or Select if needed) */}
//         <input
//           type="hidden"
//           name="role"
//           value="user"
//         />
//          <button type="submit" className="btn btn-primary w-full">
//           Submit Rent Request
//         </button>
//       </form>
//     </div>
//   )
// }
// export default equipmentRentalForm;





import React, { useState } from 'react';

const RentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contect: '',
    time: '',
    duration: '',
    address: '',
    role: 'user',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Rent request submitted!');
  };

  return (
    <div className="pt-20 flex justify-center items-center min-h-screen bg-gradient-to-r from-[#a8e063] to-[#56ab2f] px-4">
      <div className="w-full max-w-xl p-8 bg-green-800 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Rent Equipment</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-white">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full bg-white text-black placeholder-black"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-white">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input w-full bg-white text-black placeholder-black"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block mb-1 text-white">Contact Number</label>
            <input
              type="tel"
              name="contect"
              placeholder="Phone Number"
              className="input w-full bg-white text-black placeholder-black"
              value={formData.contect}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date & Time */}
          <div>
            <label className="block mb-1 text-white">Pickup Date & Time</label>
            <input
              type="datetime-local"
              name="time"
              className="input w-full bg-white text-black placeholder-black"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block mb-1 text-white">Time Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="e.g. 2 days, 5 hours"
              className="input w-full bg-white text-black placeholder-black"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-white">Address</label>
            <textarea
              name="address"
              placeholder="Your Address"
              className="textarea w-full bg-white text-black placeholder-black"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Hidden Role */}
          <input type="" name="role" value="user" />

          {/* Submit */}
          <button type="submit" className="btn btn-block btn-primary mt-4">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RentForm;
