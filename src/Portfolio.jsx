import React, { useState, useEffect } from 'react';

// Icons from lucide-react - we'll use inline SVG to make it a single file
const icons = {
  Mail: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Phone: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  MapPin: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M12 18.333a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path d="M18.88 12.91a8.95 8.95 0 0 1-1.74 3.09c-.58.74-1.21 1.4-1.85 1.97-.24.2-.49.4-.76.58-.27.18-.54.36-.83.52-.29.16-.58.3-.87.43-.29.13-.58.26-.87.38a1.2 1.2 0 0 1-1.22 0c-.29-.12-.58-.25-.87-.38-.29-.13-.58-.27-.87-.43-.29-.16-.56-.34-.83-.52-.27-.18-.52-.38-.76-.58-.64-.57-1.27-1.23-1.85-1.97A8.95 8.95 0 0 1 5.12 12.9c-.83-1.07-1.52-2.31-2.03-3.67-.5-.9-.86-1.89-1.07-2.92a2.3 2.3 0 0 1 1.63-2.6C5.64 3.2 8.65 3 12 3s6.36.2 9.15 1.72a2.3 2.3 0 0 1 1.63 2.6c-.21 1.03-.57 2.12-1.07 3.01-.51 1.36-1.2 2.6-2.03 3.67z"/></svg>
  ),
  Linkedin: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Github: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.25-.35 6.83-1.55 6.83-7.24 0-2.01-.7-3.65-1.92-4.9-.19-.51-.8-2.04.22-5.06 0 0 1.55-.49 5.05 1.94-.96.27-1.98.53-3.02.72-.85-.68-1.84-1.25-3-1.74C13.57 2.22 12 2 10.5 2a7.6 7.6 0 0 0-5.74 2.22C3.25 5.56 2.5 7.21 2.5 9.22c0 5.7 3.58 6.89 6.83 7.24-.96.22-1.8.8-2.28 1.94-.49 1.14-.38 2.38-.13 2.84V22"/><path d="M12 2v20"/></svg>
  ),
  Code: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  BookOpen: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  Briefcase: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  Star: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  )
};

