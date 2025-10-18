import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Users } from "lucide-react";

export default function AboutSection() {
  const credentials = [
    { icon: Award, text: "Licensed Clinical Psychotherapist (LMFT)" },
    { icon: BookOpen, text: "Ph.D. in Clinical Psychology" },
    { icon: Users, text: "Certified Trauma-Informed Therapist" },
    { icon: Heart, text: "Mindfulness & CBT Specialist" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D]">
            Your partner in healing
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&h=800&fit=crop"
                alt="Therapy session"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg font-light leading-relaxed">
              With over 15 years of experience in psychotherapy, I've had the privilege of walking
              alongside individuals through their most challenging moments. My approach is rooted in
              compassion, evidence-based practices, and a deep belief in every person's capacity for
              growth and healing.
            </p>
            <p className="text-gray-700 text-lg font-light leading-relaxed">
              I specialize in helping clients navigate anxiety, depression, trauma, and life
              transitions. Together, we'll create a safe space where you can explore your thoughts
              and feelings without judgment, develop coping strategies, and rediscover your
              resilience.
            </p>

            <div className="pt-8 space-y-4">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-[#C5DDE0]/30 rounded-xl hover:bg-[#C5DDE0]/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-[#1B7A9C] rounded-full flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[#0D3D4D] font-light">{cred.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}