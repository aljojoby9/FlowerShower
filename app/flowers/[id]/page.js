import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getFlowerById, flowers } from '../../data'

export function generateStaticParams() {
  return flowers.map(flower => ({
    id: flower.id.toString()
  }))
}

export default function FlowerDetailPage({ params }) {
  const flower = getFlowerById(params.id)
  
  if (!flower) {
    notFound()
  }

  const getEmoji = (name) => {
    switch (name.toLowerCase()) {
      case 'rose': return '🌹'
      case 'tulip': return '🌷'
      case 'sunflower': return '🌻'
      case 'lily': return '🌺'
      case 'daisy': return '🌼'
      default: return '🌸'
    }
  }

  const getBgColor = (name) => {
    switch (name.toLowerCase()) {
      case 'rose': return 'bg-pink-100'
      case 'tulip': return 'bg-purple-100'
      case 'sunflower': return 'bg-yellow-100'
      case 'lily': return 'bg-blue-100'
      case 'daisy': return 'bg-green-100'
      default: return 'bg-gray-100'
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
        <Link 
          href="/flowers" 
          className="inline-flex items-center text-flower-purple-600 hover:text-flower-purple-800 mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Flowers
        </Link>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
            <div className={`w-full h-64 rounded-lg flex items-center justify-center ${getBgColor(flower.name)}`}>
              <span className="text-9xl">{getEmoji(flower.name)}</span>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold text-flower-purple-800 mb-2">{flower.name}</h1>
            <p className="text-xl text-gray-600 mb-4">Color: {flower.color}</p>
            
            <div className="bg-white rounded-lg p-4 mb-6">
              <h2 className="text-xl font-semibold text-flower-purple-700 mb-2">Meaning & Symbolism</h2>
              <p className="text-gray-700">{flower.description}</p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold text-flower-purple-700 mb-2">Care Tips</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {flower.careTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-flower-purple-800 mb-4">More Flowers to Explore</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flowers
            .filter(f => f.id !== flower.id)
            .map(f => (
              <Link 
                key={f.id}
                href={`/flowers/${f.id}`} 
                className="bg-white rounded-lg shadow p-4 hover:shadow-md transition text-center"
              >
                <div className={`h-20 rounded-lg mb-2 flex items-center justify-center ${getBgColor(f.name)}`}>
                  <span className="text-3xl">{getEmoji(f.name)}</span>
                </div>
                <span className="font-medium text-flower-purple-800">{f.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
} 