import React from "react";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-[#C5DDE0]/20 pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
            Welcome — I'm Elsa Artur
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/elsa.jpg"
                alt="Elsa Artur"
                className="w-full h-96 md:h-[650px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg font-light leading-relaxed">
              I am a trauma-informed therapist with specialist expertise in addiction recovery, bringing over 20 years' experience supporting people through complex emotional challenges and life transitions. Born in Portugal, the emotional depth of Fado music inspired my early connection to human suffering and longing.
            </p>

            <p className="text-gray-700 text-lg font-light leading-relaxed">
              This passion led me to counselling and psychotherapy, and since 2004, I have worked extensively with clients from all walks of life. My approach honours your unique journey, with emotional honesty and cultural sensitivity at its core.
            </p>

            <p className="text-gray-700 text-lg font-light leading-relaxed">
              I have foundational professional training in IFS and somatic psychology approaches. I offer online therapy in English and Portuguese — a warm, confidential, and compassionate space where you can begin to untangle what's holding you back and move toward recovery and renewed strength, at your own pace and in your own way.
            </p>

            <div className="pt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1B7A9C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-light">B.A. (Hons) MBACP (Accred)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1B7A9C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-light">Trauma-Informed & Addiction Specialist</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1B7A9C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-light">Internal Family Systems (IFS) & Somatic Therapy</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1B7A9C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-light">Therapy in English & Portuguese</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}