import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/themeToggle";
import { Github, Linkedin } from "lucide-react";
import { Menubar } from "./menu";
import { NavBarData } from "./navbarData";

export const Navbar = () => {
  return (
    <header>
      <nav className="p-4 border-b flex justify-between">
        <div>
          <Link href="/">
            <h1 className="font-bold text-2xl tracking-tight text-foreground">
              H<span className="text-primary font-semibold">Canada</span>
            </h1>
          </Link>
        </div>
        <div className="hidden sm:block">
          {NavBarData.map((navbar) => (
            <Button
              key={navbar.name}
              variant="ghost"
              className="mx-2 hover:cursor-pointer "
            >
              {navbar.name}
            </Button>
          ))}
        </div>
        <div className="flex items-center">
          <div className="sm:hidden">
            <Menubar />
          </div>
          <div className="hidden sm:flex items-center">
            <Button variant="ghost">
              <Github />
            </Button>
            <Button variant="ghost">
              <Linkedin />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
