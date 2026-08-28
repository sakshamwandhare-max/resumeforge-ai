import Link from "next/link";
import { ArrowRight, Check, Crown, FileText } from "lucide-react";

const templates = [
  { name: "Student Classic", type: "ATS", price: "Free", tone: "Clean one-page", best: "Placements & internships", accent: "border-[#6ee7b7]/30" },
  { name: "Modern Graduate", type: "ATS", price: "Free", tone: "Modern & balanced", best: "Graduate roles", accent: "border-[#6ee7b7]/30" },
  { name: "Tech Projects", type: "ATS", price: "Free", tone: "Projects-first", best: "CS, IT & engineering", accent: "border-[#6ee7b7]/30" },
  { name: "Academic Start", type: "ATS", price: "Free", tone: "Structured & detailed", best: "Research & higher studies", accent: "border-[#6ee7b7]/30" },
  { name: "Minimal Pro", type: "ATS", price: "Pro", tone: "Elegant & compact", best: "Business & corporate", accent: "border-white/10" },
  { name: "Executive Edge", type: "ATS", price: "Pro", tone: "Strong hierarchy", best: "Early-career roles", accent: "border-white/10" },
  { name: "Portfolio Split", type: "Creative", price: "Pro", tone: "Two-column visual", best: "Design & media", accent: "border-white/10" },
  { name: "Bold Header", type: "Creative", price: "Pro", tone: "Confident typography", best: "Marketing & events", accent: "border-white/10" },
  { name: "Soft Hand", type: "Handwritten", price: "Pro", tone: "Friendly handwritten headings", best: "Student clubs & creative work", accent: "border-white/10" },
  { name: "Notebook", type: "Handwritten", price: "Pro", tone: "Notebook-inspired", best: "Personal portfolios", accent: "border-white/10" },
  { name: "Study Notes", type: "Handwritten", price: "Pro", tone: "Casual notes aesthetic", best: "Projects & extracurriculars", accent: "border-white/10" },
  { name: "Signature", type: "Creative", price: "Pro", tone: "Editorial with script accents", best: "Creative portfolios", accent: "border-white/10" },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-[#071014] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm text-white/50 hover:text-white">← ResumeForge AI</Link>
        <div className="mt-10 max-w-4xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#6ee7b7]">12 STUDENT-FRIENDLY TEMPLATES</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">Pick a style that fits your next opportunity.</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/45 sm:text-base">Start with one of four free ATS-friendly layouts. Pro templates add more visual variety, including handwritten-inspired styles for creative portfolios and personal projects.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 text-xs">
          {['All 12','Free 4','ATS 6','Creative 3','Handwritten 3'].map((x,i)=><span key={x} className={`rounded-full border px-3 py-2 ${i===0 ? 'border-[#6ee7b7]/30 bg-[#6ee7b7]/10 text-[#6ee7b7]' : 'border-white/10 text-white/40'}`}>{x}</span>)}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {templates.map((template, index) => (
            <article key={template.name} className={`rounded-3xl border ${template.accent} bg-[#0b171c] p-4 transition hover:-translate-y-1 hover:border-[#6ee7b7]/40`}>
              <div className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#f8faf9] p-5 text-slate-900 shadow-xl ${template.type === 'Handwritten' ? 'font-[cursive]' : ''}`}>
                <div className="flex items-start justify-between border-b border-slate-200 pb-4"><div><div className="text-lg font-bold">YOUR NAME</div><div className="mt-1 text-[8px] text-slate-500">Student · Your target role</div></div><div className="h-7 w-7 rounded-full bg-slate-100"/></div>
                <div className="mt-5 space-y-4">{['PROFILE','EDUCATION','PROJECTS','SKILLS'].map((section)=><div key={section}><div className="text-[8px] font-bold tracking-widest text-slate-500">{section}</div><div className="mt-2 h-1.5 w-full rounded bg-slate-100"/><div className="mt-1.5 h-1.5 w-11/12 rounded bg-slate-100"/><div className="mt-1.5 h-1.5 w-4/5 rounded bg-slate-100"/></div>)}</div>
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[8px] font-bold text-slate-500">{String(index + 1).padStart(2,'0')}</span>
              </div>
              <div className="mt-4 flex items-center justify-between gap-2"><h2 className="font-semibold">{template.name}</h2>{template.price === 'Free' ? <span className="rounded-full bg-[#6ee7b7]/10 px-2 py-1 text-[9px] font-bold text-[#6ee7b7]">FREE</span> : <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[9px] font-bold text-white/45"><Crown size={10}/> PRO</span>}</div>
              <p className="mt-1 text-xs text-white/40">{template.tone}</p><p className="mt-2 text-[11px] text-white/25">Best for: {template.best}</p>
              <Link href="/start" className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#6ee7b7] px-4 py-3 text-xs font-bold text-[#071014] hover:bg-[#a3e635]">Use template <ArrowRight size={14}/></Link>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-white/45"><Check className="mr-2 inline text-[#6ee7b7]" size={16}/> Tip for students: use ATS templates for most placements and internship portals. Handwritten-inspired templates are better suited to creative portfolios and personal projects, where visual personality matters more.</div>
      </div>
    </main>
  );
}
