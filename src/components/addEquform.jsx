const addEquform = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#a8e063] to-[#56ab2f] px-4 py-8">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-white/20 backdrop-blur-md border border-white/30">
      <h2 className="text-2xl ">Add Equipment</h2>
      <form action="">
        <div>
          <label htmlFor="">Owner Name</label>
          <input 
          type="text"
          placeholder="Enter name "
          className="w-full px-4 py-2 mb-4 text-black border border-gray-500 focus:ring-2 focus:ring-green-500 outline-none rounded-lg" />
        </div>


        <div>
          <label htmlFor="">Equpment Name</label>
          <input 
          type="text"
          placeholder="Enter name "
          className="w-full px-4 py-2 mb-4 text-black border border-gray-500 focus:ring-2 focus:ring-green-500 outline-none rounded-lg" />
        </div>


        <div>
          <label htmlFor="">Address</label>
          <input 
          type="text"
          placeholder="Enter name "
          className="w-full px-4 py-2 mb-4 text-black border border-gray-500 focus:ring-2 focus:ring-green-500 outline-none rounded-lg" />
        </div>

        <div>
          <label htmlFor="">Type of Equpment</label>
          <input 
          type="text"
          placeholder="Enter name "
          className="w-full px-4 py-2 mb-4 text-black border border-gray-500 focus:ring-2 focus:ring-green-500 outline-none rounded-lg" />
        </div>


        <div>
          <label htmlFor="">Discription</label>
          <input 
          type="message"
          rows="5"
          placeholder="Enter name "
          className="w-full px-4 py-2 mb-4 text-black border border-gray-500 focus:ring-2 focus:ring-green-500 outline-none rounded-lg" />
        </div>




        <div>
          <label htmlFor="">Price(per houre)</label>
          <input 
          type="number"
          placeholder="Enter name "
          className="w-full px-4 py-2 mb-4 text-black border border-gray-500 focus:ring-2 focus:ring-green-500 outline-none rounded-lg" />
        </div>


        <div>
          <label htmlFor="">Upload Image</label>
          <input 
          type="file"
          accept="image/*"
          multiple
          placeholder="Enter name "
          className="w-full px-4 py-2 text-black border border-gray-500 focus:ring-2 focus:ring-green-500 outline-none rounded-lg" />
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors mt-4"
        >Add Now</button>
       

      </form>
      
      
      </div>
    </div>
  );
};
export default addEquform;