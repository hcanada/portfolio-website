import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/themeToggle";
import { Github, Linkedin } from "lucide-react";
import { Menubar } from "./menu";
import { NavBarData } from "./navbarData";

export const Navbar = () => {
  return (
    <header>
      <nav className="fixed p-4 border-b flex justify-between  top-0 left-0 w-full bg-background/80 backdrop-blur md:px-40 z-20">
        <div>
          <Link href="/">
            <h1 className="font-bold text-2xl tracking-tight text-foreground">
              H<span className="text-primary font-semibold">Canada</span>
            </h1>
          </Link>
        </div>
        <div className="hidden sm:block">
          {NavBarData.map((navbar) => (
            <Link href={navbar.link} key={navbar.name}>
              <Button variant="ghost" className="mx-2 ">
                {navbar.name}
              </Button>
            </Link>
          ))}
        </div>
        <div>
          <div className="sm:hidden">
            <Menubar />
          </div>
          <div className="hidden sm:flex items-center">
            <Link
              href="https://github.com/hcanada "
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost">
                <Github />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/h-canada/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost">
                <Linkedin />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
