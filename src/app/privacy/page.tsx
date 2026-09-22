'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, ArrowLeft, Building2, UserCheck, Database, Bell } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
                        <ShieldCheck className="w-4 h-4" />
                        <span>Institutional Compliance</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase mb-4">
                        Student & Institutional Data Privacy Policy
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                        How YeneSchool OS and HUMAN Tech PLC protect student academic records, teacher pedagogical plans, and institutional financial telemetry across Ethiopian educational institutions.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6 text-xs font-mono text-muted-foreground">
                        <span>Effective Date: September 2026</span>
                        <span>•</span>
                        <span>Version: 2.4.0 (Enterprise)</span>
                        <span>•</span>
                        <span>Jurisdiction: Addis Ababa, Ethiopia</span>
                    </div>
                </motion.div>

                {/* Key Commitments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
                    <div className="p-5 rounded-2xl border border-border/50 bg-neutral-100/60 dark:bg-zinc-900/50">
                        <Lock className="w-5 h-5 text-[#60a5fa] mb-3" />
                        <h4 className="font-bold text-sm text-foreground mb-1">Zero Data Selling</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Student data is never commercialized, sold, or shared with third-party advertisers.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl border border-border/50 bg-neutral-100/60 dark:bg-zinc-900/50">
                        <Building2 className="w-5 h-5 text-[#60a5fa] mb-3" />
                        <h4 className="font-bold text-sm text-foreground mb-1">School Data Ownership</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            The school retains 100% legal ownership and sovereign custody of all educational archives.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl border border-border/50 bg-neutral-100/60 dark:bg-zinc-900/50">
                        <Database className="w-5 h-5 text-[#60a5fa] mb-3" />
                        <h4 className="font-bold text-sm text-foreground mb-1">AES-256 Encryption</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Isolated tenant databases with bank-grade encryption at rest and TLS 1.3 in transit.
                        </p>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-12 text-sm sm:text-base leading-relaxed text-foreground/90">
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">01.</span> Scope & Custodianship
                        </h2>
                        <p className="text-muted-foreground">
                            This Privacy Policy applies to all services provided by YeneSchool OS (a registered product of HUMAN Tech PLC), including the AI Director Dashboard, Teacher Portal, Parent Telegram Bot, Student Remediation Engine, and Telebirr/CBE Birr cashless tuition reconciler.
                        </p>
                        <p className="text-muted-foreground">
                            For all student and institutional information processed through YeneSchool, the enrolling school acts as the <strong className="text-foreground font-semibold">Data Controller</strong>, and YeneSchool acts strictly as the <strong className="text-foreground font-semibold">Data Processor</strong> under institutional agreement.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">02.</span> Information We Process
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li><strong className="text-foreground">Student Educational Records:</strong> Names, national student IDs, Grade 1–12 enrollment status, classroom assignments, report card marks, and national examination mock evaluations.</li>
                            <li><strong className="text-foreground">Attendance & Biometrics:</strong> Daily clock-in timestamps, Meskerem–Pagume Ethiopian calendar period attendance logs, and parent absence alerts.</li>
                            <li><strong className="text-foreground">Teacher Pedagogical Artifacts:</strong> 5E lesson plans, teacher notes, syllabus pacing milestones, and assessment scoring rubrics.</li>
                            <li><strong className="text-foreground">Fee Payment Tokens:</strong> CBE Birr and Telebirr transaction reference hashes and automated receipt logs. We do not store banking passwords or payment card pins.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">03.</span> Ethiopian Regulatory & MOE Alignment
                        </h2>
                        <p className="text-muted-foreground">
                            YeneSchool complies with the Ethiopian Ministry of Education (MOE) national digital education guidelines, as well as emerging Ethiopian Personal Data Protection proclamations. Student archives can be exported at any time in standardized MOE report card formats.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">04.</span> Parent & Guardian Rights
                        </h2>
                        <p className="text-muted-foreground">
                            Parents and verified guardians have real-time access to inspect their child’s attendance, grade reports, and tuition payment statements via the official YeneSchool Parent Portal and Telegram Bot. To challenge or update inaccurate records, parents should contact their school administrator directly.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <span className="text-[#60a5fa] font-mono">05.</span> Data Retention & Deletion
                        </h2>
                        <p className="text-muted-foreground">
                            Upon institutional contract termination, school leadership may request a full cryptographic dump of all databases and media. After a 60-day grace period, all server caches and tenant partitions are permanently scrubbed in accordance with DoD 5220.22-M sanitization protocols.
                        </p>
                    </section>

                    <section className="space-y-3 border-t border-border/40 pt-8">
                        <h2 className="text-xl font-bold text-foreground">Data Protection Officer Contact</h2>
                        <p className="text-muted-foreground">
                            If your institution has questions regarding student privacy or wishes to conduct an institutional compliance review:
                        </p>
                        <div className="p-4 rounded-xl bg-neutral-100 dark:bg-zinc-900 border border-border/50 text-xs font-mono space-y-1">
                            <div><strong className="text-foreground">Entity:</strong> HUMAN Tech PLC — YeneSchool Compliance Division</div>
                            <div><strong className="text-foreground">Email:</strong> privacy@yeneschool.com / contact@yeneschool.com</div>
                            <div><strong className="text-foreground">Office:</strong> Addis Ababa, Ethiopia (EAT UTC+3)</div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
