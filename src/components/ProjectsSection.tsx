import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Cog, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Projects & Activities
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Beyond the <span className="text-gradient">classroom.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 hover:glow-border transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Trophy size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground">
                APEX Racing Team
              </h3>
              <p className="text-sm text-primary">Driveline Member — Formula Student</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Contributing to the driveline subsystem of a Formula Student race car, applying
            engineering principles to competitive motorsport design and optimization.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Cog,
                title: "Driveline Design",
                desc: "Assisted in designing and analyzing the driveline system including CV joints, half shafts, and differential housing.",
              },
              {
                icon: BarChart3,
                title: "FEA Analysis",
                desc: "Supported FEA simulations for structural analysis of driveline components under dynamic loading conditions.",
              },
              {
                icon: Cog,
                title: "Differential Optimization",
                desc: "Contributed to selecting and optimizing the differential type for improved cornering performance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-secondary/50 rounded-lg p-4 border border-border/50"
              >
                <item.icon size={16} className="text-primary mb-2" />
                <h4 className="font-display font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
