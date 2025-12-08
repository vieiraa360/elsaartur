
import React from "react";
import { Mail, Phone, Video, Clock, Check } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#C5DDE0]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
            I'm here when you're ready
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Taking the first step toward therapy can feel vulnerable. I offer a free 15-minute consultation so you can ask questions and see if we're a good fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-[#C5DDE0]/50 to-[#F4CCC8]/30 rounded-2xl border-2 border-[#1B7A9C]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1B7A9C] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-[#0D3D4D]">Free 15-Minute Consultation</h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                Not sure if therapy is right for you? Book a free, no-obligation 15-minute consultation. It's a chance to meet, ask questions, and see if we're a good fit — with no pressure to commit.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-[#0D3D4D] mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B7A9C] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-light text-gray-600 mb-1">Phone</p>
                    <a 
                      href="tel:+447766671971"
                      className="text-[#0D3D4D] text-lg hover:text-[#1B7A9C] transition-colors"
                    >
                      +44 7766 671971
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D3D4D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-light text-gray-600 mb-1">Email</p>
                    <a 
                      href="mailto:elsaartur@live.co.uk"
                      className="text-[#0D3D4D] text-lg hover:text-[#1B7A9C] transition-colors"
                    >
                      elsaartur@live.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F4CCC8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Video className="w-5 h-5 text-[#0D3D4D]" />
                  </div>
                  <div>
                    <p className="font-light text-gray-600 mb-1">Session Format</p>
                    <p className="text-[#0D3D4D] text-lg">
                      Online sessions via secure video platform
                      <br />
                      <span className="text-base text-gray-600">
                        Available from anywhere in English or Portuguese
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#C5DDE0]/40 to-[#F4CCC8]/20 rounded-2xl border border-[#1B7A9C]/20">
              <h4 className="text-xl font-light text-[#0D3D4D] mb-4">Practical Details</h4>
              <div className="space-y-3 text-gray-700 font-light">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1B7A9C] flex-shrink-0 mt-1" />
                  <p>Sessions held online via Zoom or preferred platform</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1B7A9C] flex-shrink-0 mt-1" />
                  <p>Available in English or Portuguese</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1B7A9C] flex-shrink-0 mt-1" />
                  <p>Flexible scheduling</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1B7A9C] flex-shrink-0 mt-1" />
                  <p>Concessionary rates available</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/img/tree-of-life.jpg"
                alt="Tree of Life"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}