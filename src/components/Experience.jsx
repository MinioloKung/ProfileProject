import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../data/portfolio-data";
import { HiBriefcase } from "react-icons/hi";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title"><span className="text-primary">—</span> ประสบการณ์</h2>
          <p className="section-subtitle">เส้นทางการทำงานของผม</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border/50" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-bg z-10 shadow-lg shadow-primary/30" />

              {/* Content card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <div className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group">
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <HiBriefcase className="text-primary text-xl" />
                    <span className="text-primary text-sm font-semibold font-inter">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-warm-white mb-1">{exp.company}</h3>
                  <p className="text-primary-light text-sm font-medium mb-1">{exp.position}</p>
                  {exp.department && <p className="text-muted text-sm mb-4">{exp.department}</p>}
                  <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="text-warm-gray text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">▸</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
