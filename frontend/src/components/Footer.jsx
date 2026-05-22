// src/components/Footer.jsx
import { useNavigate } from "react-router-dom";

export default function Footer({ onShopNow }) {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const primaryLinks = [
    { label: "Shop Drops", path: "/market" },
    { label: "Men", path: "/men" },
    { label: "Women", path: "/women" },
    { label: "Unisex", path: "/unisex" },
    { label: "Our Story", path: "/about" },
    { label: "FAQs", path: "/faqs" },
  ];

  const socialLinks = [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "YouTube", url: "https://youtube.com" },
    { label: "Discord community", url: "https://discord.com" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", path: "/" },
    { label: "Cookie Preferences", path: "/" },
    { label: "Terms of Service", path: "/" },
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-6 px-6 lg:px-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* ─── UPPER GRID ROW: E-COMMERCE CONFIGURATION ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start pb-12">
          
          {/* Left Column: Bold Collection Navigation Links */}
          <div className="md:col-span-4 flex flex-col items-start">
            <nav className="flex flex-col space-y-1 text-left" aria-label="Footer Navigation">
              {primaryLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.path === "/market" && onShopNow) onShopNow();
                    else navigate(link.path);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-[26px] md:text-[32px] font-bold tracking-tight text-[#0b2240] hover:text-[#ff5700] transition-colors duration-200 uppercase leading-none text-left w-auto"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Middle Column: Social Channels & Legal Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 pt-2">
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 block">Follow Us</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-500 hover:text-[#0b2240] transition-colors uppercase tracking-wider"
                >
                  {social.label}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 block">Support</span>
              {legalLinks.map((legal) => (
                <button
                  key={legal.label}
                  onClick={() => navigate(legal.path)}
                  className="text-xs font-bold text-slate-400 hover:text-[#0b2240] transition-colors uppercase tracking-wider text-left"
                >
                  {legal.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: E-Commerce Status Alert Header */}
          <div className="md:col-span-4 flex flex-col space-y-4 md:items-end md:text-right pt-1">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-[#0b2240] max-w-xs md:ml-auto">
              GET LIVE NOTIFICATIONS ON UPCOMING CAPSULES
            </h3>
            
            <div className="space-y-0.5 pt-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Customer Care & Concierge
              </p>
              <a
                href="mailto:support@luxzera.com"
                className="text-xs font-bold text-[#0b2240] hover:text-[#ff5700] transition-colors tracking-wide break-all"
              >
                support@luxzera.com
              </a>
            </div>
          </div>

        </div>

        {/* ─── LOWER ROW: BRUTALIST BIG BRAND DISPLAY ─── */}
        <div className="w-full pt-4 border-t border-slate-100/70 select-none flex items-center justify-center">
          <img 
            src="/LuxZera.png" 
            alt="LuxZera Big Branding Logo" 
            className="w-full h-auto max-w-5xl object-contain pointer-events-none select-none pt-4"
          />
        </div>

        {/* ─── COPYRIGHT META FOOTER ─── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <p>© {currentYear} LuxZera. All rights reserved.</p>
          <p className="text-slate-300">Premium Drop Concept System</p>
        </div>

      </div>
    </footer>
  );
}