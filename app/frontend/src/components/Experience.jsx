import React from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "../mock";

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-5 leading-tight">
            Where I've <span className="gradient-text">trained & contributed</span>.
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-12">
          <div className="timeline-line" />
          {experience.map((exp, i) => (
            <Reveal key={exp.role + i} delay={i * 120}>
              <div className="relative mb-10">
                <div className="timeline-dot" style={{ top: 8 }} />
                <div className="glass rounded-2xl p-7 hover:border-[--accent]/30 transition">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-[--accent] mono text-[11px] uppercase tracking-widest">
                        <Briefcase size={13} /> {exp.type}
                      </div>
                      <h3 className="font-display text-2xl text-white mt-2">{exp.role}</h3>
                      <p className="text-white/60 text-[15px] mt-1">{exp.company}</p>
                    </div>
                    <span className="mono text-[12px] text-white/45 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="mt-4 text-white/60 text-[15px] leading-relaxed">{exp.description}</p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex gap-2 text-[14px] text-white/65">
                        <ArrowUpRight size={15} className="text-[--accent] mt-1 flex-none" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
