import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-5 sm:px-6 mt-24 md:mt-32 py-10 border-t flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} H
        <span className="text-primary font-semibold">Canada</span>
      </p>
      <div className="flex items-center gap-4">
        <Link
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-foreground transition-colors"
        >
          <Github className="size-5" />
        </Link>
        <Link
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-foreground transition-colors"
        >
          <Linkedin className="size-5" />
        </Link>
      </div>
    </footer>
  );
};
