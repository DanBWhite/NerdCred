import { NextResponse } from 'next/server'
import { LEADERBOARD } from '@/lib/data'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const platform = (searchParams.get('platform') || 'all').toLowerCase()
  const data = LEADERBOARD[platform] || LEADERBOARD.all
  return NextResponse.json(data)
}
