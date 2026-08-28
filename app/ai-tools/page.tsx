"use client";
import Link from "next/link";
import { ArrowRight, FileText, Sparkles, Target, WandSparkles } from "lucide-react";

const tools = [
  { icon: WandSparkles, title: "Rewrite a bullet", text: "Turn a basic responsibility into a clearer, achievement-focused bullet without inventing experience." },
  { icon: Sparkles, title: "Improve your summary", text: "Get a concise professional summary based on the information you provide." },
  { icon: Target, title: "Match a job", text: "Compare your resume content with a job description and identify missing relevant skills." },
  { icon: FileText, title: "Resume feedback", text: "Get a structured checklist for clarity, relevance, consistency and formatting." },
];

export default function AIToolsPage() {
  return <main className="min-h-screen bg-[#071014] px-4 py-8 text-white sm:px-8"><div className="mx-auto max-w-6xl"><Link href="/" className="text-sm text-white/50 hover:text-white">← ResumeForge AI</Link><div className="mt-10 max-w-3xl"><p className="text-xs font-bold tracking-[0.2em] text-[#6ee7b7]">AI CAREER TOOLS</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">Use AI to improve your resume, not invent your career.</h1><p className="mt-5 text-white/45">ResumeForge is built to help students communicate real projects, skills and experience more clearly.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{tools.map(({icon:Icon,title,text})=><article key={title} className="rounded-3xl border border-white/10 bg-[#0b171c] p-7"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6ee7b7]/10 text-[#6ee7b7]"><Icon size={21}/></div><h2 className="mt-6 text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-white/45">{text}</p><Link href="/builder" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6ee7b7]">Try in builder <ArrowRight size={15}/></Link></article>)}</div></div></main>;
}
