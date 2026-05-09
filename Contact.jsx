function ContactInfo() {
  return (
    <>
      <div className="contact-info-card">
        <div className="contact-row">
          <div className="contact-icon"><IconPhone /></div>
          <div><h4>Phone</h4><a href="tel:+19544943137">(954) 494-3137</a></div>
        </div>
        <div className="contact-row">
          <div className="contact-icon"><IconMail /></div>
          <div><h4>Email</h4><a href="mailto:sagn.llc.1@gmail.com">sagn.llc.1@gmail.com</a></div>
        </div>
        <div className="contact-row">
          <div className="contact-icon"><IconPin /></div>
          <div><h4>Location</h4><p>Homestead, FL 33030</p></div>
        </div>
      </div>
      <div className="teaming-box">
        <h4>Teaming Opportunities</h4>
        <p>SAGN LLC is available as a woman-owned small business subcontractor for supply chain support, commodity procurement, vendor sourcing, and facility service coordination. We also seek mentor-protégé partnerships with established primes.</p>
      </div>
    </>
  );
}
window.ContactInfo = ContactInfo;

function ContactForm({ onSubmit }) {
  const [state, setState] = React.useState({ name: "", email: "", phone: "", message: "", sent: false });
  const set = (k) => (e) => setState(s => ({ ...s, [k]: e.target.value }));
  const send = (e) => {
    e.preventDefault();
    setState(s => ({ ...s, sent: true }));
    onSubmit?.(state);
  };
  if (state.sent) {
    return (
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <h3>Message Sent</h3>
        <p style={{fontSize:".95rem", color:"var(--text-secondary)", lineHeight:1.65}}>
          Thanks, {state.name || "we"} — we respond to all inquiries within one business day.
          A copy has been queued to <strong>sagn.llc.1@gmail.com</strong>.
        </p>
        <button className="btn-submit" style={{marginTop:20}} onClick={() => setState({ name:"", email:"", phone:"", message:"", sent:false })}>
          Send another message
        </button>
      </form>
    );
  }
  return (
    <form className="contact-form" onSubmit={send}>
      <h3>Send Us a Message</h3>
      <div className="form-group"><label>Full Name *</label><input required value={state.name} onChange={set("name")} placeholder="Your full name" /></div>
      <div className="form-group"><label>Email Address *</label><input type="email" required value={state.email} onChange={set("email")} placeholder="your@email.com" /></div>
      <div className="form-group"><label>Phone (optional)</label><input type="tel" value={state.phone} onChange={set("phone")} placeholder="(xxx) xxx-xxxx" /></div>
      <div className="form-group"><label>Message *</label><textarea required value={state.message} onChange={set("message")} placeholder="Tell us about your requirements…" /></div>
      <button className="btn-submit" type="submit">Send Message</button>
    </form>
  );
}
window.ContactForm = ContactForm;
