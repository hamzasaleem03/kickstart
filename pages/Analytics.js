import React from "react";
import Navbar from "../components/Navbar";
import AnalyticsDash from "../components/AnalyticsDash/AnalyticsFirst";
import Footer from "../components/Footer";
const Analytics = () => {
  return (
    <div className="gradient  ">
      <div className="">
        <Navbar />
        <AnalyticsDash />
      </div>
      <Footer />
      <div className=""></div>
    </div>
  );
};
export default Analytics;
