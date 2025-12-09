"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavBarData } from "./navbarData";
import Link from "next/link";
export const Menubar = () => {
  return (
    <div>
      <DropdownMenu>
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
