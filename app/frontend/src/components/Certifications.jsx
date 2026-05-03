import React from "react";
import { Award, GraduationCap, Calendar } from "lucide-react";
import Reveal from "./Reveal";
import { certifications, education } from "../mock";

export default function Certifications() {
  return (
    <section id="certifications" className="section relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Education</span>
              <h2 className="font-display text-4xl sm:text-[44px] mt-5 leading-tight">
                Academic <span className="gradient-text">foundation</span>.
              </h2>
            </Reveal>

            <div className="mt-10 space-y-5">
              {education.map((e, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="glass rounded-2xl p-7 relative overflow-hidden">
                    <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-[--accent]/10 blur-3xl" />
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[--accent-soft] border border-[--accent]/20 text-[--accent] flex items-center justify-center">
                        <GraduationCap size={20} />
                      </div>
                      <div className="mono text-[11px] uppercase tracking-widest text-white/45 flex items-center gap-2">
                        <Calendar size={13} /> {e.period}
                      </div>
                    </div>
                    <h3 className="font-display text-xl text-white mt-5">{e.degree}</h3>
                    <p className="text-[--accent] text-[14px] mt-1">{e.specialization}</p>
                    <p className="text-white/65 text-[14px] mt-2">{e.school}</p>
                    <p className="mono text-[12px] text-white/45 mt-2">{e.score}</p>
                    <p className="mt-4 text-white/55 text-[14px] leading-relaxed">{e.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">Certifications</span>
              <h2 className="font-display text-4xl sm:text-[44px] mt-5 leading-tight">
                Verified <span className="gradient-text">credentials</span>.
              </h2>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {certifications.map((c, i) => (
                <Reveal key={c.name} delay={i * 80}>
                  <div className="glass rounded-2xl p-6 h-full group hover:border-[--accent]/40 transition relative">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 text-[--accent] flex items-center justify-center group-hover:scale-110 transition">
                        <Award size={18} />
                      </div>
                      <span className="mono text-[10px] uppercase tracking-widest text-white/40">{c.year}</span>
                    </div>
                    <h3 className="font-display text-[16px] text-white mt-4 leading-snug">{c.name}</h3>
                    <p className="text-[13px] text-white/55 mt-1">{c.issuer}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.skills.map((s) => <span key={s} className="chip">{s}</span>)}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
