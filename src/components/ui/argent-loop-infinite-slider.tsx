import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, BookOpen, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MagneticEffect from "@/components/ui/MagneticEffect";

interface ProjectData {
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
  slug: string;
}

const PROJECT_DATA: ProjectData[] = [
  {
    title: "Autonomous AI Director",
    image: "/yeneschool/directordashbaord.png",
    category: "AI Autopilot",
    year: "2026",
    description: "Daily 07:00 AM executive audits, syllabus tracking & operational briefings.",
    slug: "autonomous-ai-director"
  },
  {
    title: "Student Promotion & Records",
    image: "/yeneschool/studentpromotion.png",
    category: "Academic Governance",
    year: "2026",
    description: "Automated end-of-year promotion criteria, class rollover & official transcripts.",
    slug: "student-promotion"
  },
  {
    title: "Institutional Analytics Engine",
    image: "/yeneschool/schoolanalytics.png",
    category: "Executive Intelligence",
    year: "2026",
    description: "Real-time enrollment trends, subject pass rates, and teacher performance heatmaps.",
    slug: "school-analytics"
  },
  {
    title: "Offline Sync & Data Health",
    image: "/yeneschool/schooldatahealth.png",
    category: "Infrastructure Resilience",
    year: "2026",
    description: "IndexedDB client cache with zero-downtime offline attendance & automatic cloud sync.",
    slug: "offline-data-health"
  },
  {
    title: "Curriculum Syllabus & Timetable",
    image: "/yeneschool/syllubs.png",
    category: "Campus Operations",
    year: "2026",
    description: "5E lesson planning tied directly to national textbooks & period schedule tracking.",
    slug: "curriculum-syllabus"
  },
  {
    title: "Parent & Guardian Portal",
    image: "/yeneschool/parentdashbaord.png",
    category: "Family Engagement",
    year: "2026",
    description: "Zero-app Telegram notifications, tuition receipts, and live student grade cards.",
    slug: "parent-portal"
  },
];

