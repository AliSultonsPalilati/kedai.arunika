import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-kedai.jpg";
// --- 1. Import ikon profesional ---
import { CupSoda, Heart, Leaf } from "lucide-react"; 

// --- 2. Buat array untuk fitur agar lebih rapi ---
const features = [
  { icon: CupSoda, text: "Bahan Segar Pilihan" },
  { icon: Heart, text: "Dibuat dengan Cinta" },
  { icon: Leaf, text: "Suasana Nyaman & Alami" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* --- PERUBAHAN FONT: Judul Utama --- */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 text-gradient">
            Tentang Kami
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={aboutImage} 
                alt="Suasana Kedai Arunika" 
                className="rounded-2xl shadow-medium w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* --- PERUBAHAN FONT: Paragraf --- */}
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                <strong className="font-semibold text-primary">Kedai Arunika</strong> adalah kedai minuman lokal yang hadir untuk menyegarkan hari Anda dengan berbagai pilihan minuman segar yang dibuat dari bahan-bahan pilihan berkualitas tinggi.
              </p>
              
              {/* --- PERUBAHAN FONT: Paragraf --- */}
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                Dari jus buah segar, kelapa muda yang manis, hingga milkshake yang creamy - setiap minuman di Kedai Arunika dibuat dengan semangat untuk menyegarkan hari Anda!
              </p>

              {/* --- Fitur dengan ikon profesional & teks responsif --- */}
              <div className="pt-4 space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary/10 rounded-full">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {/* --- PERUBAHAN FONT: Teks Fitur --- */}
                      <span className="text-sm md:text-base text-foreground font-medium">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
