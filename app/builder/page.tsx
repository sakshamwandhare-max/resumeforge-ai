"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, Download, Eye, FileText, Sparkles } from "lucide-react";

export default function BuilderPage() {
  const [data, setData] = useState({ name: "Your Name", role: "Computer Science Student", email: "you@example.com", phone: "+91 00000 00000", summary: "Motivated student interested in software, AI and practical problem solving.", skills: "Python, JavaScript, React, Git, SQL", education: "B.Tech / Degree — Your College — 2026", projects: "ResumeForge AI — Built a resume platform focused on students and ATS-friendly applications." });
  const [saved, setSaved] = useState(false);
  const update = (key: keyof typeof data, value: string) => setData((current) => ({ ...current, [key]: value }));
  const skillList = useMemo(() => data.skills.split(",").map((s) => s.trim()).filter(Boolean), [data.skills]);

  return (
    <main className="min-h-screen bg-[#071014] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#071014]/90 px-4 py-4 backdrop-blur-xl sm:px-6"><div className="mx-auto flex max-w-7xl items-center justify-between"><Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white"><ArrowLeft size={16}/> ResumeForge</Link><div className="flex items-center gap-2"><button onClick={() => setSaved(true)} className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5">{saved ? "Saved ✓" : "Save draft"}</button><button className="flex items-center gap-2 rounded-xl bg-[#6ee7b7] px-4 py-2 text-sm font-bold text-[#071014]"><Download size={15}/> Export PDF</button></div></div></header>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-7"><p className="text-xs font-bold tracking-[0.2em] text-[#6ee7b7]">RESUME BUILDER</p><h1 className="mt-2 text-3xl font-semibold">Build your student resume</h1><p className="mt-2 text-sm text-white/40">Fill in what you actually know. You can improve it later with AI.</p></div>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-3xl border border-white/10 bg-[#0b171c] p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6ee7b7]/10 text-[#6ee7b7]"><FileText size={19}/></div><div><h2 className="font-semibold">Your information</h2><p className="text-xs text-white/35">Changes appear instantly in the preview.</p></div></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" value={data.name} onChange={(v) => update("name", v)}/><Field label="Target role" value={data.role} onChange={(v) => update("role", v)}/><Field label="Email" value={data.email} onChange={(v) => update("email", v)}/><Field label="Phone" value={data.phone} onChange={(v) => update("phone", v)}/>
            </div>
            <Area label="Professional summary" value={data.summary} onChange={(v) => update("summary", v)}/><Area label="Education" value={data.education} onChange={(v) => update("education", v)}/><Area label="Projects" value={data.projects} onChange={(v) => update("projects", v)}/><Area label="Skills (comma separated)" value={data.skills} onChange={(v) => update("skills", v)}/>
            <div className="mt-5 rounded-2xl border border-[#6ee7b7]/15 bg-[#6ee7b7]/[0.04] p-4"><div className="flex gap-3"><Sparkles size={18} className="mt-0.5 text-[#6ee7b7]"/><div><p className="font-semibold">Next: AI improvement</p><p className="mt-1 text-xs leading-5 text-white/40">After the editor is stable, this workspace will connect to secure AI endpoints for rewriting and ATS feedback.</p></div></div></div>
          </section>
          <section className="rounded-3xl border border-white/10 bg-[#10191d] p-4 sm:p-7"><div className="mb-4 flex items-center justify-between"><div><p className="text-xs uppercase tracking-[0.18em] text-white/30">Live preview</p><p className="mt-1 text-sm text-white/45">Modern Student template</p></div><Eye size={18} className="text-white/30"/></div><article className="mx-auto min-h-[720px] max-w-[760px] bg-white p-7 text-slate-900 shadow-2xl sm:p-10"><header className="border-b-2 border-slate-900 pb-5"><h2 className="text-3xl font-bold">{data.name}</h2><p className="mt-1 text-sm font-medium">{data.role}</p><p className="mt-3 text-xs text-slate-500">{data.email} · {data.phone}</p></header><ResumeSection title="PROFILE"><p className="text-sm leading-6 text-slate-700">{data.summary}</p></ResumeSection><ResumeSection title="EDUCATION"><p className="text-sm leading-6 text-slate-700">{data.education}</p></ResumeSection><ResumeSection title="PROJECTS"><p className="text-sm leading-6 text-slate-700">{data.projects}</p></ResumeSection><ResumeSection title="SKILLS"><div className="flex flex-wrap gap-2">{skillList.map((skill) => <span key={skill} className="rounded-full border border-slate-300 px-3 py-1 text-xs">{skill}</span>)}</div></ResumeSection></article><div className="mx-auto mt-4 flex max-w-[760px] items-center gap-2 text-xs text-white/35"><Check size={14} className="text-[#6ee7b7]"/> Preview updates locally as you type.</div></section>
        </div>
      </div>
    </main>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) { return <label className="block"><span className="mb-2 block text-xs font-medium text-white/55">{label}</span><input value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/10 px-3 py-3 text-sm outline-none focus:border-[#6ee7b7]/50" /></label>; }
function Area({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) { return <label className="mt-4 block"><span className="mb-2 block text-xs font-medium text-white/55">{label}</span><textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)} className="w-full resize-y rounded-xl border border-white/10 bg-black/10 px-3 py-3 text-sm leading-6 outline-none focus:border-[#6ee7b7]/50" /></label>; }
function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) { return <section className="mt-7"><h3 className="border-b border-slate-200 pb-2 text-xs font-bold tracking-[0.18em] text-slate-500">{title}</h3><div className="mt-3">{children}</div></section>; }
