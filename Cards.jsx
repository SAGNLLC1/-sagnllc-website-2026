function ServiceCard({ icon, title, body }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
window.ServiceCard = ServiceCard;

function DiffCard({ num, title, body }) {
  return (
    <div className="diff-card">
      <div className="diff-num">{num}</div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
window.DiffCard = DiffCard;

function DataCard({ title, children }) {
  return (
    <div className="data-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
window.DataCard = DataCard;

function DataRow({ label, value }) {
  return (
    <div className="data-row">
      <span className="data-label">{label}</span>
      <span className="data-value">{value}</span>
    </div>
  );
}
window.DataRow = DataRow;
