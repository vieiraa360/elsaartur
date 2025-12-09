import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ApproachSection() {
  const principles = [
    "Client-centered and collaborative approach",
    "Evidence-based therapeutic techniques",
    "Trauma-informed and culturally sensitive care",
    "Integration of mindfulness and somatic practices",
    "Focus on strengths and resilience",
    "Safe, confidential, and non-judgmental space",
  ];

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
                My Approach
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
                A path built on trust & compassion
              </h2>
              <p className="text-gray-700 text-lg font-light leading-relaxed">
                I believe that healing happens in the context of a safe, trusting relationship. My
                therapeutic approach blends evidence-based practices with genuine human connection,
                meeting you exactly where you are in your journey.
              </p>
            </div>

            <div className="space-y-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 bg-[#1B7A9C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-light text-lg">{principle}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 p-8 bg-gradient-to-br from-[#F4CCC8]/30 to-[#C5DDE0]/30 rounded-2xl border border-[#1B7A9C]/20">
              <p className="text-[#0D3D4D] font-light text-lg italic leading-relaxed">
                "The curious paradox is that when I accept myself just as I am, then I can change."
              </p>
              <p className="text-[#1B7A9C] font-light mt-3">— Carl Rogers</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=700&h=900&fit=crop"
                alt="Peaceful therapy space"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D4D]/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#F4CCC8]/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}