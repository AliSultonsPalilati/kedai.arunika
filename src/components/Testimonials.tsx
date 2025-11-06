import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rina Susanti",
    review: "Es kelapa nya segar banget! Cocok untuk cuaca panas di Halmahera. Pelayanannya juga ramah, pasti balik lagi!",
    rating: 5
  },
  {
    name: "Ahmad Hidayat",
    review: "Jus alpukatnya creamy dan enak! Tempatnya nyaman, bisa buat ngobrol sama teman sambil minum yang segar-segar.",
    rating: 5
  },
  {
    name: "Siti Nurhaliza",
    review: "Milkshake Oreo nya juara! Manisnya pas, dan porsinya banyak. Harganya juga terjangkau. Recommended!",
    rating: 5
  },
  {
    name: "Budi Santoso",
    review: "Es teller nya komplit dan segar. Buah-buahannya fresh. Kedai Arunika memang pilihan terbaik untuk minuman segar!",
    rating: 5
  }
];

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
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gradient">
            Kata Pelanggan
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Testimoni dari pelanggan setia Kedai Arunika
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full shadow-soft hover:shadow-hover transition-shadow duration-300 border-0 bg-card">
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-secondary text-xl">⭐</span>
                      ))}
                    </div>
                    
                    <p className="text-foreground/80 mb-4 leading-relaxed italic">
                      "{testimonial.review}"
                    </p>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-primary">
                        {testimonial.name}
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
