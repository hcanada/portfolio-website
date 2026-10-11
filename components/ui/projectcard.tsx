import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Chip } from "../section-heading";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  showLogo: boolean;
};

export const Projectcard = ({ project, showLogo }: ProjectCardProps) => {
  return (
    <article className="rounded-xl border bg-card p-5 flex gap-4 md:gap-5">
      <div className="relative size-12 md:size-14 shrink-0 overflow-hidden rounded-xl border bg-background grid place-items-center">
        {showLogo && project.logo ? (
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            fill
            sizes="56px"
            className="object-cover"
          />
        ) : (
          <span className="font-mono text-sm md:text-base font-semibold text-primary">
            {project.initials}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug">
            {project.url ? (
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {project.name}
              </Link>
            ) : (
              project.name
            )}
          </h3>
          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex shrink-0 items-center gap-1 font-mono text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Visit site
              <ArrowUpRight className="size-3.5" />
            </Link>
          ) : (
            project.label && (
              <span className="mt-1 shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                {project.label}
              </span>
            )
          )}
        </div>
        <p className="mt-1.5 leading-7 text-muted-foreground text-pretty">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <Chip key={item} className="px-2 py-0.5 md:text-xs">
              {item}
            </Chip>
          ))}
        </div>
      </div>
    </article>
  );
};
