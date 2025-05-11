import { useEffect, useState } from "react";
import EquipmentTable from "./EquipmentTable";
import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react";
import axios from "axios";

const AllEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);

  // Fetch data from the backend with sorting
  const fetchEquipments = async () => {
    const response = await axios.get(`https://pro-gearmh-server.vercel.app/equipment`, {
      params: {
        sortOrder: sortOrder,
      },
    });
    
    const data = response.data;

    const updatedData = data.map((item) => ({
      ...item,
      price: Number(item.price)
    }));

    updatedData.sort((a, b) => {
      return sortOrder === 1 ? a.price - b.price : b.price - a.price;
    });

    setEquipments(updatedData);
  };

  useEffect(() => {
    fetchEquipments();
  }, [sortOrder]);

  return (
    <div className="py-16 px-10 bg-gradient-to-br from-gray-100 to-white min-h-screen">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-10 drop-shadow">
        All Sports Equipment Table
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setSortOrder(1)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          <ArrowDownWideNarrow size={18} />
          Low to High
        </button>
        <button
          onClick={() => setSortOrder(-1)}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          <ArrowUpWideNarrow size={18} />
          High to Low
        </button>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse text-sm md:text-base">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="py-3 px-4 text-left">Serial</th>
                <th className="py-3 px-4 text-left">Item Name</th>
                <th className="py-3 px-4 text-left">Category Name</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {equipments.map((equipment, index) => (
                <EquipmentTable
                  key={equipment._id}
                  idx={index}
                  equipment={equipment}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEquipment;
