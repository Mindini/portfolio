import './Documents.css'

const documents = [
  {
    id: 1,
    title: 'Cybersecurity Career Paths',
    description: 'Comprehensive guide to various career opportunities in cybersecurity field',
    file: 'Cybersecurity_Career_Paths.pdf'
  }
]

function Documents() {
  return (
    <section id="documents">
      <div className="container">
        <div className="section-header">
          <h2>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Documents
          </h2>
          <p>Cybersecurity career resources and documentation</p>
        </div>
        <div className="documents-grid">
          {documents.map(doc => (
            <div key={doc.id} className="document-card">
              <div className="card-header">
                <span className="file-type">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  </svg>
                  PDF
                </span>
                <button className="card-menu" aria-label="More options">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                    <circle cx="12" cy="19" r="1.5"/>
                  </svg>
                </button>
              </div>
              <h3 className="card-title">{doc.title}</h3>
              <p className="card-description">{doc.description}</p>
              <div className="card-footer">
                <a href={doc.file} className="btn-sm btn-sm-view" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  View
                </a>
                <a href={doc.file} className="btn-sm btn-sm-download" download>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Documents