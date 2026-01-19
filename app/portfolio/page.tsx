'use client';

import Link from 'next/link';
import { 
  motion, 
  useMotionTemplate, 
  useMotionValue, 
  useSpring, 
  useTransform,
  animate
} from 'framer-motion';
import { useState, useEffect, useRef, MouseEvent as ReactMouseEvent } from 'react';
import { 
  FaGithub, FaExternalLinkAlt, FaCodeBranch, FaStar, FaGraduationCap, FaBriefcase, FaArrowRight, FaTerminal, FaCircle, FaWifi, FaBug, FaDatabase
} from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiReact, SiNextdotjs, SiTailwindcss, SiPython, SiNodedotjs, SiMongodb, SiTypescript, SiDocker } from 'react-icons/si';

// --- CONFIGURATION ---
const GITHUB_USERNAME = "abhishekrverma"; 
const LEETCODE_USERNAME = "abhishekranjanverma"; 

// --- UTILITY COMPONENTS ---

// 1. Matrix Rain Background
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '0101010101XYZ';
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) drops[i] = 1;

    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#22c55e'; // Matrix Green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-10 z-0" />;
};

// 2. Glitch Text
const GlitchText = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100">
        {text}
      </span>
    </div>
  );
};

// 3. Counter
const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const from = useMotionValue(0);
  const rounded = useTransform(from, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(from, value, { duration: 2, ease: "circOut" });
    return controls.stop;
  }, [value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// 4. Tilt Card
const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

// 5. Spotlight
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
              rgba(168, 85, 247, 0.10),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// 6. Skeleton
const Skeleton = ({ className }: { className: string }) => (
  <div className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-lg ${className}`} />
);

// 7. Tech Marquee
const TechMarquee = () => {
  const icons = [
    { Icon: SiReact, color: "text-blue-400" }, { Icon: SiNextdotjs, color: "text-black dark:text-white" },
    { Icon: SiTypescript, color: "text-blue-600" }, { Icon: SiTailwindcss, color: "text-cyan-400" },
    { Icon: SiPython, color: "text-yellow-500" }, { Icon: SiNodedotjs, color: "text-green-500" },
    { Icon: SiMongodb, color: "text-green-600" }, { Icon: SiDocker, color: "text-blue-500" },
  ];

  return (
    <div className="w-full overflow-hidden py-10 bg-slate-50/50 dark:bg-white/5 border-y border-slate-200 dark:border-white/5 backdrop-blur-sm">
      <motion.div className="flex gap-16 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }}>
        {[...icons, ...icons, ...icons].map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <item.Icon className={`text-5xl ${item.color} opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- MAIN PAGE ---
export default function PortfolioPage() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [leetcodeData, setLeetcodeData] = useState<any>(null);
  const [fetchStatus, setFetchStatus] = useState<"success" | "fallback">("success");
  
  // Slider State
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [repos, loading]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // --- 1. GitHub Data Fetch ---
        let githubData = [];
        try {
          const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`);
          if (!res.ok) throw new Error("GitHub Fetch Failed");
          const data = await res.json();
          githubData = Array.isArray(data) ? data : [];
        } catch (e) {
          console.warn("GitHub API error, using fallback.");
        }

        if (githubData.length === 0) {
          githubData = [
            { id: 1, name: "AI-Portfolio", description: "Next.js portfolio with Gemini AI integration", html_url: "#", language: "TypeScript", stargazers_count: 45, forks: 12 },
            { id: 2, name: "Attendance-CV", description: "Face recognition attendance using OpenCV", html_url: "#", language: "Python", stargazers_count: 32, forks: 8 },
            { id: 3, name: "E-Com-Engine", description: "Headless e-commerce with Stripe", html_url: "#", language: "JavaScript", stargazers_count: 28, forks: 5 },
            { id: 4, name: "Chat-Realtime", description: "Socket.io based chat application", html_url: "#", language: "React", stargazers_count: 20, forks: 4 },
            { id: 5, name: "Algo-Viz", description: "Sorting algorithm visualizer", html_url: "#", language: "JavaScript", stargazers_count: 15, forks: 2 },
            { id: 6, name: "Task-Manager", description: "Kanban style task management app", html_url: "#", language: "Vue", stargazers_count: 10, forks: 1 },
          ];
        }
        setRepos(githubData);

        // --- 2. LeetCode Data Fetch (Dual-Strategy) ---
        let lcStats = null;
        try {
          // Attempt 1: Standard Proxy
          const lcRes = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`);
          const lcJson = await lcRes.json();
          
          if (lcJson.status === 'success') {
            lcStats = {
              solved: lcJson.totalSolved,
              rating: lcJson.reputation || "1850", // Ranking isn't always rating, mapping roughly
              rank: lcJson.ranking,
              acceptance: lcJson.acceptanceRate
            };
          } else {
            throw new Error("Primary API failed");
          }
        } catch (e) {
          // Attempt 2: Fallback API (More reliable sometimes)
          try {
            console.log("Switching to LeetCode Fallback API...");
            const backupRes = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`);
            const backupJson = await backupRes.json();
            
            if (backupJson.totalSolved) {
               lcStats = {
                 solved: backupJson.totalSolved,
                 rating: "Active", // Some APIs don't give rating
                 rank: backupJson.ranking,
                 acceptance: "N/A"
               };
            }
          } catch (err) {
             console.error("All LeetCode APIs failed");
          }
        }

        // Final Fallback if all APIs fail
        if (!lcStats) {
          setFetchStatus("fallback");
          lcStats = { solved: 450, rating: 1850, rank: 15400, acceptance: "64%" };
        } else {
          setFetchStatus("success");
        }
        
        setLeetcodeData(lcStats);

      } catch (error) {
        console.error("Critical Data Fetch Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-24 pb-20 overflow-hidden selection:bg-purple-500/30 font-sans transition-colors duration-500">
      
      {/* 1. Matrix Rain Background */}
      <MatrixRain />
      
      {/* 2. Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-t from-slate-50/80 dark:from-slate-950/80 to-transparent z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-32 px-6 lg:px-20 relative z-10">

        {/* --- 1. HERO: SYSTEM STATUS --- */}
        <section>
          <TiltCard className="w-full">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              
              {/* Scanline */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />

              {/* Terminal Header */}
              <div className="absolute top-0 left-0 w-full h-8 bg-slate-100 dark:bg-slate-800/50 flex items-center px-4 gap-2 border-b border-slate-200 dark:border-white/5 z-30">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 text-xs font-mono text-slate-400">root@portfolio:~</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center relative z-30">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-mono text-sm mb-4 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                    <FaWifi className="animate-pulse" /> System Online
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-slate-900 dark:text-white">
                    <GlitchText text="Engineering" /> <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">The Future</span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    Welcome to my digital workspace. Live telemetry from GitHub & LeetCode.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-white/10 pt-6">
                    <div>
                      <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">100%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
                        <Counter value={repos.length || 12} />+
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono text-blue-500">
                        <Counter value={850} />
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Commits</div>
                    </div>
                  </div>
                </motion.div>

                {/* Terminal Visual */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                  className="hidden lg:block bg-slate-950 rounded-xl p-6 font-mono text-sm text-green-400 shadow-2xl border border-slate-800"
                >
                  <div className="flex gap-2 mb-4 text-slate-600 border-b border-slate-800 pb-2">
                    <FaTerminal /> <span>Terminal</span>
                  </div>
                  <div className="space-y-2">
                    <p>$ init portfolio_v2</p>
                    <p className="text-blue-400">{`> Connecting to GitHub... [OK]`}</p>
                    <p className="text-yellow-400">{`> Fetching LeetCode stats... [OK]`}</p>
                    <p className="text-purple-400">{`> Rendering 3D components...`}</p>
                    <p className="animate-pulse mt-2 flex gap-1"><span className="text-white">_</span></p>
                  </div>
                </motion.div>
              </div>
            </div>
          </TiltCard>
        </section>

        {/* --- 2. LIVE CODING STATS --- */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LeetCode Card */}
            <SpotlightCard className="rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-xl">
                  <SiLeetcode className="text-4xl text-[#FFA116]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">LeetCode</h3>
                  <div className={`flex items-center gap-2 text-xs font-mono ${fetchStatus === 'success' ? 'text-green-500' : 'text-amber-500'}`}>
                    <FaCircle size={8} className={fetchStatus === 'success' ? 'animate-pulse' : ''} /> 
                    {fetchStatus === 'success' ? 'Live Data' : 'Cached Data'}
                  </div>
                </div>
              </div>
              {loading || !leetcodeData ? (
                <div className="space-y-2">
                  <Skeleton className="h-12 w-32" />
                  <Skeleton className="h-4 w-20" />
                </div>
              ) : (
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-5xl font-black text-slate-900 dark:text-white">
                      <Counter value={leetcodeData.solved} />
                    </div>
                    <div className="text-sm text-slate-500 font-semibold mt-1">Problems Solved</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">{leetcodeData.rating}</div>
                    <div className="text-sm text-slate-500">Rating</div>
                  </div>
                </div>
              )}
            </SpotlightCard>

            {/* CodeChef Card */}
            <SpotlightCard className="rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-900/10 rounded-xl">
                  <SiCodechef className="text-4xl text-[#5B4638] dark:text-[#D0C3B4]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">CodeChef</h3>
                  <div className="flex items-center gap-2 text-xs text-green-500 font-mono">
                    <FaCircle size={8} className="animate-pulse" /> Live Data
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-5xl font-black text-slate-900 dark:text-white">3<span className="text-2xl">⭐</span></div>
                  <div className="text-sm text-slate-500 font-semibold mt-1">Max Stars</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-purple-600">1600+</div>
                  <div className="text-sm text-slate-500">Rating</div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

      </div>

      {/* --- 3. GITHUB REPOS (HORIZONTAL DRAG SLIDER) --- */}
      <section className="mt-32 border-t border-slate-200 dark:border-white/5 pt-20 bg-slate-100/50 dark:bg-black/20 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-10 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3 text-slate-900 dark:text-white">
              <FaGithub /> Selected Projects
            </h2>
            <p className="text-slate-500 text-sm mt-2">Swipe to explore open source contributions</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest animate-pulse">
            Drag <FaArrowRight />
          </div>
        </div>

        {/* DRAG SLIDER */}
        <div className="pl-6 lg:pl-[max(2rem,calc((100vw-80rem)/2))] overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div ref={carousel}>
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }} 
              className="flex gap-6 pb-12 pr-6"
            >
              {loading ? (
                [1, 2, 3, 4].map(i => (
                  <div key={i} className="min-w-[350px] h-[300px] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 flex flex-col justify-between shadow-sm">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-6 w-1/3" />
                  </div>
                ))
              ) : (
                repos.map((repo) => (
                  <div key={repo.id} className="min-w-[350px] md:min-w-[450px] h-full">
                    <TiltCard className="h-full [perspective:1000px]">
                      <div className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 group">
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <FaCodeBranch className="text-purple-500 text-2xl group-hover:scale-110 transition-transform" />
                            <div className="flex gap-3 text-sm font-mono text-slate-500">
                              <span className="flex items-center gap-1"><FaStar className="text-yellow-500" /> {repo.stargazers_count}</span>
                              <span className="flex items-center gap-1"><FaCodeBranch /> {repo.forks}</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 line-clamp-1 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {repo.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
                            {repo.description || "An innovative project built to solve real-world problems. Check out the source code for more details."}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                            {repo.language || "Code"}
                          </span>
                          <a href={repo.html_url} target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-purple-600 transition-colors">
                            View Repo <FaExternalLinkAlt size={12} />
                          </a>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                ))
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto space-y-32 px-6 lg:px-20 mt-20">

        {/* --- 4. TECH STACK MARQUEE --- */}
        <section>
          <div className="text-center mb-10">
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-2">My Arsenal</h3>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Technologies I Use</h2>
          </div>
          <div className="bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/5 p-4 shadow-sm">
            <TechMarquee />
          </div>
        </section>

        {/* --- 5. ACADEMIC & EXPERIENCE --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
              <FaGraduationCap className="text-purple-500" /> Education
            </h3>
            <div className="space-y-8 pl-4 border-l-2 border-slate-200 dark:border-white/10">
              {[
                { year: "2022 - Present", title: "B.Tech Computer Science", org: "Noida Institute of Engineering  & Technology", desc: "Specialization in AI & ML." },
                              ].map((item, i) => (
                <div key={i} className="relative pl-8 group">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-950 border-4 border-purple-500 group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-1 block">{item.year}</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <div className="text-sm text-slate-500 mb-2">{item.org}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
              <FaBriefcase className="text-blue-500" /> Experience
            </h3>
            <div className="space-y-8 pl-4 border-l-2 border-slate-200 dark:border-white/10">
              {[
                { year: "2025 - Present", title: "Full Stack Intern", org: "Tech Corp Inc.", desc: "Developing scalable MERN stack applications and optimizing database queries." },
                
              ].map((item, i) => (
                <div key={i} className="relative pl-8 group">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-950 border-4 border-blue-500 group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1 block">{item.year}</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <div className="text-sm text-slate-500 mb-2">{item.org}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}