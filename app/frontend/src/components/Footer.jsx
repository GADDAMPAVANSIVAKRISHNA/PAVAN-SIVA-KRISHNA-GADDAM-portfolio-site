import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile, navLinks } from "../mock";

const marqueeWords = [
  "React", "Node.js", "Python", "AI / ML", "NLP", "Django", "PostgreSQL",
  "Full Stack", "REST APIs", "TypeScript", "Git", "Open Source",
];

export default function Footer() {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="py-10 border-b border-white/5 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="font-display text-4xl sm:text-6xl text-white/10 hover:text-[--accent]/60 transition">
              {w} <span className="text-[--accent]/40">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl text-white">{profile.shortName}<span className="text-[--accent]">.</span></span>
          </div>
          <p className="mt-4 text-white/55 text-[15px] max-w-md leading-relaxed">
            Designing and building beautiful digital products at the intersection of full-stack engineering and AI.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[--accent] hover:border-[--accent]/40 transition cursor-target"><Github size={16} /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[--accent] hover:border-[--accent]/40 transition cursor-target"><Linkedin size={16} /></a>
            <a href={profile.socials.email} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[--accent] hover:border-[--accent]/40 transition cursor-target"><Mail size={16} /></a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="mono text-[11px] uppercase tracking-widest text-white/40 mb-4">Navigate</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-white/70 hover:text-[--accent] text-[14px] transition link-underline cursor-target">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="mono text-[11px] uppercase tracking-widest text-white/40 mb-4">Get in touch</p>
          <p className="text-white/85 text-[15px]">{profile.email}</p>
          <p className="text-white/60 text-[14px] mt-1">{profile.phone}</p>
          <button onClick={top} className="mt-6 inline-flex items-center gap-2 mono text-[11px] uppercase tracking-widest text-white/65 hover:text-[--accent] transition cursor-target">
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3">
          <p className="mono text-[11px] text-white/40">© {new Date().getFullYear()} {profile.name}. Crafted with care.</p>
          <p className="mono text-[11px] text-white/40">Built with <span className="text-[--accent]">React</span> + <span className="text-[--accent]">Tailwind</span></p>
        </div>
      </div>
    </footer>
  );
}
