import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import Services from "./Service";
import Schedule from "./Shedule";
import Trainers from "./Trainer";
import Testimonials from "./Testimonial";
import Footer from "./Footer";
function App()
{
  return(
    <div className="bg-gray-700">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Services></Services>
      <Schedule></Schedule>
      <Trainers></Trainers>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  )
}


export default App