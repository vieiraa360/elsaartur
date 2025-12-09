import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C5DDE0] via-white to-[#F4CCC8]/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1B7A9C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4CCC8] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light">
              Licensed Psychotherapist
            </p>
            <h1 className="text-5xl md:text-6xl font-light text-[#0D3D4D] leading-tight">
              Finding clarity in
              <br />
              <span className="font-normal">life's complexity</span>
            </h1>
          </div>
          <p className="text-gray-600 text-lg font-light leading-relaxed max-w-xl">
            A compassionate space for healing, growth, and self-discovery. Together, we'll navigate
            your journey toward emotional wellness and personal transformation.
          </p>
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#0D3D4D] hover:bg-[#1B7A9C] text-white px-8 py-4 rounded-full font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Session
            </button>
            <button
              onClick={scrollToAbout}
              className="border-2 border-[#1B7A9C] text-[#0D3D4D] hover:bg-[#1B7A9C] hover:text-white px-8 py-4 rounded-full font-light tracking-wide transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f3732483149a1c1efff2e0/71ed23056_YMP08269_web.jpg"
              alt="Dr. Sarah Mitchell"
              className="w-full h-[600px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D4D]/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl">
            <p className="text-4xl font-light text-[#0D3D4D]">15+</p>
            <p className="text-gray-600 font-light">Years Experience</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#1B7A9C] animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}