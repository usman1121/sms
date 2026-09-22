'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    CheckCircle,
    AlertCircle,
    Loader2,
    ArrowUpRight,
    ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const DynamicScrollVelocity = dynamic(() => import('@/components/ui/ScrollVelocity'), { ssr: false });
const Meteors = dynamic(() => import('@/components/ui/meteors').then(mod => mod.Meteors), { ssr: false });

import { DeferredMount } from '@/components/ui/DeferredMount';
import { usePerformance } from '@/hooks/usePerformance';

const InputGroup = ({ label, name, type = "text", value, onChange, required = false }: any) => {
    return (
        <div className="group relative z-0 w-full mb-10">
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={1}
                    className="peer block w-full appearance-none border-0 border-b-2 border-foreground/20 bg-transparent py-2.5 px-0 text-xl font-medium text-foreground focus:border-[#60a5fa] focus:outline-none focus:ring-0 transition-colors duration-300 resize-y min-h-[50px] max-h-[200px]"
                    placeholder=" "
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="peer block w-full appearance-none border-0 border-b-2 border-foreground/20 bg-transparent py-2.5 px-0 text-xl font-medium text-foreground focus:border-[#60a5fa] focus:outline-none focus:ring-0 transition-colors duration-300"
                    placeholder=" "
                />
            )}
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform text-sm font-bold tracking-widest text-muted-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-[#60a5fa]">
                {label.toUpperCase()}
            </label>
        </div>
    );
};

