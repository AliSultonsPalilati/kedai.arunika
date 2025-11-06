import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  fallback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alisultn",
    review: "Minumannya enak skli, boleh ni untuk orng yang ba lintas dari ternate ke tobelo, singgah d RM Laduni la coba",
    rating: 5,
    fallback: "RS"
  },
  {
    name: "Ahmad Hidayat",
    review: "Jus alpukatnya creamy dan enak! Tempatnya nyaman, bisa buat ngobrol sama teman sambil minum yang segar-segar.",
    rating: 5,
    fallback: "AH"
  },
  {
    name: "Siti Nurhaliza",
    review: "Milkshake Oreo nya juara! Manisnya pas, dan porsinya banyak. Harganya juga terjangkau. Recommended!",
    rating: 5,
    fallback: "SN"
  },
  {
    name: "Budi Santoso",
    review: "Es teller nya komplit dan segar. Buah-buahannya fresh. Kedai Arunika memang pilihan terbaik untuk minuman segar!",
    rating: 5,
    fallback: "BS"
  }
];

// Fungsi untuk membuat array bintang
const renderStars = (rating: number) => {
  return [...Array(5)].map((_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
    />
  ));
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-light/10 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* --- PERBAIKAN: Judul responsif --- */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 text-gradient">
            Kata Pelanggan
          </h2>
          {/* --- PERBAIKAN: Subtitle responsif --- */}
          <p className="text-center text-muted-foreground text-base md:text-lg mb-16 max-w-2xl mx-auto">
            Testimoni dari pelanggan setia Kedai Arunika
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className={index === 0 ? "lg:col-span-2" : ""}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full shadow-soft hover:shadow-hover transition-shadow duration-300 border-0 bg-card relative overflow-hidden">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <Quote className="absolute right-4 top-4 h-20 w-20 text-primary/5 -rotate-12" />
                    
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {testimonial.fallback}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          {/* --- PERBAIKAN: Teks nama responsif --- */}
                          <h4 className="font-semibold text-primary text-base md:text-lg">
                            {testimonial.name}
                          </h4>
                          <div className="flex">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Teks review sudah text-base, ini bagus */}
                      <p className="text-foreground/80 leading-relaxed italic relative z-10 text-base border-l-4 border-primary/30 pl-4 py-2">
                        "{testimonial.review}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
