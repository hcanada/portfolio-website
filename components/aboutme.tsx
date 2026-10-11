import { profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const Aboutme = () => {
  return (
    <div>
      <SectionHeading title="About me" />
      <div className="space-y-5 leading-7 text-foreground/90 text-pretty">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Aboutme;
