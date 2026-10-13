export type ExperienceItem = {
  role: string
  context: string
  summary: string
}

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer",
    context: "Public project work",
    summary:
      "Designs AI-powered applications, including semantic product recommendation and computer-vision prototypes for medical image classification.",
  },
  {
    role: "Data Analyst",
    context: "Public project work",
    summary:
      "Works with structured data, SQL, and visualization tools such as Power BI to turn product and business data into clearer insights.",
  },
  {
    role: "Data Scientist",
    context: "Academic and independent work",
    summary:
      "Applies machine learning and deep learning to classification and recommendation problems, with an M.Sc. focus in Data Science.",
  },
]

export type EducationItem = {
  credential: string
  institution: string
  period: string
  achievement?: string
}

export const education: EducationItem[] = [
  {
    credential: "M.Sc. Data Science",
    institution: "SASTRA Deemed to be University, Thanjavur",
    period: "July 2024 – April 2026",
  },
  {
    credential: "Bachelor of Computer Applications (BCA)",
    institution: "Selvam Arts and Science College, Namakkal",
    period: "October 2021 – May 2024",
    achievement: "University Gold Medalist — Periyar University",
  },
]

export type CertificationItem = {
  name: string
  issuer: string
  period?: string
}

export const certifications: CertificationItem[] = [
  {
    name: "Data Analytics Traineeship",
    issuer: "Maiyyam Knowledge and Careers Pvt. Ltd.",
    period: "January 2026",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
  },
]
