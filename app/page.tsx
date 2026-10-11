import Aboutme from "@/components/aboutme";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";

const sectionClass = "mt-24 md:mt-32 scroll-mt-24 md:scroll-mt-28";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-6">
      <section>
        <Hero />
      </section>
      <section id="about" className={sectionClass}>
        <Aboutme />
      </section>
      <section id="experience" className={sectionClass}>
        <Experience />
      </section>
      <section id="projects" className={sectionClass}>
        <Projects />
      </section>
      <section id="stack" className={sectionClass}>
        <Stack />
      </section>
      <section id="contact" className={sectionClass}>
        <Contact />
      </section>
    </main>
  );
}
