import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "PETROBEL (Belayim Petroleum Company)",
    role: "Mechanical Engineering Intern",
    date: "Aug 2024 – Sep 2024",
    points: [
      "Assisted in maintaining mechanical equipment for petroleum extraction, including pumps, compressors, and heat exchangers.",
      "Supported calibration and testing of mechanical measurement instruments.",
      "Gained exposure to SCADA systems for monitoring and controlling mechanical processes.",
    ],
  },
  {
    company: "South Dabaa Power Plant",
    role: "Mechanical Engineering Intern",
    date: "Jul 2024 – Aug 2024",
    points: [
      "Assisted in the operation and maintenance of combined-cycle gas turbines and steam turbines.",
      "Supported troubleshooting activities for cooling water systems and steam generation units.",
      "Learned about operational protocols and performance optimization in power generation.",
    ],
  },
  {
    company: "Ridgewood Egypt",
    role: "Mechanical Engineering Intern",
    date: "Jul 2024",
    points: [
      "Supported maintenance of production line equipment including compressors and packaging machines.",
      "Observed condition-monitoring techniques such as vibration analysis and thermal imaging.",
      "Helped prepare maintenance logs and reports.",
    ],
  },
  {
    company: "GUPCO (Gulf of Suez Petroleum Co.)",
    role: "Mechanical Engineering Intern",
    date: "Jun 2024 – Jul 2024",
    points: [
      "Learned about the operation and maintenance of reciprocating and centrifugal pumps used in offshore oil extraction.",
      "Assisted in conducting basic mechanical inspections on valves and piping systems.",
      "Observed safety compliance and mechanical procedures in an offshore petroleum environment.",
    ],
  },
  {
    company: "NREA (New & Renewable Energy Authority)",
    role: "Electrical Engineering Intern",
    date: "Jul 2023 – Aug 2023",
    points: [
      "Assisted in monitoring wind turbine performance data and supported basic solar panel inspections.",
      "Learned to use measurement instruments for solar irradiance and wind speed.",
      "Gained foundational understanding of renewable energy grid integration and energy storage concepts.",
    ],
  },
  {
    company: "GAEB (General Authority for Educational Buildings)",
    role: "Mechanical Engineering Intern",
    date: "Aug 2022",
    points: [
      "Observed HVAC system installations and plumbing infrastructure for educational facilities.",
      "Assisted in inspecting fire protection systems and electrical panel installations.",
      "Gained introductory knowledge of MEP systems and building services engineering.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="text-gradient">worked.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <Briefcase size={10} className="text-primary" />
                </div>

                <div className="bg-card border border-border rounded-lg p-5 md:p-6 hover:border-primary/30 hover:glow-border transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      {exp.company}
                    </h3>
                    <span className="text-xs text-primary font-display mt-1 md:mt-0">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 italic">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
