import React from 'react';

// Resume data from the provided files
const resumeData = {
  profile: "Versatile and results-driven Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, ReactJS, NodeJS). With a First Class B.Sc. in Information Technology and hands-on experience delivering scalable web solutions across India and Russia, I excel at building responsive, secure, and user-focused applications. Known for delivering on-time, high-quality projects, mentoring junior developers, and improving website performance with measurable outcomes. Eager to contribute expertise to UK-based companies by combining strong technical knowledge with a passion for creating modern, impactful digital solutions.",
  contact: {
    email: "itdarshan1999@gmail.com",
    phone: "+44 7436 633305",
    location: "Birmingham, UK",
    linkedin: "https://www.linkedin.com/in/darshan-thummar/",
    github: "https://github.com/dashu1999",
    resume: "resume.docx",
  },
  skills: {
    frontend: ["ReactJS", "JavaScript (ES6+)", "HTML5", "CSS3", "jQuery", "Bootstrap", "TailwindCSS", "Responsive UI Design"],
    backend: ["NodeJS", "Express.js", "RESTful APIs", "Authentication & Security"],
    databases: ["MongoDB", "SQL", "Database Design & Optimization"],
    tools: ["Git/GitHub", "Postman", "WordPress", "VS Code", "PowerBI", "AWS (basics)"],
    professional: ["Agile & Scrum", "SEO Optimization", "Debugging", "Code Reviews", "Problem-Solving", "Client Communication"]
  },
  experience: [
    {
      title: "Senior Developer",
      company: "App Creation",
      location: "Surat, India",
      dates: "Oct 2022 – Jul 2023",
      description: "- Developed client-focused web applications using ReactJS, NodeJS, HTML, and CSS, delivering projects ahead of schedule. - Enhanced website speed and responsiveness by 35%."
    }
  ],
  projects: [
    {
      name: "E-commerce Platform",
      technologies: "ReactJS, NodeJS, HTML, CSS",
      description: "Delivered a fully functional e-commerce site with shopping cart, checkout, and payment integration. Boosted customer engagement by 40% and reduced checkout time by 25%."
    },
    {
      name: "Medical Stock Management System",
      technologies: "NodeJS, MongoDB, Express.js",
      description: "Created a real-time inventory system with automated reporting and data analysis. Improved stock utilization efficiency by 30% while ensuring regulatory compliance."
    },
    {
      name: "Full Stack MERN Application",
      technologies: "MERN Stack",
      description: "Designed and deployed a MERN-based application featuring authentication, API integration, and secure data management."
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Bashkir State University – Ufa, Russia",
      dates: "2018 – 2022",
      details: "GPA: 4.29 (First Class Honors). Key Modules: Web Development, Software Engineering, Database Systems, Algorithms."
    },
    {
      degree: "Certificate of Higher Education (HSC)",
      school: "Shree Swaminarayan Gurukul – Ahmedabad, India",
      dates: "2016 – 2017",
      details: "Achieved 80%."
    }
  ],
  certifications: [
    {
      name: "Full Stack Developer - MERN Stack",
      date: "18th August 2025",
      image: "https://github.com/dashu1999/portfolio-website/blob/main/src/img/01.jpg?raw=true",
      link: "https://success.simplilearn.com/652fd5b7-453d-40ee-92b6-b565ff1be796#acc.cAmGbX65"
    },
    {
      name: "Build a Strong MERN Foundation",
      date: "15th June 2025",
      image: "https://placehold.co/800x600/1e293b/fff?text=MERN+Foundation+Certificate",
      link: "YOUR_MERN_FOUNDATION_CERT_URL"
    },
    {
      name: "Design a Dynamic Frontend with React",
      date: "30th July 2025",
      image: "https://placehold.co/800x600/1e293b/fff?text=React+Frontend+Certificate",
      link: "YOUR_REACT_FRONTEND_CERT_URL"
    },
    {
      name: "Agile & Scrum Fundamentals",
      date: "Date of completion",
      image: "https://placehold.co/800x600/1e293b/fff?text=Agile+%26+Scrum+Certificate",
      link: "YOUR_AGILE_CERT_URL"
    },
  ]
};

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900 p-8 md:p-16">
      <header className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-gray-200 pb-8">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600">Darshan Kumar Thummar</h1>
          <p className="text-xl md:text-2xl mt-2 font-light">Full Stack MERN Developer</p>
        </div>
        <div className="mt-6 md:mt-0 text-center md:text-right">
          <p className="text-sm md:text-base font-medium">{resumeData.contact.email}</p>
          <p className="text-sm md:text-base font-medium">{resumeData.contact.phone}</p>
          <p className="text-sm md:text-base font-medium">{resumeData.contact.location}</p>
          <div className="flex justify-center md:justify-end mt-2 space-x-4">
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors duration-200">LinkedIn</a>
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors duration-200">GitHub</a>
            <a href={resumeData.contact.resume} download target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors duration-200">GitHub</a>
            {/* <a href={resumeData.contact.resume} download className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">Download Resume</a> */}
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Professional Profile</h2>
        <p className="text-lg leading-relaxed text-gray-600">{resumeData.profile}</p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Core Skills & Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Frontend Development</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {resumeData.skills.frontend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Backend Development</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {resumeData.skills.backend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Databases & Tools</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {resumeData.skills.databases.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
              {resumeData.skills.tools.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Professional Experience</h2>
        {resumeData.experience.map((job, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 mb-4 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-lg text-gray-500">{job.company} | {job.location} | {job.dates}</p>
            <p className="mt-2 text-gray-600">{job.description}</p>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Key Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-lg text-gray-500 mt-1">{project.technologies}</p>
              <p className="mt-4 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.certifications.map((cert, index) => (
            <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
              <img src={cert.image} alt={cert.name} className="w-full h-auto rounded-md object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{cert.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 mb-4 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">{edu.degree}</h3>
            <p className="text-lg text-gray-500">{edu.school} | {edu.dates}</p>
            <p className="mt-2 text-gray-600">{edu.details}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
