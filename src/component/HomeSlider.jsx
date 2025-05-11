import coverImg0 from '../assets/image1.jpg';
import coverImg1 from '../assets/image6.jpg';
import coverImg2 from '../assets/image3.jpg';
import coverImg3 from '../assets/image4.jpg';
import coverImg4 from '../assets/image0.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HomeSlider = () => {
  const slides = [
    { img: coverImg0, alt: 'Sports gear 1' },
    { img: coverImg1, alt: 'Sports gear 2' },
    { img: coverImg2, alt: 'Sports gear 3' },
    { img: coverImg3, alt: 'Sports gear 4' },
    { img: coverImg4, alt: 'Sports gear 5' }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full mx-auto mt-4" data-aos="fade-up">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        navigation
        loop={true}
        className="hero-swiper rounded-lg shadow-md"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[calc(100vh-64px)] max-h-[700px] overflow-hidden">
              <img
                loading="lazy"
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
