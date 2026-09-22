'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, useMotionValue } from 'framer-motion';
import { cn } from "@/lib/utils";
import { ChevronDown } from 'lucide-react';
import { SchoolFeatureVisual } from './SchoolFeatureVisual';

const pages = [
    {
        leftBgImage: null,
        rightBgImage: null,
        leftComponent: <SchoolFeatureVisual type="ai" />,
        leftContent: null,
        rightContent: {
            heading: 'Autonomous AI Director',
            description: 'Conducts automated 07:00 AM executive audits while you sleep. Evaluates yesterday’s student attendance, tracks syllabus pacing against the Ethiopian term calendar, balances fee ledgers, and delivers pre-resolved operational actions to the school principal.',
            skills: ["Autonomous Daily Audits", "Executive Cockpit"],
            hoverColor: "bg-foreground/[0.02]"
        },
    },
    {
        leftBgImage: null,
        rightBgImage: null,
        leftComponent: null,
        rightComponent: <SchoolFeatureVisual type="finance" />,
        leftContent: {
            heading: 'Cashless Tuition & Finance',
            description: 'Eliminates paper bank deposit slips and bursar queues. Direct native integrations with Commercial Bank of Ethiopia (CBE Birr), Telebirr, and Chapa reconcile tuition payments in real time with automated SMS and Telegram digital receipts.',
            skills: ["CBE Birr & Telebirr Direct", "Instant Reconciliation"],
            hoverColor: "bg-foreground/[0.02]"
        },
        rightContent: null,
    },
    {
        leftBgImage: null,
        rightBgImage: null,
        leftComponent: <SchoolFeatureVisual type="pedagogy" />,
        leftContent: null,
        rightContent: {
            heading: '5E Pedagogy & Remediation',
            description: 'Empowers educators with 1-click 5E lesson planning (Engage, Explore, Explain, Elaborate, Evaluate) aligned with official Ethiopian textbooks, paired with diagnostic AI that generates targeted confidence booster practice questions for Grade 12 exam success.',
            skills: ["5E Lesson Bundles", "Grade 12 Remediation"],
            hoverColor: "bg-foreground/[0.02]"
        },
    },
    {
        isBridge: true,
        heading: 'Discover how 24 unified modules put school operations on true autopilot',
        subheading: 'SCROLL TO EXPLORE',
    }
];

export default function ScrollAdventure() {
    const [currentPage, setCurrentPage] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        mass: 0.1,
        restDelta: 0.001
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const totalPages = pages.length;
        const step = 1 / totalPages;
        const index = Math.min(Math.floor(latest / step) + 1, totalPages);
        if (currentPage !== index) setCurrentPage(index);
    });
    const { scrollYProgress: enterProgressRaw } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    // Spring physics wrapper for the entrance to mirror the buttery smooth exit
    const enterProgress = useSpring(enterProgressRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const enterScale = useTransform(enterProgress, [0, 1], [0.85, 1]);
    const enterOpacity = useTransform(enterProgress, [0, 1], [0, 1]);
    const enterBorderRadius = useTransform(enterProgress, [0, 1], ["40px", "0px"]);

    return (
        <div ref={containerRef} className="relative h-[800vh] w-full pointer-events-none">
            <motion.div
                style={{ scale: enterScale, opacity: enterOpacity, borderRadius: enterBorderRadius }}
                className="sticky top-0 h-screen w-full overflow-hidden bg-background dark:bg-black pointer-events-auto origin-center"
            >
                {pages.map((page, i) => {
                    if ('isBridge' in page) {
                        return (
                            <BridgeSlide
                                key={i}
                                page={page}
                                isActive={currentPage === i + 1}
                                scrollProgress={smoothProgress}
                                index={i}
                            />
                        );
                    }
                    return (
                        <PageSlide
                            key={i}
                            page={page}
                            isActive={currentPage === i + 1}
                            scrollProgress={smoothProgress}
                            index={i}
                        />
                    );
                })}

                {/* Global Progress Line Removed */}
            </motion.div>
        </div>
    );
}

