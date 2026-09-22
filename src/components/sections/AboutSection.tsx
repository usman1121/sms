"use client";

import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { WarpBackground } from "@/components/ui/warp-background";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import ImageTrail from "@/components/ImageTrail";
import Image from "next/image";
import InfiniteMenu from "@/components/InfiniteMenu";
import { portfolioData } from "@/data/portfolio";
import { BeamDivider } from "@/components/ui/BeamDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Github, Linkedin, Instagram, MessageSquare, ArrowRight, ArrowUpRight, Check, Sparkles, Building2 } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useCountUp } from "@/hooks/useCountUp";
import { SocialCorner } from "@/components/layout/SocialCorner";
import { cn } from "@/lib/utils";

import Testimonial1 from "@/components/ui/testimonial-1";
import { IdentitySequence } from "./IdentitySequence";
import ScrollAdventure from "@/components/ui/animated-scroll";
import { ArgentLoopInfiniteSlider } from "@/components/ui/argent-loop-infinite-slider";
import { HorizontalTimeline } from "@/components/ui/horizontal-timeline";

const showcaseMembers = [
    // 1. Leadership & Directors
    ...portfolioData.experiences.filter(exp => exp.id === 'prof-7').map(exp => ({
        id: exp.id,
        name: exp.company,
        role: exp.position,
        description: exp.description,
        period: "Autonomous 07:00 AM Briefings",
        image: exp.image || "/yeneschool/directordashbaord.png",
        social: { website: '/projects' }
    })),
    // 2. Teachers
    ...portfolioData.experiences.filter(exp => exp.id === 'prof-3').map(exp => ({
        id: exp.id,
        name: exp.company,
        role: exp.position,
        description: exp.description,
        period: "5E Lesson Frameworks",
        image: exp.image || "/yeneschool/teacherleaderboard.png",
        social: { website: '/projects' }
    })),
    // 3. Finance & Bursars
    ...portfolioData.experiences.filter(exp => exp.id === 'prof-6').map(exp => ({
        id: exp.id,
        name: exp.company,
        role: exp.position,
        description: exp.description,
        period: "Telebirr & CBE Cashless",
        image: exp.image || "/yeneschool/financedashbaord.png",
        social: { website: '/projects' }
    })),
    // 4. Registrars
    ...portfolioData.experiences.filter(exp => exp.id === 'lead-2').map(exp => ({
        id: exp.id,
        name: exp.company,
        role: exp.position,
        description: exp.description,
        period: "Ethiopian Calendar & Reports",
        image: exp.image || "/yeneschool/quartersummary.png",
        social: { website: '/projects' }
    })),
    // 5. Parents
    ...portfolioData.experiences.filter(exp => exp.id === 'prof-8').map(exp => ({
        id: exp.id,
        name: exp.company,
        role: exp.position,
        description: exp.description,
        period: "Real-Time Telegram Alerts",
        image: exp.image || "/yeneschool/parent.png",
        social: { website: '/projects' }
    })),
    // 6. View more
    {
        id: 'view-more',
        name: 'Explore All 23 Modules',
        role: 'Unified School Operating System',
        image: '/yeneschool/schoolanalytics.png',
        social: { website: '/projects' }
    }
];

const GALLERY_IMAGES = [
    "/yeneschool/directordashbaord.png",
    "/yeneschool/financedashbaord.png",
    "/yeneschool/parentdashbaord.png",
    "/yeneschool/quartersummary.png",
    "/yeneschool/schoolanalytics.png",
    "/yeneschool/schooldatahealth.png",
    "/yeneschool/teacherleaderboard.png",
    "/yeneschool/studentleaderboard.png",
    "/yeneschool/studentrisk.png",
    "/yeneschool/studentpromotion.png",
    "/yeneschool/schoolsetting.png",
    "/yeneschool/syllubs.png",
    "/yeneschool/admin.png"
];

