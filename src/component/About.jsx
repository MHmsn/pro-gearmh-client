import AOS from "aos";
import "aos/dist/aos.css";
import { FaDumbbell, FaUsers, FaStore } from "react-icons/fa";

AOS.init();

const About = () => {
  return (
    <section className="py-16 bg-[#f0f4f8]">
      <div className="container mx-auto px-6 text-gray-800">
        <h2 className="text-4xl font-extrabold text-center text-[#273248] mb-6 tracking-wide">
          About Us
        </h2>

        <p className="text-lg text-center max-w-3xl mx-auto mb-10 text-gray-600 leading-relaxed">
          Welcome to <span className="font-bold text-[#273248]">Pro Gear</span>, your trusted partner in performance.
          We specialize in providing reliable, top-tier sports and fitness equipment
          that supports every athlete — from passionate beginners to seasoned pros.
        </p>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-once="true"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaDumbbell className="text-4xl text-[#273248] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#273248]">Performance Gear</h3>
            <p className="text-gray-600">
              Explore durable, high-performance equipment crafted to support
              every move, every rep, and every game.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaUsers className="text-4xl text-[#273248] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#273248]">Guidance You Can Trust</h3>
            <p className="text-gray-600">
              Our team offers expert advice to help you choose the right gear based on your sport and skill level.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaStore className="text-4xl text-[#273248] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#273248]">Extensive Selection</h3>
            <p className="text-gray-600">
              From training essentials to pro-level gear, find everything you need across a wide range of sports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
