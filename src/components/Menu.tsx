import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import jusAlpukat from "@/assets/jus-alpukat.jpg";
import esKelapa from "@/assets/es-kelapa.jpg";
import milkshakeOreo from "@/assets/milkshake-oreo.jpg";
import esTeller from "@/assets/es-teller.jpg";

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  // Jus
  { name: "Jus Alpukat", price: "20K", image: jusAlpukat, category: "Jus" },
  { name: "Jus Buah Naga", price: "20K", image: jusAlpukat, category: "Jus" },
  { name: "Alpukat Kocok", price: "20K", image: jusAlpukat, category: "Jus" },
  
  // Kelapa
  { name: "Es Kelapa Gulmer", price: "15K", image: esKelapa, category: "Kelapa" },
  { name: "Es Kelapa Sirup", price: "15K", image: esKelapa, category: "Kelapa" },
  { name: "Es Kelapa Original", price: "10K", image: esKelapa, category: "Kelapa" },
  { name: "Kelapa Batok", price: "15K", image: esKelapa, category: "Kelapa" },
  
  // Milkshake
  { name: "Chocolate Oreo", price: "20K", image: milkshakeOreo, category: "Milkshake" },
  { name: "Vanila", price: "20K", image: milkshakeOreo, category: "Milkshake" },
  { name: "Taro", price: "20K", image: milkshakeOreo, category: "Milkshake" },
  
  // Lainnya
  { name: "Es Teller", price: "20K", image: esTeller, category: "Lainnya" },
  { name: "Es Jeruk", price: "15K", image: jusAlpukat, category: "Lainnya" },
];

const categories = ["Jus", "Kelapa", "Milkshake", "Lainnya"];

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gradient">
            Menu Minuman
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Pilihan minuman segar yang siap menyegarkan hari Anda
          </p>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => {
              const categoryItems = menuItems.filter(item => item.category === category);
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center md:text-left">
                    {category}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryItems.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Card className="overflow-hidden card-hover shadow-soft border-0 bg-card">
                          <div className="aspect-square overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <CardContent className="p-6 text-center">
                            <h4 className="text-lg font-semibold text-foreground mb-2">
                              {item.name}
                            </h4>
                            <p className="text-2xl font-bold text-primary">
                              {item.price}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
