import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const EquipmentList = () => {
  const equipmentList = useLoaderData();
  const [allEquipment, setAllEquipment] = useState(equipmentList);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        axios
          .delete(`https://pro-gearmh-server.vercel.app/equipmentById`, {
            params: { id: id },
          })
          .then((response) => {
            const data = response.data;
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              const remaining = allEquipment.filter((equip) => equip._id !== id);
              setAllEquipment(remaining);
            }
          })
          .catch((error) => {
            console.error("Delete failed:", error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-10 mt-8">
      <h2 className="text-3xl font-bold text-center mb-10">My Equipment List</h2>

      {/* Desktop/Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border">Photo</th>
              <th className="px-4 py-3 border">Name</th>
              <th className="px-4 py-3 border">Category</th>
              <th className="px-4 py-3 border">Stock</th>
              <th className="px-4 py-3 border">Price</th>
              <th className="px-4 py-3 border">Added By</th>
              <th className="px-4 py-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allEquipment.map((equipment, index) => (
              <tr
                key={equipment._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 border text-center">
                  <img
                    src={equipment.photo}
                    alt={equipment.name}
                    className="w-16 h-16 object-cover rounded-full mx-auto"
                  />
                </td>
                <td className="px-4 py-3 border text-center">{equipment.name}</td>
                <td className="px-4 py-3 border text-center">{equipment.category}</td>
                <td className="px-4 py-3 border text-center">{equipment.status}</td>
                <td className="px-4 py-3 border text-center">${equipment.price}</td>
                <td className="px-4 py-3 border text-center">
                  <p className="font-semibold">{equipment.username}</p>
                  <p className="text-sm text-gray-600">{equipment.email}</p>
                </td>
                <td className="px-4 py-3 border text-center">
                  <div className="flex justify-center gap-2">
                    <Link to={`/updateEquipment/${equipment._id}`}>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(equipment._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Card View */}
      <div className="block md:hidden space-y-6 mt-6">
        {allEquipment.map((equipment) => (
          <div
            key={equipment._id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={equipment.photo}
                alt={equipment.name}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">{equipment.name}</h3>
                <p className="text-sm text-gray-600">{equipment.category}</p>
              </div>
            </div>
            <p><strong>Stock:</strong> {equipment.status}</p>
            <p><strong>Price:</strong> ${equipment.price}</p>
            <p className="text-sm text-gray-600">
              <strong>Added By:</strong> {equipment.username} ({equipment.email})
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/updateEquipment/${equipment._id}`}>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(equipment._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentList;
