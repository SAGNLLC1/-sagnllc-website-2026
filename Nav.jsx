function Nav({ active, onNavigate }) {
  const links = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "differentiators", label: "Why SAGN" },
    { id: "past-performance", label: "Track Record" },
    { id: "company-data", label: "Company Data" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); onNavigate?.("hero"); }}>
          <img src="./assets/sagn_logo_clean.png" alt="SAGN LLC" />
          SAGN LLC
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.id}>
              <a href={`#${l.id}`}
                 className={active === l.id ? "active" : ""}
                 onClick={(e) => { e.preventDefault(); onNavigate?.(l.id); }}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
window.Nav = Nav;
