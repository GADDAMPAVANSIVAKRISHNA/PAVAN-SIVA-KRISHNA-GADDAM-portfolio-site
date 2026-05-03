import React from "react";
import { Code2, Cpu, Layers, GitBranch } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../mock";

const pillars = [
  { icon: Code2, title: "Full-Stack Engineering", text: "React, Node.js, Django — building responsive UIs and clean APIs." },
  { icon: Cpu, title: "AI & Machine Learning", text: "NLP, model training and analytics with Python, NLTK and Pandas." },
  { icon: Layers, title: "Systems & Architecture", text: "OOP foundations, REST design and scalable component patterns." },
  { icon: GitBranch, title: "Version Control", text: "Structured Git workflows, collaborative commits and clean history." },
];

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">About</span>
              <h2 className="font-display text-4xl sm:text-5xl mt-5 leading-tight">
                A developer who builds for <span className="gradient-text">clarity & impact</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-white/60 leading-relaxed text-[16px]">{profile.about}</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["React", "Node.js", "Python", "Django", "PostgreSQL", "NLP", "Git"].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="glass rounded-2xl p-6 h-full group transition-all hover:border-[--accent]/40">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[--accent-soft] border border-[--accent]/20 text-[--accent] mb-4 transition-transform group-hover:scale-110">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
