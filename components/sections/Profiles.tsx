import Image from 'next/image'

const PROFILES = [
  { href: 'https://linkedin.com/in/arka-pratim-biswas', icon: 'fa-brands fa-linkedin', style: { color: '#0077b5' }, label: 'LinkedIn', sub: 'Connect' },
  { href: 'https://github.com/arkapratim007', icon: 'fa-brands fa-github', style: { color: '#fff' }, label: 'GitHub', sub: 'Commit' },
  { href: 'https://leetcode.com/arkapratim007', icon: 'devicon-leetcode-plain colored', style: {}, label: 'LeetCode', sub: 'Compete' },
  { href: 'https://hackerrank.com/arkapratim007', icon: 'fa-brands fa-hackerrank', style: { color: '#2ec866' }, label: 'HackerRank', sub: 'Code' },
]

export default function Profiles() {
  return (
    <section className="profiles-section" id="profiles">
      <h2 className="section-title">Web Presence - <span className="purple-text">Dev Network!</span></h2>
      <div className="profile-header">
        <div className="profile-img-main">
          <Image src="/portfolio_assets/profile_photo.png" alt="Arka Pratim" width={130} height={130} style={{ objectFit: 'cover', borderRadius: '50%' }} />
        </div>
        <div className="profile-text">
          <p className="purple-text">@ig_s0ulkiller</p>
        </div>
      </div>

      <div className="profiles-grid">
        {PROFILES.map(p => (
          <a key={p.label} href={p.href} target="_blank" rel="noreferrer" className="profile-card">
            <div className="profile-icon">
              <i className={p.icon} style={p.style}></i>
            </div>
            <div className="profile-info">
              <h3>{p.label}</h3>
              <p>{p.sub}</p>
            </div>
          </a>
        ))}
      </div>
      <br />
      <p className="profile-note">You can explore further by clicking on any of the profile cards above!</p>
    </section>
  )
}