"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// Data
const projects = [
  {
    number: "01",
    name: "BUILDORA",
    category: "Architecture & Construction",
    description:
      "A bold, contemporary digital presence focused on presenting architectural services, showcasing high-end projects, and encouraging seamless client enquiries.",
    image: "/images/buildora.png",
    url: "#",
    label: "CORPORATE IDENTITY",
  },
  {
    number: "02",
    name: "LUMÉRA",
    category: "High-Fashion & E-commerce",
    description:
      "A luxury fashion boutique concept merging editorial-style imagery, refined typography, and an ultra-premium digital shopping experience.",
    image: "/images/lumera.png",
    url: "https://lum-ra-mu.vercel.app/",
    label: "EDITORIAL COMMERCE",
  },
  {
    number: "03",
    name: "AURELIA",
    category: "Beauty & Holistic Wellness",
    description:
      "A sophisticated and calming web experience designed around intuitive service discovery, elegant brand presentation, and effortless booking.",
    image: "/images/aurelia.png",
    url: "https://aurella-web.vercel.app/",
    label: "WELLNESS PLATFORM",
  },
];

const services = [
  {
    number: "01",
    title: "Bespoke Web Design",
    description:
      "Tailor-made, visually striking websites crafted to elevate your brand identity and captivate your target audience.",
    tags: ["UI/UX Design", "Brand Strategy", "Wireframing"],
  },
  {
    number: "02",
    title: "Premium Development",
    description:
      "High-performance, scalable, and secure web applications built using cutting-edge modern technologies.",
    tags: ["Next.js", "React", "Headless CMS"],
  },
  {
    number: "03",
    title: "Digital Optimization",
    description:
      "Refining existing digital products for flawless user experience, lightning-fast speed, and maximum conversion rates.",
    tags: ["SEO", "Performance", "CRO"],
  },
];

