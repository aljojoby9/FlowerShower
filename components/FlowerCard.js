import Link from 'next/link'

export default function FlowerCard({ flower, featured = false }) {
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

  if (featured) {
    return (
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
        <div className={`h-40 ${getBgColor(flower.name)} rounded-lg mb-4 flex items-center justify-center`}>
          <span className="text-4xl">{getEmoji(flower.name)}</span>
        </div>
        <h3 className="font-bold text-lg text-flower-purple-800">{flower.name}</h3>
        <p className="text-gray-600">{flower.description}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition flex">
      <div className={`w-24 h-24 rounded-lg mr-4 flex items-center justify-center ${getBgColor(flower.name)}`}>
        <span className="text-5xl">{getEmoji(flower.name)}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-xl text-flower-purple-800 mb-1">{flower.name}</h3>
        <p className="text-gray-500 mb-2">Color: {flower.color}</p>
        <p className="text-gray-700">{flower.description}</p>
        <Link 
          href={`/flowers/${flower.id}`} 
          className="inline-block mt-3 px-4 py-2 bg-flower-purple-600 text-white rounded-lg hover:bg-flower-purple-700 transition text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  )
} 