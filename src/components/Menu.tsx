import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Droplets, IceCream, Sparkles } from "lucide-react";

// --- Import Gambar ---
// (Impor gambar tetap sama)
import jusAlpukat from "@/assets/jus/jus-alpukat.jpg";
import smoothiesBuahNaga from "@/assets/jus/smoothies-buahNaga.jpg";
import alpukatKocok from "@/assets/jus/alpukat-kocok.jpg";
import durianKocok from "@/assets/jus/durian-kocok.jpg";
import kelapaGulmer from "@/assets/kelapa/kelapa-gulmer.jpeg";
import kelapaSirup from "@/assets/kelapa/kelapa-sirup.png";
import kelapaOriginal from "@/assets/kelapa/kelapa-original.jpeg";
import kelapaBatok from "@/assets/kelapa/kelapa-batok.jpeg";
import milkshakeCoklat from "@/assets/milkshake/coklat.jpg";
import milkshakeVanila from "@/assets/milkshake/vanilla.jpg";
import milkshakeTaro from "@/assets/milkshake/taro.jpg";
import esTeller from "@/assets/jus/es-teller.jpg";

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
}

// (Array menuItems tetap sama)
const menuItems: MenuItem[] = [
  { name: "Jus Alpukat", price: "20K", image: jusAlpukat, category: "Jus", description: "Alpukat segar & creamy" },
  { name: "Jus Buah Naga", price: "20K", image: smoothiesBuahNaga, category: "Jus", description: "Kaya antioksidan" },
  { name: "Alpukat Kocok", price: "20K", image: alpukatKocok, category: "Jus", description: "Dingin & menyegarkan" },
  { name: "Durian Kocok", price: "20K", image: durianKocok, category: "Jus", description: "Raja buah dalam gelas" },
  { name: "Es Kelapa Gulmer", price: "20K", image: kelapaGulmer, category: "Kelapa", description: "Manis & segar" },
  { name: "Es Kelapa Sirup", price: "20K", image: kelapaSirup, category: "Kelapa", description: "Klasik favorit" },
  { name: "Es Kelapa Original", price: "20K", image: kelapaOriginal, category: "Kelapa", description: "Asli tanpa tambahan" },
  { name: "Kelapa Batok", price: "20K", image: kelapaBatok, category: "Kelapa", description: "Tradisional & unik" },
  { name: "Chocolate Oreo", price: "20K", image: milkshakeCoklat, category: "Milkshake", description: "Coklat lembut & oreo" },
  { name: "Vanila", price: "20K", image: milkshakeVanila, category: "Milkshake", description: "Klasik creamy" },
  { name: "Taro", price: "20K", image: milkshakeTaro, category: "Milkshake", description: "Ungu manis legit" },
  { name: "Es Teller", price: "20K", image: esTeller, category: "Lainnya", description: "Buah-buahan segar" },
];

const categories = [
  { name: "Jus", icon: Droplets },
  { name: "Kelapa", icon: Sparkles },
  { name: "Milkshake", icon: IceCream },
  { name: "Lainnya", icon: Coffee },
];

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* --- PERBAIKAN: Judul responsif --- */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Menu Minuman
          </h2>
          {/* --- PERBAIKAN: Subtitle responsif --- */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Pilihan minuman segar untuk menemani hari Anda
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            /* --- PERBAIKAN: Tambah text-sm --- */
            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm ${
              selectedCategory === null
                ? "bg-foreground text-background shadow-md"
                : "bg-muted hover:bg-muted/70 text-foreground"
            }`}
          >
            Semua Menu
          </button>
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                onClick={() => setSelectedCategory(cat.name)}
                /* --- PERBAIKAN: Tambah text-sm --- */
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                  selectedCategory === cat.name
                    ? "bg-foreground text-background shadow-md"
                    : "bg-muted hover:bg-muted/70 text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="group overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg bg-card h-full">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <CardContent className="p-5">
                  <h4 className="text-lg font-semibold text-foreground mb-1.5">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                  )}
                  {/* --- PERBAIKAN: Harga diubah dari text-xl ke text-lg --- */}
                  <p className="text-lg font-bold text-foreground">
                    {item.price}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            {/* --- PERBAIKAN: Teks empty state responsif --- */}
            <p className="text-muted-foreground text-base md:text-lg">
              Tidak ada menu dalam kategori ini
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Menu;
