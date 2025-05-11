import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "../component/HomeSlider";
import Leading from "../component/Leading";
import Product from "../component/Product";
import ProudClient from "../component/ProudClient";
import SportsCategory from "../component/SportsCategory";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const productData = useLoaderData();
  console.log(productData);

  return (
    <div className="mt-32 bg-[#f9f9f9]">
      <HomeSlider />

      <section className="py-16 px-4 md:px-10">
        <SportsCategory />
      </section>

      <section className="py-16 px-4 md:px-10 bg-white">
        <Fade direction="up" duration={1000}>
          <h2 className="text-4xl font-bold text-center text-[#273248] mb-12">
            Trending Equipments
          </h2>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {productData.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <button className="mt-6 mx-auto block px-6 py-3 rounded-lg bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white font-semibold shadow-md hover:from-[#0083B0] hover:to-[#00B4DB] transition-all duration-300">
              More Products
            </button>
          </Link>
        </div>
      </section>

      {/* <section className="py-16 px-4 md:px-10 bg-white">
        <ProudClient />
      </section> */}

      <section className="py-10 px-4 md:px-10 bg-white">
        <Fade direction="up" duration={1000}>
          <Leading />
        </Fade>
      </section>
    </div>
  );
};

export default Home;
