import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">connect.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always open to new opportunities, collaborations, and conversations about
            engineering and technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: "ahmadlsonbaty@gmail.com",
              href: "mailto:ahmadlsonbaty@gmail.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+20 106 008 9940",
              href: "tel:+201060089940",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "Ahmed El-Sonbaty",
              href: "https://www.linkedin.com/in/ahmadelsonbaty/",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Cairo, Egypt",
              href: "#",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/30 hover:glow-border transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="mt-20 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Built with ❤️ by Ahmed El-Sonbaty © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
