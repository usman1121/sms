import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Brain, Clock, Target, Database, Sparkles, CheckCircle2,
  Building2, Receipt, Shield, Layers, CreditCard, Wallet,
  BookOpen, GraduationCap, Users, Award, Zap, FileText
} from 'lucide-react';

type LoaderType = 'ai' | 'software' | 'softskill' | 'default';

interface LoaderProps {
  type?: LoaderType;
}

const config = {
  ai: [
    { icon: Brain, label: "AI DIRECTOR", color: "#10b981" },
    { icon: Clock, label: "07:00 AM", color: "#3b82f6" },
    { icon: Target, label: "AUDIT", color: "#eab308" },
    { icon: Database, label: "HEALTH", color: "#06b6d4" },
    { icon: Sparkles, label: "AUTOPILOT", color: "#a855f7" },
    { icon: CheckCircle2, label: "RESOLVED", color: "#22c55e" }
  ],
  software: [
    { icon: Wallet, label: "TELEBIRR", color: "#0ea5e9" },
    { icon: Building2, label: "CBE BIRR", color: "#f59e0b" },
    { icon: Receipt, label: "RECEIPTS", color: "#10b981" },
    { icon: Layers, label: "LEDGER", color: "#6366f1" },
    { icon: Shield, label: "SECURE", color: "#8b5cf6" },
    { icon: CreditCard, label: "CASHLESS", color: "#14b8a6" }
  ],
  softskill: [
    { icon: BookOpen, label: "5E LESSONS", color: "#eab308" },
    { icon: GraduationCap, label: "GRADE 12", color: "#3b82f6" },
    { icon: Target, label: "EXAM PASS", color: "#22c55e" },
    { icon: Users, label: "TEACHERS", color: "#ef4444" },
    { icon: Zap, label: "REMEDY", color: "#a855f7" },
    { icon: Award, label: "MOE STANDARDS", color: "#10b981" }
  ],
  default: [
    { icon: Zap, label: "YENESCHOOL", color: "#10b981" },
    { icon: Brain, label: "AI DIRECTOR", color: "#3b82f6" },
    { icon: BookOpen, label: "LESSONS", color: "#eab308" },
    { icon: Wallet, label: "FINANCE", color: "#06b6d4" },
    { icon: Award, label: "ACADEMICS", color: "#a855f7" },
    { icon: Shield, label: "OFFLINE", color: "#22c55e" }
  ]
};

const Loader = ({ type = 'default' }: LoaderProps) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const faces = config[type] || config.default;

  useEffect(() => {
    // Stage Jump
    gsap.set(stageRef.current, { scale: 1, rotateX: -20, rotateY: 0 });
    const stageTween = gsap.to(stageRef.current, {
      scale: 1.3,
      rotateX: 160,
      rotateY: 180,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    // Auto Rotate Cube
    const cubeTween = gsap.to(cubeRef.current, {
      rotateY: 360,
      rotateZ: 360,
      duration: 8,
      ease: "none",
      repeat: -1
    });

    // Shadow Pulse
    gsap.set(shadowRef.current, { scale: 1, opacity: 0.5 });
    const shadowTween = gsap.to(shadowRef.current, {
      scale: 0.4,
      opacity: 0.1,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      stageTween.kill();
      cubeTween.kill();
      shadowTween.kill();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-transparent" style={{ perspective: 1500 }}>
      {/* Background Dots */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none hidden"
        style={{
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '15px 15px'
        }}
      />

      <div className="relative flex items-center justify-center">
        {/* The 3D Stage */}
        <div
          ref={stageRef}
          className="relative w-[110px] h-[110px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* The Auto-Rotating Cube */}
          <div
            ref={cubeRef}
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Face icon={faces[0].icon} label={faces[0].label} color={faces[0].color} transform="rotateY(0deg) translateZ(55px)" />
            <Face icon={faces[1].icon} label={faces[1].label} color={faces[1].color} transform="rotateY(180deg) translateZ(55px)" />
            <Face icon={faces[2].icon} label={faces[2].label} color={faces[2].color} transform="rotateY(90deg) translateZ(55px)" />
            <Face icon={faces[3].icon} label={faces[3].label} color={faces[3].color} transform="rotateY(-90deg) translateZ(55px)" />
            <Face icon={faces[4].icon} label={faces[4].label} color={faces[4].color} transform="rotateX(90deg) translateZ(55px)" />
            <Face icon={faces[5].icon} label={faces[5].label} color={faces[5].color} transform="rotateX(-90deg) translateZ(55px)" />
          </div>
        </div>

        {/* Shadow Floor */}
        <div
          ref={shadowRef}
          className="absolute -bottom-[80px] w-[120px] h-[30px] bg-black/40 dark:bg-white/10 rounded-[100%] blur-[8px]"
        />
      </div>
    </div>
  );
};

function Face({ icon: Icon, label, color, transform }: { icon: any, label: string, color: string, transform: string }) {
  return (
    <div
      className="absolute w-full h-full border-[5px] border-black box-border flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: color,
        transform,
        backfaceVisibility: 'visible',
        boxShadow: '12px 12px 0 black'
      }}
    >
      <div className="absolute w-[150%] h-[20px] bg-black opacity-20 -rotate-45 -translate-y-10" />
      <Icon className="w-10 h-10 text-black z-10 mb-1" strokeWidth={2.5} />
      <span className="font-['Arial_Black',sans-serif] text-[10px] bg-black text-white px-2 mt-1 uppercase z-10 tracking-widest rounded-sm">
        {label}
      </span>
    </div>
  );
}

export default Loader;
