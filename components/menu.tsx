import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavBarData } from "./navbarData";
import Link from "next/link";
import { ThemeToggle } from "./ui/themeToggle";
export const Menubar = () => {
  return (
    <div className="flex items-center">
      <DropdownMenu>
        <ThemeToggle />
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {NavBarData.map((data) => (
            <Link key={data.name} href={`${data.link}`}>
              <DropdownMenuItem>{data.name}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
