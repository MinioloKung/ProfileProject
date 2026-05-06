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
  resumePath: "/Resume_Surachet_Developer(new).pdf",
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
    title: "E-Commerce Website Mockup (Cosmetics)",
    subtitle: "WordPress",
    description:
      "พัฒนาระบบร้านค้าออนไลน์แบบครบวงจรด้วย CMS ทดลองออกแบบ UI/UX สำหรับแบรนด์เครื่องสำอาง",
    longDescription:
      "พัฒนาระบบร้านค้าออนไลน์แบบครบวงจรด้วย CMS ทดลองออกแบบ UI/UX สำหรับแบรนด์เครื่องสำอาง และจัดการระบบหลังบ้าน (Backend) ครอบคลุมตั้งแต่หน้ารายการสินค้า (Shop), หน้าแสดงรายละเอียด (Product Details), ระบบตะกร้าสินค้า (Cart) ไปจนถึงหน้าชำระเงิน (Checkout)",
    tech: ["WordPress", "WooCommerce", "CMS"],
    github: null,
    image: "/projects/press01.png",
    gallery: ["/projects/press01.png", "/projects/press02.png", "/projects/press03.png", "/projects/press04.png", "/projects/press05.png"],
    featured: true,
  },
  {
    title: "Agency.AI - Modern Digital Agency Landing Page",
    subtitle: "React Project",
    description:
      "พัฒนาหน้าเว็บไซต์ Landing Page สำหรับดิจิทัลเอเจนซี่ (Single Page Application) เพื่ออัปสกิลการเขียนโค้ดและอัปเกรดเทคโนโลยีการทำเว็บล่าสุด",
    longDescription:
      "พัฒนาหน้าเว็บไซต์ Landing Page สำหรับดิจิทัลเอเจนซี่ (Single Page Application) เพื่ออัปสกิลการเขียนโค้ดและอัปเกรดเทคโนโลยีการทำเว็บล่าสุด โปรเจกต์นี้เน้นการออกแบบส่วนติดต่อผู้ใช้งาน (UI) ที่สะอาดตา ทันสมัย และมอบประสบการณ์การใช้งาน (UX) ที่ลื่นไหลผ่านแอนิเมชัน ครอบคลุมตั้งแต่ Hero Section, การนำเสนอบริการ (Services), ไปจนถึงระบบติดต่อสอบถามที่ใช้งานได้จริง",
    tech: ["React (Vite)", "Tailwind CSS v4", "Framer Motion", "Vercel"],
    github: "https://github.com/MinioloKung/Agencyai.git",
    demo: "https://agencyai-mu.vercel.app/",
    image: "/projects/agency1.png",
    gallery: ["/projects/agency1.png", "/projects/agency2.png", "/projects/agency3.png", "/projects/agency4.png", "/projects/agency5.png"],
    featured: false,
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
    title: "UI/UX Design & Interactive Prototyping",
    subtitle: "Figma Design",
    description:
      "รวบรวมผลงานการออกแบบส่วนติดต่อผู้ใช้งาน (UI) และประสบการณ์ผู้ใช้งาน (UX) สำหรับแพลตฟอร์มที่หลากหลาย ครอบคลุมตั้งแต่เว็บไซต์ E-Commerce, ระบบฟอร์มจัดการข้อมูล (Web Application)",
    longDescription:
      "รวบรวมผลงานการออกแบบส่วนติดต่อผู้ใช้งาน (UI) และประสบการณ์ผู้ใช้งาน (UX) สำหรับแพลตฟอร์มที่หลากหลาย ครอบคลุมตั้งแต่เว็บไซต์ E-Commerce, ระบบฟอร์มจัดการข้อมูล (Web Application) ไปจนถึงแอปพลิเคชันบนสมาร์ทโฟน โดยเน้นการจัดวาง Layout ที่สะอาดตา ทันสมัย (User-Friendly) และมีการทำ Interactive Prototype เพื่อจำลอง Flow การทำงานจริงก่อนเข้าสู่กระบวนการเขียนโค้ด",
    tech: ["Figma"],
    github: null,
    image: "/projects/figma จองที่พัก.png",
    gallery: ["/projects/figma จองที่พัก.png", "/projects/figmasiaminter.png", "/projects/figmaนายช่าง.png"],
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
    gpa: "3.11",
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
