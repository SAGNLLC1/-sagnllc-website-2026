function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-badge">Woman-Owned Small Business</div>
          <h1>SAGN LLC</h1>
          <p className="hero-sub">General Services &amp; Solutions</p>
          <p className="hero-desc">
            Government contractor delivering reliable facility services, supply chain solutions,
            and procurement support across Florida and the Southeast United States.
          </p>
          <div className="hero-btns">
            <a className="btn btn-primary" href="./SAGN_LLC_Capability_Statement.pdf" target="_blank" rel="noopener" download>
              <IconDownload /> Download Capability Statement
            </a>
            <button className="btn btn-outline" onClick={onSecondary}>
              Get in Touch <IconArrowRight />
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img src="./assets/sagn_logo_clean.png" alt="SAGN LLC winged S logo" />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
