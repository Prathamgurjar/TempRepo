import React, { useState } from "react";
import { Link } from "react-router-dom";
// import AddEquipmentForm from "../Landingpage/AddEquipmentForm"; // You can mock this component if needed

const VendorDashboard = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const equipmentList = [
    {
      id: "1",
      name: "Tractor XL 500",
      description: "Heavy-duty tractor for large fields.",
      imageURL: "https://via.placeholder.com/300x150",
    },
    {
      id: "2",
      name: "Seeder Pro 300",
      description: "Efficient seeder for fast planting.",
      imageURL: "https://via.placeholder.com/300x150",
    },
  ];

  const pendingRequests = [
    {
      id: "1",
      name: "Rahul Sharma",
      equipmentName: "Tractor XL 500",
      date: "2025-07-12",
      time: "10",
      email: "rahul@example.com",
    },
  ];

  const completedRequests = [
    {
      id: "2",
      name: "Anita Verma",
      equipmentName: "Seeder Pro 300",
      date: "2025-07-10",
      time: "16",
      email: "anita@example.com",
    },
  ];

  const handleShowAddForm = () => setShowAddForm(true);
  const handleCloseAddForm = () => setShowAddForm(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a8e063] to-[#56ab2f] p-6 pt-20">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
            📦 Vendor Dashboard
          </h1>
          <Link to="/addequipment">
          <button
            onClick={handleShowAddForm}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          >
            + Add Equipment
          </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-100 p-4 rounded shadow-sm">
            <p className="text-sm text-green-800 font-medium mb-1">Total Active Equipment</p>
            <h2 className="text-2xl font-bold text-green-900">{equipmentList.length}</h2>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow-sm">
            <p className="text-sm text-yellow-800 font-medium mb-1">Pending Bookings</p>
            <h2 className="text-2xl font-bold text-yellow-900">{pendingRequests.length}</h2>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm">
            <p className="text-sm text-gray-800 font-medium mb-1">Total Listed Equipment</p>
            <h2 className="text-2xl font-bold text-gray-900">{equipmentList.length}</h2>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow-sm">
            <p className="text-sm text-blue-800 font-medium mb-1">Completed Bookings</p>
            <h2 className="text-2xl font-bold text-blue-900">{completedRequests.length}</h2>
          </div>
        </div>

        {/* Equipment List */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">📦 Equipment List</h2>
          {equipmentList.length === 0 ? (
            <p className="text-sm text-gray-500">No active equipment listed.</p>
          ) : (
            <ul className="grid sm:grid-cols-2 gap-4">
              {equipmentList.map((item) => (
                <li
                  key={item.id}
                  className="border border-gray-200 p-4 rounded hover:shadow transition bg-white"
                >
                  <div className="font-semibold text-lg text-green-800">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                  {item.imageURL && (
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className="w-full h-24 object-cover rounded mt-2"
                    />
                  )}
                  <button className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 text-sm">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Rental Requests */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📋 Rental Requests</h2>

          {/* Pending Requests */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-yellow-600 mb-2">⏳ Pending</h3>
            {pendingRequests.length === 0 ? (
              <p className="text-sm text-gray-500">No pending rental requests.</p>
            ) : (
              <ul className="space-y-3">
                {pendingRequests.map((req) => (
                  <li key={req.id} className="border p-3 rounded bg-yellow-50">
                    <p className="font-medium text-gray-800">
                      User: <span className="text-blue-700">{req.name}</span> requested{" "}
                      <span className="text-green-700">{req.equipmentName}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Date: {req.date}, Time: {req.time}:00
                    </p>
                    <p className="text-sm text-gray-600">Contact: {req.email}</p>
                    <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                      Mark as Completed
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Completed Requests */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-2">✅ Completed</h3>
            {completedRequests.length === 0 ? (
              <p className="text-sm text-gray-500">No completed rental requests.</p>
            ) : (
              <ul className="space-y-3">
                {completedRequests.map((req) => (
                  <li key={req.id} className="border p-3 rounded bg-green-50">
                    <p className="font-medium text-gray-800">
                      User: <span className="text-blue-700">{req.name}</span> rented{" "}
                      <span className="text-green-700">{req.equipmentName}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Date: {req.date}, Time: {req.time}:00
                    </p>
                    <p className="text-sm text-gray-600">Contact: {req.email}</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-200 text-green-800">
                      Completed
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mock Add Equipment Form */}
      {/* {showAddForm && <AddEquipmentForm onClose={handleCloseAddForm} />} */}
    </div>
  );
};

export default VendorDashboard;
