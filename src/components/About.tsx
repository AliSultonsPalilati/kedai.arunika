import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-kedai.jpg";

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
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gradient">
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
              <p className="text-lg text-foreground/80 leading-relaxed">
                <strong className="text-primary text-xl">Kedai Arunika</strong> adalah kedai minuman lokal yang hadir untuk menyegarkan hari Anda dengan berbagai pilihan minuman segar yang dibuat dari bahan-bahan pilihan berkualitas tinggi.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Kami percaya bahwa setiap tegukan minuman harus memberikan kesegaran dan kebahagiaan. Dengan penuh cinta dan perhatian, kami menyajikan setiap minuman untuk memberikan pengalaman yang tak terlupakan bagi pelanggan kami.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Dari jus buah segar, kelapa muda yang manis, hingga milkshake yang creamy - setiap minuman di Kedai Arunika dibuat dengan semangat untuk menyegarkan hari Anda!
              </p>

              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🍹</span>
                  <span className="text-foreground font-medium">Bahan Segar Pilihan</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💚</span>
                  <span className="text-foreground font-medium">Dibuat dengan Cinta</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌿</span>
                  <span className="text-foreground font-medium">Suasana Nyaman & Alami</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
