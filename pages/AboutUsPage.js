import React from "react";
import Navbar from "../components/Navbar";
import HeroAbout from "../components/AboutUs/AboutHero";
import AboutMeet from "../components/AboutUs/About_meet";
import Footer from "../components/Footer";
// import Repository from "../components/Repository";
const AboutUsPage = () => {
  return (
    <div className="gradient  ">
      <div className="">
        <Navbar />
        <HeroAbout />
        <AboutMeet />
      </div>
      <Footer />
      <div className=""></div>
    </div>
  );
};
export default AboutUsPage;
