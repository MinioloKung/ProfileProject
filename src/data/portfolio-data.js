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
    subtitle: "Full Stack Final Project",
    description:
      "แอปพลิเคชันเว็บแบบครบวงจรสำหรับศิลปินอิสระในการจัดการการจองตั๋ว พัฒนาทั้ง Frontend และ Backend ครบวงจร",
    longDescription:
      "ระบบจองตั๋วคอนเสิร์ตออนไลน์แบบครบวงจร ที่พัฒนาขึ้นเพื่อให้ศิลปินอิสระสามารถจัดการการจองตั๋วได้ด้วยตนเอง ระบบรองรับการสร้างอีเวนต์ การเลือกที่นั่ง การชำระเงิน และการจัดการคำสั่งซื้อ พัฒนาด้วย React.js ฝั่ง Frontend, Node.js + Express.js ฝั่ง Backend และ MySQL เป็นฐานข้อมูล",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/MinioloKung/ProjectConcert",
    image: "/projects/concert1.png",
    gallery: ["/projects/concert1.png", "/projects/concert2.png", "/projects/concert3.png", "/projects/concert4.png", "/projects/concert5.png"],
    featured: true,
  },
  {
    title: '"Home Service" Web Campaign',
    subtitle: "Dohome Internship",
    description:
      "พัฒนาหน้าเว็บแบบตอบสนองและบำรุงรักษาสถาปัตยกรรม CSS โดยใช้ตัวแปร CSS หาข้อมูลและเรียนรู้การทำงาน SEO ใช้ Generative AI (Copilot) ช่วยสร้างภาพสินค้ากว่า 2,000 ภาพ",
    longDescription:
      "โปรเจกต์ระหว่างฝึกงานที่ Dohome ในฝ่ายการตลาด Online Marketing ได้พัฒนาหน้าเว็บแคมเปญ Home Service แบบ Responsive Design จัดการโครงสร้าง CSS ด้วย CSS Variables เพื่อให้ดูแลง่าย ทำ Software Testing (UAT) และเขียน Defect logs เพื่อทดสอบระบบ CMS ของ Dohome นอกจากนี้ยังใช้ Generative AI (Copilot) ในการสร้างภาพสินค้ามากกว่า 2,000 ภาพ และศึกษาเรื่อง SEO ด้วย Ubersuggest",
    tech: ["HTML", "CSS", "JavaScript", "Generative AI", "Ubersuggest"],
    github: null,
    image: "/projects/HomeService.jfif",
    gallery: ["/projects/HomeService.jfif", "/projects/cssvar.jfif", "/projects/figma.jfif", "/projects/aigen1.jfif", "/projects/aigen2.jfif"],
    featured: true,
  },
  {
    title: "Smart Trash Bin",
    subtitle: "IoT Project",
    description:
      "ถังขยะอัตโนมัติที่ควบคุมผ่านบลูทูธโดยใช้บอร์ด Arduino และเซ็นเซอร์ตรวจจับความเคลื่อนไหว",
    longDescription:
      "โปรเจกต์ IoT ที่พัฒนาถังขยะอัตโนมัติโดยใช้บอร์ด Arduino เป็นตัวควบคุมหลัก มีเซ็นเซอร์ตรวจจับความเคลื่อนไหวเพื่อเปิดฝาอัตโนมัติ สามารถควบคุมผ่านบลูทูธได้ เหมาะสำหรับการใช้งานในบ้านและสำนักงาน ช่วยเพิ่มความสะดวกและลดการสัมผัส",
    tech: ["Arduino", "C/C++", "IoT"],
    github: null,
    image: "/projects/smarttrash.png",
    gallery: ["/projects/smarttrash.png", "/projects/smarttrash_circuit.png"],
    featured: false,
  },
  {
    title: "พุทธปฏิทิน — วันสำคัญทางพระพุทธศาสนา",
    subtitle: "Static Website",
    description:
      "เว็บเพจให้ความรู้เกี่ยวกับ วันสำคัญทางพระพุทธศาสนา ออกแบบให้ทันสมัย เรียบง่าย อ่านง่าย รองรับมือถือ ใช้ HTML/CSS/JavaScript + Bootstrap 5 เปิดได้ทันทีในเบราว์เซอร์ (ไม่ต้องใช้เซิร์ฟเวอร์/ฐานข้อมูล)",
    longDescription:
      "เว็บเพจให้ความรู้เกี่ยวกับ วันสำคัญทางพระพุทธศาสนา ออกแบบให้ทันสมัย เรียบง่าย อ่านง่าย รองรับมือถือ ใช้ HTML/CSS/JavaScript + Bootstrap 5 เปิดได้ทันทีในเบราว์เซอร์ (ไม่ต้องใช้เซิร์ฟเวอร์/ฐานข้อมูล)",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
    github: "https://github.com/MinioloKung/buddhist-days-modern",
    demo: "https://MinioloKung.github.io/buddhist-days-modern",
    image: "/projects/bud1.png",
    gallery: ["/projects/bud1.png", "/projects/bud2.png"],
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
      "ทำ Software Testing (UAT/Defect logs) ระบบ CMS ของบริษัท",
      "ใช้ Generative AI (Copilot) ช่วยสร้างภาพสินค้ากว่า 2,000 ภาพ",
    ],
  },
  {
    company: "IT.CITY (MSI)",
    position: "IT Consultant (Part-time)",
    department: "",
    period: "2023 - 2024",
    responsibilities: [
      "ให้คำปรึกษาและวิเคราะห์ความต้องการของลูกค้าในการเลือกสเปคคอมพิวเตอร์",
      "รับผิดชอบยอดขายและบริการหลังการขาย",
    ],
  },
];

export const education = [
  {
    school: "มหาวิทยาลัยราชภัฏพระนคร",
    schoolEn: "Phranakhon Rajabhat University",
    degree: "วิทยาศาสตรบัณฑิต (วท.บ.)",
    major: "วิทยาการคอมพิวเตอร์",
    majorEn: "Computer Science",
    period: "2022 - 2026",
    gpa: "3.08",
    logo: "/projects/LogoPnru.png",
    icon: "🎓",
  },
  {
    school: "โรงเรียนปทุมวิไล",
    schoolEn: "Pathumwilai School",
    degree: "มัธยมศึกษาตอนปลาย",
    major: "ไทย-อังกฤษ-สังคม",
    majorEn: "Thai-English-Social Studies",
    period: "2019 - 2021",
    gpa: "3.21",
    logo: "/projects/LogoPw.png",
    icon: "🏫",
  },
];

export const navLinks = [
  { label: "หน้าแรก", href: "#hero" },
  { label: "เกี่ยวกับ", href: "#about" },
  { label: "ทักษะ", href: "#skills" },
  { label: "ผลงาน", href: "#projects" },
  { label: "ประสบการณ์", href: "#experience" },
  { label: "การศึกษา", href: "#education" },
  { label: "ติดต่อ", href: "#contact" },
];
