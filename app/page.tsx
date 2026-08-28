import {
  ArrowRight,
  BarChart3,
  Check,
  FileText,
  Menu,
  Sparkles,
  Target,
  WandSparkles,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Resume Assistant",
    description:
      "Improve your resume wording while keeping your real experience at the center.",
  },
  {
    icon: BarChart3,
    title: "ATS Analysis",
    description:
      "Understand how your resume performs against common applicant-tracking requirements.",
  },
  {
    icon: Target,
    title: "Job Matching",
    description:
      "Compare your resume with a job description and identify relevant improvement areas.",
  },
  {
    icon: FileText,
    title: "Professional Templates",
    description:
      "Create clean, readable resumes designed for recruiters and modern hiring workflows.",
  },
];

const steps = [
  {
    number: "01",
    title: "Build",
    description:
      "Add your experience, education, skills and projects in one focused workspace.",
  },
  {
    number: "02",
    title: "Improve",
    description:
      "Use AI suggestions to make your content clearer, stronger and more professional.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "Check ATS compatibility and compare your resume with the role you want.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071014] text-white">
      {/* ================= MOBILE HEADER ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071014]/90 px-5 py-4 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Brand />

          <details className="relative">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
              <Menu size={19} />
            </summary>

            <div className="absolute right-0 top-14 w-56 rounded-2xl border border-white/10 bg-[#0b171c] p-2 shadow-2xl">
              <MobileLink href="#features" text="Features" />
              <MobileLink href="#how-it-works" text="How it works" />
              <MobileLink href="#templates" text="Templates" />
              <MobileLink href="#about" text="About" />

              <div className="my-2 border-t border-white/10" />

              <MobileLink href="/login" text="Sign in" />

              <a
                href="/signup"
                className="mt-1 block rounded-xl bg-[#6ee7b7] px-4 py-3 text-center text-sm font-semibold text-[#071014]"
              >
                Get Started
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* ================= DESKTOP SIDEBAR ================= */}

      <aside className="fixed bottom-4 left-4 top-4 z-40 hidden w-[235px] flex-col rounded-3xl border border-white/10 bg-[#0b171c]/90 p-5 shadow-2xl backdrop-blur-xl lg:flex">
        <Brand />

        <div className="mt-10 space-y-2">
          <SidebarItem active href="#home" text="Home" icon="⌂" />
          <SidebarItem href="#features" text="AI Tools" icon="✦" />
          <SidebarItem href="#templates" text="Templates" icon="▣" />
          <SidebarItem href="#how-it-works" text="How it works" icon="→" />
        </div>

        <div className="mt-auto">
          <div className="rounded-2xl border border-[#6ee7b7]/20 bg-[#6ee7b7]/[0.05] p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#6ee7b7]/10">
              <Sparkles size={17} className="text-[#6ee7b7]" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6ee7b7]">
              ResumeForge AI
            </p>

            <h3 className="mt-2 text-base font-semibold leading-6">
              Build a resume you can be proud of.
            </h3>

            <p className="mt-2 text-xs leading-5 text-white/40">
              Build, improve and optimize your resume from one workspace.
            </p>

            <a
              href="/builder"
              className="mt-4 flex items-center justify-between rounded-xl bg-[#6ee7b7] px-4 py-3 text-xs font-bold text-[#071014] transition hover:bg-[#a3e635]"
            >
              Start Building
              <ArrowRight size={15} />
            </a>
          </div>

          <p className="mt-5 text-center text-[10px] text-white/25">
            © {new Date().getFullYear()} ResumeForge AI
          </p>
        </div>
      </aside>

      {/* ================= MAIN ================= */}

      <div className="lg:pl-[263px]">
        <div className="mx-auto max-w-[1500px] px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pt-4">
          {/* ================= TOP NAV ================= */}

          <nav className="hidden items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 lg:flex">
            <p className="text-xs text-white/35">
              Your AI-powered career workspace
            </p>

            <div className="flex items-center gap-7 text-sm text-white/55">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>

              <a href="#templates" className="transition hover:text-white">
                Templates
              </a>

              <a
                href="#how-it-works"
                className="transition hover:text-white"
              >
                How it works
              </a>

              <a
                href="/login"
                className="rounded-xl border border-white/10 px-4 py-2 transition hover:bg-white/5 hover:text-white"
              >
                Sign in
              </a>

              <a
                href="/signup"
                className="rounded-xl bg-[#6ee7b7] px-4 py-2 font-semibold text-[#071014] transition hover:bg-[#a3e635]"
              >
                Get Started
              </a>
            </div>
          </nav>

          {/* ================= HERO ================= */}

          <section
            id="home"
            className="rf-grid relative mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b171c] px-6 py-14 sm:px-10 lg:px-14 lg:py-20"
          >
            {/* Ambient glow */}

            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal-400/[0.06] blur-[100px]" />

            <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[400px] rounded-full bg-lime-300/[0.04] blur-[100px]" />

            <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
              {/* Hero text */}

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6ee7b7]/20 bg-[#6ee7b7]/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-[#6ee7b7]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6ee7b7]" />
                  AI-POWERED RESUME BUILDER
                </div>

                <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
                  Build a resume
                  <span className="block rf-gradient-text">
                    that moves you forward.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
                  Create a professional resume, improve your content with AI,
                  understand your ATS readiness and prepare for your next
                  opportunity — without the formatting headache.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/builder"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#6ee7b7] px-6 py-3.5 text-sm font-bold text-[#071014] transition hover:-translate-y-0.5 hover:bg-[#a3e635]"
                  >
                    Create My Resume
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="#features"
                    className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white/75 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    Explore Features
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/35">
                  <span className="flex items-center gap-2">
                    <Check size={13} className="text-[#6ee7b7]" />
                    ATS-friendly
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={13} className="text-[#6ee7b7]" />
                    AI assistance
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={13} className="text-[#6ee7b7]" />
                    Professional templates
                  </span>
                </div>
              </div>

              {/* Resume preview */}

              <ResumePreview />
            </div>
          </section>

          {/* ================= FEATURE STRIP ================= */}

          <section className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-4">
            <Stat number="AI" label="Writing assistance" />
            <Stat number="ATS" label="Resume analysis" />
            <Stat number="12+" label="Professional templates" />
            <Stat number="PDF" label="Export ready" />
          </section>

          {/* ================= FEATURES ================= */}

          <section id="features" className="py-16">
            <SectionHeading
              eyebrow="THE WORKSPACE"
              title="More than a resume editor."
              description="ResumeForge is designed around the things that actually matter when you're preparing for a job application."
            />

            <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group rounded-2xl border border-white/10 bg-[#0b171c] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6ee7b7]/25 hover:bg-[#0d1b20]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6ee7b7]/[0.08] text-[#6ee7b7]">
                      <Icon size={19} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {feature.description}
                    </p>

                    <a
                      href="/builder"
                      className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-[#6ee7b7]"
                    >
                      Explore
                      <ArrowRight size={13} />
                    </a>
                  </article>
                );
              })}
            </div>
          </section>

          {/* ================= BUILDER PREVIEW ================= */}

          <section
            id="templates"
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b171c] p-6 sm:p-10"
          >
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6ee7b7]">
                  SIMPLE EDITOR
                </p>

                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Your resume.
                  <span className="block text-white/35">
                    Your control.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">
                  A focused editor where your information stays on one side
                  and your professional resume stays visible on the other.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Live resume preview",
                    "Easy section management",
                    "Template switching",
                    "AI writing assistance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/60"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6ee7b7]/10">
                        <Check size={13} className="text-[#6ee7b7]" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <BuilderMockup />
            </div>
          </section>

          {/* ================= HOW IT WORKS ================= */}

          <section id="how-it-works" className="py-16">
            <SectionHeading
              eyebrow="HOW IT WORKS"
              title="From blank page to application-ready."
              description="A simple workflow designed to keep you moving instead of fighting with formatting."
            />

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-[#0b171c] p-7"
                >
                  <span className="text-sm font-bold text-[#6ee7b7]">
                    {step.number}
                  </span>

                  <h3 className="mt-7 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ================= CTA ================= */}

          <section className="relative overflow-hidden rounded-[2rem] border border-[#6ee7b7]/15 bg-[#0c2022] px-6 py-16 text-center sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#6ee7b7]/10 blur-[90px]" />

            <div className="relative">
              <WandSparkles
                size={25}
                className="mx-auto text-[#6ee7b7]"
              />

              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Ready to build your next resume?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/40">
                Start with your real experience. Let ResumeForge help you
                present it better.
              </p>

              <a
                href="/signup"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#6ee7b7] px-7 py-3.5 text-sm font-bold text-[#071014] transition hover:bg-[#a3e635]"
              >
                Start Building
                <ArrowRight size={16} />
              </a>
            </div>
          </section>

          {/* ================= FOOTER ================= */}

          <footer
            id="about"
            className="flex flex-col gap-5 border-t border-white/10 py-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className="font-semibold text-white/65">
                ResumeForge AI
              </span>

              <span className="ml-2">
                Build better. Apply smarter.
              </span>
            </div>

            <div className="flex flex-wrap gap-5">
              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>

              <a href="/terms" className="hover:text-white">
                Terms
              </a>

              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

/* ============================================================
   COMPONENTS
============================================================ */

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6ee7b7] to-[#a3e635] text-lg font-black text-[#071014]">
        R
      </div>

      <div>
        <div className="text-sm font-bold tracking-tight">
          ResumeForge
        </div>

        <div className="text-[9px] font-medium tracking-[0.15em] text-white/30">
          AI RESUME BUILDER
        </div>
      </div>
    </a>
  );
}

