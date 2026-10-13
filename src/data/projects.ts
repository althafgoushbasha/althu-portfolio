export type Project = {
  title: string
  summary: string
  highlights: string[]
  technologies: string[]
  repository: string
}

export const projects: Project[] = [
  {
    title: "AI-Powered Recommendation Engine",
    summary:
      "A hybrid recommendation showcase for Shopify-style product data. It combines similar-product, upsell, cross-sell, and hybrid suggestions using product metadata, TF-IDF, and cosine similarity.",
    highlights: [
      "Similar, upsell, cross-sell, and hybrid recommendation modules",
      "Feature extraction from titles, categories, tags, descriptions, and price",
      "Public repository is a project showcase; full source is not published",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TF-IDF",
      "NLP",
    ],
    repository: "https://github.com/althafgoushbasha/AI-Recommendation-Engine",
  },
  {
    title: "Attention-Enhanced VGG19 for Stroke Detection",
    summary:
      "An academic computer-vision prototype that classifies brain CT images as stroke or normal with a VGG19 backbone, CBAM attention, and Grad-CAM explanations. It is not a clinical diagnostic tool.",
    highlights: [
      "Balanced public write-up of 1,900 CT images (950 normal, 950 stroke)",
      "Published test evaluation: 97.2% accuracy on 570 unseen images",
      "Grad-CAM used to show regions that influenced each prediction",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "VGG19",
      "CBAM",
      "Grad-CAM",
      "OpenCV",
    ],
    repository:
      "https://github.com/althafgoushbasha/Attention-Enhanced-VGG19-Stroke-Detection",
  },
]
