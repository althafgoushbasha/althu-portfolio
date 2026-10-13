import { motion } from "motion/react"
import { useState } from "react"
import { links, profile } from "../data/profile"
import { ResumeLink } from "./ResumeLink"
import { SocialLinks } from "./SocialLinks"

export function Hero() {
  const [photoReady, setPhotoReady] = useState(true)

  return (
    <section id="top" className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid min-h-[calc(100svh-6.5rem)] w-full max-w-[1280px] items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-[0.95rem] font-semibold tracking-[0.16em] text-accent-strong uppercase">
            {profile.eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(3.4rem,6.2vw,5rem)] leading-[1.02] font-bold tracking-[-0.04em] text-white">
            <span className="block">Hi, I'm</span>
            <span className="text-gradient">Althaf G</span>
          </h1>
          <p className="mt-5 text-[clamp(1.35rem,2vw,1.85rem)] font-semibold tracking-[-0.03em] text-white">
            AI Engineer | Data Analyst
          </p>
          <p className="mt-6 max-w-[40rem] text-[clamp(1.125rem,1.15vw,1.25rem)] leading-[1.75] text-body">
            {profile.intro}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="action action-primary">
              View Projects
            </a>
            <a href="#contact" className="action action-secondary">
              Contact Me
            </a>
            <ResumeLink />
          </div>
          <SocialLinks className="mt-8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="justify-self-center"
        >
          {photoReady ? (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={900}
              height={900}
              onError={() => setPhotoReady(false)}
              className="h-[min(78vw,28rem)] w-[min(78vw,28rem)] rounded-full object-cover object-[center_18%] shadow-[0_0_48px_rgba(255,90,10,0.32)] ring-[3px] ring-[#ff5a0a]"
            />
          ) : (
            <div className="flex h-[min(78vw,28rem)] w-[min(78vw,28rem)] items-end rounded-full bg-panel p-8 ring-[3px] ring-[#ff5a0a]">
              <p className="text-lg text-mist">
                Add {profile.photo} to the public folder to show the portrait.
              </p>
            </div>
          )}
        </motion.div>
      </div>
      <p className="sr-only">
        GitHub profile: {links.github}. LinkedIn profile: {links.linkedin}.
      </p>
    </section>
  )
}
