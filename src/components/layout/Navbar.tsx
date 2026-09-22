'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Moon, Sun, ChevronDown, ExternalLink } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import CardNav from '@/components/ui/CardNav';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { usePreloadState } from '@/components/ui/arc-preloader-hero';

// Sub-links for the "Modules" dropdown
const useNavItems = () => {
    const t = useTranslations('navigation.menu');
    return [
        {
            label: "Modules",
            links: [
                { label: t('projects'), href: "/projects", description: t('projectsDesc') },
                { label: "Pricing", href: "/#pricing", description: "Plans scaled by student enrollment" },
                { label: t('blog'), href: "/blog", description: t('blogDesc') },
            ]
        }
    ];
};

export function Navbar() {
    const t = useTranslations('navigation');
    const navItems = useNavItems();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const pathname = usePathname();
    const { scrollY } = useScroll();

    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [currentLocale, setCurrentLocale] = useState('en');
    
    // Consume preload state directly from context
    const { isPreloading: isPreloadActive } = usePreloadState();

    const isDark = resolvedTheme === 'dark';

    useEffect(() => {
        setMounted(true);
        const locale = document.cookie.split('; ').find(row => row.startsWith('locale='))?.split('=')[1] || 'en';
        setCurrentLocale(locale);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (isMenuOpen) return; // Don't hide navbar when menu is open

        const direction = latest > lastScrollY ? 'down' : 'up';
        setIsScrolled(latest > 50);

        if (direction === 'down' && latest > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollY(latest);
    });

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const handleHomeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMenu();
    }, [pathname, closeMenu]);

    // Animation variants
    const navVariants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
    };

    const menuVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    };

    return (
        <>
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate={!isPreloadActive && (isVisible || isMenuOpen) ? 'visible' : 'hidden'}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed top-0 left-0 right-0 z-[100]"
            >
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-4 md:py-6">
                    <motion.div
                        className={cn(
                            'flex items-center justify-between transition-all duration-500 rounded-full',
                            isScrolled ? 'glass-strong px-6 py-3' : 'py-2'
                        )}
                        layout
                    >
                        {/* YeneSchool Brand Logo */}
                        <Link href="/" className="flex items-center gap-3 group min-w-[180px]" onClick={handleHomeClick}>
                            <div className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-1.5 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
                                <Image src="/yeneschool/logo.svg" alt="YeneSchool Logo" width={24} height={24} className="object-contain filter invert dark:invert-0 brightness-200" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-base md:text-lg tracking-tight leading-none text-foreground flex items-center gap-1.5">
                                    YeneSchool
                                    <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400 font-black tracking-widest">OS</span>
                                </span>
                                <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-muted-foreground font-mono">Ethiopia • AI Director</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation with CardNav */}
                        <div className="hidden lg:flex items-center gap-6">
                            {/* HOME */}
                            <Link
                                href="/"
                                onClick={handleHomeClick}
                                className={cn(
                                    'relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full group',
                                    pathname === '/' ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                <span className="relative z-10">{t('home')}</span>
                            </Link>

                            <CardNav
                                items={navItems}
                                theme={isDark ? 'dark' : 'light'}
                                pathname={pathname}
                            />

                            {/* DOCS (Documentation Website) */}
                            <a
                                href="https://www.yeneschooldocumentation.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full group text-muted-foreground hover:text-foreground flex items-center gap-1.5"
                            >
                                <span className="relative z-10">Docs</span>
                                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </a>

                            {/* CONTACT (Direct Link) */}
                            <Link
                                href="/contact"
                                className={cn(
                                    'relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full group',
                                    pathname === '/contact'
                                        ? 'bg-[#60a5fa] text-white shadow-md shadow-blue-500/25'
                                        : 'bg-[#60a5fa]/10 text-[#60a5fa] hover:bg-[#60a5fa] hover:text-white'
                                )}
                            >
                                <span className="relative z-10">{t('contact')}</span>
                            </Link>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2 md:gap-3">
                            {mounted && (
                                <AnimatedThemeToggler />
                            )}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleMenu}
                                className="p-2 md:p-2.5 rounded-full bg-muted/80 hover:bg-muted transition-colors lg:hidden"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={isMenuOpen ? 'close' : 'menu'}
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.nav >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMenuOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[90] lg:hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-background"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />

                            <div className="relative flex flex-col items-center justify-center h-full overflow-y-auto py-20">
                                <nav className="flex flex-col items-center gap-6">
                                    {/* Mobile Home */}
                                    <Link
                                        href="/"
                                        onClick={handleHomeClick}
                                        className="text-3xl font-black text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {t('home')}
                                    </Link>

                                    <Link
                                        href="/contact"
                                        onClick={closeMenu}
                                        className="text-3xl font-black text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {t('contact')}
                                    </Link>

                                    <a
                                        href="https://www.yeneschooldocumentation.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMenu}
                                        className="text-3xl font-black text-sky-500 hover:text-sky-400 transition-colors flex items-center gap-1.5"
                                    >
                                        Docs ↗
                                    </a>

                                    {/* Mobile Links grouped by Categories */}
                                    {navItems.map((category) => (
                                        <div key={category.label} className="flex flex-col items-center gap-4 py-4 border-b border-white/5 w-full last:border-0 text-center">
                                            <span className="text-[10px] font-black font-mono text-primary tracking-[0.3em] uppercase opacity-50">
                                                {category.label}
                                            </span>
                                            {category.links.map((link) => (
                                                <Link
                                                    key={link.label}
                                                    href={link.href}
                                                    onClick={closeMenu}
                                                    className={cn(
                                                        'text-2xl font-bold transition-all hover:scale-110 active:scale-95 duration-200',
                                                        pathname === link.href ? 'text-foreground' : 'text-muted-foreground/60 hover:text-foreground'
                                                    )}
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-4 mt-12"
                                >
                                    {mounted && (
                                        <AnimatedThemeToggler
                                            className="px-6 py-6 glass-card text-sm font-medium hover:bg-muted/50 flex items-center gap-2"
                                        />
                                    )}
                                </motion.div>
                            </div>
                        </motion.div >
                    )
                }
            </AnimatePresence >
        </>
    );
}
