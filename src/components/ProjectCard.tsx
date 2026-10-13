import { motion } from "motion/react"
import type { Project } from "../data/projects"
import { GitHubIcon } from "./BrandIcons"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex h-full flex-col rounded-[1.75rem] border border-line bg-panel p-8 transition duration-200 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(255,90,10,0.18)] sm:p-10"
    >
      <h3 className="text-[clamp(1.7rem,2vw,2.15rem)] leading-[1.2] font-bold tracking-[-0.03em]">
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {project.title}
        </a>
      </h3>
      <p className="mt-5 text-[clamp(1.05rem,1vw,1.2rem)] leading-[1.7] text-body">
        {project.summary}
      </p>
      <ul className="mt-6 space-y-3 text-[1.05rem] leading-relaxed text-body">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-8 flex flex-wrap gap-2.5">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line bg-white/[0.04] px-4 py-2 text-[0.95rem] text-white"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={project.repository}
        target="_blank"
        rel="noopener noreferrer"
        className="action action-primary mt-10 w-fit"
      >
        <GitHubIcon className="h-5 w-5" />
        GitHub
      </a>
    </motion.article>
  )
}
