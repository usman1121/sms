'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Check,
    Copy,
    ArrowUpRight,
    ExternalLink,
    ChevronUp,
    Send,
    Linkedin,
    Github,
    Instagram,
    Bot,
    ShieldCheck
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const navLinks = [
        { label: '24 Modules', href: '/projects' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Case Studies', href: '/blog' },
        { label: 'Product Tour', href: '/gallery' },
        { label: 'Documentation ↗', href: 'https://www.yeneschooldocumentation.vercel.app', external: true },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="relative w-full z-20 border-t border-border/40 bg-neutral-950 text-neutral-100 overflow-hidden">
            {/* Ambient Background Lighting */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" />

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '36px 36px'
                }}
            />

            <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10">
                {/* 1. Main Header Row: Brand, Status & Action CTAs */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
                    <div className="space-y-3 max-w-2xl">
                        <div className="flex items-center gap-3">
                            <div className="relative w-9 h-9 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-2 shadow-lg shadow-sky-500/20">
                                <Image
                                    src="/yeneschool/logo.svg"
                                    alt="YeneSchool Logo"
                                    width={26}
                                    height={26}
                                    className="object-contain filter brightness-200"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="font-black text-xl tracking-tight text-white">
                                        YeneSchool
                                    </span>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#60a5fa]/20 text-[#60a5fa] font-black uppercase tracking-widest border border-[#60a5fa]/30">
                                        OS
                                    </span>
                                </div>
                                <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono">
                                    Autonomous AI Director • Addis Ababa, Ethiopia
                                </span>
                            </div>
                        </div>

                        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                            Empowering Ethiopian educational institutions with unified digital administration, 5E AI lesson prep, dual-calendar attendance synchronization, and automated Telebirr fee reconciliation.
                        </p>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-full bg-[#60a5fa] hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center gap-2 group hover:scale-[1.02] active:scale-95"
                        >
                            <span>Schedule Live Demo</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>

                        <a
                            href="https://www.yeneschooldocumentation.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-full border border-white/15 hover:border-[#60a5fa] text-neutral-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group"
                        >
                            <span>Documentation</span>
                            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#60a5fa] transition-colors" />
                        </a>

                        <button
                            onClick={handleCopyEmail}
                            className="px-4 py-3 rounded-full border border-white/15 hover:border-white/30 text-neutral-300 hover:text-white font-mono text-xs transition-all duration-300 flex items-center gap-2"
                            title="Copy Official Email"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-[#60a5fa]" />
                                    <span className="text-[#60a5fa] font-bold">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                                    <span>contact@yeneschool.com</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* 2. Sleek Horizontal Navigation & Community Channels */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10">
                    <nav className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-medium">
                        {navLinks.map((link) => (
                            link.external ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                                >
                                    <span>{link.label}</span>
                                </a>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Community / Social Channels */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <a
                            href="https://t.me/yeneschool_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-[#60a5fa] hover:text-white text-neutral-400 transition-colors"
                            aria-label="Telegram Bot"
                            title="Parent Telegram Bot"
                        >
                            <Send className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="https://linkedin.com/company/yeneschool"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-[#60a5fa] hover:text-white text-neutral-400 transition-colors"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <Linkedin className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="https://github.com/yeneschool"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-[#60a5fa] hover:text-white text-neutral-400 transition-colors"
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            <Github className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="https://instagram.com/yeneschool"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-[#60a5fa] hover:text-white text-neutral-400 transition-colors"
                            aria-label="Instagram"
                            title="Instagram"
                        >
                            <Instagram className="w-3.5 h-3.5" />
                        </a>
                        <button
                            onClick={() => {
                                window.dispatchEvent(new CustomEvent('portfolio:toggle-chatbot', {
                                    detail: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
                                }));
                            }}
                            className="p-2 rounded-full bg-white/5 hover:bg-[#60a5fa] hover:text-white text-neutral-400 transition-colors"
                            aria-label="AI Assistant"
                            title="Talk to YeneSchool AI"
                        >
                            <Bot className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* 3. Bottom Legal, Copyright & Back-to-Top Bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 gap-y-1 text-center sm:text-left">
                        <span className="font-medium text-neutral-300">
                            © {currentYear} YeneSchool OS.
                        </span>
                        <span className="text-neutral-600 hidden sm:inline">•</span>
                        <span>HUMAN Tech PLC, Addis Ababa, Ethiopia.</span>
                        <span className="text-neutral-600 hidden sm:inline">•</span>
                        <span>All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy
                        </Link>
                        <span className="text-neutral-600">•</span>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms
                        </Link>
                        <span className="text-neutral-600">•</span>
                        <Link href="/contact" className="hover:text-white transition-colors">
                            Contact
                        </Link>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5 ml-2"
                            aria-label="Back to top"
                        >
                            <span>Top</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* 4. Elegant Watermark Typography */}
                <div className="mt-6 pt-2 overflow-hidden select-none pointer-events-none text-center">
                    <h2 className="text-[12vw] font-black leading-none tracking-tighter text-white/[0.025] uppercase">
                        YENESCHOOL
                    </h2>
                </div>
            </div>
        </footer>
    );
}
