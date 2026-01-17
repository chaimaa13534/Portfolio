import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  ChevronDown 
} from 'lucide-react';

// --- Configuration ---
const DATA = {
  name: "Chaimae Mardi",
  role: "Junior Full-Stack Engineer",
  bio: "I build accessible, pixel-perfect, and performant web experiences. Focused on scalable architecture and intuitive UX.",
  socials: [
    { icon: Github, href: "https://github.com/chaimaa13534/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chaimae-mardi/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chaimaamrd13@gmail.com", label: "Email" },
  ],
  skills: [
    "React", ".Net", "Node.js", "JavaFX", "ReactNative", "Django", "MongoDb", "Mysql"
  ],
  projects: [
    {
      title: "Ecommerce Website",
      desc: "Real-time financial data visualization with WebSocket integration and complex filtering.",
      tags: [".Net", "SqlServer"],
      link: "#"
    },
    {
      title: "Food Recipe App",
      desc: "SaaS platform leveraging OpenAI API to help writers generate blog posts 10x faster.",
      tags: ["Node.js", "ReactNative", "PostreSql"],
      link: "#"
    },
    {
      title: "Ecommerce Website",
      desc: "A lightweight, accessible component library published on NPM for internal team use.",
      tags: ["Php", "MySql"],
      link: "#"
    },
{
      title: "Travel App",
      desc: "SaaS platform leveraging OpenAI API to help writers generate blog posts 10x faster.",
      tags: ["Node.js", "ReactJs", "MySql"],
      link: "#"
    },
    {
      title: "Online Learning Platform",
      desc: "A lightweight, accessible component library published on NPM for internal team use.",
      tags: ["Python", "Django", "Mysql"],
      link: "#"
    }

  ],
  experience: [
    {
      company: "Master Oceans",
      role: "Full Stack Web Development Internship",
      period: "2025",
      desc: "Architected the core design system and reduced build times by 50%."
    }
  ]
};


const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Section = ({ children, id, className = "" }) => (
  <section id={id} className={`py-20 md:py-32 px-6 max-w-5xl mx-auto ${className}`}>
    {children}
  </section>
);


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-100 tracking-tight">
            {DATA.name}<span className="text-cyan-400">.</span>
          </span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-16">
        <Reveal>
          <p className="text-cyan-400 font-mono mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
            {DATA.name}.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight">
            {DATA.role}.
          </h2>
          <p className="max-w-xl text-lg text-slate-400 leading-relaxed mb-8">
            {DATA.bio}
          </p>
          
          <div className="flex gap-4">
            {DATA.socials.map((social, index) => (
              <a 
                key={index} 
                href={social.href}
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </Reveal>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      <Section id="about">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyan-400 font-mono text-xl">01.</span>
            <h3 className="text-3xl font-bold text-slate-100">Experience</h3>
            <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
          </div>

          <div className="space-y-12 border-l border-slate-800 ml-3 md:ml-0">
            {DATA.experience.map((job, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors duration-300" />
                
                <h4 className="text-xl font-semibold text-slate-100">{job.role}</h4>
                <p className="text-cyan-400 font-mono text-sm mb-2">{job.company} • {job.period}</p>
                <p className="text-slate-400 max-w-2xl">{job.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

     
      <Section id="projects">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyan-400 font-mono text-xl">02.</span>
            <h3 className="text-3xl font-bold text-slate-100">Featured Projects</h3>
            <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-400/30 transition-all duration-300 group shadow-lg shadow-black/20"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-cyan-400">
                    <Code2 size={24} />
                  </div>
                  <a href={project.link} className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-cyan-400/80 bg-cyan-400/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="skills">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyan-400 font-mono text-xl">03.</span>
            <h3 className="text-3xl font-bold text-slate-100">Technical Skills</h3>
            <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default"
              >
                <Terminal size={16} className="text-cyan-500" />
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

   
      <Section id="contact" className="text-center pb-20">
        <Reveal>
          <h2 className="text-4xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <a 
            href="mailto:chaimaamrd13@gmail.com"
            className="inline-block px-8 py-4 border border-cyan-400 text-cyan-400 font-mono rounded hover:bg-cyan-400/10 transition-colors duration-300"
          >
            Say Hello
          </a>
        </Reveal>
        
        <footer className="border-t border-slate-800 mt-32">
  <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Left: Branding */}
    <div className="text-center md:text-left">
      <p className="text-slate-300 font-semibold tracking-tight">
        {DATA.name}
        <span className="text-cyan-400">.</span>
      </p>
      <p className="text-slate-500 text-sm mt-1">
        Junior Full-Stack Engineer
      </p>
    </div>

    {/* Center: Social Links */}
    <div className="flex gap-5">
      {DATA.socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="p-2 rounded-lg border border-slate-800 text-slate-400
                     hover:text-cyan-400 hover:border-cyan-400/50
                     hover:bg-cyan-400/5 transition-all duration-300"
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>

    {/* Right: Copyright */}
    <div className="text-center md:text-right text-slate-500 text-sm font-mono">
      <p>© {new Date().getFullYear()} All rights reserved.</p>
      
    </div>

  </div>
</footer>

      </Section>

    </div>
  );
}

export default App;