import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data/portfolio-data";
import { FaGithub } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import ProjectModal from "./ProjectModal";

const gradients = [
  "from-primary/20 via-accent/10 to-primary/5",
  "from-primary/15 via-primary/10 to-accent/5",
  "from-accent/15 via-primary/10 to-primary/5",
];
const icons = ["🎵", "🏠", "🗑️"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Delay clearing project so exit animation can play
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="projects" className="gradient-section">
        <div className="section-container" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title"><span className="text-primary">—</span> ผลงาน</h2>
            <p className="section-subtitle">โปรเจกต์ที่ผมได้พัฒนาและภูมิใจ</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                whileHover={{ y: -6 }}
                onClick={() => openModal(p)}
              >
                {/* Image area with hover overlay */}
                <div className="relative h-48 overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center group-hover:scale-110 transition-transform duration-700`}>
                      <span className="text-6xl opacity-60">{icons[i]}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />

                  {/* Hover overlay with "ดูรายละเอียด" */}
                  <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 px-5 py-2.5 bg-primary/90 text-bg font-semibold rounded-xl text-sm shadow-lg shadow-primary/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <HiEye className="text-lg" />
                      ดูรายละเอียด
                    </span>
                  </div>

                  {p.featured && <span className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-bg text-xs font-bold rounded-full z-10">Featured</span>}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-warm-white mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                  {p.subtitle && <p className="text-primary text-sm font-medium mb-3">{p.subtitle}</p>}
                  <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => <span key={t} className="px-2.5 py-1 bg-bg/60 text-muted text-xs rounded-md border border-border/40">{t}</span>)}
                  </div>
                  <div className="flex items-center gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-bg/60 border border-border/50 text-warm-gray text-sm rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </>
  );
}
