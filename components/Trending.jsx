'use client'

import { useState, useEffect } from 'react'

const PLATFORMS = ['playstation', 'steam', 'retro']

export default function Trending() {
  const [platform, setPlatform] = useState('playstation')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetch(`/api/trending?platform=${platform}`)
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
      <h2>Trending unlocks · last 7 days</h2>
      <div className="tabs">
        {PLATFORMS.map(p => (
          <button
            key={p}
            className={platform === p ? 'tab active' : 'tab'}
            onClick={() => setPlatform(p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
      {loading && <p>Loading…</p>}
      {error && <p>Could not load trending.</p>}
      {data && (
        <div className="gallery">
          {data.map((item, i) => (
            <article key={i} className="card">
              <img src={item.imageUrl} alt={item.achievementName} />
              <div className="card-body">
                <h3>{item.gameName}</h3>
                <p>{item.achievementName}</p>
                <span className="badge">{item.platform}</span>
                <span className="count">{item.unlocks7d.toLocaleString()} unlocks</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
