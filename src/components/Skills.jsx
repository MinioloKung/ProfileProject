import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, softSkills } from "../data/portfolio-data";
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTypescript, 
  SiPhp, 
  SiReact, 
  SiAstro, 
  SiNodedotjs, 
  SiExpress, 
  SiBootstrap, 
  SiTailwindcss, 
  SiClaude, 
  SiMysql, 
  SiPostgresql, 
  SiPython, 
  SiCplusplus, 
  SiGooglechrome, 
  SiFigma, 
  SiCanva, 
  SiArduino, 
  SiWordpress, 
  SiGit, 
  SiDiagramsdotnet 
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { TbVariable, TbBrain, TbMessageCode, TbBrandVscode, TbSeo } from "react-icons/tb";

const skillIcons = {
  // Web Development
  "HTML": { icon: SiHtml5, color: "#e34c26" },
  "CSS": { icon: SiCss, color: "#1572b6" },
  "CSS Variables": { icon: TbVariable, color: "#c9a87c" },
  "Responsive Web Design": { icon: FaLaptopCode, color: "#4caf50" },
  "JavaScript": { icon: SiJavascript, color: "#f7df1e" },
  "TypeScript": { icon: SiTypescript, color: "#3178c6" },
  "PHP": { icon: SiPhp, color: "#777bb4" },

  // Frameworks & Libraries
  "React.js": { icon: SiReact, color: "#61dafb" },
  "Astro": { icon: SiAstro, color: "#ff5d01" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#e8c99b" },
  "Bootstrap": { icon: SiBootstrap, color: "#7952b3" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38bdf8" },

  // AI & Database
  "Generative AI": { icon: TbBrain, color: "#ff6b6b" },
  "Prompt Engineering": { icon: TbMessageCode, color: "#c9a87c" },
  "Claude Code": { icon: SiClaude, color: "#d97706" },
  "MySQL": { icon: SiMysql, color: "#4479a1" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169e1" },
  "Python": { icon: SiPython, color: "#3776ab" },
  "C#/C++": { icon: SiCplusplus, color: "#00599c" },

  // Tools
  "VS Code": { icon: TbBrandVscode, color: "#007acc" },
  "Chrome DevTools": { icon: SiGooglechrome, color: "#4285f4" },
  "Figma": { icon: SiFigma, color: "#f24e1e" },
  "Canva": { icon: SiCanva, color: "#00c4cc" },
  "Ubersuggest": { icon: TbSeo, color: "#ff6b2b" },
  "Arduino IDE": { icon: SiArduino, color: "#00979d" },
  "WordPress": { icon: SiWordpress, color: "#21759b" },
  "Git / GitHub": { icon: SiGit, color: "#f05032" },
  "Draw.io": { icon: SiDiagramsdotnet, color: "#f08024" }
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            <span className="text-primary">—</span> ทักษะ
          </h2>
          <p className="section-subtitle">เทคโนโลยีและเครื่องมือที่ผมใช้งาน</p>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-bold text-warm-white font-inter">
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => {
                  const skillInfo = skillIcons[skill];
                  const IconComponent = skillInfo?.icon;
                  return (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 bg-bg/80 border border-border/60 text-warm-gray text-sm rounded-lg
                                 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default
                                 flex items-center gap-2 group/skill"
                    >
                      {IconComponent && (
                        <IconComponent 
                          style={{ color: skillInfo.color }}
                          className="text-base opacity-75 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300"
                        />
                      )}
                      <span>{skill}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-warm-white mb-4 text-center">
            💡 Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-medium rounded-full
                           hover:bg-primary/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

