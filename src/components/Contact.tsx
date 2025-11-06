import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: "📍",
      title: "Alamat",
      content: "Jl. Trans – Halmahera Utara, Kao Teluk",
      link: "https://maps.google.com/?q=Kao+Teluk+Halmahera+Utara"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      content: "082299257770",
      link: "https://wa.me/6282299257770"
    },
    {
      icon: "📸",
      title: "Instagram",
      content: "@niningarhmn",
      link: "https://instagram.com/niningarhmn"
    }
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
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gradient">
            Hubungi Kami
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Kunjungi kami atau hubungi untuk informasi lebih lanjut
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="text-center shadow-soft hover:shadow-hover transition-all duration-300 border-0 bg-card">
                  <CardContent className="p-8">
                    <div className="text-6xl mb-4">{info.icon}</div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {info.title}
                    </h3>
                    <p className="text-foreground/80 mb-4">
                      {info.content}
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(info.link, '_blank')}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {info.title === "Alamat" ? "Lihat Lokasi" : "Hubungi"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="overflow-hidden shadow-medium border-0">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127456.85624584646!2d127.5!3d1.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32924c66b6c9c7c1%3A0x3e9b4c2a6a3f3c3e!2sKao%20Teluk%2C%20Kao%2C%20North%20Halmahera%20Regency%2C%20North%20Maluku!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="400"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
