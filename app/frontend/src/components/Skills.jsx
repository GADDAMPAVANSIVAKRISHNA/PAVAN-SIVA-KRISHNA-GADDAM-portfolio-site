import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { skills } from "../mock";

function SkillRow({ name, level }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setInView(true), o.disconnect()),
      { threshold: 0.4 }
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-3">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-[14px] text-white/85">{name}</span>
        <span className="mono text-[11px] text-white/40">{level}%</span>
      </div>
      <div className={`skill-bar ${inView ? "in" : ""}`} style={{ "--w": level / 100 }}>
        <span />
      </div>
    </div>
  );
}

export default function Skills() {
  const cats = Object.entries(skills);
  return (
    <section id="skills" className="section relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <Reveal>
            <span className="eyebrow">Skills</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-5 leading-tight">
              Tools I use to <span className="gradient-text">ship things</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-white/55 max-w-md text-[15px]">
              From front-end interfaces to backend APIs and ML notebooks — a hands-on toolkit forged across internships and real projects.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats.map(([cat, list], i) => (
            <Reveal key={cat} delay={i * 80}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg text-white">{cat}</h3>
                  <span className="mono text-[10px] text-white/30 uppercase tracking-widest">0{i + 1}</span>
                </div>
                <div className="divide-y divide-white/5">
                  {list.map((s) => (
                    <SkillRow key={s.name} name={s.name} level={s.level} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
