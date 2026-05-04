import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight, HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentImage]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  const gallery = project?.gallery || [];

  const nextImage = useCallback(() => {
    if (gallery.length > 1) {
      setCurrentImage((prev) => (prev + 1) % gallery.length);
    }
  }, [gallery.length]);

  const prevImage = useCallback(() => {
    if (gallery.length > 1) {
      setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  }, [gallery.length]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-bg-secondary border border-border/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-bg/80 backdrop-blur-sm border border-border/50 text-warm-white hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Close modal"
            >
              <HiX className="text-xl" />
            </button>

            {/* Scrollable container */}
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Image gallery */}
              {gallery.length > 0 && (
                <div className="relative group">
                  <div className="aspect-video bg-card overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={gallery[currentImage]}
                        alt={`${project.title} - ภาพที่ ${currentImage + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                  </div>

                  {/* Navigation arrows (only if multiple images) */}
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-bg/70 backdrop-blur-sm border border-border/40 text-warm-white hover:text-primary hover:border-primary/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Previous image"
                      >
                        <HiChevronLeft className="text-xl" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-bg/70 backdrop-blur-sm border border-border/40 text-warm-white hover:text-primary hover:border-primary/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Next image"
                      >
                        <HiChevronRight className="text-xl" />
                      </button>
                    </>
                  )}

                  {/* Image counter */}
                  {gallery.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-bg/70 backdrop-blur-sm rounded-full border border-border/40">
                      <span className="text-warm-white text-xs font-inter">
                        {currentImage + 1} / {gallery.length}
                      </span>
                    </div>
                  )}

                  {/* Dot indicators */}
                  {gallery.length > 1 && (
                    <div className="absolute bottom-3 right-4 flex items-center gap-1.5">
                      {gallery.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImage(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentImage
                              ? "bg-primary w-5"
                              : "bg-warm-white/30 hover:bg-warm-white/60"
                          }`}
                          aria-label={`ดูภาพที่ ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Thumbnail strip (only if more than 1 image) */}
              {gallery.length > 1 && (
                <div className="flex gap-2 px-6 pt-4 overflow-x-auto">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        idx === currentImage
                          ? "border-primary shadow-lg shadow-primary/20"
                          : "border-border/30 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Project details */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-warm-white mb-1">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-primary font-medium">{project.subtitle}</p>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">
                    รายละเอียดโปรเจกต์
                  </h4>
                  <p className="text-warm-gray leading-relaxed text-base">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">
                    เทคโนโลยีที่ใช้
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 bg-primary/10 border border-primary/30 text-primary text-sm rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.demo ? "btn-outline" : "btn-primary"}
                    >
                      <FaGithub className="text-lg" />
                      ดูโค้ดบน GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <HiExternalLink className="text-lg" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
