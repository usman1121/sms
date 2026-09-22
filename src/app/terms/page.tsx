'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ArrowLeft, CheckCircle, ShieldCheck, Scale, Server, AlertCircle } from 'lucide-react';

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back button */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to YeneSchool</span>
                    </Link>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="border-b border-border/40 pb-10 mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60a5fa]/10 border border-[#60a5fa]/30 text-[#60a5fa] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                        <Scale className="w-4 h-4" />
                        <span>Master Subscription Terms</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase mb-4">
                        Institutional Terms of Service
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                        Governing the deployment, licensing, multi-campus access, and service level agreements (SLA) of YeneSchool OS across primary, secondary, and higher educational institutions in Ethiopia.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6 text-xs font-mono text-muted-foreground">
                        <span>Updated: September 2026</span>
                        <span>•</span>
                        <span>Commercial License: Enterprise / Institutional</span>
                        <span>•</span>
                        <span>Provider: HUMAN Tech PLC (Addis Ababa, Ethiopia)</span>
                    </div>
                </motion.div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
                    <div className="p-5 rounded-2xl border border-border/50 bg-neutral-100/60 dark:bg-zinc-900/50">
                        <Server className="w-5 h-5 text-[#60a5fa] mb-3" />
                        <h4 className="font-bold text-sm text-foreground mb-1">99.9% Uptime SLA</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Continuous availability with local offline fallback server synchronization during internet outages.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl border border-border/50 bg-neutral-100/60 dark:bg-zinc-900/50">
                        <ShieldCheck className="w-5 h-5 text-[#60a5fa] mb-3" />
                        <h4 className="font-bold text-sm text-foreground mb-1">Guaranteed Backup</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Automated daily encrypted offsite backups for all academic grades, payments, and attendance.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl border border-border/50 bg-neutral-100/60 dark:bg-zinc-900/50">
                        <CheckCircle className="w-5 h-5 text-[#60a5fa] mb-3" />
                        <h4 className="font-bold text-sm text-foreground mb-1">Flat Student Tiers</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Zero hidden fees. Unlimited staff seats, teacher licenses, and parent accounts with all plans.
                        </p>
                    </div>
                </div>

                {/* Terms Body */}
                <div className="space-y-12 text-sm sm:text-base leading-relaxed text-foreground/90">
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">01.</span> Agreement & Subscription Scope
                        </h2>
                        <p className="text-muted-foreground">
                            By executing an institutional subscription order form or accessing YeneSchool OS, the educational institution agrees to these Terms of Service. These terms cover access to all 24 integrated modules, including the Autonomous AI Director, Teacher Lesson Planner, Attendance Sync, and Payment Reconciliation tools.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">02.</span> Institutional Licensing & Seat Access
                        </h2>
                        <p className="text-muted-foreground">
                            Subscriptions are billed strictly based on the enrolled active student body tier (Starter: ≤500 students, Growth: ≤1,500 students, Standard: ≤2,500 students, or Enterprise Multi-Campus). The institution may create unlimited teacher, administrative, registrar, cashier, and parent accounts without incurring additional per-seat license fees.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">03.</span> Financial Reconciliation & Telebirr/CBE
                        </h2>
                        <p className="text-muted-foreground">
                            YeneSchool provides programmatic synchronization with Ethiopian banking systems including Ethio Telecom Telebirr SuperApp and Commercial Bank of Ethiopia (CBE Birr). While YeneSchool verifies cryptographic transaction receipts, the underlying bank settlement remains between the paying parent and the school’s merchant account.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">04.</span> Offline-First Guarantee & Local Resilience
                        </h2>
                        <p className="text-muted-foreground">
                            Recognizing the infrastructure landscape in Ethiopia, YeneSchool includes offline-first local edge persistence. Class attendance, grade entry, and gate checks continue seamlessly without active internet. Upon network restoration, bidirectional conflict-free sync occurs automatically.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">05.</span> Ownership of Educational Materials
                        </h2>
                        <p className="text-muted-foreground">
                            All lesson plans, assessment rubrics, and curricular materials uploaded or generated by school faculty remain the intellectual property of the school. YeneSchool claims zero copyright or proprietary rights over school-specific pedagogical assets.
                        </p>
                    </section>

                    <section className="space-y-3 border-t border-border/40 pt-8">
                        <h2 className="text-xl font-bold text-foreground">Contact Legal & Institutional Contracts</h2>
                        <p className="text-muted-foreground">
                            For custom institutional licensing, Ministry of Education district tenders, or SLA questions:
                        </p>
                        <div className="p-4 rounded-xl bg-neutral-100 dark:bg-zinc-900 border border-border/50 text-xs font-mono space-y-1">
                            <div><strong className="text-foreground">Provider:</strong> HUMAN Tech PLC — Legal Affairs</div>
                            <div><strong className="text-foreground">Email:</strong> legal@yeneschool.com / contact@yeneschool.com</div>
                            <div><strong className="text-foreground">Headquarters:</strong> Addis Ababa, Ethiopia</div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
