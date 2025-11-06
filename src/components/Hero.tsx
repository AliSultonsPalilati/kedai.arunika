import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drinks.jpg"; // Pastikan path ini benar

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fresh tropical drinks" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* --- PERBAIKAN: Ukuran font responsif --- */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 
                       [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kedai Arunika
          </motion.h1>
          
          {/* --- PERBAIKAN: Ukuran font responsif --- */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/95 font-light max-w-2xl mx-auto mb-8 
                       [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Segarkan Harimu dengan Setiap Tegukan
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* --- PERBAIKAN: Menghapus text-lg, px-8, py-6. Memakai size="lg" --- */}
            <Button 
              size="lg"
              onClick={() => scrollToSection("menu")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-medium"
            >
              Lihat Menu
            </Button>
            
            {/* --- PERBAIKAN: Menghapus text-lg, px-8, py-6. Memakai size="lg" --- */}
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-transparent text-white border-white border-2 hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              Hubungi Kami
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-3xl" // <-- Ukuran ikon scroll juga dikecilkan
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
