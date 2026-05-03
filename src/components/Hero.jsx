import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "../data/portfolio-data";
import { HiArrowDown, HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-muted text-sm md:text-base tracking-widest uppercase mb-4 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              สวัสดีครับ, ผมชื่อ
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-warm-white leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-semibold text-primary mb-8 h-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <TypeAnimation
                sequence={personalInfo.typingTexts.flatMap((text) => [
                  text,
                  2000,
                ])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-inter"
              />
            </motion.div>

            <motion.p
              className="text-muted text-base md:text-lg max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              สร้างเว็บที่สวยงาม ตอบสนองทุกอุปกรณ์ พร้อมโค้ดที่มีประสิทธิภาพ
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                <HiArrowDown className="text-lg" />
                ดูผลงาน
              </a>
              <a
                href={personalInfo.resumePath}
                download
                className="btn-outline"
              >
                <HiDownload className="text-lg" />
                ดาวน์โหลด Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-full blur-xl animate-glow" />
              {/* Image container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/10">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-card border border-border/50 px-4 py-2 rounded-xl shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-semibold text-primary font-inter">
                  ⚡ Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted/40 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