const profileData = {
  name: "Darshan Kumar Thummar",
  profile: "Versatile and results-driven Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, ReactJS, NodeJS). With a First Class B.Sc. in Information Technology and hands-on experience delivering scalable web solutions across India and Russia, I excel at building responsive, secure, and user-focused applications. Known for delivering on-time, high-quality projects, mentoring junior developers, and improving website performance with measurable outcomes. Eager to contribute expertise to UK-based companies by combining strong technical knowledge with a passion for creating modern, impactful digital solutions.",
  contact: {
    email: "itdarshan1999@gmail.com",
    phone: "+44 7436 633305",
    location: "Birmingham, UK",
    linkedin: "https://www.linkedin.com/in/darshankumar-thummar", // Assuming a placeholder link
    github: "https://github.com/dashu1999", // Assuming a placeholder link
  },
  skills: [
    { category: "Frontend", items: ["ReactJS", "JavaScript (ES6+)", "HTML5", "CSS3", "jQuery", "Bootstrap", "TailwindCSS", "Responsive UI Design"] },
    { category: "Backend", items: ["NodeJS", "Express.js", "RESTful APIs", "Authentication & Security"] },
    { category: "Databases", items: ["MongoDB", "SQL", "Database Design & Optimization"] },
    { category: "Tools & Platforms", items: ["Git/GitHub", "Postman", "WordPress", "VS Code", "PowerBI", "AWS (basics)"] },
    { category: "Professional Skills", items: ["Agile & Scrum", "SEO Optimization", "Debugging", "Code Reviews", "Problem-Solving", "Client Communication"] },
  ],
  experience: [
    {
      title: "Senior Developer",
      company: "App Creation",
      location: "Surat, India",
      dates: "Oct 2022 – Jul 2023",
      description: [
        "Developed client-focused web applications using ReactJS, NodeJS, HTML, and CSS, delivering projects ahead of schedule.",
        "Enhanced website speed and responsiveness by 35%, resulting in higher customer satisfaction and improved search rankings.",
        "Mentored junior developers, improving team performance by 20%.",
        "Conducted code reviews and implemented debugging processes to maintain quality standards.",
        "Collaborated directly with clients to translate business needs into technical solutions.",
      ],
    },
    {
      title: "Web Developer",
      company: "Bashkir State University",
      location: "Ufa, Russia",
      dates: "Nov 2021 – May 2022",
      description: [
        "Built and maintained web portals with JavaScript, SQL, and MongoDB, improving efficiency in academic systems.",
        "Improved adoption by 30% through UI/UX redesigns and enhanced user experiences.",
        "Developed and integrated secure features to meet compliance and performance standards.",
        "Coordinated with designers and technical staff to ensure delivery on time and to specification.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Bashkir State University",
      location: "Ufa, Russia",
      dates: "2018 – 2022",
      details: ["GPA: 4.29 (First Class Honors)"],
    },
    {
      degree: "Certificate of Higher Education (HSC)",
      institution: "Shree Swaminarayan Gurukul",
      location: "Ahmedabad, India",
      dates: "2016 – 2017",
      details: ["Achieved 80%"],
    },
  ],
  projects: [
    {
      title: "E-commerce Platform (Lead Developer)",
      technologies: "ReactJS, NodeJS, HTML, CSS",
      description: "Delivered a fully functional e-commerce site with shopping cart, checkout, and payment integration. Boosted customer engagement by 40% and reduced checkout time by 25%.",
    },
    {
      title: "Medical Stock Management System (Lead Developer)",
      technologies: "NodeJS, MongoDB, Express.js",
      description: "Created a real-time inventory system with automated reporting and data analysis. Improved stock utilization efficiency by 30% while ensuring regulatory compliance.",
    },
    {
      title: "Dynamic Frontend with React",
      technologies: "ReactJS",
      description: "Built modular, reusable UI components with ReactJS, reducing development time by 20%.",
    },
    {
      title: "Full Stack MERN Application (Simplilearn Certification)",
      technologies: "MERN Stack",
      description: "Designed and deployed a MERN-based application featuring authentication, API integration, and secure data management.",
    },
  ],
  certifications: [
    {
      title: "Full Stack Developer - MERN Stack",
      date: "August 18, 2025",
      image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/158465546",
      verificationLink: "https://success.simplilearn.com/652fd5b7-453d-40ee-92b6-b565ff1be796"
    },
    {
      title: "Build a strong MERN Foundation",
      date: "15th June 2025",
      image: "https://certificates.simplicdn.net/share/8471447_84369021750001007352.png",
      verificationLink: "https://certificates.simplicdn.net/share/8471447_84369021750001007352.png" // Placeholder link
    },
    {
      title: "Design a Dynamic Frontend with React",
      date: "30th July 2025",
      image: "https://certificates.simplicdn.net/share/8707786_84369021753853321901.png",
      verificationLink: "https://certificates.simplicdn.net/share/8707786_84369021753853321901.png" // Placeholder link
    },
  ],
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Smooth scrolling for navigation
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => smoothScroll(id)}
      className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${activeSection === id ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 leading-relaxed">
      {/* Tailwind CSS CDN, placed inside the render for single-file mandate */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg py-4">
        <div className="container mx-auto flex justify-center space-x-2 sm:space-x-4">
          <NavLink id="about" label="About" />
          <NavLink id="skills" label="Skills" />
          <NavLink id="experience" label="Experience" />
          <NavLink id="projects" label="Projects" />
          <NavLink id="certifications" label="Certifications" />
          <NavLink id="education" label="Education" />
        </div>
      </nav>

      {/* Main Content Sections */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* About Section */}
        <section id="about" className="py-12 md:py-16">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 transition-transform transform hover:scale-105 duration-300">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-indigo-800 mb-2">
              {profileData.name}
            </h1>
            <p className="text-center text-xl sm:text-2xl text-gray-600 font-light mb-8">
              Full Stack MERN Developer
            </p>
            <div className="flex justify-center space-x-6 text-gray-500 mb-8">
              <a href={`mailto:${profileData.contact.email}`} className="flex items-center space-x-1 hover:text-indigo-600 transition-colors">
                <icons.Mail className="w-5 h-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a href={`tel:${profileData.contact.phone}`} className="flex items-center space-x-1 hover:text-indigo-600 transition-colors">
                <icons.Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Call</span>
              </a>
              <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-indigo-600 transition-colors">
                <icons.Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-indigo-600 transition-colors">
                <icons.Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
            <p className="text-lg md:text-xl text-center text-gray-700">
              {profileData.profile}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <Section title="Skills" icon={<icons.Code className="text-indigo-600" />} id="skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.skills.map((skill, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-700 flex items-center">
                      <icons.Star className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor"/>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section title="Experience" icon={<icons.Briefcase className="text-indigo-600" />} id="experience">
          {profileData.experience.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
              <p className="text-indigo-600 font-medium">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location} | {job.dates}</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Projects Section */}
        <Section title="Key Projects" icon={<icons.BookOpen className="text-indigo-600" />} id="projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {profileData.projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-indigo-600 font-medium mb-3">{project.technologies}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications Section */}
        <Section title="Certifications" icon={<icons.Star className="text-indigo-600" />} id="certifications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <a href={cert.verificationLink} target="_blank" rel="noopener noreferrer" className="block">
                  <img src={cert.image} alt={cert.title} className="w-full h-auto rounded-xl mb-4" />
                </a>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-500">Achieved: {cert.date}</p>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Education Section */}
        <Section title="Education" icon={<icons.BookOpen className="text-indigo-600" />} id="education">
          {profileData.education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-indigo-600 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.location} | {edu.dates}</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Darshan Kumar Thummar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Reusable Section Component
const Section = ({ id, title, icon, children }) => (
  <section id={id} className="py-12 md:py-16">
    <div className="flex items-center justify-center space-x-4 mb-8">
      {icon}
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800">{title}</h2>
    </div>
    {children}
  </section>
);

export default App;




// import React from 'react';

// // Resume data from the provided files
// const resumeData = {
//   profile: "Versatile and results-driven Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, ReactJS, NodeJS). With a First Class B.Sc. in Information Technology and hands-on experience delivering scalable web solutions across India and Russia, I excel at building responsive, secure, and user-focused applications. Known for delivering on-time, high-quality projects, mentoring junior developers, and improving website performance with measurable outcomes. Eager to contribute expertise to UK-based companies by combining strong technical knowledge with a passion for creating modern, impactful digital solutions.",
//   contact: {
//     email: "itdarshan1999@gmail.com",
//     phone: "+44 7436 633305",
//     location: "Birmingham, UK",
//     linkedin: "https://www.linkedin.com/in/darshan-thummar/",
//     github: "https://github.com/dashu1999",
//     resume: "https://github.com/dashu1999/portfolio-website/blob/main/src/resume.docx",
//   },
//   skills: {
//     frontend: ["ReactJS", "JavaScript (ES6+)", "HTML5", "CSS3", "jQuery", "Bootstrap", "TailwindCSS", "Responsive UI Design"],
//     backend: ["NodeJS", "Express.js", "RESTful APIs", "Authentication & Security"],
//     databases: ["MongoDB", "SQL", "Database Design & Optimization"],
//     tools: ["Git/GitHub", "Postman", "WordPress", "VS Code", "PowerBI", "AWS (basics)"],
//     professional: ["Agile & Scrum", "SEO Optimization", "Debugging", "Code Reviews", "Problem-Solving", "Client Communication"]
//   },
//   experience: [
//     {
//       title: "Senior Developer",
//       company: "App Creation",
//       location: "Surat, India",
//       dates: "Oct 2022 – Jul 2023",
//       description: "- Developed client-focused web applications using ReactJS, NodeJS, HTML, and CSS, delivering projects ahead of schedule. - Enhanced website speed and responsiveness by 35%."
//     }
//   ],
//   projects: [
//     {
//       name: "E-commerce Platform",
//       technologies: "ReactJS, NodeJS, HTML, CSS",
//       description: "Delivered a fully functional e-commerce site with shopping cart, checkout, and payment integration. Boosted customer engagement by 40% and reduced checkout time by 25%."
//     },
//     {
//       name: "Medical Stock Management System",
//       technologies: "NodeJS, MongoDB, Express.js",
//       description: "Created a real-time inventory system with automated reporting and data analysis. Improved stock utilization efficiency by 30% while ensuring regulatory compliance."
//     },
//     {
//       name: "Full Stack MERN Application",
//       technologies: "MERN Stack",
//       description: "Designed and deployed a MERN-based application featuring authentication, API integration, and secure data management."
//     }
//   ],
//   education: [
//     {
//       degree: "Bachelor of Science in Information Technology",
//       school: "Bashkir State University – Ufa, Russia",
//       dates: "2018 – 2022",
//       details: "GPA: 4.29 (First Class Honors). Key Modules: Web Development, Software Engineering, Database Systems, Algorithms."
//     },
//     {
//       degree: "Certificate of Higher Education (HSC)",
//       school: "Shree Swaminarayan Gurukul – Ahmedabad, India",
//       dates: "2016 – 2017",
//       details: "Achieved 80%."
//     }
//   ],
//   certifications: [
//     {
//       name: "Full Stack Developer - MERN Stack",
//       date: "18th August 2025",
//       image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/158465546",
//       link: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/158465546"
//     },
//     {
//       name: "Build a Strong MERN Foundation",
//       date: "15th June 2025",
//       image: "https://certificates.simplicdn.net/share/8471447_84369021750001007352.png",
//       link: "https://certificates.simplicdn.net/share/8471447_84369021750001007352.png"
//     },
//     {
//       name: "Design a Dynamic Frontend with React",
//       date: "30th July 2025",
//       image: "https://certificates.simplicdn.net/share/8707786_84369021753853321901.png",
//       link: "https://certificates.simplicdn.net/share/8707786_84369021753853321901.png"
//     },
//     // {
//     //   name: "Agile & Scrum Fundamentals",
//     //   date: "Date of completion",
//     //   image: "https://placehold.co/800x600/1e293b/fff?text=Agile+%26+Scrum+Certificate",
//     //   link: "YOUR_AGILE_CERT_URL"
//     // },
//   ]
// };

// function App() {
//   return (
//     <div className="bg-white min-h-screen text-gray-900 p-8 md:p-16">
//       <header className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-gray-200 pb-8">
//         <div className="text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600">Darshan Kumar Thummar</h1>
//           <p className="text-xl md:text-2xl mt-2 font-light">Full Stack MERN Developer</p>
//         </div>
//         <div className="mt-6 md:mt-0 text-center md:text-right">
//           <p className="text-sm md:text-base font-medium">{resumeData.contact.email}</p>
//           <p className="text-sm md:text-base font-medium">{resumeData.contact.phone}</p>
//           <p className="text-sm md:text-base font-medium">{resumeData.contact.location}</p>
//           <div className="flex justify-center md:justify-end mt-2 space-x-4">
//             <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors duration-200">LinkedIn</a>
//             <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors duration-200">GitHub</a>
//             <a href="https://github.com/dashu1999/portfolio-website/raw/refs/heads/main/src/resume.docx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors duration-200">My Resume</a>
//             {/* <a href="https://github.com/dashu1999/portfolio-website/blob/main/src/resume.docx" download className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">Download Resume</a> */}
//           </div>
//         </div>
//       </header>

//       {/* Profile Section */}
//       <section className="mb-12">
//         <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Professional Profile</h2>
//         <p className="text-lg leading-relaxed text-gray-600">{resumeData.profile}</p>
//       </section>

//       {/* Skills Section */}
//       <section className="mb-12">
//         <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Core Skills & Technical Expertise</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Frontend Development</h3>
//             <ul className="list-disc list-inside space-y-1 text-gray-600">
//               {resumeData.skills.frontend.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Backend Development</h3>
//             <ul className="list-disc list-inside space-y-1 text-gray-600">
//               {resumeData.skills.backend.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Databases & Tools</h3>
//             <ul className="list-disc list-inside space-y-1 text-gray-600">
//               {resumeData.skills.databases.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//               {resumeData.skills.tools.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section className="mb-12">
//         <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Professional Experience</h2>
//         {resumeData.experience.map((job, index) => (
//           <div key={index} className="bg-gray-100 rounded-lg p-6 mb-4 shadow-lg">
//             <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
//             <p className="text-lg text-gray-500">{job.company} | {job.location} | {job.dates}</p>
//             <p className="mt-2 text-gray-600">{job.description}</p>
//           </div>
//         ))}
//       </section>

//       {/* Projects Section */}
//       <section className="mb-12">
//         <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Key Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {resumeData.projects.map((project, index) => (
//             <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
//               <p className="text-lg text-gray-500 mt-1">{project.technologies}</p>
//               <p className="mt-4 text-gray-600">{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
      
//       {/* Certifications Section */}
//       <section className="mb-12">
//         <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Certifications</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {resumeData.certifications.map((cert, index) => (
//             <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
//               <img src={cert.image} alt={cert.name} className="w-full h-auto rounded-md object-cover mb-4" />
//               <h3 className="text-lg font-semibold text-gray-800">{cert.name}</h3>
//               <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Education Section */}
//       <section className="mb-12">
//         <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Education</h2>
//         {resumeData.education.map((edu, index) => (
//           <div key={index} className="bg-gray-100 rounded-lg p-6 mb-4 shadow-lg">
//             <h3 className="text-2xl font-semibold text-gray-800">{edu.degree}</h3>
//             <p className="text-lg text-gray-500">{edu.school} | {edu.dates}</p>
//             <p className="mt-2 text-gray-600">{edu.details}</p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default App;
