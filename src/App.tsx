import { Mail } from "lucide-react"
import { MotionConfig } from "motion/react"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { ProjectCard } from "./components/ProjectCard"
import { Section } from "./components/Section"
import { SocialLinks } from "./components/SocialLinks"
import { certifications, education, experience } from "./data/experience"
import { links, profile } from "./data/profile"
import { projects } from "./data/projects"
import { skills } from "./data/skills"

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="min-h-screen overflow-x-hidden bg-ink text-body">
        <Navbar />
        <main>
          <Hero />

          <Section id="about" eyebrow="About" title="About Me">
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
              <p className="text-[clamp(1.45rem,2vw,1.85rem)] leading-[1.45] font-medium tracking-[-0.025em] text-white lg:col-span-2">
                {profile.about[0]}
              </p>
              {profile.about.slice(1, 3).map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[clamp(1.125rem,1.1vw,1.25rem)] leading-[1.75] text-body"
                >
                  {paragraph}
                </p>
              ))}
              <p className="text-[clamp(1.2rem,1.3vw,1.4rem)] leading-[1.6] font-medium tracking-[-0.02em] text-white lg:col-span-2">
                {profile.about[3]}
              </p>
            </div>
          </Section>

          <Section id="experience" eyebrow="Experience" title="Professional Experience">
            <p className="max-w-4xl text-[clamp(1.125rem,1.1vw,1.25rem)] leading-[1.75] text-body">
              Employer names, dates, and internal project details are omitted so
              confidential workplace information stays private. The entries below
              describe the public professional focus.
            </p>
            <div className="mt-10 grid gap-5">
              {experience.map((item) => (
                <article
                  key={item.role}
                  className="rounded-[1.75rem] border border-line bg-panel px-8 py-8 transition duration-200 hover:border-accent/60 sm:px-10 sm:py-9"
                >
                  <h3 className="text-[clamp(1.45rem,1.8vw,1.85rem)] font-semibold tracking-[-0.03em] text-white">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-[1.05rem] text-accent">{item.context}</p>
                  <p className="mt-4 max-w-4xl text-[clamp(1.05rem,1vw,1.2rem)] leading-[1.7] text-body">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="skills" eyebrow="Skills" title="Technical Skills">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {skills.map((group) => (
                <article
                  key={group.category}
                  className="rounded-[1.75rem] border border-line bg-panel p-7 sm:p-8"
                >
                  <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] text-white">
                    {group.category}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white/[0.05] px-4 py-2 text-[0.98rem] text-mist"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-[1.45rem] font-semibold tracking-[-0.02em] text-white">
                Currently learning
              </h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {profile.learning.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-accent/40 px-4 py-2 text-[1.02rem] text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="projects" eyebrow="Work" title="Featured Projects">
            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.repository} project={project} />
              ))}
            </div>
          </Section>

          <Section id="education" eyebrow="Education" title="Education">
            <div className="grid gap-6 lg:grid-cols-2">
              {education.map((item) => (
                <article
                  key={item.credential}
                  className="flex h-full flex-col rounded-[1.75rem] border border-line bg-panel px-8 py-9 sm:px-10 sm:py-11"
                >
                  <p className="text-[1.05rem] font-semibold text-accent">{item.period}</p>
                  <h3 className="mt-4 text-[clamp(1.6rem,2vw,2rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-white">
                    {item.credential}
                  </h3>
                  <p className="mt-4 text-[clamp(1.1rem,1.1vw,1.25rem)] leading-[1.6] text-body">
                    {item.institution}
                  </p>
                  {item.achievement ? (
                    <p className="mt-6 border-t border-line pt-6 text-[1.12rem] leading-relaxed font-semibold text-accent">
                      Achievement: {item.achievement}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </Section>

          <Section id="certifications" eyebrow="Credentials" title="Certifications">
            <ul className="grid gap-6 lg:grid-cols-2">
              {certifications.map((item) => (
                <li
                  key={item.name}
                  className="rounded-[1.75rem] border border-line bg-panel px-8 py-9 sm:px-10 sm:py-11"
                >
                  {item.period ? (
                    <p className="text-[1.05rem] font-semibold text-accent">{item.period}</p>
                  ) : null}
                  <h3
                    className={`text-[clamp(1.5rem,1.8vw,1.85rem)] leading-[1.25] font-semibold tracking-[-0.03em] text-white ${item.period ? "mt-4" : ""}`}
                  >
                    {item.name}
                  </h3>
                  <p className="mt-4 text-[clamp(1.1rem,1.1vw,1.25rem)] leading-[1.6] text-body">
                    {item.issuer}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="contact" eyebrow="Contact" title="Contact">
            <p className="max-w-4xl text-[clamp(1.25rem,1.5vw,1.55rem)] leading-[1.55] font-medium tracking-[-0.02em] text-white">
              {profile.contactIntro}
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <a
                href={`mailto:${links.email}`}
                className="flex min-h-28 items-center gap-5 rounded-[1.75rem] border border-line bg-panel px-8 py-8 transition duration-200 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent lg:col-span-2"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-strong text-white">
                  <Mail aria-hidden="true" size={26} />
                </span>
                <span>
                  <span className="block text-[1.05rem] text-mist">Email</span>
                  <span className="mt-1 block text-[clamp(1.25rem,1.6vw,1.7rem)] font-semibold tracking-[-0.02em] text-white">
                    {links.email}
                  </span>
                </span>
              </a>
              <SocialLinks cards />
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
