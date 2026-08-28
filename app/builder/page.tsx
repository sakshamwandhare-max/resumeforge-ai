"use client";

import Link from "next/link";
import { ArrowLeft, Check, FileText, Sparkles } from "lucide-react";

export default function BuilderPage() {
  return (
    <main className="min-h-screen bg-[#071014] px-4 py-6 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
          <ArrowLeft size={16} /> Back to ResumeForge
        </Link>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6ee7b7]/10 text-[#6ee7b7]">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6ee7b7]">Resume Builder</p>
                <h1 className="text-xl font-semibold">Start your resume</h1>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Personal information",
                "Experience and education",
                "Skills and projects",
                "AI improvements and ATS checks",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/70">
                  <Check size={16} className="text-[#6ee7b7]" /> {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#6ee7b7]/15 bg-[#6ee7b7]/[0.05] p-5">
              <Sparkles size={18} className="text-[#6ee7b7]" />
              <h2 className="mt-3 font-semibold">AI assistance is coming into the editor</h2>
              <p className="mt-2 text-sm leading-6 text-white/45">We will add secure AI rewriting, ATS analysis and job matching after the core editor is stable.</p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-[#0b171c] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-white/35">Live preview</p>
            <div className="mt-5 min-h-[620px] rounded-2xl bg-white p-7 text-slate-900 shadow-2xl sm:p-10">
              <div className="border-b-2 border-slate-900 pb-5">
                <div className="h-7 w-52 rounded bg-slate-900/10" />
                <div className="mt-3 h-3 w-72 rounded bg-slate-900/10" />
              </div>
              {["PROFILE", "EXPERIENCE", "EDUCATION", "SKILLS"].map((section) => (
                <div key={section} className="mt-7">
                  <div className="text-xs font-bold tracking-widest text-slate-500">{section}</div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2.5 w-full rounded bg-slate-900/10" />
                    <div className="h-2.5 w-11/12 rounded bg-slate-900/10" />
                    <div className="h-2.5 w-4/5 rounded bg-slate-900/10" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
