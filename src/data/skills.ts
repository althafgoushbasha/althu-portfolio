export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { category: "Programming", items: ["Python", "SQL", "Java"] },
  { category: "Machine Learning", items: ["Scikit-learn", "Pandas", "NumPy"] },
  { category: "Deep Learning", items: ["PyTorch", "TensorFlow"] },
  { category: "Generative AI", items: ["LLMs", "RAG", "Embeddings"] },
  { category: "NLP", items: ["Sentence Transformers", "Hugging Face"] },
  { category: "Backend", items: ["FastAPI"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "SQLite"] },
  { category: "Vector Search", items: ["Qdrant"] },
  { category: "Visualization", items: ["Power BI"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Docker"] },
]
