import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cricket from '../assets/cricket_bat_ball.png';
import football from '../assets/footballl.png';
import badminton from '../assets/badminton.png';
import Treadmill from '../assets/treadmil.png';
import Walking from '../assets/walking_pad.webp';
import Exercise from '../assets/exercise_cycle.png';
import Dumbbells from '../assets/dumbell.png';
import Basketball from '../assets/basketball.jpg';

const sportsItems = [
  { name: "Cricket", img: cricket },
  { name: "Football", img: football },
  { name: "Badminton", img: badminton },
  { name: "Treadmill", img: Treadmill },
  { name: "Walking Pad", img: Walking },
  { name: "Exercise Cycle", img: Exercise },
  { name: "Dumbbells", img: Dumbbells },
  { name: "Basketball", img: Basketball },
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 3000,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SportsCategory = () => {
  return (
    <section className="w-11/12 mx-auto my-20">
      <Fade direction="up" triggerOnce>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-[#273248] mb-4">
            Explore Our Sports Categories
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-600 text-sm md:text-base">
            Whether you're training for performance or just starting your fitness journey, discover top-quality gear across multiple sports categories designed for every athlete. All in one store.
          </p>
        </div>
      </Fade>

      <Fade direction="up" triggerOnce>
        <Slider {...sliderSettings}>
          {sportsItems.map(({ name, img }) => (
            <div key={name} className="px-3">
              <div className="bg-white dark:bg-slate-200 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center">
                <img
                  src={img}
                  alt={name}
                  className="w-24 h-24 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </Fade>
    </section>
  );
};

export default SportsCategory;