function SidebarItem({
  href,
  text,
  icon,
  active = false,
}: {
  href: string;
  text: string;
  icon: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
        active
          ? "bg-[#6ee7b7]/[0.08] text-[#6ee7b7]"
          : "text-white/45 hover:bg-white/[0.04] hover:text-white"
      }`}
    >
      <span className="w-5 text-center">{icon}</span>
      {text}
    </a>
  );
}

function MobileLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-xl px-4 py-3 text-sm text-white/55 hover:bg-white/[0.05] hover:text-white"
    >
      {text}
    </a>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <div className="text-xl font-bold text-white">{number}</div>
      <div className="mt-1 text-[11px] text-white/35">{label}</div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6ee7b7]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-6 text-white/40">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   RESUME PREVIEW
============================================================ */

function ResumePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <div className="absolute -inset-8 rounded-full bg-teal-400/[0.06] blur-[80px]" />

      <div className="relative rounded-2xl border border-white/10 bg-[#101c21] p-3 shadow-2xl">
        <div className="rounded-xl bg-[#f8faf9] p-6 text-[#14201f] sm:p-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="h-3 w-36 rounded bg-[#14201f]" />
              <div className="mt-3 h-2 w-24 rounded bg-[#6ee7b7]" />
            </div>

            <div className="h-10 w-10 rounded-full bg-[#d9ebe5]" />
          </div>

          <div className="mt-7 h-px bg-black/10" />

          <ResumeBlock title="PROFILE">
            <Line width="100%" />
            <Line width="92%" />
            <Line width="75%" />
          </ResumeBlock>

          <div className="grid grid-cols-[1.2fr_0.8fr] gap-7">
            <div>
              <ResumeBlock title="EXPERIENCE">
                <MiniExperience />
                <MiniExperience />
              </ResumeBlock>
            </div>

            <div>
              <ResumeBlock title="SKILLS">
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Git",
                    "UI/UX",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#dceee8] px-2 py-1 text-[7px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ResumeBlock>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#102229] px-5 py-4 shadow-xl">
          <div className="text-[9px] uppercase tracking-[0.16em] text-white/35">
            ATS readiness
          </div>

          <div className="mt-1 text-2xl font-bold text-[#6ee7b7]">
            94<span className="text-sm text-white/25">/100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-7">
      <div className="text-[8px] font-bold tracking-[0.16em] text-[#14201f]/60">
        {title}
      </div>

      <div className="mt-3">{children}</div>
    </div>
  );
}

function Line({ width }: { width: string }) {
  return (
    <div
      className="mb-2 h-1.5 rounded bg-black/10"
      style={{ width }}
    />
  );
}

function MiniExperience() {
  return (
    <div className="mb-5">
      <div className="h-2 w-28 rounded bg-black/20" />

      <div className="mt-2 h-1.5 w-20 rounded bg-[#6ee7b7]" />

      <div className="mt-3">
        <Line width="100%" />
        <Line width="92%" />
        <Line width="80%" />
      </div>
    </div>
  );
}

/* ============================================================
   BUILDER MOCKUP
============================================================ */

function BuilderMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071014] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />

        <span className="ml-3 text-[9px] text-white/25">
          ResumeForge / Builder
        </span>
      </div>

      <div className="grid min-h-[390px] grid-cols-[0.65fr_1fr] gap-3 p-3">
        {/* Editor */}

        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/25">
            Resume sections
          </p>

          {[
            "Personal",
            "Summary",
            "Experience",
            "Education",
            "Skills",
            "Projects",
          ].map((item, index) => (
            <div
              key={item}
              className={`mt-3 rounded-lg px-3 py-2 text-[10px] ${
                index === 2
                  ? "bg-[#6ee7b7]/[0.08] text-[#6ee7b7]"
                  : "text-white/35"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Preview */}

        <div className="rounded-xl bg-[#f8faf9] p-5 text-[#14201f]">
          <div className="h-3 w-28 rounded bg-[#14201f]" />

          <div className="mt-2 h-2 w-16 rounded bg-[#6ee7b7]" />

          <div className="mt-7 h-2 w-16 rounded bg-black/50" />

          <div className="mt-3 space-y-2">
            <Line width="100%" />
            <Line width="92%" />
            <Line width="75%" />
          </div>

          <div className="mt-7 h-2 w-20 rounded bg-black/50" />

          {[1, 2, 3].map((item) => (
            <div key={item} className="mt-4">
              <div className="h-2 w-24 rounded bg-black/20" />

              <div className="mt-2 h-1.5 rounded bg-black/10" />

              <div className="mt-2 h-1.5 w-[85%] rounded bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
