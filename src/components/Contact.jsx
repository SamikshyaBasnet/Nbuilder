"use client";
import { useEffect, useRef } from "react";
import { CONTACT, CONTACT_INFO } from "@/lib/constants";
import {
  trackPhoneClick,
  trackWhatsAppClick,
  trackEmailClick,
} from "@/lib/analytics";

export default function Contact() {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const r = (i) => (el) => {
    refs.current[i] = el;
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Header */}
        <div className="contact-header fade-up" ref={r(0)}>
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Start Your <em>Project</em>
          </h2>
          {/* <div className="divider" style={{ width: "100%" }} /> */}
          <p
            className="section-subtitle text-center"
            style={{ maxWidth: 520, textAlign: "center", margin: "0 auto" }}
          >
            Ready to build? Reach out for a free consultation. Our team responds
            within 24 hours with a detailed assessment.
          </p>
        </div>

        {/* Contact Info Grid - Now Full Width */}
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="contact-info-grid fade-up" ref={r(1)}>
            {CONTACT_INFO.map((c, i) => (
              <div className="ci-card-large" key={i}>
                <div className="ci-icon-large">{c.icon}</div>
                <div className="ci-body">
                  <div className="ci-label">{c.label}</div>
                  {c.values.map((val, j) =>
                    c.link && j === 0 ? (
                      <a className="ci-val link" href={c.link} key={j}>
                        {val}
                      </a>
                    ) : (
                      <div className="ci-val" key={j}>
                        {val}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Buttons */}
          <div
            className="ci-quick-center fade-up"
            ref={r(2)}
            style={{ transitionDelay: "0.1s" }}
          >
            <a
              href={`tel:${CONTACT.phones[0].number}`}
              className="btn-teal btn-large"
              onClick={() => trackPhoneClick(CONTACT.phones[0].number)}
            >
              📞 Call Now
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="ci-whatsapp btn-large"
              onClick={trackWhatsAppClick}
            >
              💬 WhatsApp Us
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="btn-primary btn-large"
              onClick={trackEmailClick}
            >
              ✉️ Email Us
            </a>
          </div>

          {/* Social Proof */}
          <div
            className="ci-social-proof-center fade-up"
            ref={r(3)}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="csp-stars">★★★★★</div>
            <div className="csp-text">
              Rated 4.9/5 by 200+ clients on Google
            </div>
          </div>

          {/* Office Hours & Additional Info */}
          <div
            className="contact-additional fade-up"
            ref={r(4)}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="ca-card">
              <h3>🕐 Working Hours</h3>
              <p>{CONTACT.workingHours.weekdays}</p>
              <p>{CONTACT.workingHours.weekend}</p>
            </div>
            <div className="ca-card">
              <h3>💼 Why Choose Us</h3>
              <p>✓ 5+ Years Experience</p>
              <p>✓ 100+ Projects Delivered</p>
              <p>✓ Licensed & Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
