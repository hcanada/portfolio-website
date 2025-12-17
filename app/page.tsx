import Aboutme from "@/components/aboutme";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section id="about" className="scroll-mt-24 md:scroll-mt-32">
        <Aboutme />
      </section>
      <section id="projects" className="scroll-mt-24 md:scroll-mt-32">
        <Projects />
      </section>
      <section id="contact" className="scroll-mt-24 md:scroll-mt-32">
        <Contact />
      </section>
    </main>
  );
}
