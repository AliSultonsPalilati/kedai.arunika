import { motion } from "framer-motion";
import { Instagram, Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const navItems = [
    { label: "Beranda", id: "hero" },
    { label: "Tentang", id: "about" },
    { label: "Menu", id: "menu" },
    { label: "Testimoni", id: "testimonials" },
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://instagram.com/niningarhmn", 
      label: "Instagram",
      username: "@niningarhmn"
    },
    { 
      icon: Phone, 
      href: "https://wa.me/6282299257770", 
      label: "WhatsApp",
      username: "082299257770"
    },
  ];

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 text-foreground border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Kedai Arunika
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Segarkan harimu dengan setiap tegukan minuman segar pilihan terbaik kami.
              </p>
            </div>

            {/* Operating Hours */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-semibold">Jam Operasional</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">
                Senin - Minggu<br />
                09:00 - 22:00 WIT
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollClick(e, item.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    Jl. Trans – Halmahera Utara,<br />
                    Kao Teluk
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/6282299257770"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  082299257770
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Ikuti Kami
            </h4>
            <p className="text-sm text-muted-foreground">
              Dapatkan update menu terbaru dan promo menarik
            </p>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-primary/5 border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">{social.label}</span>
                      <span className="text-xs text-muted-foreground">{social.username}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border"></div>

      {/* Bottom Bar */}
      <div className="bg-background/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Kedai Arunika. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
              >
                Syarat & Ketentuan
              </a>
            </div>
            <p className="text-center md:text-right">
              Crafted with ♥ by{' '}
              <a 
                href="https://instagram.com/brownnnsgarrr"
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                Alisultn
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
