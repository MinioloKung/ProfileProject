import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "../data/portfolio-data";
import { HiCode, HiBriefcase, HiLightBulb } from "react-icons/hi";

const highlights = [
  { icon: <HiCode className="text-2xl" />, label: "3+ โปรเจกต์", desc: "ผลงานที่ภูมิใจ" },
  { icon: <HiBriefcase className="text-2xl" />, label: "2 บริษัท", desc: "ประสบการณ์ทำงาน" },
  { icon: <HiLightBulb className="text-2xl" />, label: "AI Integrated", desc: "Generative AI" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="gradient-section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            <span className="text-primary">—</span> เกี่ยวกับผม
          </h2>
          <p className="section-subtitle">ทำความรู้จักกับผมมากขึ้น</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-border/50 shadow-xl">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-warm-gray text-base md:text-lg leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-5 text-center hover:border-primary/40 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-warm-white font-bold text-lg">{item.label}</div>
                  <div className="text-muted text-sm">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
