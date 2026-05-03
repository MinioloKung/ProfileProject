import { personalInfo } from "../data/portfolio-data";
import { FaGithub } from "react-icons/fa";
import { HiMail, HiHeart } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-warm-white font-bold text-lg font-inter mb-1">
              {personalInfo.nameEn.split(" ")[0]}
              <span className="text-primary">.</span>
            </p>
            <p className="text-muted text-sm">{personalInfo.position}</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border/50 text-muted hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border/50 text-muted hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Email"
            >
              <HiMail className="text-lg" />
            </a>
          </div>

          {/* Right */}
          <p className="text-muted text-sm flex items-center gap-1">
            สร้างด้วย <HiHeart className="text-primary" /> โดย {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
