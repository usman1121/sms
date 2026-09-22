import React, { useRef, useState, useEffect, useCallback } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Experience } from "@/types";
import { usePerformance } from "@/hooks/usePerformance";
import { cn } from "@/lib/utils";

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
    isLowPowerMode?: boolean;
}

function ParallaxText({ children, baseVelocity = 100, isLowPowerMode = false }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);

    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    // Always positive acceleration factor — direction is handled separately
    const velocityFactor = useTransform(smoothVelocity, (latest) => {
        return (Math.abs(latest) / 1000) * 5;
    });

    // Measure actual pixel width of one content copy
    const measure = useCallback(() => {
        if (contentRef.current) {
            setContentWidth(contentRef.current.scrollWidth);
        }
    }, []);

    useEffect(() => {
        measure();
        window.addEventListener("resize", measure);
        // Re-measure after images may have loaded
        const t1 = setTimeout(measure, 300);
        const t2 = setTimeout(measure, 1000);
        return () => {
            window.removeEventListener("resize", measure);
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [measure]);

    /**
     * Pixel-based transform with modulo wrapping.
     *
     * baseX accumulates upward continuously. The transform converts it
     * to a translateX value that cycles seamlessly over one content width.
     *
     * - baseVelocity > 0 (row1): logos move LEFT → RIGHT
     *   translateX cycles: -contentWidth → 0 → -contentWidth → 0 ...
     *
     * - baseVelocity < 0 (row2): logos move RIGHT → LEFT
     *   translateX cycles: 0 → -contentWidth → 0 → -contentWidth ...
     */
    const x = useTransform(baseX, (v) => {
        if (contentWidth <= 0) return "0px";
        const mod = ((v % contentWidth) + contentWidth) % contentWidth;

        if (baseVelocity > 0) {
            // Left-to-right: start at -contentWidth, move toward 0
            return `${-contentWidth + mod}px`;
        } else {
            // Right-to-left: start at 0, move toward -contentWidth
            return `${-mod}px`;
        }
    });

    const isHovered = useRef(false);

    useAnimationFrame((_t, delta) => {
        if (isHovered.current || isLowPowerMode) return;

        // Clamp delta to prevent large jumps when returning from background tab
        const clampedDelta = Math.min(delta, 50);

        let moveBy = Math.abs(baseVelocity) * (clampedDelta / 1000);

        const vf = velocityFactor.get();
        if (vf > 0) {
            moveBy += moveBy * vf;
        }

        // Always accumulate forward — direction is handled in the transform
        baseX.set(baseX.get() + moveBy);
    });

    if (isLowPowerMode) {
        return (
            <div className="overflow-hidden whitespace-nowrap w-full py-1">
                <div
                    className={cn(
                        "flex",
                        baseVelocity > 0
                            ? "animate-marquee-reverse"
                            : "animate-marquee"
                    )}
                >
                    <div className="flex gap-4 shrink-0 pr-4">{children}</div>
                    <div className="flex gap-4 shrink-0 pr-4">{children}</div>
                    <div className="flex gap-4 shrink-0 pr-4">{children}</div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="overflow-hidden whitespace-nowrap w-full py-1"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
        >
            <motion.div
                className="flex"
                style={{ x, willChange: "transform" }}
            >
                {/* First copy — ref attached for measuring pixel width */}
                <div ref={contentRef} className="flex gap-4 shrink-0 pr-4">
                    {children}
                </div>
                <div className="flex gap-4 shrink-0 pr-4">{children}</div>
                <div className="flex gap-4 shrink-0 pr-4">{children}</div>
            </motion.div>
        </div>
    );
}

interface Partner {
    name: string;
    role: string;
    badge: string;
}

const PARTNERS: Partner[] = [
    { name: "Bole Medhanealem", role: "Flagship Secondary School", badge: "1,800+ Students" },
    { name: "St. Joseph School", role: "FinTech & Cashless Tuition", badge: "Addis Ababa" },
    { name: "Nazareth School", role: "Biometric Attendance Pilot", badge: "Live Deployment" },
    { name: "Ministry of Education (MoE)", role: "Curriculum Standards", badge: "National Exam Aligned" },
    { name: "Commercial Bank of Ethiopia", role: "CBE Birr Automated Ledger", badge: "Bank Integration" },
    { name: "Telebirr SuperApp", role: "Zero-Fee Parent Payments", badge: "FinTech Gateway" },
    { name: "EthSwitch", role: "Interbank Settlement", badge: "Banking Standard" },
    { name: "Telegram Bot API", role: "Zero-App Parent Alerts", badge: "Real-time Push" },
    { name: "Dexie.js IndexedDB", role: "Offline-First Data Engine", badge: "Power-Cut Resilient" },
    { name: "NestJS & PostgreSQL", role: "Multi-Tenant Cloud Engine", badge: "Enterprise Grade" },
    { name: "13-Month Ethiopian Calendar", role: "Meskerem–Pagume Engine", badge: "Ge'ez Standard" },
    { name: "HUMAN Tech PLC", role: "Software Engineering Studio", badge: "Addis Ababa" },
];

const PartnerBadge = ({ partner }: { partner: Partner }) => (
    <div className="relative shrink-0 px-6 py-4 rounded-2xl bg-white/60 dark:bg-zinc-900/60 border border-neutral-200 dark:border-zinc-800 shadow-sm flex items-center gap-4 mx-2 hover:border-primary/50 transition-colors">
        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
        <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
                <span className="text-sm font-black text-foreground whitespace-nowrap">{partner.name}</span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary whitespace-nowrap">{partner.badge}</span>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{partner.role}</span>
        </div>
    </div>
);

export default function ExperienceMarquee() {
    const { isLowPowerMode } = usePerformance();
    const row1 = PARTNERS.slice(0, 6);
    const row2 = PARTNERS.slice(6);

    return (
        <section className="relative w-full py-6 flex flex-col gap-6 overflow-hidden">
            <ParallaxText baseVelocity={25} isLowPowerMode={isLowPowerMode}>
                {row1.map((p) => (
                    <PartnerBadge key={p.name} partner={p} />
                ))}
            </ParallaxText>

            <ParallaxText baseVelocity={-25} isLowPowerMode={isLowPowerMode}>
                {row2.map((p) => (
                    <PartnerBadge key={p.name} partner={p} />
                ))}
            </ParallaxText>
        </section>
    );
}
