import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Wrench, Languages } from "lucide-react";

const skillCategories = [
  {
    icon: Monitor,
    title: "Technical Software",
    skills: [
      "SolidWorks",
      "MATLAB",
      "OptimumG / OptimumLap",
      "SCADA Systems",
      "FEA Software",
      "Microsoft Office",
    ],
  },
  {
    icon: Wrench,
    title: "Lab & Engineering Tools",
    skills: [
      "Solar irradiance instruments",
      "Wind monitoring equipment",
      "Mechanical measurement tools",
      "Vibration analysis",
      "Thermal imaging",
      "Condition monitoring",
    ],
  },
  {
    icon: Languages,
    title: "Languages",
    skills: ["Arabic — Native", "English — Proficient"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Skills & Tools
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            My <span className="text-gradient">toolkit.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:glow-border transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
