function Section({ id, dark, sky, label, title, desc, children }) {
  const cls = ["section"];
  if (dark) cls.push("section-dark");
  if (sky)  cls.push("section-sky");
  return (
    <section className={cls.join(" ")} id={id}>
      <div className="section-inner">
        {label && <p className="section-label">{label}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {desc && <p className="section-desc">{desc}</p>}
        {children}
      </div>
    </section>
  );
}
window.Section = Section;
