import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#1e2a38] dark:bg-slate-300 text-white dark:text-[#273248] px-6 py-10 rounded-t-lg">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left: Brand and Description */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">Pro Gear</h2>
            <img src="/vite.svg" alt="Pro Gear Logo" className="w-14 h-14" />
            <p className="max-w-md text-sm md:text-base">
              Pro Gear is your go-to store for high-quality sports equipment, offering a wide range of products to elevate your game and fuel your passion for sports.
            </p>
          </div>

          {/* Right: Navigation and Socials */}
          <div className="md:w-1/2 flex flex-col items-start md:items-start gap-4">

           {/* Social Icons */}
           <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <a href="#" className="hover:scale-110 transition text-blue-500"><FaFacebook /></a>
              <a href="#" className="hover:scale-110 transition text-green-500"><FaWhatsapp /></a>
              <a href="#" className="hover:scale-110 transition text-blue-400"><FaTwitter /></a>
              <a href="#" className="hover:scale-110 transition text-red-500"><FaYoutube /></a>
              <a href="#" className="hover:scale-110 transition"><FcGoogle /></a>
            </div>


            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-base font-medium">
              <Link to="/" className="hover:underline hover:text-gray-300 transition">Home</Link>
              <Link to="/about" className="hover:underline hover:text-gray-300 transition">About Us</Link>
              <Link to="/" className="hover:underline hover:text-gray-300 transition">Contact</Link>
              <Link to="/allSports" className="hover:underline hover:text-gray-300 transition">All Sports Equipment</Link>
            </nav>

          </div>
        </div>

      
        <aside className="text-center text-xs md:text-sm mt-6">
          <p>© {new Date().getFullYear()} Pro Gear - All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
