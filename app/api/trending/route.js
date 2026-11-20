import { NextResponse } from 'next/server'
import { TRENDING } from '@/lib/data'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const platform = (searchParams.get('platform') || 'playstation').toLowerCase()
  const data = TRENDING[platform] || TRENDING.playstation
  return NextResponse.json(data)
}
