export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-flower-purple-800 mb-4">About Flower Shower</h1>
        <p className="text-lg text-gray-700 mb-6">Learn more about our beautiful flower application and its purpose.</p>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-flower-purple-800 mb-4">Our Story</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">Flower Shower was created with a simple mission: to bring the beauty and joy of flowers to everyone's digital experience. We believe that flowers have a unique power to uplift spirits, convey emotions, and connect people with nature.</p>
          
          <p className="mb-4">Our interactive flower shower animation allows you to experience the gentle cascade of flower petals on your screen, creating a calming and beautiful visual experience. Whether you're looking for a moment of tranquility during a busy day or simply want to learn more about different types of flowers, Flower Shower is here for you.</p>
          
          <p>We're constantly expanding our collection of flowers and adding new features to enhance your experience. Our team of flower enthusiasts and developers work together to create the most beautiful and informative flower application on the web.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-flower-purple-800 mb-4">Our Mission</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Educate people about the beauty and symbolism of flowers</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Create a calming digital experience through our flower animations</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Inspire appreciation for nature's beauty in the digital world</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Provide accurate information about flower care and symbolism</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-flower-purple-800 mb-4">Technologies</h2>
          <p className="text-gray-700 mb-4">Flower Shower is built using modern web technologies to provide a smooth and beautiful experience:</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-flower-purple-700">Frontend</h3>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-flower-purple-700">Backend</h3>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>Next.js API Routes</li>
                <li>Server Components</li>
                <li>Static Site Generation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-flower-purple-800 mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-24 h-24 bg-flower-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">👩‍💻</span>
            </div>
            <h3 className="font-bold text-lg text-flower-purple-800">Flora Johnson</h3>
            <p className="text-gray-600">Founder & Lead Developer</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-24 h-24 bg-flower-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">👨‍🌾</span>
            </div>
            <h3 className="font-bold text-lg text-flower-purple-800">Blossom Smith</h3>
            <p className="text-gray-600">Flower Expert & Content Creator</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">👨‍🎨</span>
            </div>
            <h3 className="font-bold text-lg text-flower-purple-800">Petal Davis</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  )
} 