function PageSlide({ page, isActive, scrollProgress, index }: { page: any, isActive: boolean, scrollProgress: any, index: number }) {
    const leftHasVisual = !!page.leftBgImage || !!page.leftComponent;
    const rightHasVisual = !!page.rightBgImage || !!page.rightComponent;

    const totalPages = pages.length;
    const step = 1 / totalPages;
    const base = index * step;

    let enterStart = index === 0 ? -0.1 : base - step / 4;
    let enterEnd = index === 0 ? -0.05 : base + step / 4;
    let exitStart = base + step * 0.75;
    let exitEnd = base + step * 1.25;

    if (index === 0) {
        exitStart = 0.125;
        exitEnd = 0.3125;
    } else if (index === 1) {
        enterStart = 0.125;
        enterEnd = 0.3125;
    }

    const leftY = useTransform(
        scrollProgress,
        [enterStart, enterEnd, exitStart, exitEnd],
        [leftHasVisual ? "-120%" : "120%", "0%", "0%", leftHasVisual ? "-120%" : "120%"]
    );



    const rightY = useTransform(
        scrollProgress,
        [enterStart, enterEnd, exitStart, exitEnd],
        [rightHasVisual ? "-120%" : "120%", "0%", "0%", rightHasVisual ? "-120%" : "120%"]
    );

    const zIndex = useTransform(
        scrollProgress,
        [enterStart, enterEnd, exitStart, exitEnd],
        [10, 20, 20, 10]
    );

    return (
        <motion.div style={{ zIndex }} className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 md:p-8 lg:p-12">
            {/* Unified Card Container */}
            <div className="relative w-full h-full max-w-[1600px] flex pointer-events-auto">

                {/* LEFT HALF OF THE SPLIT CARD */}
                <motion.div
                    style={{ y: leftY }}
                    className="relative w-1/2 h-full bg-background dark:bg-black z-10 rounded-l-3xl overflow-hidden"
                >
                    <div className="w-full h-full relative overflow-hidden">
                        {page.leftComponent ? (
                            <BlendedVisual component={page.leftComponent} side="left" />
                        ) : page.leftBgImage ? (
                            <BlendedVisual src={page.leftBgImage} side="left" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-start p-8 md:p-16 lg:p-24 relative group">
                                <motion.div
                                    className={cn("absolute inset-0 z-0", page.leftContent?.hoverColor || "bg-primary/5")}
                                    initial={{ height: 0 }}
                                    whileHover={{ height: '100%' }}
                                    transition={{ duration: 0.4 }}
                                />
                                {page.leftContent && <EditorialContent content={page.leftContent} index={index} />}
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* RIGHT HALF OF THE SPLIT CARD */}
                <motion.div
                    style={{ y: rightY }}
                    className="relative w-1/2 h-full bg-background dark:bg-black z-10 rounded-r-3xl overflow-hidden"
                >
                    <div className="w-full h-full relative overflow-hidden">
                        {page.rightComponent ? (
                            <BlendedVisual component={page.rightComponent} side="right" />
                        ) : page.rightBgImage ? (
                            <BlendedVisual src={page.rightBgImage} side="right" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-start p-8 md:p-16 lg:p-24 relative group">
                                <motion.div
                                    className={cn("absolute inset-0 z-0", page.rightContent?.hoverColor || "bg-primary/5")}
                                    initial={{ height: 0 }}
                                    whileHover={{ height: '100%' }}
                                    transition={{ duration: 0.4 }}
                                />
                                {page.rightContent && <EditorialContent content={page.rightContent} index={index} />}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

function StaggeredRevealHeadline({ text, isActive }: { text: string; isActive: boolean }) {
    const lines = text.split('\n');

    return (
        <span className="inline-flex flex-col items-center justify-center gap-1 md:gap-2">
            {lines.map((line, lineIdx) => {
                const words = line.split(' ');
                return (
                    <span key={lineIdx} className="inline-flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 overflow-hidden py-1">
                        {words.map((word, wordIdx) => {
                            const delay = (lineIdx * 4 + wordIdx) * 0.045;
                            return (
                                <span key={wordIdx} className="inline-block overflow-hidden py-0.5">
                                    <motion.span
                                        initial={{ y: "115%", opacity: 0, filter: "blur(8px)" }}
                                        animate={isActive ? { y: "0%", opacity: 1, filter: "blur(0px)" } : { y: "115%", opacity: 0, filter: "blur(8px)" }}
                                        transition={{
                                            duration: 0.75,
                                            delay: delay,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        className="inline-block text-foreground dark:text-white font-semibold tracking-tight transition-transform duration-300 hover:scale-105"
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </span>
                );
            })}
        </span>
    );
}

function BridgeSlide({ page, isActive, scrollProgress, index }: { page: any, isActive: boolean, scrollProgress: any, index: number }) {
    const step = 1 / pages.length;
    const base = index * step;

    // Adjusted exit to be ZERO-GAP: text stays visible until the very end of the scroll
    const opacity = useTransform(scrollProgress, [base - step / 4, base + step / 4, 0.98, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollProgress, [base - step / 4, base + step / 4, 0.98, 1], [50, 0, 0, -50]);

    return (
        <motion.div
            style={{ opacity, zIndex: 30 }}
            className={cn(
                "absolute inset-0 bg-background dark:bg-black flex flex-col items-center justify-center p-8 md:p-12 text-center",
                isActive ? "pointer-events-auto" : "pointer-events-none"
            )}
        >
            <motion.div style={{ y }} className="space-y-12 max-w-[1200px] w-full px-[5%]">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground dark:text-white leading-[1.15] font-sans">
                    <StaggeredRevealHeadline
                        text={"Discover how 24 unified modules \nput school operations on true autopilot"}
                        isActive={isActive}
                    />
                </h2>
                <div className="flex flex-col items-center gap-4 opacity-40 pt-6">
                    <span className="text-[11px] font-mono font-bold tracking-[0.4em] uppercase text-foreground dark:text-white">
                        {page.subheading}
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5 text-foreground dark:text-white" />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function BlendedVisual({ src, component, side }: { src?: string, component?: React.ReactNode, side: 'left' | 'right' }) {
    return (
        <div className="relative w-full h-full overflow-hidden bg-background dark:bg-black flex items-center justify-center">
            {src ? (
                <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform grayscale hover:grayscale-0 transition-[filter] duration-1000"
                    style={{ backgroundImage: `url(${src})` }}
                />
            ) : component ? (
                <div className="relative z-0 w-full h-full flex items-center justify-center p-4 md:p-8">
                    {component}
                </div>
            ) : null}
            {/* Horizontal Blend (Masked to avoid WebKit transparent color interpolation bug) */}
            <div
                className="absolute inset-0 pointer-events-none z-10 bg-background dark:bg-black hidden dark:block"
                style={{
                    WebkitMaskImage: side === 'left'
                        ? 'linear-gradient(to right, transparent, black)'
                        : 'linear-gradient(to left, transparent, black)',
                    maskImage: side === 'left'
                        ? 'linear-gradient(to right, transparent, black)'
                        : 'linear-gradient(to left, transparent, black)'
                }}
            />
            {/* Vertical Blend (Masked to avoid WebKit transparent color interpolation bug) */}
            <div
                className="absolute inset-0 pointer-events-none z-10 bg-background dark:bg-black opacity-40 hidden dark:block"
                style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black, transparent, black)',
                    maskImage: 'linear-gradient(to bottom, black, transparent, black)'
                }}
            />
        </div>
    );
}

function EditorialContent({ content, index }: { content: any, index: number }) {
    return (
        <div className="flex flex-col items-start text-left space-y-10 max-w-2xl w-full relative z-10">
            <div className="space-y-5">
                <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono font-bold tracking-[0.4em] text-foreground/50 uppercase">
                        FEATURE — 0{index + 1}
                    </span>
                    <div className="h-[1px] w-10 bg-foreground/15" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-tight text-foreground font-sans transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 pointer-events-auto cursor-default origin-left">
                    {content.heading}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-lg">
                    {content.description}
                </p>
            </div>
            {content.skills && (
                <div className="flex flex-wrap gap-3 pt-2">
                    {content.skills.map((skill: string) => (
                        <MagneticTag key={skill} text={skill} />
                    ))}
                </div>
            )}
        </div>
    );
}

function MagneticTag({ text }: { text: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.25);
        y.set((e.clientY - centerY) * 0.25);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-default p-1 -m-1 pointer-events-auto"
        >
            <motion.div
                style={{ x: springX, y: springY }}
                className="group/badge relative overflow-hidden text-[11px] md:text-xs font-semibold tracking-wide text-foreground/80 border border-foreground/10 px-4 py-2 rounded-lg bg-foreground/[0.03] backdrop-blur-md hover:border-foreground/30 transition-colors duration-300"
            >
                <div className="absolute inset-0 translate-y-[101%] group-hover/badge:translate-y-0 transition-transform duration-300 ease-out z-0 bg-foreground" />
                <span className="relative z-10 transition-colors duration-300 group-hover/badge:text-background">{text}</span>
            </motion.div>
        </div>
    );
}

