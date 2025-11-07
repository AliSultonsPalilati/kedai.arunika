import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
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
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-card/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="text-xl md:text-2xl font-bold text-primary tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kedai Arunika
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => {
                const isLast = index === navItems.length - 1;
                return (
                  <Button
                    key={item.id}
                    variant={isLast ? "default" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className={
                      isLast
                        ? "ml-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
                        : "text-foreground hover:text-primary hover:bg-primary/10 text-base"
                    }
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>

            {/* Hamburger Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-card/95 backdrop-blur-lg z-40 flex flex-col justify-between"
          >
            <div className="pt-28 pb-12 flex flex-col items-center space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-primary"
              >
                Kedai Arunika
              </motion.h3>

              <div className="flex flex-col gap-4 w-3/4 text-center">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * i }}
                    className="text-lg text-foreground hover:text-primary transition-colors py-2 font-medium border-b border-stone-700"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pb-10 text-center text-sm text-stone-500"
            >
              © {new Date().getFullYear()} Kedai Arunika — Fresh Vibes Everyday
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Header;
