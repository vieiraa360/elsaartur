import React from "react";

export default function Footer() {
  // 1. DELETE the line importing and using the hook:
  // const { t } = useLanguage(); 

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const navigateToPage = (pageName) => {
    window.location.href = `/${pageName}`;
  };

  return (
    <footer className="bg-[#0D3D4D] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light mb-4">Elsa Artur</h3>
            <p className="text-white/80 font-light leading-relaxed mb-2">
              B.A. (Hons) MBACP (Accred)
            </p>
            <p className="text-white/80 font-light leading-relaxed">
              Trauma-informed counsellor & psychotherapist. Specialist in addiction recovery.
            </p>
          </div>

          <div>
            <h4 className="font-normal mb-4">
              {/* REPLACE {t.footer.quickLinks} with English text */}
              Quick Links
            </h4>
            <div className="space-y-2 text-white/80 font-light">
              <p 
                onClick={() => navigateToPage("About")} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {/* REPLACE {t.footer.about} with English text */}
                About
              </p>
              <p 
                onClick={() => navigateToPage("Services")} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {/* REPLACE {t.footer.services} with English text */}
                Services
              </p>
              <p 
                onClick={() => navigateToPage("Testimonials")} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {/* REPLACE {t.footer.testimonials} with English text */}
                Testimonials
              </p>
              <p 
                onClick={() => navigateToPage("Blog")} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {/* REPLACE {t.footer.resources} with English text */}
                Resources
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-normal mb-4">
              {/* REPLACE {t.footer.contact} with English text */}
              Contact
            </h4>
            <div className="space-y-2 text-white/80 font-light">
              <p>Email: <a href="mailto:elsaartur@live.co.uk">elsaartur@live.co.uk</a></p>
              <p>Phone: <a href="tel:+447766671971">+44 7766 671971</a></p>
              <p className="pt-2 border-t border-white/20 mt-4">
                {/* REPLACE {t.footer.online} with English text */}
                Sessions available worldwide online.
              </p>
              <p>English spoken.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 font-light">
            Healing starts with being seen and heard
          </p>
          <p className="text-white/60 text-sm font-light mt-2">
            © 2025 Elsa Artur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}