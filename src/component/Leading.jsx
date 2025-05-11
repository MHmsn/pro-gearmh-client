import { Link } from "react-router-dom";

const Leading = () => {
  return (
    <section className="bg-[#f4f3f0] dark:bg-slate-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Tagline */}
        <h6 className="text-[#bbbe2d] font-semibold tracking-wider uppercase mb-2">We Are Pro Gear</h6>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Bangladesh's Premier Sports & Fitness Destination
        </h2>

        {/* Subheading */}
        <p className="text-xl font-semibold text-gray-700 mb-6">Empowering Athletes Since 2020</p>

        {/* About Section */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Pro Gear, we are passionate about performance. Since our launch in 2020, our mission has been to provide top-quality sports and fitness equipment that supports your goals and keeps up with your dedication. Our products are built to inspire, perform, and last.
        </p>

        {/* Strength Section */}
        <h3 className="text-xl font-semibold text-gray-700 mb-2">What Makes Us Strong</h3>
        <p className="text-gray-600 mb-8">
          We collaborate with the world's leading brands to bring you a wide selection of premium fitness and sports gear. Whether you're a beginner or a professional athlete, Pro Gear is here to help you reach your potential.
        </p>

        {/* CTA Link */}
        <Link
          to="/about"
          className="text-[#bbbe2d] font-semibold underline hover:text-yellow-600 transition"
        >
          Learn more about Pro Gear →
        </Link>
      </div>
    </section>
  );
};

export default Leading;
