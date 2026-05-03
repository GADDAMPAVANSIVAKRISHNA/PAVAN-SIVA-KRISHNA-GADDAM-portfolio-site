import React, { useEffect, useState, useRef } from "react";
import { ArrowDownRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile } from "../mock";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const current = profile.roles[roleIdx];
    const speed = deleting ? 45 : 80;
    const t = setTimeout(() => {
      if (!deleting && typed.length < current.length) setTyped(current.slice(0, typed.length + 1));
      else if (!deleting && typed.length === current.length) setTimeout(() => setDeleting(true), 1400);
      else if (deleting && typed.length > 0) setTyped(current.slice(0, typed.length - 1));
      else if (deleting && typed.length === 0) {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % profile.roles.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  useEffect(() => {
    const onMove = (e) => {
      if (!heroRef.current) return;
      const { innerWidth: w, innerHeight: h } = window;
      const rx = (e.clientX / w - 0.5) * 18;
      const ry = (e.clientY / h - 0.5) * 18;
      heroRef.current.style.setProperty("--rx", `${rx}px`);
      heroRef.current.style.setProperty("--ry", `${ry}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-28 noise overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="absolute floating" style={{ top: "18%", right: "10%", transform: "translate(var(--rx,0), var(--ry,0))" }}>
        <div className="w-[260px] h-[260px] rounded-full bg-[--accent]/10 blur-3xl glow-pulse" />
      </div>
      <div className="absolute floating" style={{ bottom: "10%", left: "5%", animationDelay: "1.5s" }}>
        <div className="w-[200px] h-[200px] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mono text-[11px] tracking-widest uppercase text-white/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 glow-pulse" />
            Available for opportunities
            <Sparkles size={12} className="text-[--accent]" />
          </div>

          <h1 className="font-display text-[40px] sm:text-[58px] lg:text-[84px] leading-[0.95] font-semibold tracking-tight">
            <span className="block text-white/90">Hi, I'm</span>
            <span className="block shimmer-text">Pavan Siva Krishna</span>
            <span className="block shimmer-text">Gaddam.</span>
          </h1>

          <div className="mt-8 mono text-[15px] sm:text-[17px] text-white/70">
            <span className="text-[--accent]">&gt;</span> <span>{typed}</span>
            <span className="caret text-[--accent]">_</span>
          </div>

          <p className="mt-8 max-w-xl text-white/60 text-[16px] sm:text-[17px] leading-relaxed">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[--accent] text-[#00131a] font-medium text-sm tracking-wide cursor-target">
              View my work
              <ArrowDownRight size={18} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/80 hover:border-[--accent] hover:text-[--accent] transition text-sm tracking-wide cursor-target">
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-white/50 hover:text-[--accent] transition cursor-target"><Github size={20} /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-white/50 hover:text-[--accent] transition cursor-target"><Linkedin size={20} /></a>
            <a href={profile.socials.email} className="text-white/50 hover:text-[--accent] transition cursor-target"><Mail size={20} /></a>
            <span className="h-px w-10 bg-white/15" />
            <span className="mono text-[11px] text-white/40 tracking-widest uppercase">{profile.location}</span>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass rounded-2xl p-7 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[--accent]/15 blur-3xl" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[--accent] to-sky-400 flex items-center justify-center text-[#00131a] font-display text-lg font-bold">
                {profile.initials}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{profile.shortName} Gaddam</p>
                <p className="mono text-[11px] text-white/40">CSE · AI & ML · 2023–27</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {profile.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
                  <p className="font-display text-2xl text-white">{s.value}</p>
                  <p className="mono text-[10px] uppercase tracking-widest text-white/40 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
              <span className="mono text-[10px] uppercase tracking-widest text-white/40">Stack</span>
              <span className="mono text-[12px] text-white/70">React · Node · Python</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="mono text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[--accent] to-transparent" />
      </div>
    </section>
  );
}
