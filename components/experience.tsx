import Link from "next/link";
import { experience } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export const Experience = () => {
  return (
    <div>
      <SectionHeading
        title="Experience"
        intro="Where I've worked and what I shipped there."
      />
      <ol className="relative border-l border-border ml-1.5">
        {experience.map((job) => (
          <li key={job.company} className="pl-6 md:pl-8 pb-12 last:pb-0">
            <span className="absolute -left-[5px] mt-2 size-2.5 rounded-full bg-primary ring-4 ring-background" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-semibold">
                {job.url ? (
                  <Link
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {job.company}
                  </Link>
                ) : (
                  job.company
                )}
              </h3>
              <span className="font-mono text-sm text-muted-foreground shrink-0">
                {job.period}
              </span>
            </div>
            <p className="text-muted-foreground">
              {job.role}
              {job.location && `, ${job.location}`}
            </p>

            <div className="mt-4 space-y-5">
              {job.groups.map((group) => (
                <div key={group.title ?? job.company}>
                  {group.title && (
                    <h4 className="mb-2 font-medium">{group.title}</h4>
                  )}
                  <ul className="space-y-2 text-sm md:text-base leading-6 md:leading-7 text-foreground/85">
                    {group.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2.5 md:mt-3 size-1 rounded-full bg-muted-foreground shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