const AboutLeadInImageStack = () => {
    const [randomData, setRandomData] = useState<{ src: string, rotate: number, x: number, y: number }[]>([]);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!mounted) return;
        const shuffled = [...GALLERY_IMAGES].sort(() => 0.5 - Math.random()).slice(0, 2);
        const data = shuffled.map((src, i) => {
            const offsetMultiplier = i === 0 ? -1 : 1;
            return {
                src,
                rotate: Math.round(offsetMultiplier * 15 + (Math.random() * 8 - 4)),
                x: Math.round(offsetMultiplier * 25 + (Math.random() * 10 - 5)),
                y: Math.round(Math.random() * 10 - 5),
            };
        });
        setRandomData(data);
    }, [mounted]);

    if (!mounted || randomData.length === 0) return null;

    return (
        <div className="relative flex items-center justify-center w-56 h-32 md:w-72 md:h-44 mb-8 lg:mb-10 overflow-visible">
            {randomData.map((item, i) => (
                <div
                    key={item.src}
                    className="absolute w-24 h-28 md:w-32 md:h-40 rounded-xl overflow-hidden border-[4px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] bg-white"
                    style={{
                        zIndex: i === 1 ? 20 : 10,
                        transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rotate}deg)`,
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={item.src}
                            alt="Gallery Piece"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100px, 120px"
                            priority={i === 1}
                        />
                        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                    </div>
                </div>
            ))}
        </div>
    );
};

// --- Utility: Slide Reveal (Smooth & Cinematic) ---
const SlideReveal = ({ children, delay = 0, y = 30 }: { children: React.ReactNode; delay?: number; y?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95, y }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1],
            scale: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }}
    >
        {children}
    </motion.div>
);

// --- Component 1: Editorial Lead-in ---
const AboutLeadIn = () => {
    const t = useTranslations('about');

    return (
        <div className="w-full max-w-[1650px] mx-auto px-6 py-6 flex justify-center items-center">
            {/* The Reference Card Container (Gambar 1 Style with Dark/Light Support) */}
            <motion.div
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 80, scale: 0.96 },
                    show: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1, 
                        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                    }
                }}
                className="relative w-full bg-white dark:bg-black border border-[#60a5fa]/30 dark:border-[#60a5fa]/40 p-6 md:p-12 lg:p-16 overflow-hidden shadow-xl dark:shadow-2xl transition-colors duration-500 group"
            >

                {/* 1. Grid Background Overlay (Dynamic Colors) */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#00000008_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#ffffff08_1px,_transparent_1px)] bg-[size:20px_20px] pointer-events-none transition-opacity" />

                {/* 2. School Accent Corner Tabs */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#60a5fa] -translate-x-1 translate-y-[-50%] z-10" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#60a5fa] translate-x-1 translate-y-[-50%] z-10" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-[#60a5fa] -translate-x-1 translate-y-[50%] z-10" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#60a5fa] translate-x-1 translate-y-[50%] z-10" />

                {/* 3. Glare Sweep Effect (Premium Hover Shine via Framer Motion) */}
                <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                    <motion.div
                        variants={{
                            hidden: { left: "-150%" },
                            show: { left: "-150%" },
                            hover: { left: "150%" }
                        }}
                        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-y-0 w-[150%] md:w-[75%] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent skew-x-[-25deg]"
                    />
                </div>

                {/* 4. Content Layer */}
                <div className="relative z-10">
                    {/* Top Tagline */}
                    <div className="flex justify-between items-start mb-6 md:mb-10">
                        <span className="text-[#60a5fa] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">{t('leadIn.tagline')}</span>
                        <span className="text-zinc-400 dark:text-zinc-600 text-[9px] font-mono tracking-widest uppercase hidden md:block">{t('leadIn.role')}</span>
                    </div>

                    {/* Massive Typography - Quote Style */}
                    <div className="mb-8 md:mb-14 relative cursor-default">
                        {/* Original Text with glow */}
                        <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[76px] xl:text-[88px] font-bold tracking-tight leading-[0.92] text-zinc-900 dark:text-white transition-all duration-700 group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            <span className="text-zinc-300 dark:text-zinc-700 mr-2 transition-colors duration-700 group-hover:text-zinc-400 dark:group-hover:text-zinc-500">"</span>
                            {t('leadIn.headlineAI')} <span className="text-zinc-400 dark:text-zinc-500 font-medium transition-colors duration-700 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">{t('leadIn.headlineData')}</span> <br className="hidden md:block" />
                            <span className="font-serif italic font-normal text-zinc-900 dark:text-white lowercase opacity-90 transition-opacity duration-700 group-hover:opacity-100">{t('leadIn.headlineSoftware')}</span>
                            <span className="text-zinc-300 dark:text-zinc-700 ml-1 transition-colors duration-700 group-hover:text-zinc-400 dark:group-hover:text-zinc-500">."</span>
                        </h2>
                    </div>

                    {/* Detail Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-zinc-100 dark:border-zinc-900 pt-8 md:pt-12">
                        {/* Left narrative */}
                        <div className="md:col-span-5">
                            <p
                                className="text-base md:text-lg lg:text-xl font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed tracking-tight"
                                dangerouslySetInnerHTML={{ __html: t.raw('leadIn.thesis') }}
                            />
                        </div>

                        {/* Right columns */}
                        <div className="md:col-span-7 flex flex-col sm:flex-row gap-8 text-[13px]">
                            <div className="flex-1 space-y-3">
                                <span className="text-zinc-800 dark:text-zinc-200 font-bold uppercase tracking-widest block border-b border-zinc-100 dark:border-zinc-900 pb-3">Scope & Platform</span>
                                <p className="text-zinc-500 leading-relaxed">
                                    {t('leadIn.scope')}
                                </p>
                                <p className="text-[#60a5fa] font-medium italic">
                                    {t('leadIn.bridging')}
                                </p>
                            </div>
                            <div className="flex-1 space-y-3 flex flex-col">
                                <span className="text-zinc-800 dark:text-zinc-200 font-bold uppercase tracking-widest block border-b border-zinc-100 dark:border-zinc-900 pb-3">Integration</span>
                                <p className="text-zinc-500 leading-relaxed">
                                    {t('leadIn.integration')}
                                </p>
                                <div className="mt-6 md:mt-auto pt-4">
                                    <span className="text-3xl lg:text-4xl font-signature text-zinc-900 dark:text-white/90">{t('leadIn.signature')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// --- Tech Stack Logos (from portfolio.ts project data) ---
const TECH_LOGOS = [
    { name: "Python", slug: "python" },
    { name: "TensorFlow", slug: "tensorflow" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "React", slug: "react" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Docker", slug: "docker" },
    { name: "FastAPI", slug: "fastapi" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "LangChain", slug: "langchain" },
    { name: "Firebase", slug: "firebase" },
    { name: "Spring Boot", slug: "springboot" },
    { name: "Solidity", slug: "solidity" },
    { name: "Go", slug: "go" },
    { name: "Prisma", slug: "prisma" },
    { name: "Flask", slug: "flask" },
];

// --- Component 2: Core Engineering Panel ---
// --- Component 1: Core Engineering Panel (Stats) ---
const CoreEngineeringPanel = ({ scrollYProgress }: { scrollYProgress: any }) => {
    // Panel 1 exits between 0.45 and 0.65
    const opacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.45, 0.6], [1, 0.9]);
    const blur = useTransform(scrollYProgress, [0.45, 0.6], [0, 10]);

    return (
        <div className="w-screen h-full flex items-center justify-center bg-background transition-colors duration-500 overflow-hidden">
            <motion.div
                style={{
                    opacity,
                    scale,
                    filter: `blur(${blur}px)`,
                    willChange: "transform, opacity, filter",
                }}
                className="w-full h-full flex items-center justify-center"
            >
                <Testimonial1 />
            </motion.div>
        </div>
    );
};

// EmergingResearchPanel removed as per user request


// --- Component 3: Profile Intersection ---
// Optimized ProfilePanel (Restored to Original Design with Cinematic Transitions)
// ProfilePanel removed and replaced by IdentitySequence component


// --- Unified Typography-Focused Card for Bitwise Symmetry ---
const ClosingCard = ({ title, subtitle, desc, index, direction }: { title: string, subtitle: string, desc: string, index: number, direction: 'left' | 'right' }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative h-[50vh] flex flex-col justify-center ${direction === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
    >
        <div className={`flex flex-col gap-6 relative z-10 w-full px-4 ${direction === 'right' ? 'items-end' : 'items-start'}`}>
            {/* Minimalist Index & Role Indicator */}
            <div className={`flex items-center gap-6 w-full ${direction === 'left' ? 'flex-row-reverse' : ''}`}>
                <span className="text-xl md:text-2xl font-serif-elegant italic text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-px bg-foreground/10 flex-1 group-hover:bg-primary/30 transition-colors duration-500" />
                <span className="text-[11px] md:text-[13px] font-mono uppercase tracking-[0.3em] text-primary/80 font-semibold group-hover:tracking-[0.4em] transition-all duration-700">
                    {subtitle}
                </span>
            </div>

            {/* Title with subtle hover shift */}
            <h4 className={`text-4xl md:text-5xl lg:text-[64px] font-black text-foreground tracking-tighter leading-[1.1] transition-all duration-500 ${direction === 'right' ? 'group-hover:pr-4 origin-right' : 'group-hover:pl-4 origin-left'}`}>
                {title}
            </h4>

            {/* Description fading in slightly on hover */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-muted-foreground/60 leading-relaxed max-w-[85%] font-medium mt-4 group-hover:text-foreground/90 transition-colors duration-500 line-clamp-3">
                {desc}
            </p>
        </div>
    </motion.div>
);

const ViewMoreCard = ({ href, title }: { href: string, title: string }) => {
    const t = useTranslations('about');
    return (
        <Link href={href} className="group block h-[50vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-center justify-center gap-10"
            >
                {/* Minimalist circular arrow */}
                <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700 ease-out">
                    <ArrowRight className="w-10 h-10 text-primary group-hover:text-primary-foreground group-hover:translate-x-2 transition-all duration-500" />
                </div>

                <div className="text-center space-y-4">
                    <p className="text-[12px] md:text-[14px] font-mono uppercase tracking-[0.4em] text-muted-foreground group-hover:text-primary transition-colors">{t('closing.discoverMore')}</p>
                    <h4 className="text-4xl lg:text-5xl font-black text-foreground/80 group-hover:text-foreground transition-all">{title}</h4>
                </div>
            </motion.div>
        </Link>
    );
};

const GhostedHeader = ({ label, part1, part2, direction = "left" }: { label: string, part1: string, part2: string, direction?: "left" | "right" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`space-y-3 mb-16 h-32 flex flex-col justify-end ${direction === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
    >
        <div className={`flex items-center gap-4 ${direction === 'right' ? 'flex-row-reverse' : ''}`}>
            <div className="w-8 h-px bg-primary/50" />
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em] text-primary/80 font-bold">
                {label}
            </span>
        </div>
        <h3 className={`text-4xl md:text-5xl lg:text-5xl xl:text-[54px] font-black uppercase tracking-tighter leading-none flex items-center gap-x-3 gap-y-1 ${direction === 'right' ? 'flex-row-reverse flex-wrap-reverse justify-start' : 'flex-wrap'}`}>
            <span className="text-foreground drop-shadow-sm">{part1}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/20 to-transparent dark:from-white/20 dark:to-transparent">{part2}</span>
        </h3>
    </motion.div>
);




// --- Component 5: Institutional School Pricing Section ---
const SchoolPricingSection = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

    const tiers = [
        {
            name: "STARTER",
            audience: "Small Schools & Academies",
            capacity: "Up to 300 Students",
            rate: "~60 – 80 ETB / student",
            monthlyPrice: "25,000",
            annualPrice: "18,750",
            totalAnnual: "225,000 ETB / year",
            description: "Essential operating infrastructure for private elementary and community schools.",
            popular: false,
            features: [
                "Complete academic & student records system",
                "AI 5E lesson planner & timetable auto-mapping",
                "Daily attendance & syllabus coverage tracking",
                "Ethiopian national mock exams & question banks",
                "Report cards, weighted grading & transcripts",
                "Telebirr & CBE digital payment receipts",
                "Instant parent & student dialogue (24/7)",
                "Autonomous AI Director early-warning audits",
                "Offline-first sync for power & network cuts"
            ]
        },
        {
            name: "GROWTH",
            audience: "Medium Secondary & High Schools",
            capacity: "301 – 1,200 Students",
            rate: "~38 – 75 ETB / student",
            monthlyPrice: "45,000",
            annualPrice: "33,750",
            totalAnnual: "405,000 ETB / year",
            description: "Full institutional autopilot for growing schools seeking top exam performance.",
            popular: true,
            features: [
                "Everything in Starter, plus:",
                "Mid-size school capacity for up to 1,200 students",
                "Department head & vice-principal oversight consoles",
                "Cross-sectional teacher mastery & diagnostic heatmaps",
                "Batch national exam question banks & automated analytics",
                "Automated student ID card & exam hall ticket generator",
                "Smart siren & digital IoT bell automation integration",
                "Multi-stream tuition reconciliation & ledger exports",
                "Priority onboarding & dedicated phone support line"
            ]
        },
        {
            name: "STANDARD",
            audience: "Large Campuses & Colleges",
            capacity: "1,201 – 2,500 Students",
            rate: "Enterprise Volume Tier",
            monthlyPrice: "70,000",
            annualPrice: "52,500",
            totalAnnual: "630,000 ETB / year",
            description: "High-capacity performance engine for top-tier academic establishments.",
            popular: false,
            features: [
                "Everything in Growth, plus:",
                "High-capacity support for up to 2,500 students",
                "High-volume mock examinations & automated grading",
                "Departmental syllabus completion oversight",
                "Director early-warning alerts for Grade 8 & 12 exam classes",
                "Financial audit logs & accounting ledger exports",
                "Customized report card & transcript branding",
                "Automated exam seating & hall ticket generator",
                "Daily cloud backups & dedicated storage instance",
                "Dedicated institutional account manager"
            ]
        }
    ];

    return (
        <div id="pricing" className="relative overflow-visible min-h-[90vh] flex flex-col items-center justify-center bg-background z-10 py-24 md:py-36 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-12 max-w-7xl w-full mx-auto">
                {/* Header */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    <span className="text-xs font-mono font-bold tracking-[0.4em] uppercase text-primary">
                        Transparent Institutional Plans
                    </span>
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground uppercase leading-[1.08]">
                        All Features Included. <br />
                        <span className="italic font-serif-elegant font-light text-foreground/80 normal-case">
                            Scaled by student body size.
                        </span>
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed pt-2">
                        Every Ethiopian school gets 100% of YeneSchool features — from AI 5E lesson planning and national exam mocks to attendance sync and Telebirr tuition reconciliation. Pay strictly by enrolled student count.
                    </p>

                    {/* Billing Toggle */}
                    <div className="pt-6 flex items-center justify-center">
                        <div className="inline-flex items-center p-1.5 rounded-full bg-neutral-200/80 dark:bg-zinc-800/80 border border-neutral-300 dark:border-zinc-700">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={cn(
                                    "px-5 py-2 rounded-full text-xs font-bold transition-all duration-300",
                                    billingCycle === 'monthly'
                                        ? "bg-[#60a5fa] text-white shadow-md shadow-blue-500/25"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Monthly Billing
                            </button>
                            <button
                                onClick={() => setBillingCycle('annual')}
                                className={cn(
                                    "px-5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-300",
                                    billingCycle === 'annual'
                                        ? "bg-[#60a5fa] text-white shadow-md shadow-blue-500/25"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <span>Annual Billing</span>
                                <span className={cn(
                                    "text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-black transition-colors",
                                    billingCycle === 'annual'
                                        ? "bg-white/25 text-white"
                                        : "bg-[#60a5fa]/20 text-[#60a5fa]"
                                )}>
                                    Save 25%
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full pt-4">
                    {tiers.map((tier, idx) => {
                        const price = billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.12 }}
                                className={cn(
                                    "relative flex flex-col justify-between p-7 md:p-9 rounded-3xl text-left transition-all duration-300",
                                    tier.popular
                                        ? "bg-white dark:bg-zinc-900 border-2 border-[#60a5fa] shadow-2xl shadow-blue-500/10 scale-[1.02] lg:-translate-y-2 z-20"
                                        : "bg-neutral-100/80 dark:bg-zinc-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-[#60a5fa]/40"
                                )}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#60a5fa] text-white text-[11px] font-mono font-black uppercase tracking-wider shadow-md shadow-blue-500/25">
                                        Most Popular
                                    </div>
                                )}

                                <div>
                                    {/* Top Plan Meta */}
                                    <div className="flex items-center justify-between border-b border-border/40 pb-4">
                                        <div>
                                            <h4 className="text-xl font-black tracking-tight text-foreground">
                                                {tier.name}
                                            </h4>
                                            <p className="text-xs text-muted-foreground font-medium mt-0.5">
                                                {tier.audience}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[11px] font-mono font-bold text-[#60a5fa] block">
                                                {tier.capacity}
                                            </span>
                                            <span className="text-[10px] font-mono text-muted-foreground">
                                                {tier.rate}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Price Tag */}
                                    <div className="pt-6 pb-4">
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                                                {price}
                                            </span>
                                            <span className="text-xs font-mono text-muted-foreground uppercase font-bold">
                                                ETB / month
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1.5">
                                            {billingCycle === 'annual' ? tier.totalAnnual : "Billed monthly"}
                                        </p>
                                    </div>

                                    <p className="text-xs text-muted-foreground leading-relaxed pb-6 border-b border-border/40">
                                        {tier.description}
                                    </p>

                                    {/* Feature Checklist */}
                                    <div className="pt-6 space-y-3">
                                        <p className="text-[11px] font-mono uppercase tracking-wider text-foreground/70 font-bold">
                                            Included in this plan:
                                        </p>
                                        <ul className="space-y-2.5">
                                            {tier.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-2.5 text-xs text-foreground/85 leading-snug">
                                                    <div className="w-4 h-4 rounded-full bg-[#60a5fa]/15 text-[#60a5fa] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <Check className="w-2.5 h-2.5" />
                                                    </div>
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Plan CTA */}
                                <div className="pt-8 mt-6 border-t border-border/40">
                                    <Link
                                        href="/contact"
                                        className={cn(
                                            "w-full py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300",
                                            tier.popular
                                                ? "bg-[#60a5fa] text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30 hover:scale-[1.02]"
                                                : "bg-neutral-200 dark:bg-zinc-800 text-foreground hover:bg-[#60a5fa] hover:text-white"
                                        )}
                                    >
                                        <span>Select {tier.name}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Enterprise Multi-Campus Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-full rounded-3xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100/90 dark:bg-zinc-900/90 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-lg mt-4"
                >
                    <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-[#60a5fa]" />
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#60a5fa]">
                                Multi-Campus Networks & Enterprise
                            </span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                            Have 2,500+ Students or Multiple Branches?
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            Built for multi-branch school networks requiring centralized cross-campus analytics, direct Ministry of Education sync, custom offline caching servers, and dedicated database instances.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                        <Link
                            href="/contact"
                            className="px-7 py-3.5 rounded-full bg-[#60a5fa] text-white hover:bg-blue-500 font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md shadow-blue-500/25 flex items-center gap-2"
                        >
                            <span>Contact Sales</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="https://www.yeneschooldocumentation.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-foreground hover:border-[#60a5fa] hover:text-[#60a5fa] font-bold text-xs uppercase tracking-wider transition-all"
                        >
                            Documentation ↗
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('/noise.svg')]" />
            </div>
        </div>
    );
};



const ScrollHijackSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 0.5 });
    const [isComp2Visible, setIsComp2Visible] = React.useState(false);
    const [showBorder, setShowBorder] = React.useState(true);

    // Hooks moved to top level to avoid React Hook Rules violations
    const borderOpacity = useTransform(smoothProgress, [0.1, 0.15], [1, 0]);
    const xShift = useTransform(smoothProgress, [0, 0.1, 0.4, 1], ["0vw", "0vw", "-100vw", "-100vw"]);

    useMotionValueEvent(smoothProgress, "change", (v: any) => {
        // Hard toggle for the decorative border to ensure it's GONE
        if (v >= 0.20 && showBorder) setShowBorder(false);
        if (v < 0.15 && !showBorder) setShowBorder(true);

        // Trigger precisely as the second panel begins to enter the viewport
        if (v >= 0.30 && !isComp2Visible) setIsComp2Visible(true);
        if (v < 0.25 && isComp2Visible) setIsComp2Visible(false);
    });

    const { scrollYProgress: exitProgressRaw } = useScroll({
        target: sectionRef,
        offset: ["end end", "end start"]
    });

    // Apply a spring physics wrapper to make the scale/fade exit incredibly buttery smooth
    const exitProgress = useSpring(exitProgressRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });



    const exitScale = useTransform(exitProgress, [0, 1], [1, 0.85]);
    const exitOpacity = useTransform(exitProgress, [0, 1], [1, 0]); // Changed to 1 to ensure full fade out
    const exitBorderRadius = useTransform(exitProgress, [0, 1], ["0px", "40px"]);

    return (
        <div ref={sectionRef} className="relative h-[600vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
                <motion.div
                    style={{ scale: exitScale, opacity: exitOpacity, borderRadius: exitBorderRadius }}
                    className="w-full h-full relative origin-center"
                >
                    {/* Decorative curved edges with hard unmount for guaranteed removal */}
                    <AnimatePresence>
                        {showBorder && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                                style={{
                                    opacity: borderOpacity,
                                    maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                                }}
                                className="absolute top-0 left-0 right-0 h-48 border-t-2 border-x-2 border-neutral-200 dark:border-zinc-800 rounded-t-[50px] md:rounded-t-[80px] pointer-events-none z-[100]"
                            />
                        )}
                    </AnimatePresence>
                    <motion.div
                        className="flex h-full"
                        style={{
                            width: "200vw",
                            x: xShift
                        }}
                    >
                        <div className="h-full w-screen flex-shrink-0">
                            <CoreEngineeringPanel scrollYProgress={smoothProgress} />
                        </div>
                        <div className="h-full w-screen flex-shrink-0">
                            <IdentitySequence isVisible={isComp2Visible} scrollYProgress={smoothProgress} />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default function AboutSection() {
    console.log('SHOWCASE MEMBERS:', showcaseMembers.map(m => m.id));
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // REALIGNED TIMING: Parent is ~900vh long. The first 100vh delay = ~11% (0.11) of total scroll.
    const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.92]);
    const opacity = useTransform(scrollYProgress, [0.03, 0.12], [1, 0]);
    const yLeadIn = useTransform(scrollYProgress, [0, 0.12], [0, -80]);

    const leadInTriggerRef = useRef(null);

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative bg-background text-foreground dark:bg-black dark:text-white transition-colors duration-500"
        >
            {/* 1. STICKY PLANE - Lead-in */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center z-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ scale, opacity, y: yLeadIn }}
                    className="relative px-4 md:px-6 w-full max-w-[1700px] mx-auto"
                    ref={leadInTriggerRef}
                >
                    <AboutLeadIn />
                </motion.div>
            </div>

            {/* 2. OVERLAY LAYER - Hijack Zone & Footer */}
            <div className="relative pointer-events-none mt-[20vh] md:mt-[20vh]">
                {/* Content wrapper with background - rounded corners removed to allow animated border to control the shape */}
                <div className="bg-background dark:bg-black transition-colors duration-500 pointer-events-auto relative">

                    <ScrollHijackSection />
                    <ScrollAdventure />
                    <ArgentLoopInfiniteSlider />
                    {/* Seamless solid background section overlapping the slider's dead space */}
                    <div className="-mt-[50vh] flex flex-col items-center w-full bg-background relative z-20 pt-32 pb-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full flex flex-col items-center max-w-[1700px] px-4 md:px-6"
                        >
                            <div className="mb-6 md:mb-10 text-center space-y-4">
                            </div>
                            <div className="w-full pb-0">
                                <HorizontalTimeline
                                    title="School Operational Journey"
                                    subtitle="A unified daily workflow connecting school directors, bursars, teachers, students, and parents."
                                    data={showcaseMembers.map((member) => ({
                                        title: member.id === 'view-more' ? 'Explore All 24 Modules' : (member.role || member.name),
                                        isEnd: member.id === 'view-more',
                                        period: 'period' in member ? member.period : undefined,
                                        content: member.id === 'view-more' ? (
                                            <Link
                                                href="/projects"
                                                className="flex flex-col justify-between w-[340px] md:w-[440px] h-[360px] md:h-[400px] border border-neutral-200 dark:border-neutral-800 p-7 rounded-3xl bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-xl mt-4 group hover:border-foreground/40 transition-all"
                                            >
                                                <div className="space-y-3">
                                                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary">Module Directory</span>
                                                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white leading-tight">
                                                        Explore All 24 Integrated Portals
                                                    </h4>
                                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                        From AI Director morning briefings and CBE Birr cashless tuition to 5E lesson planning and parent Telegram feeds.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">View All Modules</span>
                                                    <div className="p-3 rounded-full bg-foreground text-background group-hover:scale-110 transition-transform">
                                                        <ArrowUpRight className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className="flex flex-col gap-4 w-[340px] md:w-[440px] border border-neutral-200 dark:border-neutral-800 p-6 rounded-3xl bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-xl mt-4">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex flex-row items-center justify-between">
                                                        <h4 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                                                            {member.name}
                                                        </h4>
                                                    </div>
                                                </div>

                                                {'description' in member && member.description && (
                                                    <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1 line-clamp-3" title={member.description}>
                                                        {member.description}
                                                    </p>
                                                )}

                                                <div className="w-full mt-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden relative group/card h-56 md:h-64">
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-500 group-hover/card:scale-105"
                                                    />
                                                    {member.social?.website && (
                                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                                            <Link href={member.social.website} className="px-5 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:scale-105 transition-transform">
                                                                View Module
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    }))}
                                />
                            </div>
                        </motion.div>

                    </div>
                    <SchoolPricingSection />
                </div>
            </div>
        </section >
    );
};

