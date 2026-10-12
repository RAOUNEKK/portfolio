import clip11 from "@/assets/things/clip-11.png";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useApp } from "@/lib/app-context";
import characterImg from "@/assets/raounek-portrait.webp";
export function LanyardBadge({ className = "" }: {
    className?: string;
}) {
    const { t } = useApp();
    const wrapRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);
    const state = useRef({ angle: -7, velocity: 0, target: 0, held: false, raf: 0 });
    useEffect(() => {
        const s = state.current;
        let last = performance.now();
        let phase = Math.random() * Math.PI * 2;
        const tick = (now: number) => {
            const dt = Math.min(32, now - last) / 16.6667;
            last = now;
            phase += 0.006 * dt;
            if (s.held) {
                s.angle += (s.target - s.angle) * 0.25 * dt;
                s.velocity = 0;
            }
            else {
                const rest = Math.sin(phase) * 2.2;
                s.velocity += (rest - s.angle) * 0.012 * dt;
                s.velocity *= Math.pow(.985, dt);
                s.angle += s.velocity * dt;
            }
            if (cardRef.current)
                cardRef.current.style.transform = `rotate(${s.angle.toFixed(2)}deg)`;
            s.raf = requestAnimationFrame(tick);
        };
        s.raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(s.raf);
    }, []);
    const angleFromPointer = (x: number, y: number) => {
        const el = wrapRef.current;
        if (!el)
            return 0;
        const r = el.getBoundingClientRect();
        return Math.max(-38, Math.min(38, (Math.atan2(x - (r.left + r.width / 2), Math.max(24, y - r.top - 8)) * 180) / Math.PI));
    };
    const onPointerDown = (e: PointerEvent) => {
        (e.target as Element).setPointerCapture?.(e.pointerId);
        state.current.held = true;
        state.current.target = angleFromPointer(e.clientX, e.clientY);
        setDragging(true);
    };
    const onPointerMove = (e: PointerEvent) => {
        if (!state.current.held)
            return;
        const next = angleFromPointer(e.clientX, e.clientY);
        state.current.velocity = (next - state.current.target) * .6;
        state.current.target = next;
    };
    const release = () => { state.current.held = false; setDragging(false); };
    return (<div ref={wrapRef} className={`select-none ${className}`} onPointerMove={onPointerMove} onPointerUp={release} onPointerCancel={release}>
      <div className="mx-auto h-4 w-4 rounded-full border-2 border-[color:var(--line)] bg-[color:var(--melon)] shadow-[2px_3px_0_var(--line)]"/>
      <div ref={cardRef} className="origin-top will-change-transform" style={{ transform: "rotate(-7deg)" }}>
        <div className="relative mx-auto h-20 w-24 overflow-hidden">
          <div className="absolute left-0 top-0 h-24 w-5 rotate-[28deg] bg-[color:var(--cyan)] shadow-[3px_3px_0_var(--line)]"/>
          <div className="absolute right-0 top-0 h-24 w-5 -rotate-[28deg] bg-[color:var(--plum)] shadow-[3px_3px_0_var(--line)]"/>
          <div className="absolute bottom-0 left-1/2 h-10 w-6 -translate-x-1/2 bg-[color:var(--amethyst)]"/>
        </div>
        <div className="mx-auto -mt-1 h-5 w-9 border-2 border-[color:var(--line)] bg-[color:var(--paper-2)]"/>
        <div onPointerDown={onPointerDown} className={`lanyard-badge-card relative mx-auto mt-1 w-[13.5rem] cursor-grab border-2 border-[color:var(--line)] bg-[color:var(--paper-2)] p-3 shadow-[7px_8px_0_var(--line)] ${dragging ? "cursor-grabbing" : ""}`}>
          <div className="mx-auto mb-2 h-1.5 w-14 bg-[color:var(--line)]/20"/>
          <div className="text-center"><span className="sticker !rotate-0 !bg-[color:var(--cyan)] !text-white">{t("badge.hello")}</span></div>
          <div className="mt-4 overflow-hidden border-2 border-[color:var(--line)] bg-[color:var(--lavender)]">
            <img src={characterImg} alt="Raounek portrait illustration" className="h-32 w-full object-cover object-top"/>
          </div>
          <dl className="mt-3 space-y-2 text-left text-[10px]">
            <div className="flex items-end gap-2"><dt className="font-black uppercase tracking-widest">{t("badge.name")}</dt><dd className="flex-1 border-b border-dotted border-[color:var(--line)] text-center font-serif text-xs">RAOUNEK</dd></div>
            <div className="flex items-end gap-2"><dt className="font-black uppercase tracking-widest">{t("badge.role")}</dt><dd className="flex-1 border-b border-dotted border-[color:var(--line)] text-center font-serif text-xs">{t("badge.roleValue")}</dd></div>
          </dl>
          <img src={clip11} alt="" className="badge-clip" aria-hidden="true"/>
        </div>
      </div>
      <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[.25em] text-muted-foreground">{t("badge.hint")}</p>
    </div>);
}

