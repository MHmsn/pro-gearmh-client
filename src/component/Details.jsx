import { FaStarHalfAlt } from "react-icons/fa";
import { FaArrowLeftLong, FaRegStar, FaStar } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const generateStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  }

  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
  }

  return stars;
};

const Details = () => {
  const details = useLoaderData();
  const {
    category,
    customization,
    description,
    name,
    photo,
    price,
    rating,
    status,
    time,
  } = details;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100 min-h-screen gap-10">
      {/* Image Section */}
      <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-md">
        <img
          src={photo}
          alt={name}
          className="w-full h-[400px] object-cover rounded-lg border border-gray-300 shadow"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 w-full bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-[#273248] mb-4">{name}</h1>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p>
            <span className="font-semibold">Customization:</span> {customization}
          </p>
          <p>
            <span className="font-semibold">Stock Status:</span>{" "}
            <span className={status === "available" ? "text-green-600" : "text-red-500"}>
              {status}
            </span>
          </p>
          <p>
            <span className="font-semibold">Processing Time:</span> {time}
          </p>
        </div>

        <div className="flex items-center mt-6">
          <p className="text-2xl font-bold text-[#e63946]">${price}</p>
          <p className="text-sm text-gray-400 line-through ml-4">${parseInt(price) + 500}</p>
          <span className="ml-4 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
            37% OFF
          </span>
        </div>

        <div className="flex items-center mt-3">
          <div className="flex">{generateStars(rating)}</div>
          <span className="ml-2 text-gray-600 text-sm">({rating} Reviews)</span>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-gradient-to-r from-[#00B4DB] to-[#275fc7] text-white font-medium rounded-lg hover:from-[#e60707] hover:to-[#a00303] transition-all duration-400"
        >
          <FaArrowLeftLong className="inline mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Details;
