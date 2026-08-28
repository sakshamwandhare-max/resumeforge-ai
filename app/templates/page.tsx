import Link from "next/link";
import { ArrowRight, Check, FileText } from "lucide-react";

const templates = [
  { name: "Modern Student", tone: "Clean and balanced", best: "Internships, campus roles" },
  { name: "ATS Classic", tone: "Simple and readable", best: "Corporate applications" },
  { name: "Tech Graduate", tone: "Projects-first", best: "Software and technical roles" },
  { name: "Academic", tone: "Detailed and structured", best: "Research and higher studies" },
  { name: "Creative Minimal", tone: "Elegant and compact", best: "Design and media roles" },
  { name: "One Page Pro", tone: "Focused and concise", best: "Students with limited experience" },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-[#071014] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-white/50 hover:text-white">← ResumeForge AI</Link>
        <div className="mt-10 max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#6ee7b7]">RESUME TEMPLATES</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">Choose a layout. Keep the focus on your story.</h1>
          <p className="mt-5 text-white/45">Every template is designed to stay readable, recruiter-friendly and easy to customize for students and early-career applicants.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template) => (
            <article key={template.name} className="rounded-3xl border border-white/10 bg-[#0b171c] p-5 hover:border-[#6ee7b7]/30">
              <div className="aspect-[3/4] rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
                <div className="h-6 w-2/3 rounded bg-slate-900/10" />
                <div className="mt-3 h-2 w-1/2 rounded bg-slate-900/10" />
                {[1,2,3,4].map((n) => <div key={n} className="mt-7"><div className="h-2 w-1/3 rounded bg-slate-900/15" /><div className="mt-3 h-2 w-full rounded bg-slate-900/10" /><div className="mt-2 h-2 w-11/12 rounded bg-slate-900/10" /></div>)}
              </div>
              <h2 className="mt-5 text-lg font-semibold">{template.name}</h2>
              <p className="mt-1 text-sm text-white/45">{template.tone}</p>
              <p className="mt-3 text-xs text-white/35">Best for: {template.best}</p>
              <Link href="/builder" className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#6ee7b7] px-4 py-3 text-sm font-bold text-[#071014]">Use template <ArrowRight size={15}/></Link>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/55"><Check className="mr-2 inline text-[#6ee7b7]" size={16}/> Your content stays yours. Templates only control presentation.</div>
      </div>
    </main>
  );
}
