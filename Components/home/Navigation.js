import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Approach", id: "approach" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-light tracking-wider text-[#0D3D4D] transition-opacity hover:opacity-70"
        >
          Dr. Sarah Mitchell
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[#0D3D4D] font-light tracking-wide hover:text-[#1B7A9C] transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white px-6 rounded-full transition-all duration-300"
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0D3D4D]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-lg py-6 px-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#0D3D4D] font-light text-lg tracking-wide hover:text-[#1B7A9C] transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white rounded-full mt-2"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}