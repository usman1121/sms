import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowDownRight, Bot, Zap, ExternalLink, MessageSquare, BookOpen } from 'lucide-react';
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import gsap from "gsap";
import { Spotlight } from "@/components/ui/spotlight-new";

export function HeroVisual({ isExiting = false }: { isExiting?: boolean }) {
  const { personal } = portfolioData;
  const [tooltip, setTooltip] = useState<{ show: boolean; text: string; x: number; y: number; icon: 'zap' | 'bot' | null }>({
    show: false,
    text: '',
    x: 0,
    y: 0,
    icon: null
  });

  const zapRef = useRef(null);
  const zapSmallRef = useRef(null);
  const botRef = useRef(null);

  useEffect(() => {
    if (!isExiting) return;

    const ctx = gsap.context(() => {
      // Zap pulsing - Energetic heartbeat effect
      gsap.to([zapRef.current, zapSmallRef.current], {
        scale: 1.2,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        force3D: true
      });

      // Bot floating - Responsive and smooth
      gsap.to(botRef.current, {
        rotation: 8,
        y: -10,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true
      });
    });

    return () => ctx.revert();
  }, [isExiting]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen w-full flex flex-col bg-background text-foreground overflow-hidden selection:bg-primary/20"
    >
      {/* Background Pattern */}
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_#888_0.5px,_transparent_0.5px)] dark:bg-[radial-gradient(circle,_#444_0.5px,_transparent_0.5px)] opacity-20 [background-size:24px_24px]" />

      {/* Spotlight Effect - Dramatic lighting */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <Spotlight
          duration={10}
          xOffset={120}
          translateY={-300}
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .15) 0, hsla(0, 0%, 100%, .05) 50%, transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .1) 0, hsla(0, 0%, 100%, .02) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .08) 0, hsla(0, 0%, 100%, 0) 80%, transparent 100%)"
        />
      </div>

      <main className="relative flex-1 flex flex-col justify-center pt-40 pb-20 z-10 max-w-[105rem] w-full mx-auto">
        <div className="flex relative gap-4 px-6 md:items-center w-full flex-col justify-center">

          {/* Follow-Cursor Tooltip */}
          <AnimatePresence>
            {tooltip.show && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="fixed pointer-events-none z-[100] flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold px-4 py-2.5 rounded-full shadow-2xl"
                style={{
                  left: tooltip.x,
                  top: tooltip.y,
                  x: "-50%",
                  y: "-150%", // offset slightly above the cursor
                }}
              >
                {tooltip.icon === 'zap' && <ExternalLink className="w-4 h-4" />}
                {tooltip.icon === 'bot' && <MessageSquare className="w-4 h-4" />}
                <span className="text-sm">{tooltip.text}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Line 1: AI DIRECTOR */}
          <div className="md:flex gap-8 items-center relative">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] md:text-xs text-muted-foreground text-start md:text-right leading-relaxed max-w-[200px] md:max-w-[220px] font-medium uppercase tracking-[0.2em]"
            >
              The World's First AI-Director-Driven School Operating System
            </motion.p>
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,11vw,13rem)] font-black leading-[0.85] tracking-tighter text-shiny will-change-transform px-4"
              >
                AI DIRECTOR
              </motion.h1>
            </div>
          </div>

          {/* Line 2: SCHOOL [ICON] OS */}
          <div className="md:flex gap-8 items-center relative">
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,11vw,13rem)] md:flex items-center font-black leading-[0.85] tracking-tighter text-shiny will-change-transform px-4"
              >
                <span className="">SCHOOL</span>
                <div
                  ref={zapRef}
                  className="hidden lg:block mx-[0.05em] relative cursor-pointer group"
                  onClick={() => window.location.href = '#features'}
                  onMouseEnter={(e) => setTooltip({ show: true, text: "07:00 AM Morning Briefing on Autopilot", icon: 'zap', x: e.clientX, y: e.clientY })}
                  onMouseMove={(e) => setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))}
                  onMouseLeave={() => setTooltip(prev => ({ ...prev, show: false }))}
                >
                  <Zap className="w-[0.8em] h-[0.8em] text-sky-400 group-hover:text-sky-300 transition-colors" strokeWidth={1.5} />
                </div>
                <div
                  ref={zapSmallRef}
                  className="block lg:hidden mx-[0.02em] relative cursor-pointer group"
                  onClick={() => window.location.href = '#features'}
                  onMouseEnter={(e) => setTooltip({ show: true, text: "07:00 AM Morning Briefing on Autopilot", icon: 'zap', x: e.clientX, y: e.clientY })}
                  onMouseMove={(e) => setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))}
                  onMouseLeave={() => setTooltip(prev => ({ ...prev, show: false }))}
                >
                  <Zap className="w-[0.8em] h-[0.8em] text-sky-400 group-hover:text-sky-300 transition-colors" strokeWidth={2} />
                </div>
                <span className="">OS</span>
              </motion.h1>
            </div>
          </div>

          {/* Line 3: AUTO [ICON] PILOT */}
          <div className="md:flex gap-8 items-center relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,11vw,13rem)] md:flex items-center font-black leading-[0.85] tracking-tighter text-shiny will-change-transform px-4"
            >
              <span className="">AUTO</span>
              <div
                ref={botRef}
                className="mx-[0.05em] relative cursor-pointer group"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  window.dispatchEvent(new CustomEvent('portfolio:toggle-chatbot', {
                    detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
                  }));
                }}
                onMouseEnter={(e) => setTooltip({ show: true, text: "Talk to YeneSchool AI Assistant", icon: 'bot', x: e.clientX, y: e.clientY })}
                onMouseMove={(e) => setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))}
                onMouseLeave={() => setTooltip(prev => ({ ...prev, show: false }))}
              >
                <Bot className="w-[0.85em] h-[0.85em] text-yellow-500 fill-yellow-500/10 group-hover:text-yellow-400 group-hover:fill-yellow-400/20 transition-colors" />
              </div>
              <span className="">PILOT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[10px] md:text-xs text-muted-foreground pt-4 md:pt-8 leading-relaxed max-w-[250px] md:max-w-[200px] font-medium uppercase tracking-widest"
            >
              Zero spreadsheets. Morning audits, 5E lesson prep, and student booster exams on autopilot.
            </motion.p>
          </div>
        </div>

        {/* Separator Section */}
        <div className="mx-auto max-w-[105rem] w-full px-8 md:px-20 mt-12 md:mt-24">
          <div className="flex items-center gap-6">
            <Separator className="flex-1 h-[1px] bg-foreground/10 hidden md:block" />
            <div className="text-[10px] md:text-xs whitespace-nowrap font-bold tracking-[0.3em] text-muted-foreground uppercase">
              ADDIS ABABA, ET — 2026
            </div>
            {/* Documentation Website Link */}
            <a
              href="https://www.yeneschooldocumentation.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
            >
              <motion.div
                className="relative flex items-center bg-zinc-900/90 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 h-12 w-12 group-hover:w-48 rounded-full transition-all duration-500 ease-[0.23,1,0.32,1] overflow-hidden shadow-xl border border-white/10"
              >
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-150 text-[10px] font-black uppercase tracking-widest text-white pl-6 pr-12">
                  Documentation
                </span>
                <div className="absolute right-0 flex items-center justify-center size-12 text-white group-hover:rotate-45 transition-transform duration-500">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.div>
            </a>

            <Link
              href="/contact"
              className="group flex items-center"
            >
              <motion.div
                className="relative flex items-center bg-[#60a5fa] hover:bg-blue-500 text-white h-12 w-12 group-hover:w-48 rounded-full transition-all duration-500 ease-[0.23,1,0.32,1] overflow-hidden shadow-xl shadow-blue-500/25"
              >
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-150 text-[10px] font-black uppercase tracking-widest text-white pl-6 pr-12">
                  Book Live Demo
                </span>
                <div className="absolute right-0 flex items-center justify-center size-12 text-white group-hover:rotate-45 transition-transform duration-500">
                  <ArrowDownRight className="w-5 h-5" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
