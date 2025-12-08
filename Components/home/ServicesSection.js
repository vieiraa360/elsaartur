import React from "react";
import { motion } from "framer-motion";
import { Brain, Users, Heart, Sparkles, User, Home } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to your unique needs, focusing on anxiety, depression, trauma, and personal growth.",
      color: "bg-[#1B7A9C]",
    },
    {
      icon: Users,
      title: "Couples Therapy",
      description:
        "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection.",
      color: "bg-[#0D3D4D]",
    },
    {
      icon: Home,
      title: "Family Therapy",
      description:
        "Navigate family dynamics, improve relationships, and create a more harmonious home environment together.",
      color: "bg-[#B8C4BC]",
    },
    {
      icon: Heart,
      title: "Trauma Recovery",
      description:
        "Gentle, trauma-informed approaches including EMDR and somatic therapy to help you heal from past experiences.",
      color: "bg-[#F4CCC8]",
    },
    {
      icon: Sparkles,
      title: "Mindfulness & Stress Management",
      description:
        "Learn practical techniques to reduce stress, increase present-moment awareness, and cultivate inner peace.",
      color: "bg-[#C5DDE0]",
    },
    {
      icon: User,
      title: "Life Transitions",
      description:
        "Support during major life changes including career shifts, loss, relocation, and identity exploration.",
      color: "bg-[#1B7A9C]",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#C5DDE0]/20 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
            How I can support you
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Each therapeutic journey is unique. I offer personalized care across a range of
            specialties to meet you where you are.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-normal text-[#0D3D4D] mb-3">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}