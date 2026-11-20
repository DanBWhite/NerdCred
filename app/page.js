import './globals.css'
import Leaderboard from '@/components/Leaderboard'
import Recommendations from '@/components/Recommendations'
import Trending from '@/components/Trending'

export const metadata = {
  title: 'Nerdcred',
  description: 'One score. Three platforms. PlayStation · Steam · RetroAchievements',
}

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <div className="logo">Nerd<span>cred</span></div>
          <div className="nav-links">
            <a href="#" className="active">Discover</a>
            <a href="#">Leaderboard</a>
            <a href="#">Trending</a>
          </div>
        </div>
        <div className="nav-right">
          <button className="cta">Connect accounts</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-label">Featured</div>
          <h1>One score.<br />Three platforms.</h1>
          <p>PlayStation · Steam · RetroAchievements<br />Ranked by points and average rarity.</p>
        </div>
      </section>

      <div className="search-wrap">
        <input className="search" placeholder="Search hunters, games, or achievements…" />
      </div>

      <div className="filters">
        <button className="filter-pill active">All</button>
        <button className="filter-pill">PlayStation</button>
        <button className="filter-pill">Steam</button>
        <button className="filter-pill">Retro</button>
      </div>

      <main className="main">
        <Leaderboard />
        <Recommendations />
        <Trending />
      </main>

      <footer className="footer">
        Round 1 public landing · Data seeded from public platform APIs
      </footer>
    </>
  )
}
