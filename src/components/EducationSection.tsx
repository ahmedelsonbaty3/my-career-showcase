import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Education
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Academic <span className="text-gradient">foundation.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 hover:glow-border transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Higher Technological Institute
              </h3>
              <p className="text-primary text-sm mt-1">10th of Ramadan City, Egypt</p>
              <p className="text-muted-foreground mt-3 text-sm">
                Bachelor's Degree in Mechatronics Engineering
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-display font-semibold">
                  GPA: 3.6
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border/50">
                  Expected: January 2026
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
