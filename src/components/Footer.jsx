import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content">
        <p className="footer-name">Mindini Nethmika</p>
        <p className="footer-year">© {currentYear} All Rights Reserved</p>
        <div className="footer-links">
          <a href="mailto:nethmikajayakodi421@gmail.com">Email</a>
          <a href="https://linkedin.com/in/mindini-nethmika-328b46264" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/mindini" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer