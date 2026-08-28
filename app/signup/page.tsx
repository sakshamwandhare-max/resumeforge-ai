"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, LockKeyhole, Mail, UserRound, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  const [created, setCreated] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    if (!name || !email || password.length < 8) {
      setError("Please complete all fields. Password must be at least 8 characters.");
      return;
    }
    localStorage.setItem("resumeforge_guest_profile", JSON.stringify({ name, email }));
    setCreated(true);
  }

  if (created) {
    return (
      <main className="min-h-screen bg-[#071014] px-4 py-8 text-white sm:px-6">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
          <div className="w-full rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-center shadow-2xl sm:p-9">
            <CheckCircle2 className="mx-auto text-[#6ee7b7]" size={48} />
            <h1 className="mt-5 text-3xl font-semibold">Account setup complete</h1>
            <p className="mt-3 text-sm leading-6 text-white/50">Your local workspace is ready. Continue to the resume builder.</p>
            <Link href="/builder" className="mt-7 flex w-full items-center justify-center rounded-xl bg-[#6ee7b7] px-5 py-3.5 text-sm font-bold text-[#071014] hover:bg-[#a3e635]">Continue to Builder</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#071014] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
        <div className="w-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl sm:p-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"><ArrowLeft size={16} /> ResumeForge AI</Link>
          <div className="mt-8"><h1 className="text-3xl font-semibold tracking-tight">Create your account</h1><p className="mt-2 text-sm leading-6 text-white/45">Build your student resume step by step.</p></div>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block"><span className="mb-2 block text-sm text-white/65">Full name</span><div className="flex items-center rounded-xl border border-white/10 bg-black/10 px-3 focus-within:border-[#6ee7b7]/50"><UserRound size={17} className="text-white/30" /><input name="name" required type="text" autoComplete="name" placeholder="Your name" className="w-full bg-transparent px-3 py-3 text-sm outline-none placeholder:text-white/20" /></div></label>
            <label className="block"><span className="mb-2 block text-sm text-white/65">Email</span><div className="flex items-center rounded-xl border border-white/10 bg-black/10 px-3 focus-within:border-[#6ee7b7]/50"><Mail size={17} className="text-white/30" /><input name="email" required type="email" autoComplete="email" placeholder="you@example.com" className="w-full bg-transparent px-3 py-3 text-sm outline-none placeholder:text-white/20" /></div></label>
            <label className="block"><span className="mb-2 block text-sm text-white/65">Password</span><div className="flex items-center rounded-xl border border-white/10 bg-black/10 px-3 focus-within:border-[#6ee7b7]/50"><LockKeyhole size={17} className="text-white/30" /><input name="password" required minLength={8} type="password" autoComplete="new-password" placeholder="At least 8 characters" className="w-full bg-transparent px-3 py-3 text-sm outline-none placeholder:text-white/20" /></div></label>
            {error && <p className="text-sm text-red-300">{error}</p>}
            <button type="submit" className="w-full rounded-xl bg-[#6ee7b7] px-5 py-3.5 text-sm font-bold text-[#071014] transition hover:bg-[#a3e635]">Create account</button>
          </form>
          <p className="mt-7 text-center text-sm text-white/40">Already have an account? <Link href="/login" className="font-semibold text-[#6ee7b7] hover:text-white">Sign in</Link></p>
        </div>
      </div>
    </main>
  );
}
