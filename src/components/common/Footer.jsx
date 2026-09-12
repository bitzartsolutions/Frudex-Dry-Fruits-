import { Link } from 'react-router-dom';
import { footerColumns, footerNote } from '../../data/footer';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main footer-reference-grid">
        <div className="footer-brand-block">
          <Link className="wordmark footer-mark" to="/"><span className="brand-logo-crop brand-logo-crop-light"><img src="/images/frudex-logo-light.png" alt="Frudex" /></span></Link>
          <p className="footer-tagline">Naturally selected.<br /><em>Thoughtfully delivered.</em></p>
          <p>{footerNote} Cultivating global terroir into extraordinary harvests and bespoke reserves.</p>
          <div className="newsletter">
            <div className="newsletter-heading">
              <span>The botanical ledger</span>
              <div className="footer-socials" aria-label="Social media links">
                <a aria-label="Facebook" href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img alt="" src="https://cdn.simpleicons.org/facebook/FFFFFF" /></a>
                <a aria-label="Instagram" href="https://www.instagram.com/" rel="noreferrer" target="_blank"><img alt="" src="https://cdn.simpleicons.org/instagram/FFFFFF" /></a>
                <a aria-label="WhatsApp" href="https://wa.me/" rel="noreferrer" target="_blank"><img alt="" src="https://cdn.simpleicons.org/whatsapp/FFFFFF" /></a>
              </div>
            </div>
            <div className="newsletter-field"><input aria-label="Email address" placeholder="Reserve harvest dispatches..." type="email" /><button type="button" aria-label="Subscribe">→</button></div>
          </div>
        </div>
        <div className="footer-reference-links">
          <div><p className="footer-label">Product categories</p><div className="footer-category-grid">{['Dates', 'Nuts', 'Dry fruits', 'Seeds', 'Chocolates', 'Spices', 'Snacks', 'Beverages', 'Imported', 'Munchies', 'Gift boxes'].map((link) => <a href="#products" key={link}>{link}</a>)}</div></div>
          {footerColumns.map((column) => <div key={column.title}><p className="footer-label">{column.title}</p>{column.links.map((link) => <a href="#contact" key={link}>{link}</a>)}</div>)}
          <div><p className="footer-label">Headquarters</p><p className="footer-address">Koduvally Kattangal Mavoor Road<br />Koduvally 673601<br />Kerala, India<br />+91 81295 55591</p></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2025 FRUDEX FMCG International. All global distribution rights reserved.</span><span>Privacy statement &nbsp; Terms of trade &nbsp; Global compliance</span></div>
    </footer>
  );
}
