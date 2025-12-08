import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import AboutSection from "../components/home/AboutSection";
import ApproachSection from "../components/home/ApproachSection";
import Footer from "../components/home/Footer";
import Navigation from "../components/home/Navigation";
import MobileContactButton from "../components/home/MobileContactButton";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <AboutSection />
      <ApproachSection />
      <Footer />
      <MobileContactButton />
    </div>
  );
}