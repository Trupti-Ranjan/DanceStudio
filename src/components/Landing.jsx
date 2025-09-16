import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import GetMovingWithUs from "./GetMovingWithUs";
import DanceFestival from "./DanceFestival";
import SignUpClasses from "./SignUpClasses";
import BestInstructors from "./BestInstructors";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import ContactForm from "./ContactForm";

const Landing = () => {
  return (
    <main className="bg-[#f2f2fe] px-5 md:px-48 overflow-hidden">
      <Navbar />
      <Hero />
      {/* <Hero2 /> */}
      <GetMovingWithUs />
      {/* <DanceFestival /> */}
      <SignUpClasses />
      <ContactForm />
      <Testimonial />
      {/* <BestInstructors /> */}
      <Footer />
    </main>
  );
};

export default Landing;
