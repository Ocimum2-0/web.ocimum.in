import Link from "next/link";
import { Brain, Github, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0 max-w-7xl mx-auto">
        <div className="flex flex-1 items-center gap-4 px-8 md:gap-2 md:px-0">
          <Brain className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <Link href="/" className="font-medium underline underline-offset-4">
              OCIMUM
            </Link>
            . The AI-Powered Healthcare Ecosystem.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/__ompawar15/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://github.com/THE-OM-PAWAR"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/om-pawar-developer/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