export function ArgentLoopInfiniteSlider() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 30, mass: 1 });

  const projectArea = 0.85;
  const projectStep = projectArea / PROJECT_DATA.length; 
  const transWindow = 0.05; 

  const scrollMap = [0];
  const yMap = ["0vh"];
  const internalYMap = ["0px"];

  const ITEM_HEIGHT = 560;

  PROJECT_DATA.forEach((_, i) => {
    if (i === 0) return;
    const boundary = i * projectStep;
    scrollMap.push(boundary - transWindow / 2, boundary + transWindow / 2);
    yMap.push(`-${(i-1)*100}vh`, `-${i*100}vh`);
    internalYMap.push(`-${(i-1)*ITEM_HEIGHT}px`, `-${i*ITEM_HEIGHT}px`);
  });

  scrollMap.push(projectArea, 1);
  yMap.push(`-${(PROJECT_DATA.length-1)*100}vh`, `-${(PROJECT_DATA.length-1)*100}vh`);
  internalYMap.push(`-${(PROJECT_DATA.length-1)*ITEM_HEIGHT}px`, `-${(PROJECT_DATA.length-1)*ITEM_HEIGHT}px`);

  const currentY = useTransform(smoothProgress, scrollMap, yMap);
  const contentInternalY = useTransform(smoothProgress, scrollMap, internalYMap);

  const bgOpacity = useTransform(smoothProgress, [0, 0.05, projectArea, 1], [0, 1, 1, 0]);
  const mainUIOpacity = useTransform(smoothProgress, [0, 0.05, projectArea, 1], [0, 1, 1, 0]);
  const buttonOpacity = useTransform(smoothProgress, [projectArea, projectArea + 0.05], [0, 1]);
  const finalContainerY = useTransform(smoothProgress, [projectArea, projectArea + 0.05], ["0px", `-${Math.round(ITEM_HEIGHT * 0.55)}px`]);
  const imageY = useTransform(smoothProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <style>{`
        .argent-slider-wrapper {
            position: sticky;
            top: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            background: hsl(var(--background));
            z-index: 20;
        }
        .project-list {
            position: absolute;
            width: 100%;
            height: 100%;
            will-change: transform;
        }
        .project {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        .project img {
            width: 100%;
            height: 124%;
            object-fit: cover;
            filter: brightness(0.3) blur(10px);
            transform: scale(1.05);
            will-change: transform;
        }
        .mist-overlay {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, transparent 20%, hsl(var(--background) / 0.8) 100%);
            z-index: 5;
            pointer-events: none;
        }
        .minimap-bar-outer {
            width: 92vw;
            max-width: 1320px;
            height: 560px;
            background: hsl(var(--background));
            border-radius: 28px;
            box-shadow: 0 40px 100px -20px rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            overflow: hidden;
            border: 1px solid rgba(0, 0, 0, 0.08);
            position: relative;
        }
        .dark .minimap-bar-outer {
            background: #0e0e10 !important;
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 50px 120px -30px rgba(0,0,0,0.85);
        }
        .minimap-content-viewport {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .minimap-img-preview {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 10;
        }
        .minimap-img-item {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .minimap-img-item img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
            will-change: transform;
        }
        .minimap-info-list {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 20;
            pointer-events: none;
        }
        .minimap-item-info {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1.5rem 2rem;
            pointer-events: none;
        }
        .dark .minimap-item-info {
            color: white !important;
        }
        .minimap-item-info-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
        }
        .minimap-item-info-row p {
            margin: 0;
            font-size: 11px;
            letter-spacing: 0.2em;
            font-weight: 800;
        }
        .minimap-item-info-row:nth-child(2) p { color: #666; font-weight: 700; }
        .dark .minimap-item-info-row:nth-child(2) p { color: #999; }
        .minimap-item-info-row:nth-child(3) p { color: #777; font-weight: 500; font-size: 11px; text-transform: none; }
        .dark .minimap-item-info-row:nth-child(3) p { color: #aaa; }
        
        /* DEFAULT (Light Mode) Base State */
        .custom-btn {
            background: #60a5fa;
            color: white;
            font-size: 1.15rem;
            font-weight: 700;
            padding: 1.1rem 2.8rem;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 10px 25px -5px rgba(96, 165, 250, 0.4);
        }
        .custom-btn-arrow,
        .custom-btn-github {
            background: #60a5fa;
            color: white;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 10px 25px -5px rgba(96, 165, 250, 0.4);
        }

        /* DARK MODE Base State */
        .dark .custom-btn,
        .dark .custom-btn-arrow,
        .dark .custom-btn-github {
            background: #60a5fa;
            color: white;
        }

        /* Independent hover */
        .custom-btn-github:hover {
            background: #3b82f6 !important;
            color: white !important;
        }
        .dark .custom-btn-github:hover {
            background: #3b82f6 !important;
            color: white !important;
        }

        /* Synchronized View More + Arrow hover */
        .group-projects:hover .custom-btn,
        .group-projects:hover .custom-btn-arrow {
            background: #3b82f6 !important;
            color: white !important;
        }
        .dark .group-projects:hover .custom-btn,
        .dark .group-projects:hover .custom-btn-arrow {
            background: #3b82f6 !important;
            color: white !important;
        }

        .slide-overlay {
            position: absolute;
            bottom: 3rem;
            left: 5%;
            z-index: 110;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        .slide-line {
            width: 140px;
            height: 1px;
            position: relative;
        }
        .slide-progress {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            will-change: width;
        }
      `}</style>
      
      <div className="argent-slider-wrapper">
        <motion.div style={{ opacity: bgOpacity }}>
          <div className="mist-overlay" />
          <motion.div className="project-list" style={{ y: currentY }}>
            {PROJECT_DATA.map((data, i) => (
              <div key={i} className="project" style={{ top: `${i * 100}vh` }}>
                <motion.img src={data.image} alt={data.title} style={{ y: imageY }} />
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 z-[100] flex items-center justify-center pointer-events-none">
          <motion.div 
            style={{ y: finalContainerY, willChange: "transform" }}
            className="flex flex-col items-center"
          >
            <motion.div style={{ opacity: mainUIOpacity }} className="minimap-bar-outer">
              <div className="minimap-content-viewport">
                <div className="minimap-img-preview">
                  <motion.div style={{ y: contentInternalY }} className="w-full h-full relative">
                    {PROJECT_DATA.map((data, i) => (
                      <div key={i} className="minimap-img-item" style={{ top: `${i * ITEM_HEIGHT}px` }}>
                        <img src={data.image} alt={data.title} className="block w-full h-full object-cover" />
                      </div>
                    ))}
                  </motion.div>
                </div>
                <div className="minimap-info-list">
                  <motion.div style={{ y: contentInternalY }} className="w-full h-full relative">
                    {PROJECT_DATA.map((data, i) => {
                      const num = (i + 1).toString().padStart(2, "0");
                      return (
                        <div key={i} className="minimap-item-info" style={{ top: `${i * ITEM_HEIGHT}px` }}>
                          {/* Top Row: Floating Glass Badges */}
                          <div className="flex items-center justify-between w-full pointer-events-auto">
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-background/90 dark:bg-black/85 backdrop-blur-md border border-foreground/10 shadow-lg">
                              <span className="font-mono text-xs font-bold text-primary">{num}</span>
                              <span className="h-3 w-[1px] bg-foreground/20" />
                              <h4 className="text-xs md:text-sm font-bold tracking-tight uppercase text-foreground">
                                {data.title}
                              </h4>
                            </div>
                            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-background/90 dark:bg-black/85 backdrop-blur-md border border-foreground/10 shadow-lg">
                              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{data.category}</span>
                              <span className="text-[11px] font-mono font-bold text-foreground/70">{data.year}</span>
                            </div>
                          </div>

                          {/* Middle: 100% full-width view of the dashboard */}
                          <div className="flex-1 pointer-events-none" />

                          {/* Bottom Row: Floating Glass Badges */}
                          <div className="flex items-center justify-between w-full pointer-events-auto">
                            <div className="px-4 py-2 rounded-2xl bg-background/90 dark:bg-black/85 backdrop-blur-md border border-foreground/10 shadow-lg max-w-md hidden sm:block">
                              <p className="font-medium text-[11px] md:text-xs text-foreground/90 leading-relaxed">
                                {data.description}
                              </p>
                            </div>
                            <Link 
                                href={`/projects/${data.slug}`} 
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl pointer-events-auto"
                            >
                              <span>View Module</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="h-[160px] w-full flex items-center justify-center pt-8">
              <motion.div 
                style={{ 
                  opacity: buttonOpacity,
                  pointerEvents: useTransform(smoothProgress, (v) => v > projectArea ? "auto" : "none")
                }}
              >
                <div className="flex items-center gap-4 pointer-events-auto">
                  <MagneticEffect>
                    <a 
                      href="https://www.yeneschooldocumentation.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="custom-btn-github hover:scale-110 active:scale-95 transition-transform shadow-xl flex items-center justify-center p-3 rounded-full bg-[#60a5fa] border border-blue-400 text-white shadow-blue-500/20"
                      title="YeneSchool Documentation"
                    >
                      <BookOpen className="w-5 h-5 text-white" />
                    </a>
                  </MagneticEffect>
                  
                  <MagneticEffect>
                    <div className="group-projects flex items-center gap-2">
                      <Link href="/projects" className="custom-btn group-hover:scale-105 active:scale-95 group-hover:shadow-2xl">
                        Explore All 24 Modules
                      </Link>
                      <Link href="/projects" className="custom-btn-arrow group-hover:scale-110 active:scale-95 transition-transform shadow-xl">
                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </MagneticEffect>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.05, projectArea, projectArea + 0.05], [0, 1, 1, 0]) }}
          className="slide-overlay"
        >
           <span className="text-foreground/40 font-mono text-[10px] tracking-[0.5em] uppercase">Page</span>
           <div className="slide-line bg-foreground/10">
              <motion.div 
                className="slide-progress bg-foreground" 
                style={{ width: useTransform(smoothProgress, [0, projectArea], ["0%", "100%"]) }} 
              />
           </div>
           <motion.span className="text-foreground font-mono text-[11px] tabular-nums font-bold">
              {useTransform(smoothProgress, (v) => {
               const idx = Math.min(Math.floor(v / projectStep), PROJECT_DATA.length - 1);
               return `${idx + 1} / ${PROJECT_DATA.length}`;
             })}
           </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
