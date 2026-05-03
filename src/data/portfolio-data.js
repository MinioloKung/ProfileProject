// ===== Portfolio Data =====
// รวมข้อมูลทั้งหมดไว้ที่เดียวเพื่อแก้ไขง่าย

export const personalInfo = {
  name: "สุรเชษฐ์ ศรีมาราช",
  nameEn: "Surachet Srimarach",
  position: "Frontend Developer",
  typingTexts: [
    "Frontend Developer",
    "React Developer",
    "Web Creator",
    "UI Enthusiast",
  ],
  bio: "นักพัฒนาซอฟต์แวร์รุ่นเยาว์ที่มีความมุ่งมั่นในการสร้างเว็บแอปพลิเคชันที่ตอบสนองต่อทุกอุปกรณ์ มีประสบการณ์ใน React.js, Node.js และการบูรณาการ AI แบบ Generative เพื่อเพิ่มประสิทธิภาพเวิร์กโฟลว์ ตั้งแต่การพัฒนาระบบ Full-stack ไปจนถึงการดูแลเว็บไซต์ขององค์กร ฉันมุ่งเน้นที่การมอบประสบการณ์การใช้งานที่ราบรื่นและโค้ดที่มีประสิทธิภาพ",
  email: "jeffyfilm2kp@gmail.com",
  github: "https://github.com/MinioloKung",
  phone: "095-625-5093",
  resumePath: "/Resume_Surachet_Developer.pdf",
  profileImage: "/profile.png",
};

export const skills = [
  {
    category: "Web Development",
    icon: "🌐",
    items: ["HTML", "CSS", "CSS Variables", "Responsive Web Design", "JavaScript"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚛️",
    items: ["React.js", "Astro", "Node.js", "Express.js", "Bootstrap"],
  },
  {
    category: "AI & Database",
    icon: "🤖",
    items: ["Generative AI", "Prompt Engineering", "Claude Code", "MySQL", "Python", "C/C++"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: ["VS Code", "Chrome DevTools", "Figma", "Canva", "Ubersuggest"],
  },
];

export const softSkills = ["Teamwork", "Problem Solving", "Fast Learner", "Easy to Adapt"];

export const projects = [
  {
    title: "Online Concert Ticket Booking System",
    description:
      "แอปพลิเคชันเว็บแบบครบวงจรสำหรับศิลปินอิสระในการจัดการการจองตั๋ว พัฒนาทั้ง Frontend และ Backend ครบวงจร",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/MinioloKung/ProjectConcert",
    image: null, // จะใส่ทีหลัง
    featured: true,
  },
  {
    title: '"Home Service" Web Campaign',
    subtitle: "Dohome Internship",
    description:
      "พัฒนาหน้าเว็บแบบตอบสนองและบำรุงรักษาสถาปัตยกรรม CSS โดยใช้ตัวแปร CSS หาข้อมูลและเรียนรู้การทำงาน SEO ใช้ Generative AI (Copilot) ช่วยสร้างภาพสินค้ากว่า 2,000 ภาพ",
    tech: ["HTML", "CSS", "JavaScript", "Generative AI", "Ubersuggest"],
    github: null,
    image: null,
    featured: true,
  },
  {
    title: "Smart Trash Bin",
    subtitle: "IoT Project",
    description:
      "ถังขยะอัตโนมัติที่ควบคุมผ่านบลูทูธโดยใช้บอร์ด Arduino และเซ็นเซอร์ตรวจจับความเคลื่อนไหว",
    tech: ["Arduino", "C/C++", "IoT"],
    github: null,
    image: null,
    featured: false,
  },
];

export const experiences = [
  {
    company: "Dohome",
    position: "Online Marketing Front-end Developer (Intern)",
    department: "ฝ่ายการตลาด",
    period: "Nov 2025 - Feb 2026",
    responsibilities: [
      "พัฒนา Responsive Web Pages สำหรับแคมเปญ Home Service",
      "จัดการโครงสร้าง CSS (DH.css) ด้วย CSS Variables",
      "ทำ Software Testing (UAT/Defect logs)",
      "ใช้ Generative AI (Copilot) ช่วยสร้างภาพสินค้ากว่า 2,000 ภาพ",
    ],
  },
  {
    company: "J.I.B. (MSI)",
    position: "IT Consultant (Part-time)",
    department: "",
    period: "2023 - 2024",
    responsibilities: [
      "ให้คำปรึกษาและวิเคราะห์ความต้องการของลูกค้าในการเลือกสเปคคอมพิวเตอร์",
      "รับผิดชอบยอดขายและบริการหลังการขาย",
    ],
  },
];

export const education = {
  university: "มหาวิทยาลัยราชภัฏพระนคร",
  universityEn: "Phranakhon Rajabhat University",
  degree: "วิทยาศาสตรบัณฑิต (วท.บ.)",
  major: "วิทยาการคอมพิวเตอร์",
  majorEn: "Computer Science",
  period: "2022 - 2026",
  gpa: "3.08",
};

export const navLinks = [
  { label: "หน้าแรก", href: "#hero" },
  { label: "เกี่ยวกับ", href: "#about" },
  { label: "ทักษะ", href: "#skills" },
  { label: "ผลงาน", href: "#projects" },
  { label: "ประสบการณ์", href: "#experience" },
  { label: "การศึกษา", href: "#education" },
  { label: "ติดต่อ", href: "#contact" },
];
