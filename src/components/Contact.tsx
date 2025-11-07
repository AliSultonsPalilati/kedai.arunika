import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      content: "082299257770",
      link: "https://wa.me/6282299257770",
      buttonText: "Chat Sekarang",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@niningarhmn",
      link: "https://instagram.com/niningarhmn",
      buttonText: "Follow Kami",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* --- PERUBAHAN FONT: Judul Utama --- */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-gradient">
            Hubungi Kami
          </h2>
          {/* --- PERUBAHAN FONT: Subtitle --- */}
          <p className="text-center text-muted-foreground text-sm md:text-base lg:text-lg mb-16 max-w-2xl mx-auto">
            Kunjungi kami atau hubungi untuk informasi lebih lanjut
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            
            {/* --- Kolom Kiri: Peta dan Penjelasan --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* --- PERUBAHAN FONT: Judul kolom --- */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary mb-3">
                Lokasi Kami
              </h3>
              {/* --- PERUBAHAN FONT: Teks paragraf --- */}
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                Temukan kami dengan mudah di lokasi strategis berikut. Kami
                tunggu kedatangan Anda!
              </p>
              
              <Card className="overflow-hidden shadow-medium border-0">
                <CardContent className="p-0">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367021.5137395845!2d122.64003228725457!3d0.8665790090768064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329b66249e28d57d%3A0x12e08edb20d6b73c!2sRumah%20Makan%20Laduni!5e1!3m2!1sid!2sid!4v1762443434295!5m2!1sid!2sid"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kedai Arunika"
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* --- Kolom Kanan: Info Kontak (Hanya WA & IG) --- */}
            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={info.title}
                    className="shadow-soft hover:shadow-hover transition-all duration-300 border-0 bg-card"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                        <div className="flex-shrink-0 mb-4 sm:mb-0">
                          <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                        </div>

                        <div className="flex-grow">
                          {/* --- PERUBAHAN FONT: Judul kartu --- */}
                          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-primary mb-1">
                            {info.title}
                          </h3>
                          {/* --- PERUBAHAN FONT: Teks isi kartu --- */}
                          <p className="text-foreground/80 text-sm md:text-base">
                            {info.content}
                          </p>
                        </div>

                        <Button
                          variant="outline"
                          onClick={() => window.open(info.link, "_blank")}
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4 sm:mt-0 sm:ml-auto flex-shrink-0"
                        >
                          {info.buttonText}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
