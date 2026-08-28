import Link from "next/link";
import { ArrowLeft, ArrowRight, LogIn, UserPlus } from "lucide-react";

export default function StartPage() {
  return (
    <main className="min-h-screen bg-[#071014] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl items-center justify-center">
        <section className="w-full rounded-[2rem] border border-white/10 bg-[#0b171c] p-6 shadow-2xl sm:p-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white"><ArrowLeft size={16}/> Back to ResumeForge</Link>
          <div className="mx-auto mt-10 max-w-xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6ee7b7]/10 text-[#6ee7b7]">R</div>
            <p className="mt-5 text-xs font-bold tracking-[0.2em] text-[#6ee7b7]">LET&apos;S BUILD YOUR RESUME</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">First, choose how you want to continue.</h1>
            <p className="mt-4 text-sm leading-6 text-white/45">Create an account to save your resume, or sign in if you already have a ResumeForge workspace.</p>
          </div>
          <div className="mx-auto mt-9 grid max-w-xl gap-4 sm:grid-cols-2">
            <Link href="/signup" className="group rounded-2xl border border-[#6ee7b7]/25 bg-[#6ee7b7]/[0.06] p-6 transition hover:-translate-y-1 hover:bg-[#6ee7b7]/10">
              <UserPlus className="text-[#6ee7b7]" size={22}/>
              <h2 className="mt-5 text-lg font-semibold">Create an account</h2>
              <p className="mt-2 text-sm leading-6 text-white/40">New to ResumeForge? Start a workspace and build your first resume.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#6ee7b7]">Sign up <ArrowRight size={15}/></span>
            </Link>
            <Link href="/login" className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:bg-white/[0.05]">
              <LogIn className="text-white/70" size={22}/>
              <h2 className="mt-5 text-lg font-semibold">Sign in</h2>
              <p className="mt-2 text-sm leading-6 text-white/40">Already have an account? Continue to your saved ResumeForge workspace.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/70">Sign in <ArrowRight size={15}/></span>
            </Link>
          </div>
          <p className="mt-8 text-center text-xs text-white/25">Your resume should contain real information you provide. ResumeForge should never invent qualifications or experience.</p>
        </section>
      </div>
    </main>
  );
}
