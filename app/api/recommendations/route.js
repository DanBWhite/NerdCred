import { NextResponse } from 'next/server'
import { RECOMMENDATIONS } from '@/lib/data'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const platform = (searchParams.get('platform') || 'all').toLowerCase()
  let data = RECOMMENDATIONS
  if (platform !== 'all') {
    data = data.filter(i => i.platform === platform)
  }
  return NextResponse.json(data)
}
