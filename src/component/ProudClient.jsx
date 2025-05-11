import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const ProudClient = () => {
  const logoSliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  // FAQ accordion state
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-16 bg-gray-50">
      {/* Testimonials Section */}
      <div className="bg-[#f4f4f9] py-16 px-8 mb-20 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-[#273248] mb-8">What Our Clients Say</h2>
        <Slider {...testimonialSettings}>
          {[ 
            {
              name: "Amjad Ali",
              title: "Project Manager, XYZ Ltd.",
              quote: "Working with this team was a pleasure! They were responsive, professional, and delivered exactly what we needed.",
            },
            {
              name: "Imran Hossain",
              title: "CTO, TechBee",
              quote: "Fantastic service and timely delivery. Highly recommended for any web-based development.",
            },
            {
              name: "Rima Chowdhury",
              title: "Director, EduSoft",
              quote: "They helped us automate and streamline our operations. Exceptional support and quality.",
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="text-center px-4">
              <p className="text-lg italic text-gray-700 mb-4">“{testimonial.quote}”</p>
              <div className="bg-[#273248] text-white py-4 px-6 rounded-xl inline-block shadow-lg mb-4">
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 px-8 mb-20 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-[#273248] mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "What services do you offer?",
              answer: "We offer a range of IT solutions including custom software development, web & mobile app development, cloud integration, and enterprise automation."
            },
            {
              question: "How do I get started with your services?",
              answer: "You can get started by contacting us via the contact form or booking a free consultation. We'll assess your needs and guide you through the process."
            },
            {
              question: "Do you offer post-launch support?",
              answer: "Yes, we provide ongoing maintenance and technical support to ensure your product runs smoothly and stays up to date."
            },
            {
              question: "Are your services customizable for different industries?",
              answer: "Absolutely! Our solutions are tailored to meet the specific needs of various industries including education, healthcare, e-commerce, and more."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-[#273248] hover:bg-gray-200 transition duration-200"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProudClient;
