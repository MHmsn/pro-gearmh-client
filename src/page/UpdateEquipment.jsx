import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const UpdateEquipment = () => {
    const { user } = useContext(AuthContext);
    const updatedData = useLoaderData();
    const { _id, name, category, description, customization, time, status, price, rating, photo } = updatedData

    const handleUpdateEquipment = e => {
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

        const updatedEquipment = { name, category, description, customization, time, status, price, rating, photo, email, username }
        // console.log(updatedEquipment)

        // send data to the server
        axios
            .put(`https://pro-gearmh-server.vercel.app/equipmentById`, updatedEquipment, {
                params: { id: _id },
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                const data = response.data;
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                }
            })
            .catch((error) => {
                console.error("Update failed:", error);
            });
    }

    return (
        <div className="bg-[#F4F3F0] p-8 md:p-20">
            <h2 className="text-4xl font-bold text-center mb-10">Update Equipment </h2>
            <form onSubmit={handleUpdateEquipment}>
                {/* form name and Category row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category Name" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form Description and Customization row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" defaultValue={customization} placeholder="Customization" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form Processing Time and Stock Status row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" defaultValue={time} placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="status" defaultValue={status} placeholder="Stock Status" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form Price and Rating row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form email and Rating name */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" readOnly defaultValue={user?.email || ""} name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly defaultValue={user?.displayName} name="username" placeholder="Name" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Equipment" className="btn btn-block dark:text-[#273248] dark:bg-slate-300 bg-[#273248] text-white hover:text-black" />
            </form>
        </div>
    );
};

export default UpdateEquipment;