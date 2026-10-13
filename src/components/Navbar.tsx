import { Menu, X } from "lucide-react"
import { useState } from "react"
import { navigation } from "../data/profile"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="text-[1.2rem] font-bold tracking-[-0.03em] text-white">
          Althaf <span className="text-gradient">G</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[1.05rem] font-medium text-body transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="action action-primary nav-cta">
            Contact Me
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-white xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-white/8 bg-ink px-6 py-4 xl:hidden"
        >
          <ul className="mx-auto grid w-full max-w-[1280px] gap-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-2xl px-4 py-3.5 text-[1.05rem] text-body hover:bg-panel hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
