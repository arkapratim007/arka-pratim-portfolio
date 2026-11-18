import Image from 'next/image'

const CERTS = [
  { img: '/portfolio_assets/Coursera_genai.jpg', alt: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/specialization/GFXIQJDQFXDN', title: 'Generative AI Specialization', desc: 'Completed the Generative AI Specialization on Coursera, gaining hands-on experience with cutting-edge AI techniques and applications.' },
  { img: '/portfolio_assets/GDPR_Udemy.jpg', alt: 'Udemy', link: 'https://www.ude.my/UC-07755062-d256-46fe-9a13-87cfb8bbda10', title: 'Complete Data Privacy (GDPR) Fundamentals', desc: 'Completed the GDPR for Data Protection course on Udemy, learning about data privacy laws and regulations.' },
  { img: '/portfolio_assets/sql_intermediate certificate.jpg', alt: 'HackerRank SQL', link: 'https://www.hackerrank.com/certificates/iframe/a32468922cd1', title: 'HackerRank: SQL (Intermediate) Certificate', desc: 'Demonstrated proficiency in intermediate SQL concepts including complex joins, unions, and subqueries for analytical data retrieval.' },
  { img: '/portfolio_assets/frontend_developer_react.jpg', alt: 'HackerRank React', link: 'https://www.hackerrank.com/certificates/iframe/e06e14b1744d', title: 'Frontend Developer (React) Certificate', desc: 'Developed a practical understanding of React and its ecosystem, including component-based architecture and state management.' },
  { img: '/portfolio_assets/java_basic certificate.jpg', alt: 'HackerRank JAVA', link: 'https://www.hackerrank.com/certificates/iframe/a93142dd38a0', title: 'HackerRank: Java Certification Exam', desc: 'Demonstrated proficiency in intermediate SQL concepts including complex joins, unions, and subqueries for analytical data retrieval.' },
]

export default function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <h2 className="section-title">Certifications - <span className="purple-text">Learning Milestones!</span></h2>
      <div className="cert-grid">
        {CERTS.map(cert => (
          <div key={cert.title} className="cert-item">
            <div className="cert-img-wrapper">
              <Image src={cert.img} alt={cert.alt} fill style={{ objectFit: 'cover' }} />
              <div className="cert-overlay">
                <a href={cert.link} target="_blank" rel="noreferrer" className="cert-overlay-link">
                  <span>View Credentials</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}