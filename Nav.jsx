function Nav({ active, onNavigate }) {
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "differentiators", label: "Why SAGN" },
    { id: "past-performance", label: "Track Record" },
    { id: "company-data", label: "Company Data" },
    { id: "contact", label: "Contact" },
  ];
  const go = (id) => { setOpen(false); onNavigate?.(id); };
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); go("hero"); }}>
          <img src="./assets/sagn_logo_clean.png" alt="SAGN LLC" />
          SAGN LLC
        </a>
        <button
          className={"nav-toggle" + (open ? " open" : "")}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
        <ul className={"nav-links" + (open ? " open" : "")}>
          {links.map(l => (
            <li key={l.id}>
              <a href={`#${l.id}`}
                 className={active === l.id ? "active" : ""}
                 onClick={(e) => { e.preventDefault(); go(l.id); }}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
window.Nav = Nav;
