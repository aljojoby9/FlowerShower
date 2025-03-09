export const flowers = [
  {
    id: 1,
    name: "Rose",
    color: "Red",
    description: "Symbol of love and passion",
    careTips: [
      "Keep in a well-lit area with indirect sunlight",
      "Water regularly, keeping soil moist but not soggy",
      "Use a balanced fertilizer during growing season",
      "Remove wilted flowers to encourage new blooms"
    ]
  },
  {
    id: 2,
    name: "Tulip",
    color: "Various",
    description: "Symbol of perfect love",
    careTips: [
      "Plant bulbs in the fall for spring blooms",
      "Provide full sun to partial shade",
      "Water moderately, allowing soil to dry between waterings",
      "Cut flowers when buds are still closed but showing color"
    ]
  },
  {
    id: 3,
    name: "Sunflower",
    color: "Yellow",
    description: "Symbol of adoration and loyalty",
    careTips: [
      "Plant in full sun location",
      "Water deeply but infrequently",
      "Support tall varieties with stakes",
      "Harvest seeds when the back of the flower head turns brown"
    ]
  },
  {
    id: 4,
    name: "Lily",
    color: "White",
    description: "Symbol of purity and refined beauty",
    careTips: [
      "Plant in areas with morning sun and afternoon shade",
      "Keep soil consistently moist",
      "Apply mulch to keep roots cool",
      "Remove pollen anthers to prevent staining"
    ]
  },
  {
    id: 5,
    name: "Daisy",
    color: "White & Yellow",
    description: "Symbol of innocence and purity",
    careTips: [
      "Plant in full sun to partial shade",
      "Water when soil is dry to the touch",
      "Deadhead spent blooms to encourage more flowers",
      "Divide plants every few years to maintain vigor"
    ]
  }
]

export function getFlowerById(id) {
  return flowers.find(flower => flower.id === Number(id)) || null
}

export function getRandomFlower() {
  const randomIndex = Math.floor(Math.random() * flowers.length)
  return flowers[randomIndex]
} 