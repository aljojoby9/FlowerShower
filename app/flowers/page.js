'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FlowerCard from '../../components/FlowerCard'
import { flowers, getRandomFlower } from '../data'

export default function FlowersPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleRandomFlower = () => {
    setIsLoading(true)
    const randomFlower = getRandomFlower()
    router.push(`/flowers/${randomFlower.id}`)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-flower-purple-800 mb-4">Our Flower Collection</h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore our beautiful collection of flowers and learn about their meanings.
        </p>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 gap-6">
          {flowers.map(flower => (
            <FlowerCard key={flower.id} flower={flower} />
          ))}
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold text-flower-purple-800 mb-4">Try Something Random</h2>
        <p className="text-gray-700 mb-4">Not sure which flower to explore? Let us pick one for you!</p>
        <button 
          onClick={handleRandomFlower}
          disabled={isLoading}
          className="px-6 py-3 bg-flower-pink-500 text-white rounded-lg hover:bg-flower-pink-600 transition shadow-md disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Random Flower'}
        </button>
      </div>
    </div>
  )
} 