export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <img src="/hero.png" alt="Logo" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'contain' }} />
        <span>MARIUSZ<span>.</span>EDIT</span>
      </div>
      <p className="footer-copy">&copy; 2026 Edytownia mariusza. Wszelkie prawa zastrzezone.</p>
      <div className="footer-socials">
        <a href="#">Instagram</a>
        <a href="#">Behance</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  )
}
