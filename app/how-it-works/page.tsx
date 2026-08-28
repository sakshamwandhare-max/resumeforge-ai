import Link from "next/link";
import { ArrowRight, Check, Download, FileText, Sparkles } from "lucide-react";

const steps = [
  ["01", "Add your details", "Start with your education, projects, skills, links and any real experience you have."],
  ["02", "Choose a template", "Pick a clean layout that fits your stage, from first internship to graduate applications."],
  ["03", "Improve your content", "Use guided prompts and AI assistance to make bullets specific and easy to understand."],
  ["04", "Check and export", "Review the final resume, run ATS checks and prepare a PDF for applications."],
];

export default function HowItWorksPage() {
  return <main className="min-h-screen bg-[#071014] px-4 py-8 text-white sm:px-8"><div className="mx-auto max-w-6xl"><Link href="/" className="text-sm text-white/50 hover:text-white">← ResumeForge AI</Link><div className="mt-10 max-w-3xl"><p className="text-xs font-bold tracking-[0.2em] text-[#6ee7b7]">HOW IT WORKS</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">A simple path from student profile to job-ready resume.</h1><p className="mt-5 text-white/45">No design experience required. Build the content first, then let the editor handle the presentation.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2">{steps.map(([num,title,text])=><article key={num} className="rounded-3xl border border-white/10 bg-[#0b171c] p-7"><span className="text-sm font-bold text-[#6ee7b7]">{num}</span><h2 className="mt-6 text-xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-white/45">{text}</p></article>)}</div><div className="mt-10 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 p-5"><FileText className="text-[#6ee7b7]"/><p className="mt-3 font-semibold">Real experience</p></div><div className="rounded-2xl border border-white/10 p-5"><Sparkles className="text-[#6ee7b7]"/><p className="mt-3 font-semibold">Guided improvement</p></div><div className="rounded-2xl border border-white/10 p-5"><Download className="text-[#6ee7b7]"/><p className="mt-3 font-semibold">Application-ready output</p></div></div><Link href="/builder" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#6ee7b7] px-6 py-3.5 font-bold text-[#071014]">Start building <ArrowRight size={16}/></Link></div></main>;
}
