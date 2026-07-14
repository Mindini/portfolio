import './Hero.css'

function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-breadcrumb">
          <span>✦ Home</span>
        </div>
        <div className="hero-initial">M</div>
        <h1>Mindini Nethmika</h1>
        <p className="hero-subtitle">
          Cyber Security Undergraduate | SLIIT
          <span className="badge">Student</span>
        </p>
        <div className="decorative-line"></div>
        <p className="hero-tagline">
          Passionate about cybersecurity, ethical hacking, and protecting digital landscapes. 
          Exploring vulnerabilities to build more secure systems.
        </p>
        <div className="hero-actions">
          <a href="#documents" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'documents')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            View Documents
          </a>
          <a href="#about" className="btn btn-secondary" onClick={(e) => scrollToSection(e, 'about')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            About Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero