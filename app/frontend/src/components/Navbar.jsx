import React, { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { navLinks, profile } from "../mock";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const l of navLinks) {
        const el = document.getElementById(l.id);
        if (el && window.scrollY + 120 >= el.offsetTop) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-[#07090d]/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
        <button onClick={() => handleNav("home")} className="flex items-center gap-2 group cursor-target">
          <span className="font-display text-xl font-semibold tracking-tight">
            <span className="text-white">{profile.shortName}</span>
            <span className="text-[--accent]">.</span>
          </span>
          <span className="mono text-[10px] text-white/40 hidden sm:block">/ portfolio</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => handleNav(l.id)}
                className={`px-4 py-2 text-[13px] tracking-wide rounded-full transition-all cursor-target ${
                  active === l.id ? "text-[--accent] bg-[--accent-soft]" : "text-white/60 hover:text-white"
                }`}
              >
                <span className="mono text-[10px] text-white/30 mr-1">0{i + 1}.</span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-full text-white/60 hover:text-[--accent] hover:bg-white/5 transition cursor-target">
            <Github size={18} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full text-white/60 hover:text-[--accent] hover:bg-white/5 transition cursor-target">
            <Linkedin size={18} />
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary ml-2 text-[12px] mono uppercase tracking-widest px-4 py-2.5 rounded-full border border-[--accent]/40 text-[--accent] hover:bg-[--accent-soft] transition cursor-target">
            Resume
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white/80 cursor-target" aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-[480px]" : "max-h-0"}`}>
        <div className="px-6 pb-6 pt-2 bg-[#07090d]/95 border-t border-white/5">
          {navLinks.map((l, i) => (
            <button key={l.id} onClick={() => handleNav(l.id)} className="w-full text-left py-3 border-b border-white/5 flex items-center gap-3">
              <span className="mono text-[10px] text-[--accent]">0{i + 1}</span>
              <span className="text-white/80">{l.label}</span>
            </button>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="mt-4 block text-center py-3 rounded-full border border-[--accent]/40 text-[--accent]">
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
