import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ResumeForge AI — Build Better Resumes",
    template: "%s | ResumeForge AI",
  },

  description:
    "Create professional resumes, improve your content with AI, check ATS readiness and prepare for your next opportunity.",

  keywords: [
    "resume builder",
    "AI resume builder",
    "ATS resume",
    "resume maker",
    "professional resume",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "ResumeForge AI — Build Better Resumes",
    description:
      "Build, improve and optimize your resume with ResumeForge AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
