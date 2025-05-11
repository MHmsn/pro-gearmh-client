import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Product = ({ product }) => {
  const {
    _id,
    category,
    customization,
    description,
    name,
    photo,
    price,
    rating,
    status,
    time,
  } = product;

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

  return (
    <div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-once="true"
        className="max-w-sm bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      >
        <div className="relative">
          <img
            src={photo}
            alt={name}
            className="w-full h-56 object-cover rounded-t-xl"
          />
          <span
  className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium text-white rounded ${
    status?.toLowerCase() === "available" ? "bg-green-500" : "bg-red-500"
  }`}
>
  {status?.toLowerCase() === "available" ? "Available" : "Out of Stock"}
</span>
  
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
          <p className="text-sm text-gray-500 mb-2 italic">
            {category} &mdash; {customization}
          </p>

          <p className="text-gray-600 text-sm mb-4">{description}</p>

          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-lg font-bold text-[#e63946]">${price}</p>
              <p className="text-xs text-gray-400">Processing: {time}</p>
            </div>
            <div className="flex items-center">
              {generateStars(rating)}
              <span className="ml-1 text-sm text-gray-600">({rating})</span>
            </div>
          </div>

          <Link
            to={`/equipment/${_id}/details`}
            className="block text-center mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white font-semibold shadow hover:from-[#0083B0] hover:to-[#00B4DB] transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
