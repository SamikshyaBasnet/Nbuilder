'use client';
import { useState, useEffect, useRef } from 'react';
import { CONTACT, CONTACT_SERVICES, BUDGET_RANGES, CONTACT_INFO } from '@/lib/constants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', budget: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g,''))) e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Please describe your project';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', phone: '', email: '', service: '', budget: '', message: '' });
    }, 1500);
  };

  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const r = i => el => { refs.current[i] = el; };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Header */}
        <div className="contact-header fade-up" ref={r(0)}>
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Start Your <em>Project</em></h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ maxWidth: 520 }}>
            Ready to build? Reach out for a free consultation. Our team responds within 24 hours with a detailed assessment.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEFT — Info */}
          <div className="contact-info fade-left" ref={r(1)}>
            {CONTACT_INFO.map((c, i) => (
              <div className="ci-card" key={i}>
                <div className="ci-icon">{c.icon}</div>
                <div className="ci-body">
                  <div className="ci-label">{c.label}</div>
                  {c.values.map((val, j) => (
                    c.link && j === 0
                      ? <a className="ci-val link" href={c.link} key={j}>{val}</a>
                      : <div className="ci-val" key={j}>{val}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Contact Buttons */}
            <div className="ci-quick">
              <a href={`tel:${CONTACT.phones[0].number}`} className="btn-teal" style={{ justifyContent: 'center' }}>
                📞 Call Now
              </a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer"
                className="ci-whatsapp">
                💬 WhatsApp Us
              </a>
            </div>

            {/* Social Proof */}
            <div className="ci-social-proof">
              <div className="csp-stars">★★★★★</div>
              <div className="csp-text">Rated 4.9/5 by 200+ clients on Google</div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="contact-form-box fade-right" ref={r(2)} style={{ transitionDelay: '0.15s' }}>
            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h3>Thank You, {form.name || 'Friend'}!</h3>
                <p>Your enquiry has been received. Our team will contact you within 24 hours to discuss your project.</p>
                <button className="btn-teal" onClick={() => setStatus('idle')}>Send Another Enquiry</button>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <h3>Request a Free Quote</h3>
                  <p>Fill in the details below — no obligations, 100% free.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className={`form-group${errors.name ? ' has-error' : ''}`}>
                      <label>Full Name <span className="req">*</span></label>
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} placeholder="Your full name"
                      />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>
                    <div className={`form-group${errors.phone ? ' has-error' : ''}`}>
                      <label>Phone Number <span className="req">*</span></label>
                      <input
                        type="tel" name="phone" value={form.phone}
                        onChange={handleChange} placeholder="10-digit mobile number"
                      />
                      {errors.phone && <span className="field-error">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className={`form-group${errors.email ? ' has-error' : ''}`}>
                    <label>Email Address <span className="opt">(optional)</span></label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="your@email.com"
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>

                  <div className="form-row">
                    <div className={`form-group${errors.service ? ' has-error' : ''}`}>
                      <label>Service Required <span className="req">*</span></label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service…</option>
                        {CONTACT_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <span className="field-error">{errors.service}</span>}
                    </div>
                    <div className="form-group">
                      <label>Approximate Budget</label>
                      <select name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select budget range…</option>
                        {BUDGET_RANGES.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className={`form-group${errors.message ? ' has-error' : ''}`}>
                    <label>Project Details <span className="req">*</span></label>
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project — location, size, timeline, any specific requirements…"
                      rows={4}
                    />
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn-primary form-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      <><span className="spinner" /> Sending…</>
                    ) : (
                      <>Send Enquiry →</>
                    )}
                  </button>

                  <p className="form-note">
                    🔒 Your information is 100% private and will never be shared.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
