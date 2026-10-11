import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  intro?: string;
};

export const SectionHeading = ({ title, intro }: SectionHeadingProps) => {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-muted-foreground leading-7 text-pretty">
          {intro}
        </p>
      )}
    </div>
  );
};

type ChipProps = {
  children: React.ReactNode;
  className?: string;
};

export const Chip = ({ children, className }: ChipProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border bg-card/60 px-2.5 py-1 font-mono text-xs md:text-sm text-foreground/90",
        className
      )}
    >
      {children}
    </span>
  );
};
