import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Right from "../Assets/icons/Right";
import Left from "../Assets/icons/Left";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-[50%] -right-5 z-10 flex h-6 w-6 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-[#FCB670] text-white hover:cursor-pointer hover:bg-[#e8a555] md:-right-20"
    onClick={onClick}
  >
    <Right />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-[50%] -left-5 z-10 flex h-6 w-6 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-[#FCB670] text-white hover:bg-[#e8a555] md:-left-20"
    onClick={onClick}
  >
    <Left />
  </div>
);

const Testimonial = () => {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Hip-Hop Student",
      text: "Joining this dance studio was the best decision of my life! The energy, the instructors, and the vibe are unmatched.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ishita Roy",
      role: "Classical Dance Enthusiast",
      text: "The Bharatanatyam classes are incredibly authentic and well-taught. I’ve grown so much as a performer!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohan Kapoor",
      role: "Zumba Participant",
      text: "I never thought fitness could be this fun. Zumba sessions are full of energy and joy every single day!",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Neha Sharma",
      role: "Parent of Student",
      text: "My daughter loves the instructors and has learned so much in just a few months. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Contemporary Dancer",
      text: "From choreography to execution, everything is professional and inspiring. A truly creative space!",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      name: "Simran Kaur",
      role: "Bollywood Dance Learner",
      text: "I’ve always wanted to learn Bollywood dancing, and this studio made it so easy and fun. Amazing experience!",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-28 scroll-mt-70 md:scroll-mt-0" id="Testimonials">
      <h2 className="mb-16 text-center text-4xl md:text-8xl font-bold text-gray-800">
        Testimonial
      </h2>
      <div className="relative mx-auto max-w-7xl rounded-2xl">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-20 w-20 rounded-full border-4 border-[#FCB670] object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-sm font-medium text-[#FCB670]">{t.role}</p>
                  <p className="text-sm text-gray-600 italic">“{t.text}”</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
