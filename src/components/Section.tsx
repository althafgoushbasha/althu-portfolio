import type { ReactNode } from "react"

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-white/8 px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <p className="text-[0.95rem] font-semibold tracking-[0.14em] text-accent uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-[18ch] text-[clamp(2.4rem,4vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.035em] text-white">
          {title}
        </h2>
        <div className="mt-12 lg:mt-16">{children}</div>
      </div>
    </section>
  )
}
