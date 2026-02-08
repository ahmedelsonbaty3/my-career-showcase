import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, Car, Sun, Zap } from "lucide-react";

const interests = [
  { icon: Sun, label: "Renewable Energy", desc: "Solar & sustainable power systems" },
  { icon: Car, label: "Automotive & Motorsports", desc: "Formula Student & vehicle dynamics" },
  { icon: Wind, label: "Wind & Solar Tech", desc: "Turbine monitoring & solar instruments" },
  { icon: Zap, label: "Electric Powertrains", desc: "Hybrid & EV drivetrain technologies" },
];

const InterestsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Interests
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            What drives <span className="text-gradient">me.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 hover:glow-border transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
