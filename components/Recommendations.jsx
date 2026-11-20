'use client'

import { useState, useEffect } from 'react'

export default function Recommendations() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/recommendations?platform=all')
      .then(r => {
        if (!r.ok) throw new Error(r.statusText)
        return r.json()
      })
      .then(json => { if (!cancelled) setData(json) })
      .catch(e => { if (!cancelled) setError(e.message) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [])

  return (
    <section className="section">
      <h2>Popular with hunters</h2>
      <p className="subtitle">Seeded from high-ranked public profiles</p>
      {loading && <p>Loading…</p>}
      {error && <p>Could not load recommendations.</p>}
      {data && (
        <div className="gallery">
          {data.map((item, i) => (
            <article key={i} className="card">
              <img src={item.imageUrl} alt={item.achievementName} />
              <div className="card-body">
                <h3>{item.gameName}</h3>
                <p>{item.achievementName}</p>
                <span className="badge">{item.platform}</span>
                <span className="rarity">{item.rarity}% rarity</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