const technologies = [
  "Next.js 15",
  "React",
  "TypeScript",
  "Tailwind CSS v4",
  "Framer Motion",
  "Figma",
];

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const revealImage: Variants = {
  hidden: { scale: 1.05, opacity: 0, filter: "blur(5px)" },
  visible: { 
    scale: 1, 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" } 
  },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <main id="top" className="min-h-screen selection:bg-gold selection:text-charcoal overflow-x-hidden bg-sand font-sans text-charcoal">
      
      {/* --- HEADER --- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
          scrolled ? "bg-sand/80 backdrop-blur-xl py-4 shadow-sm border-gold/10" : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-baseline gap-1 group relative z-50" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-sans font-bold text-xs md:text-sm tracking-[0.2em] text-charcoal group-hover:text-gold transition-colors duration-300">
              THARUSHIKA
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.1em] text-gray-500 group-hover:text-charcoal transition-colors duration-300">
              HASINI
            </span>
            <span className="font-serif font-bold text-gold text-2xl leading-none">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {["Work", "Services", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] lg:text-xs uppercase tracking-[0.15em] text-gray-500 hover:text-charcoal relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 pb-1 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal/20 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-charcoal hover:text-sand hover:border-charcoal transition-all duration-500 group"
          >
            <span>Start a project</span>
            <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-charcoal focus:outline-none relative z-50 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`block h-[2px] w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`block h-[2px] w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Fullscreen Menu */}
        <div className={`fixed inset-0 bg-sand z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <nav className="flex flex-col items-center gap-8">
                {["Work", "Services", "About", "Contact"].map((item, i) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-4xl font-serif text-charcoal hover:text-gold transition-colors italic"
                        style={{ transitionDelay: `${i * 100}ms` }}
                    >
                        {item}
                    </a>
                ))}
            </nav>
            <div className="absolute bottom-12 text-[10px] uppercase tracking-widest text-gray-400">
               Independent Web Design &copy; 2026
            </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="xl:col-span-5 flex flex-col items-start z-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="w-8 md:w-12 h-[1px] bg-gold"></span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                Premium Web Design & Development
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[1.05] mb-6 md:mb-8 text-charcoal font-medium"
            >
              Digital <br className="hidden md:block" /> experiences, <br />
              <span className="font-serif text-gold italic font-normal tracking-tight">
                made meaningful.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-loose mb-8 md:mb-12 max-w-md"
            >
              I craft bespoke, high-performance websites that elevate luxury brands through meticulous design, seamless interactions, and purposeful engineering.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 md:gap-8 w-full md:w-auto">
              <a
                href="#work"
                className="w-full md:w-auto text-center bg-charcoal text-sand px-8 py-4 md:px-10 md:py-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-3 hover:bg-gold hover:text-charcoal transition-all duration-500 group rounded-sm"
              >
                Explore Work <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </a>
              <a
                href="#services"
                className="w-full md:w-auto justify-center text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] flex items-center gap-2 pb-1 border-b border-charcoal/30 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Discover Services <span>↓</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image / Featured Work (Updated for Premium Full View) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealImage}
            className="xl:col-span-7 relative w-full group mt-10 xl:mt-0"
          >
            {/* Elegant container without the ugly gray padding */}
            <div className="relative w-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden border border-charcoal/5">
                <img
                  src={projects[1].image}
                  alt="Featured Project LUMÉRA"
                  className="w-full h-auto object-cover transition-transform duration-[2s] ease-[0.25,0.1,0.25,1] group-hover:scale-[1.03]"
                />
                
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Content over image */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-sand z-10">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                     <span className="w-4 h-[1px] bg-gold"></span>
                     <p className="text-[8px] md:text-[9px] font-bold tracking-[0.25em] text-gold uppercase drop-shadow-md">
                       Featured Concept
                     </p>
                  </div>
                  <h2 className="font-serif text-3xl md:text-5xl italic leading-none text-sand mb-1 drop-shadow-lg">
                    Elegance, <br /> reimagined.
                  </h2>
                </div>
                
                {/* Link Button */}
                <a href={projects[1].url} target="_blank" rel="noreferrer" className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-sand/40 flex items-center justify-center text-sand hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-500 z-10 backdrop-blur-md group/btn shadow-lg">
                    <span className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 text-sm">↗</span>
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TRUST STRIP --- */}
      <div className="bg-charcoal text-sand py-8 md:py-10 border-y border-gold/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center lg:justify-between items-center gap-6 md:gap-8 text-[8px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-center opacity-80">
          <span>Design with Intention</span>
          <span className="w-1.5 h-1.5 bg-gold rounded-full hidden md:block opacity-50"></span>
          <span>Engineering with Purpose</span>
          <span className="w-1.5 h-1.5 bg-gold rounded-full hidden md:block opacity-50"></span>
          <span>Crafted for Every Screen</span>
        </div>
      </div>

      {/* --- SELECTED WORK SECTION --- */}
      <section id="work" className="py-24 md:py-40 container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24"
        >
          <div>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                Selected Work
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl tracking-tighter text-charcoal leading-[1.1]">
              Thoughtfully made. <br />
              <span className="font-serif text-gold italic font-normal pr-4">Purposefully built.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeInUp} className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
            A curated selection of high-end website concepts exploring distinct brand identities and immersive digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`group flex flex-col ${index === 0 ? "md:col-span-2" : ""}`}
            >
              {/* Updated Work Images for Full View */}
              <a href={project.url} target="_blank" rel="noreferrer" className="block relative mb-8 md:mb-10">
                <div className="relative w-full rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-charcoal/5">
                   <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-[0.25,0.1,0.25,1] group-hover:scale-[1.03]"
                  />
                  
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-700 pointer-events-none"></div>
                  
                  {/* Floating Tags */}
                   <div className="absolute top-4 left-4 md:top-6 md:left-6 text-[8px] md:text-[10px] font-bold tracking-[0.25em] text-charcoal bg-sand/95 px-4 py-2 rounded-sm backdrop-blur-md shadow-md">
                    {project.number}
                  </div>
                  
                   <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-sand bg-charcoal/95 px-4 py-2 rounded-sm backdrop-blur-md shadow-md">
                    {project.label}
                  </div>
                  
                  {/* Interactive View Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/95 text-charcoal flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[0.25,0.1,0.25,1] backdrop-blur-sm pointer-events-none font-bold text-[10px] md:text-xs tracking-widest uppercase shadow-2xl">
                    View
                  </div>
                </div>
              </a>

              {/* Project Info */}
              <div className="flex justify-between items-start mb-4">
                <div>
                   <p className="text-[9px] md:text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-2 md:mb-3">{project.category}</p>
                   <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-tight">{project.name}</h3>
                </div>
                <span className="text-xs md:text-sm text-gray-400 mt-2 font-serif italic">2026</span>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-xl pr-4">{project.description}</p>
              
              <div className="mt-auto">
                  <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] border-b border-charcoal/20 pb-1.5 hover:border-gold hover:text-gold transition-colors duration-300 group/link">
                    Explore Experience <span className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
                  </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION (DARK) --- */}
      <section id="services" className="bg-charcoal text-sand py-24 md:py-40 relative overflow-hidden border-t border-gold/10">
        {/* Luxury Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] bg-gold/5 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 relative z-10">
          <div className="lg:col-span-5">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:sticky lg:top-40">
                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className="w-8 md:w-12 h-[1px] bg-gold"></span>
                  <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase">
                    Expertise & Offerings
                  </span>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl tracking-tighter mb-6 md:mb-8 leading-[1.1]">
                  Good design. <br />
                  <span className="font-serif text-gold italic font-normal pr-4">Real purpose.</span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 md:mb-12 max-w-md">
                  Delivering practical yet luxurious digital solutions shaped meticulously around your business goals, target audience, and unique brand identity.
                </motion.p>
                <motion.a variants={fadeInUp} href="#contact" className="w-full md:w-auto text-center bg-sand text-charcoal px-8 py-4 md:px-10 md:py-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] inline-flex items-center justify-center gap-3 hover:bg-gold transition-colors duration-500 rounded-sm group">
                  Discuss your vision <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                </motion.a>
             </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            {services.map((service, index) => (
              <motion.article 
                key={service.number}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
                className={`group flex flex-col md:flex-row gap-6 md:gap-12 py-10 md:py-16 ${index === 0 ? 'pt-0 lg:pt-16' : ''} border-b border-gold/10 last:border-b-0`}
              >
                <span className="text-gold font-serif text-3xl md:text-4xl italic opacity-80">{service.number}</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-medium tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-lg">{service.description}</p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] border border-gray-700 px-4 py-2 rounded-sm text-gray-300 group-hover:border-gold/50 group-hover:text-gold transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 md:py-40 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="order-2 lg:order-1 flex justify-center lg:justify-start">
               {/* Elegant Monogram */}
               <motion.div variants={fadeInUp} className="relative w-full max-w-[400px] aspect-square flex items-center justify-center bg-[#eae8e3] rounded-xl shadow-lg p-8">
                  <div className="absolute inset-4 border border-charcoal/10 rounded-lg"></div>
                  <span className="font-serif text-[120px] md:text-[180px] lg:text-[220px] leading-none text-charcoal/10 tracking-tighter select-none">
                     TH.
                  </span>
                  <div className="absolute bottom-8 right-8 text-[9px] font-bold tracking-[0.25em] text-charcoal/40 uppercase rotate-90 origin-bottom-right">
                     Est. 2026
                  </div>
               </motion.div>
           </motion.div>

           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="order-1 lg:order-2">
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="w-8 md:w-12 h-[1px] bg-gold"></span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                  Philosophy & Approach
                </span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl tracking-tighter text-charcoal mb-8 leading-[1.1]">
                Less noise. <br />
                <span className="font-serif text-gold italic font-normal pr-4">More intention.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-lg">
                I believe in creating digital spaces that are as functional as they are beautiful. By stripping away the unnecessary, I focus on clear, refined, and highly responsive web experiences.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
                Every project is an opportunity to seamlessly blend compelling visual storytelling with robust technical architecture, resulting in a distinct product that commands attention.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="pt-10 border-t border-charcoal/10">
                 <div className="flex items-center gap-4 mb-6">
                  <span className="w-6 h-[1px] bg-gold"></span>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                    Core Arsenal
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {technologies.map(tech => (
                     <span key={tech} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] bg-white border border-charcoal/5 px-4 py-2 md:px-5 md:py-2.5 rounded-md text-charcoal shadow-sm hover:border-gold/50 transition-colors">
                        {tech}
                     </span>
                  ))}
                </div>
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* --- CONTACT / CTA SECTION --- */}
      <section id="contact" className="py-32 md:py-48 bg-charcoal text-sand relative overflow-hidden flex flex-col items-center justify-center text-center">
         {/* Luxury Decorative Rings */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full border-[1px] border-gold/40"></div>
            <div className="absolute w-[450px] h-[450px] md:w-[1000px] md:h-[1000px] rounded-full border-[1px] border-gold/10"></div>
         </div>

         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-10 container mx-auto px-6 max-w-3xl">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-8">
              <span className="w-6 md:w-10 h-[1px] bg-gold"></span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
                Ready to elevate your brand?
              </span>
              <span className="w-6 md:w-10 h-[1px] bg-gold"></span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter mb-8 leading-[1.05]">
              Let's create <br />
              <span className="font-serif text-gold italic font-normal pr-4">something remarkable.</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto">
              Whether you're launching a new venture or elevating an existing one, I'm here to translate your vision into an extraordinary digital reality.
            </motion.p>
            
            <motion.a variants={fadeInUp} href="mailto:hello@example.com" className="bg-gold text-charcoal px-10 py-5 md:px-12 md:py-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-4 hover:bg-sand transition-colors duration-500 rounded-sm shadow-xl shadow-gold/10 group">
              Get in touch <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
            </motion.a>
         </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-charcoal text-gray-500 py-10 md:py-12 border-t border-gold/20 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
           
           <a href="#top" className="flex items-baseline gap-1 group">
            <span className="font-sans text-sand group-hover:text-gold transition-colors">THARUSHIKA</span>
            <span className="font-sans">HASINI</span>
            <span className="font-serif text-gold text-lg leading-none">.</span>
          </a>
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-center md:text-left">
              <p>Independent Portfolio Concept</p>
              <span className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></span>
              <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          
          <a href="#top" className="hover:text-gold transition-colors flex items-center gap-2 group">
            Back to top <span className="transform group-hover:-translate-y-1 transition-transform">↑</span>
          </a>

        </div>
      </footer>
    </main>
  );
}