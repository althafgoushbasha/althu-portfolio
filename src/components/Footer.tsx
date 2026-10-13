import { profile } from "../data/profile"
import { SocialLinks } from "./SocialLinks"

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-6 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-2xl font-bold tracking-[-0.03em] text-white">
            Althaf <span className="text-gradient">G</span>
          </p>
          <p className="mt-2 text-[1.05rem] text-mist">AI Engineer | Data Analyst</p>
        </div>
        <SocialLinks />
      </div>
      <p className="mx-auto mt-10 w-full max-w-[1280px] text-[0.95rem] text-mist">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
