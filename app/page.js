import Link from 'next/link'
import FlowerAnimation from '../components/FlowerAnimation'
import FlowerCard from '../components/FlowerCard'
import { flowers } from './data'

export default function Home() {
  // Get the first 3 flowers for the featured section
  const featuredFlowers = flowers.slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-flower-purple-800 mb-4">Welcome to Flower Shower</h1>
        <p className="text-lg text-gray-700 mb-6">
          Experience the beauty of falling flowers in this interactive display. 
          Explore our collection of beautiful flowers and learn about their meanings.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/flowers" 
            className="px-6 py-3 bg-flower-purple-600 text-white rounded-lg hover:bg-flower-purple-700 transition shadow-md"
          >
            Explore Flowers
          </Link>
          <FlowerAnimation />
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-flower-purple-800 mb-4">Featured Flowers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredFlowers.map(flower => (
            <FlowerCard key={flower.id} flower={flower} featured={true} />
          ))}
        </div>
      </div>
    </div>
  )
} 