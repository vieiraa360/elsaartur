import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, Video, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferred_contact: "email",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.entities.ContactInquiry.create(formData);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferred_contact: "email",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#C5DDE0]/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
            Begin your journey today
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Taking the first step toward therapy can feel vulnerable. I'm here to make it as
            comfortable as possible. Reach out for a free consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-[#0D3D4D] mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B7A9C] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-light text-gray-600 mb-1">Phone</p>
                    <p className="text-[#0D3D4D] text-lg">+44 7766 671971</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D3D4D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-light text-gray-600 mb-1">Email</p>
                    <p className="text-[#0D3D4D] text-lg">mail@elsaartur.com</p>
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
                        Available from anywhere
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#C5DDE0]/40 to-[#F4CCC8]/20 rounded-2xl border border-[#1B7A9C]/20">
              <h4 className="text-xl font-light text-[#0D3D4D] mb-4">Available Hours</h4>
              <div className="space-y-2 text-gray-700 font-light">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 font-light italic">
                All sessions conducted online via secure video conferencing
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
              <img
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=400&fit=crop"
                alt="Online therapy session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D4D]/60 to-transparent flex items-end p-6">
                <p className="text-white font-light text-lg">
                  Comfortable, confidential therapy from your own space
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSuccess ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <div className="w-20 h-20 bg-[#C5DDE0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#1B7A9C]" />
                </div>
                <h3 className="text-2xl font-light text-[#0D3D4D] mb-4">
                  Thank you for reaching out!
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  I've received your message and will get back to you within 24 hours. I look
                  forward to connecting with you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h3 className="text-2xl font-light text-[#0D3D4D] mb-6">Send a Message</h3>

                <div>
                  <Label htmlFor="name" className="text-gray-700 font-light">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 border-gray-200 focus:border-[#1B7A9C] rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-light">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2 border-gray-200 focus:border-[#1B7A9C] rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-light">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 border-gray-200 focus:border-[#1B7A9C] rounded-xl"
                  />
                </div>

                <div>
                  <Label className="text-gray-700 font-light mb-3 block">
                    Preferred Contact Method
                  </Label>
                  <RadioGroup
                    value={formData.preferred_contact}
                    onValueChange={(value) =>
                      setFormData({ ...formData, preferred_contact: value })
                    }
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact" className="font-light cursor-pointer">
                        Email
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact" className="font-light cursor-pointer">
                        Phone
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-light">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="mt-2 border-gray-200 focus:border-[#1B7A9C] rounded-xl resize-none"
                    placeholder="Tell me a bit about what brings you to therapy..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0D3D4D] hover:bg-[#1B7A9C] text-white py-6 rounded-xl font-light text-lg tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 font-light text-center">
                  Your information is confidential and will never be shared with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}