function ContactForm() {
    const t = useTranslations('contact');
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        } finally {
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="w-full relative z-20 max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-14 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
                    {t('title') || 'Book a Live Demo'}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-3 font-normal max-w-xl leading-relaxed">
                    {t('subtitle') || 'Experience how the Autonomous AI Director puts your school operations on autopilot.'}
                </p>
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit} className="w-full relative z-10">
                <InputGroup label="Your Name / Representative Title" name="name" value={formData.name} onChange={handleChange} required />
                <InputGroup label="Official Institutional Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                <InputGroup label="School Name & Estimated Students" name="subject" value={formData.subject} onChange={handleChange} required />
                <InputGroup
                    label="Operational Needs (Attendance, Fees, 5E Lessons)"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative w-full flex items-center justify-between border-b-2 border-foreground py-8 text-left hover:bg-foreground/5 transition-colors disabled:opacity-50"
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="text-2xl md:text-4xl font-bold tracking-tight text-foreground group-hover:pl-4 transition-all duration-300">
                        {status === 'loading'
                            ? 'Submitting Request...'
                            : status === 'success'
                                ? 'Demo Request Submitted!'
                                : 'Request Executive Demo'}
                    </span>

                    <div className="relative overflow-hidden w-12 h-12 flex items-center justify-center rounded-full bg-[#60a5fa] text-white group-hover:scale-110 shadow-lg shadow-blue-500/25 transition-transform duration-500 shrink-0">
                        {status === 'loading' ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                        ) : status === 'success' ? (
                            <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                        )}
                    </div>
                </motion.button>

                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 rounded-xl bg-[#60a5fa]/10 border border-[#60a5fa]/20 text-[#60a5fa] text-sm font-medium flex items-center gap-3"
                    >
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <span>Thank you! Our Addis Ababa deployment team will contact you within 24 hours.</span>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium flex items-center gap-3"
                    >
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>Failed to submit. Please contact us directly at contact@yeneschool.com.</span>
                    </motion.div>
                )}
            </form>
        </div>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "How long does it take to deploy YeneSchool across our campus?",
            a: "Deployment takes 2 to 5 business days. Our Addis Ababa engineering team imports all student, teacher, and academic records from Excel or paper registers, configures roles, and conducts hands-on on-site training."
        },
        {
            q: "Can YeneSchool operate when the campus internet is down?",
            a: "Yes, 100%. YeneSchool is engineered with offline-first client architecture using Dexie.js (IndexedDB). Teachers can take morning attendance and enter marks without any internet. Data automatically synchronizes once connection returns."
        },
        {
            q: "How does the Telebirr and CBE Birr cashless fee integration work?",
            a: "Parents pay tuition directly through Telebirr or Commercial Bank of Ethiopia (CBE Birr). Payments match instantly against the student ID number, clearing student ledgers and sending instant digital receipts via SMS and Telegram."
        },
        {
            q: "Is YeneSchool compliant with Ethiopian Ministry of Education (MoE) standards?",
            a: "Completely. YeneSchool natively supports both the 13-month Ethiopian Calendar (Ge'ez: Meskerem to Pagume) and Gregorian dates, Continuous Assessment (CA) percentage weightings, and tamper-proof QR report cards."
        },
        {
            q: "What is the Autonomous AI Director and how does it help leadership?",
            a: "The AI Director audits yesterday's attendance, flags syllabus delays, drafts 5E lesson bundles, and balances fee records while you sleep. By 07:00 AM, the school principal receives an executive briefing with pre-resolved operational actions."
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto py-20 px-4 md:px-8">
            <div className="flex flex-col items-center mb-16 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Frequently Asked Questions</h2>
                <div className="h-1 w-20 bg-[#60a5fa]/60 rounded-full" />
            </div>

            <div className="space-y-0 relative z-10">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-border last:border-0"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full py-8 md:py-10 flex items-center justify-between text-left group gap-4"
                        >
                            <span className={cn(
                                "text-xl md:text-3xl font-bold tracking-tight transition-all duration-300",
                                openIndex === index ? "text-[#60a5fa] translate-x-2" : "text-foreground/90 group-hover:text-foreground group-hover:translate-x-1"
                            )}>
                                {faq.q}
                            </span>
                            <div className={cn(
                                "flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-[#60a5fa]/5 transition-all duration-500 shrink-0",
                                openIndex === index ? "rotate-180 bg-[#60a5fa] text-white border-[#60a5fa] shadow-[0_0_20px_rgba(96,165,250,0.3)]" : "text-muted-foreground group-hover:text-foreground group-hover:bg-[#60a5fa]/10"
                            )}>
                                <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-10 md:pb-14 text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-3xl">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ContactPage() {
    const { isLowPowerMode } = usePerformance();
    const containerRef = useRef<HTMLDivElement>(null);

    const faqTriggerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: showFAQ } = useScroll({
        target: faqTriggerRef,
        offset: ["start end", "end end"]
    });

    const headerOpacity = useTransform(showFAQ, [0, 0.4], [1, 0.6]);
    const headerScale = useTransform(showFAQ, [0, 0.4], [1, 0.98]);
    const headerFilter = useTransform(showFAQ, [0, 0.4], ["blur(0px)", "blur(2px)"]);

    return (
        <div ref={containerRef} className="relative bg-background selection:bg-[#60a5fa]/25">
            {/* Background Ambience */}
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none z-0" />
            <div className="fixed inset-0 bg-background/60 backdrop-blur-[2px] pointer-events-none z-0" />
            <DeferredMount>
                <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
                    {!isLowPowerMode && <Meteors number={40} />}
                </div>
            </DeferredMount>

            {/* Main Content: Reduced Header + Form */}
            <motion.div
                className="relative z-10"
                style={{
                    opacity: headerOpacity,
                    scale: isLowPowerMode ? 1 : headerScale,
                    filter: isLowPowerMode ? "none" : headerFilter,
                }}
            >
                {/* Reduced Scroll Velocity Header */}
                <div className="relative w-full pt-44 pb-16">
                    <div className="w-full flex items-center justify-center opacity-20 select-none pointer-events-none">
                        <DynamicScrollVelocity
                            texts={[
                                "BOOK A DEMO",
                                "YENESCHOOL OS"
                            ]}
                            velocity={18}
                            className="text-7xl md:text-[9rem] font-black tracking-tight uppercase whitespace-nowrap"
                            isLowPowerMode={isLowPowerMode}
                        />
                    </div>
                </div>

                {/* Form Section */}
                <div className="container-creative px-4 md:px-8 max-w-4xl mx-auto pb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>

                {/* FAQ Trigger Zone */}
                <div ref={faqTriggerRef} className="h-[60vh] w-full pointer-events-none" />
            </motion.div>

            {/* FAQ Section: Full Viewport Cover Layer */}
            <motion.section
                className="relative z-50 bg-background overflow-hidden"
                style={{
                    y: useTransform(showFAQ, [0, 1], ["100vh", "0vh"]),
                    marginTop: "-100vh",
                }}
            >
                <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
                    {!isLowPowerMode && <Meteors number={30} />}
                </div>

                <div className="absolute top-0 left-0 right-0 h-[40rem] bg-gradient-to-t from-background via-background/95 to-transparent -translate-y-full pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60a5fa]/50 to-transparent" />

                <div className="container-creative px-4 md:px-8 max-w-5xl mx-auto py-32 pb-32 relative z-10">
                    <FAQSection />
                </div>
            </motion.section>
        </div>
    );
}
