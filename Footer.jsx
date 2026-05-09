function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="./assets/sagn_logo_clean.png" alt="SAGN LLC" />
          <p>SAGN LLC — General Services &amp; Solutions<br />Joanne Seepersad, Owner<br />(954) 494-3137 · sagn.llc.1@gmail.com<br />Homestead, FL 33030</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#differentiators">Why SAGN</a>
            <a href="#company-data">Company Data</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 SAGN LLC. All rights reserved.</div>
    </footer>
  );
}
window.Footer = Footer;
