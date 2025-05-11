import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddEquipment = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const customization = form.customization.value;
    const time = form.time.value;
    const status = form.status.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const username = form.username.value;

    const newEquipment = {
      name,
      category,
      description,
      customization,
      time,
      status,
      price,
      rating,
      photo,
      email,
      username,
    };

    axios.post("https://pro-gearmh-server.vercel.app/equipment", newEquipment, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const data = response.data;
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Product Added Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    })
    .catch((error) => {
      console.error("Error adding product:", error);
    });
  };

  return (
    <section className="bg-[#F4F3F0] py-12 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mt-6 mb-12">Add New Equipment</h2>
      <form onSubmit={handleAddEquipment} className="space-y-6">
        {/* Row 1: Name & Category */}
        <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">Item Name</label>
            <input type="text" name="name" placeholder="Item Name" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">Category Name</label>
            <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full" />
          </div>
        </div>

        {/* Row 2: Description & Customization */}
        <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">Description</label>
            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">Customization</label>
            <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full" />
          </div>
        </div>

        {/* Row 3: Time & Status */}
        <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">Processing Time</label>
            <input type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">Stock Status</label>
            <input type="text" name="status" placeholder="Stock Status" className="input input-bordered w-full" />
          </div>
        </div>

        {/* Row 4: Price & Rating */}
        <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">Price</label>
            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">Rating</label>
            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
          </div>
        </div>

        {/* Row 5: Email & Username */}
        <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">User Email</label>
            <input
              type="email"
              name="email"
              readOnly
              defaultValue={user?.email || ""}
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label font-semibold mb-1">User Name</label>
            <input
              type="text"
              name="username"
              readOnly
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Row 6: Photo URL */}
        <div className="form-control">
          <label className="label font-semibold mb-1">Photo URL</label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-block bg-[#2dbe59] text-[#273248] hover:bg-[#568856] dark:bg-[#273248] dark:text-white dark:hover:bg-[#3a4560] transition"
        >
          Add Equipment
        </button>
      </form>
    </section>
  );
};

export default AddEquipment;
