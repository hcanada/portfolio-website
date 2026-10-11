import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const socials = [
  { name: "github", href: profile.links.github },
  { name: "linkedin", href: profile.links.linkedin },
];

export const Hero = () => {
  return (
    <div className="pt-28 md:pt-40 grid gap-8 md:grid-cols-[260px_1fr] md:gap-10 md:items-center">
      <Image
        src="/pfp.png"
        alt={`Photo of ${profile.name}`}
        width={520}
        height={520}
        priority
        className="w-48 md:w-full aspect-square rounded-xl object-cover"
      />

      <div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {profile.name}
        </h1>
        <div className="mt-5 space-y-4 leading-7 text-muted-foreground text-pretty">
          {profile.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-5 font-mono text-sm">
          {socials.map((social) => (
            <li key={social.name}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.name}
                <ArrowUpRight className="size-3.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
