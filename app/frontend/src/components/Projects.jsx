import React, { useState } from "react";
import { Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../mock";

const categories = ["All", "Full Stack", "AI Platform", "AI / NLP", "Machine Learning", "Frontend", "Open Source"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <Reveal>
            <span className="eyebrow">Projects</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-5 leading-tight">
              Selected <span className="gradient-text">work</span> & experiments.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a href="https://github.com/GADDAMPAVANSIVAKRISHNA" target="_blank" rel="noreferrer" className="link-underline mono text-[12px] uppercase tracking-widest text-white/60 hover:text-[--accent] cursor-target">
              View all on GitHub →
            </a>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`mono text-[11px] uppercase tracking-widest px-4 py-2 rounded-full border transition cursor-target ${
                  filter === c
                    ? "text-[--accent] border-[--accent]/50 bg-[--accent-soft]"
                    : "text-white/55 border-white/10 hover:border-white/25 hover:text-white/85"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="project-card glass rounded-2xl p-7 h-full relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[--accent]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[--accent]">
                      <FolderGit2 size={18} />
                    </div>
                    <span className="mono text-[11px] uppercase tracking-widest text-white/45">
                      {p.category} · {p.year}
                    </span>
                  </div>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[--accent] hover:border-[--accent]/40 transition cursor-target">
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <h3 className="font-display text-2xl text-white mt-5 group-hover:text-[--accent] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-3 text-white/60 text-[14.5px] leading-relaxed">{p.description}</p>

                <ul className="mt-5 space-y-2">
                  {p.highlights.slice(0, 3).map((h, j) => (
                    <li key={j} className="flex gap-2 text-[13px] text-white/55">
                      <span className="text-[--accent] mono">{String(j + 1).padStart(2, "0")}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mono text-[11px] uppercase tracking-widest text-white/65 hover:text-[--accent] transition cursor-target">
                    <Github size={14} /> Source
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
