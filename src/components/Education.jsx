import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "../data/portfolio-data";
import { HiAcademicCap } from "react-icons/hi";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="gradient-section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title"><span className="text-primary">—</span> การศึกษา</h2>
          <p className="section-subtitle">วุฒิการศึกษาและสถาบัน</p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-card p-8 md:p-10 text-center hover:border-primary/40 transition-all duration-300 relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <HiAcademicCap className="text-primary text-3xl" />
              </motion.div>

              <h3 className="text-2xl font-bold text-warm-white mb-1">{education.university}</h3>
              <p className="text-muted text-sm mb-6 font-inter">{education.universityEn}</p>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm">{education.period}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-bg/40 rounded-xl border border-border/30">
                  <p className="text-muted text-xs mb-1">ระดับ</p>
                  <p className="text-warm-white font-semibold text-sm">{education.degree}</p>
                </div>
                <div className="p-4 bg-bg/40 rounded-xl border border-border/30">
                  <p className="text-muted text-xs mb-1">สาขา</p>
                  <p className="text-warm-white font-semibold text-sm">{education.major}</p>
                </div>
                <div className="p-4 bg-bg/40 rounded-xl border border-border/30">
                  <p className="text-muted text-xs mb-1">เกรดเฉลี่ย</p>
                  <p className="text-primary font-bold text-xl">{education.gpa}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
