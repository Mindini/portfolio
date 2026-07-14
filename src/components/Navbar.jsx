import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'documents', 'about']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <div className="nav-left">
        <button 
          className="menu-toggle" 
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 8h16M4 16h16"/>
          </svg>
        </button>
        <div className="logo">
          <span className="logo-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
              <path d="M12 22V12"/>
              <path d="M3 7l9 5 9-5"/>
            </svg>
          </span>
          <span>Mindini</span>
        </div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#documents" className={activeSection === 'documents' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'documents')}>Documents</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
      </ul>
      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar