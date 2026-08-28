"use client";

import Link from "next/link";
import { ArrowLeft, LockKeyhole, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#071014] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
        <div className="w-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl sm:p-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft size={16} /> ResumeForge AI
          </Link>
          <div className="mt-8">
            <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
            <p className="mt-2 text-sm leading-6 text-white/45">Sign in to continue building and improving your resumes.</p>
          </div>
          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <label className="block">
              <span className="mb-2 block text-sm text-white/65">Email</span>
              <div className="flex items-center rounded-xl border border-white/10 bg-black/10 px-3 focus-within:border-[#6ee7b7]/50">
                <Mail size={17} className="text-white/30" />
                <input required type="email" autoComplete="email" placeholder="you@example.com" className="w-full bg-transparent px-3 py-3 text-sm outline-none placeholder:text-white/20" />
              </div>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-white/65">Password</span>
              <div className="flex items-center rounded-xl border border-white/10 bg-black/10 px-3 focus-within:border-[#6ee7b7]/50">
                <LockKeyhole size={17} className="text-white/30" />
                <input required type="password" autoComplete="current-password" placeholder="Your password" className="w-full bg-transparent px-3 py-3 text-sm outline-none placeholder:text-white/20" />
              </div>
            </label>
            <button type="button" className="w-full rounded-xl bg-[#6ee7b7] px-5 py-3.5 text-sm font-bold text-[#071014] transition hover:bg-[#a3e635]">Sign in</button>
          </form>
          <p className="mt-7 text-center text-sm text-white/40">New to ResumeForge? <Link href="/signup" className="font-semibold text-[#6ee7b7] hover:text-white">Create an account</Link></p>
        </div>
      </div>
    </main>
  );
}
