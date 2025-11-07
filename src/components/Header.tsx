import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mengunci scroll saat menu mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // --- PERBAIKAN 1: Fungsi Scroll diperbaiki dengan Offset ---
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Offset untuk tinggi header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false); // Otomatis tutup menu
    }
  };

  const navItems = [
    { label: "Beranda", id: "hero" },
    { label: "Tentang", id: "about" },
    { label: "Menu", id: "menu" },
    { label: "Testimoni", id: "testimonials" },
    { label: "Kontak", id: "contact" },
  ];

  return (
    <Fragment>
      {/* --- PERBAIKAN 2: z-index diubah dari 50 menjadi 40 --- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${ // <-- Diubah ke z-40
          isScrolled || isMobileMenuOpen
            ? "bg-card/95 backdrop-blur-md shadow-medium"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="text-lg md:text-xl font-bold text-primary hover:text-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kedai Arunika
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => {
                const isLastItem = index === navItems.length - 1;
                
                return (
                  <Button
                    key={item.id}
                    variant={isLastItem ? "default" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className={
                      isLastItem
                        ? "ml-2 bg-primary hover:bg-primary-dark text-primary-foreground"
                        : "text-foreground hover:text-primary hover:bg-primary/10 text-base"
                    }
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>

            {/* --- PERBAIKAN 3: Warna diubah ke text-primary --- */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary relative z-50" // <-- Diubah ke text-primary
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* --- PERBAIKAN 2 (Lanjutan): z-index diubah dari 40 menjadi 50 --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 h-screen w-screen bg-card/95 backdrop-blur-lg z-50 md:hidden" // <-- Diubah ke z-50
          >
            <div className="container mx-auto px-4 h-full overflow-y-auto pt-24 pb-12">
              
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => {
                  const isLastItem = index === navItems.length - 1;

                  return (
                    <Button
                      key={item.id}
                      variant={isLastItem ? "default" : "ghost"}
                      onClick={() => scrollToSection(item.id)}
                      className={
                        isLastItem
                          ? "bg-primary hover:bg-primary-dark text-primary-foreground text-base mt-4 py-3" 
                          : "text-foreground hover:text-primary hover:bg-primary/10 justify-start text-base py-3"
                      }
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Header;
