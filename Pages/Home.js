import React from "react";
import Navigation from "../components/home/Navigation";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ApproachSection from "../components/home/ApproachSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
    </div>
  );
}