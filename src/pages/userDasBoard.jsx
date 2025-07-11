import { useState } from 'react';
import { Link } from 'react-router-dom';
const userDasboard=()=>{

  const [selectedEqupmentId, setSelectedEquipmentId] = useState(null);
  

  const equipmentData = {
    '1': {
      id: '1',
      name: 'Tractor X1',
      image: 'public/pics/tractor.jpg', 
      shortDescription: 'Heavy duty tractor for all-purpose farming.',
      description: 'Tractor X1 is a powerful agricultural vehicle used for plowing, tilling, and more.',
    },
    '2': {
      id: '2',
      name: 'Rotavator Y2',
      image: 'public/pics/rotavator.jpg',
      shortDescription: 'Powerful rotavator for soil preparation.',
      description: 'Rotavator Y2 is efficient in soil cultivation, mixing and weed control.',
    },
    '3': {
      id: '3',
      name: 'Cultivator Z3',
      image: '/pics/cultivator.jpg',
      shortDescription: 'Used for loosening the soil and removing weeds.',
      description: 'Cultivator Z3 helps prepare soil before planting, ideal for small to mid-sized farms.',
    }
  };
  const handleCardClick =(id)=>{
  setSelectedEquipmentId(id);  
  }
   const handleBack=()=>{
    setSelectedEquipmentId(null);
   }
   const handleRent=()=>{
    alert('you clicked on ${equipmentData[selectedEqupment].name} for rent');
   }

   if(selectedEqupmentId){
    const equipment  = equipmentData[selectedEqupmentId]
   

   return(
    <div className="p-6">
        <button onClick={handleBack} className="btn btn-sm mb-4">
          ← Back
        </button>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={equipment.image} alt={equipment.name} className="max-w-sm object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{equipment.name}</h2>
            <p className="text-white">{equipment.description}</p>
            <div className="card-actions justify-end">
              <button onClick={() => handleRent(equipment)} className="btn btn-primary">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
   
   )
  }


  return(
    <div className="min-h-screen  bg-gradient-to-r from-[#a8e063] to-[#56ab2f] bg-background py-20  px-4">
      <h1 className="text-3xl font-bold mb-6">Available Equipment</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(equipmentData).map((equip) => (
          <div key={equip.id} className="card bg-base-100 shadow-sm w-full max-w-sm">
            <figure>
              <img src={equip.image} alt={equip.name} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{equip.name}</h2>
              <p>{equip.shortDescription}</p>
              <div className="card-actions justify-between">
                <button
                  onClick={() => handleCardClick(equip.id)}
                  className="btn btn-outline btn-sm"
                >
                  View Details
                </button>
                <Link to="/rent">
                <button
                  onClick={() => handleRent(equip)}
                  className="btn btn-primary btn-sm"
                >
                  Rent
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}
 export default userDasboard;