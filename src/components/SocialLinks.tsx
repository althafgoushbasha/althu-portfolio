import { links } from "../data/profile"
import { GitHubIcon, LinkedInIcon } from "./BrandIcons"

const items = [
  { href: links.github, label: "GitHub", detail: "github.com/althafgoushbasha", icon: GitHubIcon },
  {
    href: links.linkedin,
    label: "LinkedIn",
    detail: "linkedin.com/in/althafgoushbasha",
    icon: LinkedInIcon,
  },
] as const

type SocialLinksProps = {
  className?: string
  labeled?: boolean
  cards?: boolean
}

export function SocialLinks({ className = "", labeled = false, cards = false }: SocialLinksProps) {
  const linksList = items.map(({ href, label, detail, icon: Icon }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={
        cards
          ? "flex min-h-28 items-center gap-5 rounded-[1.75rem] border border-line bg-panel px-8 py-8 text-white transition duration-200 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
          : labeled
            ? "action action-secondary"
            : "inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#ff5a0a] bg-ink text-white transition duration-200 hover:text-accent hover:shadow-[0_0_18px_rgba(255,90,10,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
      }
    >
      {cards ? (
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line text-white">
          <Icon className="h-6 w-6" />
        </span>
      ) : (
        <Icon className="h-5 w-5" />
      )}
      {cards ? (
        <span>
          <span className="block text-[1.05rem] text-mist">{label}</span>
          <span className="mt-1 block text-[clamp(1.15rem,1.3vw,1.35rem)] font-semibold tracking-[-0.02em] break-all text-white">
            {detail}
          </span>
        </span>
      ) : labeled ? (
        <span>{label}</span>
      ) : null}
    </a>
  ))

  if (cards) return linksList

  return <div className={`flex flex-wrap items-center gap-3 ${className}`}>{linksList}</div>
}
