import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D3D4D] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light mb-4">Dr. Sarah Mitchell</h3>
            <p className="text-white/80 font-light leading-relaxed">
              Licensed Psychotherapist dedicated to helping you find clarity, healing, and growth.
            </p>
          </div>

          <div>
            <h4 className="font-normal mb-4">Quick Links</h4>
            <div className="space-y-2 text-white/80 font-light">
              <p className="hover:text-white transition-colors cursor-pointer">About</p>
              <p className="hover:text-white transition-colors cursor-pointer">Services</p>
              <p className="hover:text-white transition-colors cursor-pointer">Approach</p>
              <p className="hover:text-white transition-colors cursor-pointer">Contact</p>
            </div>
          </div>

          <div>
            <h4 className="font-normal mb-4">Office Hours</h4>
            <div className="space-y-1 text-white/80 font-light">
              <p>Monday - Thursday: 9AM - 7PM</p>
              <p>Friday: 9AM - 4PM</p>
              <p>Saturday: 10AM - 2PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 font-light flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#F4CCC8]" /> for healing and growth
          </p>
          <p className="text-white/60 text-sm font-light mt-2">
            © 2024 Dr. Sarah Mitchell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}