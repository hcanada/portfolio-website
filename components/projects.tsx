import fs from "node:fs";
import path from "node:path";
import { projects } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Projectcard } from "./ui/projectcard";

const hasFile = (src?: string) =>
  !!src && fs.existsSync(path.join(process.cwd(), "public", src));

export const Projects = () => {
  return (
    <div>
      <SectionHeading
        title="Projects"
        intro="Products I've built at work and on my own. Live ones are one click away."
      />
      <div className="space-y-4">
        {projects.map((project) => (
          <Projectcard
            key={project.name}
            project={project}
            showLogo={hasFile(project.logo)}
          />
        ))}
      </div>
    </div>
  );
};
