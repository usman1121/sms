'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SchoolFeatureVisualProps {
    type: 'ai' | 'finance' | 'pedagogy';
}

const visualConfig = {
    ai: {
        title: 'director.yeneschool.com',
        image: '/yeneschool/directordashbaord.png',
        alt: 'Autonomous AI Director Dashboard'
    },
    finance: {
        title: 'finance.yeneschool.com',
        image: '/yeneschool/financedashbaord.png',
        alt: 'Cashless Tuition and Finance Ledger'
    },
    pedagogy: {
        title: 'academics.yeneschool.com',
        image: '/yeneschool/teacherleaderboard.png',
        alt: '5E Pedagogy and Remediation Workspace'
    }
};

export function SchoolFeatureVisual({ type }: SchoolFeatureVisualProps) {
    const item = visualConfig[type] || visualConfig.ai;

    return (
        <div className="relative w-full max-w-[560px] aspect-[16/10] p-2 md:p-4 flex items-center justify-center">
            {/* Minimalist Browser / Dashboard Frame */}
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/90 dark:bg-zinc-900/90 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col"
            >
                {/* Minimalist Header Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-200/50 dark:bg-zinc-800/50 border-b border-neutral-200/80 dark:border-neutral-800">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 select-none">
                        {item.title}
                    </span>
                    <div className="w-8" />
                </div>

                {/* Unobstructed Clean Screenshot */}
                <div className="relative flex-1 w-full h-full overflow-hidden bg-black/5 dark:bg-black/40 group">
                    <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>
            </motion.div>
        </div>
    );
}
