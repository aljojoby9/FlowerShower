import { NextResponse } from 'next/server'
import { getRandomFlower } from '../../data'

export async function GET() {
  const randomFlower = getRandomFlower()
  return NextResponse.json(randomFlower)
} 