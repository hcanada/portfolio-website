"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(false);
  const test = () => {
    setCurrentTheme((prev) => !prev);
    if (currentTheme) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Button variant="ghost" size="icon" onClick={test}>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
