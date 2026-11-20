'use client'

import { useState, useEffect } from 'react'

const PLATFORMS = ['all', 'playstation', 'steam', 'retro']

export default function Leaderboard() {
  const [platform, setPlatform] = useState('all')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetch(`/api/leaderboard?platform=${platform}`)
      .then(r => {
        if (!r.ok) throw new Error(r.statusText)
        return r.json()
      })
      .then(json => { if (!cancelled) setData(json) })
      .catch(e => { if (!cancelled) setError(e.message) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [platform])

  return (
    <section className="section">
      <h2>Leaderboard</h2>
      <div className="tabs">
        {PLATFORMS.map(p => (
          <button
            key={p}
            className={platform === p ? 'tab active' : 'tab'}
            onClick={() => setPlatform(p)}
          >
            {p === 'all' ? 'All' : p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
      {loading && <p>Loading…</p>}
      {error && <p>Could not load leaderboard.</p>}
      {data && (
        <ul className="leaderboard">
          {data.map((row, i) => (
            <li key={row.userId || i} className="lb-row">
              <span className="rank">{i + 1}</span>
              <span className="platform-icon" data-platform={row.platform || platform} />
              <span className="username">{row.username}</span>
              <span className="points">{row.points.toLocaleString()}</span>
              <span className="rarity">{row.avgRarity?.toFixed(1)}% avg</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
