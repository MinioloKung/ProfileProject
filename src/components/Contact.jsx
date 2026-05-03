import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "../data/portfolio-data";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const contactMethods = [
  {
    icon: <HiMail className="text-2xl" />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <FaGithub className="text-2xl" />,
    label: "GitHub",
    value: "MinioloKung",
    href: personalInfo.github,
  },
  {
    icon: <HiPhone className="text-2xl" />,
    label: "โทรศัพท์",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/-/g, "")}`,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="section-title justify-center flex items-center gap-2">
            <span className="text-primary">—</span> ติดต่อผม <span className="text-primary">—</span>
          </h2>
          <p className="section-subtitle">สนใจร่วมงานกัน? ติดต่อผมได้เลยครับ</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.href}
                target={method.label === "GitHub" ? "_blank" : undefined}
                rel={method.label === "GitHub" ? "noopener noreferrer" : undefined}
                className="glass-card p-6 text-center hover:border-primary/40 transition-all duration-300 group block"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <p className="text-warm-white font-semibold text-sm mb-1">{method.label}</p>
                <p className="text-muted text-sm break-all">{method.value}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-muted text-lg mb-6">
              พร้อมที่จะเริ่มโปรเจกต์ใหม่ด้วยกันไหม?
            </p>
            <a
              href={`mailto:${personalInfo.email}?subject=สนใจร่วมงานกัน&body=สวัสดีครับ คุณสุรเชษฐ์`}
              className="btn-primary text-lg px-10 py-4"
            >
              <HiMail className="text-xl" />
              ส่งอีเมลหาผม
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
