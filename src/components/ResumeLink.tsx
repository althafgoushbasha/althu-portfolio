import { Download } from "lucide-react"
import { useEffect, useState } from "react"
import { profile } from "../data/profile"

export function ResumeLink() {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    let active = true

    async function checkResume() {
      try {
        const response = await fetch(profile.resume, { method: "GET" })
        const type = response.headers.get("content-type") ?? ""
        if (active) {
          setAvailable(response.ok && type.includes("pdf"))
        }
      } catch {
        if (active) setAvailable(false)
      }
    }

    void checkResume()
    return () => {
      active = false
    }
  }, [])

  if (!available) return null

  return (
    <a href={profile.resume} download className="action action-secondary">
      <Download aria-hidden="true" size={22} strokeWidth={2.25} />
      Download Resume
    </a>
  )
}
