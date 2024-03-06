"use client";
import React, { useEffect } from "react";
import { Hero } from "./Hero/Hero";
import Features from "./Features/Features";
import CustomerSupports from "./CustomerSupports/CustomerSupports";
import Pricing from "./Pricing/Pricing";
import SupportTeam from "./SupportTeam/SupportTeam";
import Company from "./Company/Company";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div>
      <Hero />
      <Features />
      <CustomerSupports />
      <Pricing />
      <SupportTeam />
      <Company />
    </div>
  );
};

export default Home;
