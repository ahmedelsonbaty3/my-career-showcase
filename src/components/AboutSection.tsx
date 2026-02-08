import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            About Me
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Engineering the future,{" "}
            <span className="text-gradient">one system at a time.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg"
        >
          <p>
            I'm a Mechatronics Engineering student at the Higher Technological Institute in Egypt,
            passionate about bridging the gap between mechanical systems, electronics, and intelligent
            control. With a GPA of 3.6 and hands-on experience across renewable energy, petroleum
            operations, and motorsport engineering, I bring a multidisciplinary perspective to every
            challenge.
          </p>
          <p>
            From monitoring wind turbines at NREA to designing driveline systems for Formula Student
            with the APEX Racing Team, I thrive at the intersection of theory and real-world
            application. I'm particularly drawn to renewable energy technologies, automotive systems,
            and the future of electric and hybrid powertrains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { label: "GPA", value: "3.6" },
            { label: "Internships", value: "6+" },
            { label: "Graduation", value: "Jan 2026" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-lg p-5 text-center"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
