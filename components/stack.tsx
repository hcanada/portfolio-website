import { stack } from "@/lib/data";
import { Chip, SectionHeading } from "./section-heading";

export const Stack = () => {
  return (
    <div>
      <SectionHeading
        title="Stack"
        intro="The languages, frameworks, and tools I use across frontend, backend, and integrations."
      />
      <div className="space-y-8">
        {stack.map((group) => (
          <div key={group.name}>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">
              {group.name}
              {group.note && (
                <span className="ml-2 text-primary">{group.note}</span>
              )}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
