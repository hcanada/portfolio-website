import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/themeToggle";
import { Github, Linkedin } from "lucide-react";
import { Menubar } from "./menu";
import { NavBarData } from "./navbarData";
import { profile } from "@/lib/data";

export const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full border-b bg-background/80 backdrop-blur z-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <span className="font-bold text-xl tracking-tight text-foreground">
              H<span className="text-primary font-semibold">Canada</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center">
            {NavBarData.map((navbar) => (
              <Button
                asChild
                variant="ghost"
                size="sm"
                key={navbar.name}
                className="text-muted-foreground hover:text-foreground"
              >
                <Link href={navbar.link}>{navbar.name}</Link>
              </Button>
            ))}
          </div>
          <div>
            <div className="md:hidden">
              <Menubar />
            </div>
            <div className="hidden md:flex items-center">
              <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                <Link
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                <Link
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
