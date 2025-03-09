'use client'

import { useState, useEffect, useRef } from 'react'

export default function FlowerAnimation() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [currentFlowerType, setCurrentFlowerType] = useState(0)
  const containerRef = useRef(null)
  const animationIntervalRef = useRef(null)

  const flowerTypes = [
    { type: 'emoji', content: ['🌸', '🌹', '🌻', '🌷', '🌺', '💐'] },
    { type: 'image', content: ['/images/pexels-jonaskakaroto-736230.jpg'] }
  ]

  useEffect(() => {
    // Start animation
    animationIntervalRef.current = setInterval(createFlower, 300)
    
    // Create initial flowers
    for (let i = 0; i < 10; i++) {
      setTimeout(createFlower, i * 300)
    }

    // Cleanup on unmount
    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current)
      }
    }
  }, [])

  const createFlower = () => {
    if (!isAnimating || !containerRef.current) return

    const flower = document.createElement('div')
    flower.className = 'flower'
    
    // Position randomly along the width
    flower.style.left = `${Math.random() * 100}vw`
    
    // Random animation duration
    flower.style.animationDuration = `${Math.random() * 3 + 3}s`
    
    // Random size variation
    const size = Math.random() * 20 + 30
    flower.style.width = `${size}px`
    flower.style.height = `${size}px`
    
    // Add flower content based on current type
    const currentType = flowerTypes[currentFlowerType]
    
    if (currentType.type === 'emoji') {
      // Use random emoji from the list
      const randomEmoji = currentType.content[Math.floor(Math.random() * currentType.content.length)]
      flower.style.fontSize = `${size}px`
      flower.style.display = 'flex'
      flower.style.alignItems = 'center'
      flower.style.justifyContent = 'center'
      flower.textContent = randomEmoji
    } else {
      // Use image
      const randomImage = currentType.content[Math.floor(Math.random() * currentType.content.length)]
      flower.style.backgroundImage = `url('${randomImage}')`
      flower.style.borderRadius = '50%'
    }
    
    containerRef.current.appendChild(flower)
    
    // Remove flower after animation completes
    setTimeout(() => {
      if (flower.parentNode === containerRef.current) {
        containerRef.current.removeChild(flower)
      }
    }, 6000)
  }

  const toggleAnimation = () => {
    setIsAnimating(prev => {
      const newState = !prev
      
      if (newState) {
        animationIntervalRef.current = setInterval(createFlower, 300)
      } else if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current)
      }
      
      return newState
    })
  }

  const changeFlowerType = () => {
    setCurrentFlowerType(prev => (prev + 1) % flowerTypes.length)
  }

  return (
    <>
      <div className="flower-container" ref={containerRef}></div>
      <div className="flex flex-wrap gap-4 mt-6">
        <button 
          onClick={toggleAnimation} 
          className="px-6 py-3 bg-flower-pink-500 text-white rounded-lg hover:bg-flower-pink-600 transition shadow-md"
        >
          {isAnimating ? 'Pause Animation' : 'Resume Animation'}
        </button>
        <button 
          onClick={changeFlowerType} 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md"
        >
          {currentFlowerType === 0 ? 'Use Image Flowers' : 'Use Emoji Flowers'}
        </button>
      </div>
    </>
  )
} 