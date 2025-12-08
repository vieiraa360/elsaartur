import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

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

  const navigateToPage = (pageName) => {
    window.location.href = createPageUrl(pageName);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", page: "Home" },
    { label: "About", page: "About" },
    { label: "Services", page: "Services" },
    { label: "Testimonials", page: "Testimonials" },
  ];

  const handleNavClick = (item) => {
    if (item.page) {
      navigateToPage(item.page);
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Use div with onClick instead of Link wrapping */}
        <div
          onClick={() => navigateToPage("Home")}
          className="flex items-center gap-3 transition-opacity hover:opacity-70 cursor-pointer"
        >
          <img
            src="./logosmall.svg"
            alt="Elsa Artur Logo"
            className="h-[75px] w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-light tracking-wider text-[#0D3D4D]">
              Elsa Artur
            </span>
            <span className="text-[#0D3D4D] font-light tracking-wide">
              Counselling & Supervision
            </span>
            <div className="flex gap-2 mt-1">
              <a 
                href="https://www.instagram.com/elsaartur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0D3D4D] hover:text-[#1B7A9C] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/elsaartur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0D3D4D] hover:text-[#1B7A9C] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id || item.page}
              onClick={() => handleNavClick(item)}
              className="text-[#0D3D4D] font-light tracking-wide hover:text-[#1B7A9C] transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}

          <Button
            onClick={() => navigateToPage("Contact")}
            className="bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white px-6 rounded-full transition-all duration-300"
          >
            Book Free Consultation
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl py-6 px-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id || item.page}
                onClick={() => handleNavClick(item)}
                className="text-[#0D3D4D] font-light text-lg tracking-wide hover:text-[#1B7A9C] transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}

            <Button
              onClick={() => navigateToPage("Contact")}
              className="bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white rounded-full mt-2"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}