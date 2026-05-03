import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../mock";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const list = JSON.parse(localStorage.getItem("psk_messages") || "[]");
    list.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("psk_messages", JSON.stringify(list));
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <section id="contact" className="section relative">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Contact</span>
              <h2 className="font-display text-5xl sm:text-6xl mt-5 leading-[0.95]">
                Let's build <span className="gradient-text">something great</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-white/60 text-[16px] leading-relaxed max-w-md">
                Open to internships, freelance work and collaborative projects. Drop a message below or reach out directly — I respond within 24 hours.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
                { icon: MapPin, label: "Location", value: profile.location },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 80}>
                  <a href={c.href} className="glass rounded-xl p-4 flex items-center gap-4 group hover:border-[--accent]/40 transition cursor-target">
                    <div className="w-11 h-11 rounded-lg bg-[--accent-soft] border border-[--accent]/20 text-[--accent] flex items-center justify-center group-hover:scale-110 transition">
                      <c.icon size={18} />
                    </div>
                    <div>
                      <p className="mono text-[10px] uppercase tracking-widest text-white/40">{c.label}</p>
                      <p className="text-white/85 text-[14px] mt-0.5">{c.value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/65 hover:text-[--accent] hover:border-[--accent]/40 transition cursor-target">
                <Github size={17} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/65 hover:text-[--accent] hover:border-[--accent]/40 transition cursor-target">
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <form onSubmit={submit} className="glass rounded-2xl p-7 sm:p-9 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[--accent]/10 blur-3xl" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mono text-[11px] uppercase tracking-widest text-white/45">Your Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ada Lovelace" className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[--accent] outline-none py-3 text-white placeholder:text-white/25 transition" />
                  </div>
                  <div>
                    <label className="mono text-[11px] uppercase tracking-widest text-white/45">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@domain.com" className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[--accent] outline-none py-3 text-white placeholder:text-white/25 transition" />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="mono text-[11px] uppercase tracking-widest text-white/45">Message</label>
                  <textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your idea or role..." className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[--accent] outline-none py-3 text-white placeholder:text-white/25 resize-none transition" />
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="mono text-[11px] text-white/35">
                    <span className="text-[--accent]">*</span> All fields required
                  </p>
                  <button type="submit" className="btn-primary group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[--accent] text-[#00131a] font-medium text-sm tracking-wide cursor-target">
                    {sent ? (<><CheckCircle2 size={16} /> Sent</>) : (<>Send Message <Send size={15} className="transition group-hover:translate-x-0.5" /></>)}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
