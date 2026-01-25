'use client';

import Link from 'next/link';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionTemplate, 
  useMotionValue, 
  useSpring,
} from 'framer-motion';
import { useRef, useState, useEffect, MouseEvent as ReactMouseEvent } from 'react';
import { 
  FaArrowRight, 
  FaReact, FaNodeJs, FaPython, FaLaptopCode, FaServer, FaCode, FaRocket
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiTensorflow, SiOpencv } from 'react-icons/si';

// --- DATA ---
const resumeData = {
  stats: [
    { label: "Projects Completed", value: "10+", icon: FaRocket },
    { label: "CodeChef Rating", value: "3-Star", icon: FaCode },
    { label: "coding Problems", value: "400+", icon: FaLaptopCode },
  ]
};

const projects = [
  {
    id: 1,
    title: "AI Portfolio Generator",
    desc: "Automated website creation from resumes using Gemini API.",
    tags: ["React", "Gemini API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Attendance System",
    desc: "Face recognition automation using Python & OpenCV.",
    tags: ["Python", "OpenCV", "Tkinter"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    desc: "Full-stack shopping experience with payment integration.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    image: "https://imgs.search.brave.com/zuCwUf2l1TexwLyG9xKsl0yhr5vr2bhnfeejgLfwq_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE4/NDIzMTk2NC9waG90/by9tYW4tcHVyY2hh/c2luZy1zaG9lcy1v/bi1hbi1vbmxpbmUt/c2hvcC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dnBYQ20w/dkJFeS1jS2hMNTRo/Qlgxa1c3bUttTmhm/RWRCNjB2anQxVjU5/UT0"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    desc: "Real-time weather data visualization using generic APIs.",
    tags: ["React", "Chart.js", "API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop"
  }
];

// --- FEATURE: MORPHING TEXT (Hero Animation) ---
const MorphingText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block overflow-hidden">
      <motion.span
        className="block font-black text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(to right, #3b82f6, #a855f7, #ec4899, #3b82f6)",
          backgroundSize: "200% auto",
        }}
        animate={{
          backgroundPosition: ["0% center", "200% center"],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

// --- FEATURE: MAGNETIC BUTTON ---
const MagneticButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: ReactMouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    // @ts-ignore
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- FEATURE: 3D TILT CARD ---
const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

// Spotlight Card
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// Tech Marquee
const TechMarquee = () => {
  const icons = [
    { Icon: FaReact, color: "text-cyan-500" }, { Icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
    { Icon: FaNodeJs, color: "text-green-600" }, { Icon: FaPython, color: "text-yellow-500" },
    { Icon: SiTensorflow, color: "text-orange-500" }, { Icon: SiOpencv, color: "text-red-500" },
    { Icon: SiTailwindcss, color: "text-cyan-400" }, { Icon: SiMongodb, color: "text-green-500" },
  ];
  return (
    <div className="w-full overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 border-y border-slate-200 dark:border-white/5 backdrop-blur-md z-20 relative">
      <motion.div className="flex gap-16 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 30 }}>
        {[...icons, ...icons, ...icons].map((item, index) => (
          <div key={index} className="flex items-center justify-center w-24">
            <item.Icon className={`text-5xl ${item.color} opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 transform hover:scale-110`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Hero Grid
const HeroGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-[1000px]">
    <motion.div 
      animate={{ translateY: [0, 50] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[-50%] w-[200%] h-[200%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-transparent to-transparent" />
  </div>
);

// --- MAIN PAGE ---
export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  // Slider State
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  
  // FEATURE: MOUSE LISTENER FOR BACKGROUND
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden selection:bg-purple-500/30 transition-colors duration-500">
      
      {/* FEATURE: CURSOR-REACTIVE GRADIENT BACKGROUND */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0 opacity-50 dark:opacity-30"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 80%)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
        <HeroGrid />
        
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-600/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/30 rounded-full blur-[120px] animate-pulse-slow delay-1000" />

        <div className="container mx-auto px-6 lg:px-20 relative z-20 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left: Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left z-30">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl mb-6 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-300">Available for Hire</span>
              </motion.div>

              <div className="mb-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="text-2xl md:text-3xl font-light mb-2 text-slate-500 dark:text-slate-400"
                >
                  Hello, I'm
                </motion.h2>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white">
                  Abhishek <br />
                  {/* FEATURE: MORPHING HERO TEXT */}
                  <MorphingText text="R. Verma" />
                </h1>
              </div>

              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
              >
                Crafting intelligent digital experiences with <strong className="text-slate-900 dark:text-white">MERN Stack</strong> & <strong className="text-slate-900 dark:text-white">AI Integration</strong>.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }} 
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                {/* FEATURE: MAGNETIC BUTTONS */}
                <MagneticButton>
                  <Link href="/portfolio" className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-purple-500/30 inline-block">
                    <span className="relative z-10">View Projects</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/contact" className="inline-block px-8 py-4 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md rounded-full font-bold text-sm hover:bg-slate-100 dark:hover:bg-white/10 transition-all hover:scale-105">
                    Contact Me
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right: 3D Tilt Name Card */}
            <div className="order-1 lg:order-2 relative w-full flex justify-center items-center h-[500px]">
                <div className="absolute w-[350px] h-[350px] bg-purple-500/30 rounded-full blur-[100px] animate-pulse-slow" />
                
                <TiltCard className="relative z-10 w-[330px] h-[320px] md:w-[400px] md:h-[400px] rounded-full [perspective:1000px] cursor-pointer">
  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-900 relative">
    
    {/* Shine effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-20"></div>
    
    <img 
      src="/DSC_0026.png"
      alt="Abhishek R. Verma" 
      // 1. Removed 'scale-110' so it fits naturally
      // 2. Added 'object-top' (Tailwind) to anchor to the top
      className="w-full h-full object-cover object-top"
      style={{ 
        // 3. Fallback explicit positioning to ensure head isn't cut
        objectPosition: 'top center',
      }}
    />
  </div>
</TiltCard>
            </div>

          </div>
        </div>
        
        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-slate-400 to-transparent" />
        </motion.div>
      </section>

      <TechMarquee />

      {/* --- STATS SECTION --- */}
      <section className="py-32 px-6 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                Code that solves <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Real Problems.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mt-4">
                I combine robust architecture with elegant design. With over <strong className="text-slate-900 dark:text-white">400+ DSA problems solved</strong>, I write efficient, scalable code.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {resumeData.stats.map((stat, idx) => (
                  <SpotlightCard key={idx} className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <stat.icon className="text-3xl text-purple-500 mb-3" />
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</div>
                  </SpotlightCard>
                ))}
              </div>
            </motion.div>

            {/* Radar Pulse Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
               <div className="relative w-[400px] h-[400px]">
                  <div className="absolute inset-0 border border-slate-200 dark:border-white/5 rounded-full" />
                  <div className="absolute inset-[15%] border border-slate-200 dark:border-white/5 rounded-full" />
                  <div className="absolute inset-[30%] border border-slate-200 dark:border-white/5 rounded-full" />
                  
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-purple-500/10 dark:to-purple-500/20"
                    style={{ maskImage: 'conic-gradient(transparent 270deg, black 360deg)' }}
                  />

                  {/* 3D Tilt on System Core */}
                  <TiltCard className="absolute inset-[35%] z-10 [perspective:1000px]">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex items-center justify-center"
                    >
                       <img 
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" 
                          alt="System Core"
                          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                       />
                       <div className="z-20 text-center">
                          <FaServer className="text-4xl text-slate-900 dark:text-white mx-auto mb-2 drop-shadow-md" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">System Core</span>
                       </div>
                    </motion.div>
                  </TiltCard>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SLIDER SECTION (Horizontal Drag) --- */}
      <section className="py-24 px-6 lg:px-0 bg-slate-100/50 dark:bg-black/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-12">
          <div className="flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 dark:text-white">Selected Works</h2>
            </motion.div>
            <div className="hidden md:flex items-center gap-2 text-slate-500">
              <span className="text-xs uppercase tracking-widest">Drag to explore</span>
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* DRAGGABLE SLIDER */}
        <div className="pl-6 lg:pl-[calc((100vw-1280px)/2+2rem)]">
          <motion.div ref={carousel} className="cursor-grab overflow-hidden">
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }} 
              className="flex gap-8 pb-10"
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-[350px] md:min-w-[500px]">
                  <TiltCard className="group relative rounded-3xl h-[300px] md:h-[350px] w-full [perspective:1000px] cursor-pointer">
                    <div className="relative h-full w-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                          {project.desc}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-[2px] rounded-[3rem]"
        >
          <div className="bg-white dark:bg-slate-950 rounded-[calc(3rem-2px)] p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 relative z-10">
              Ready to create?
            </h2>
            <MagneticButton className="inline-block">
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl relative z-10">
                Start a Project <FaArrowRight />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </section>

    </div>
  );
}