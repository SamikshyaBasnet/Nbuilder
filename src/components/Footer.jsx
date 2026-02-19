"use client";
import {
  COMPANY,
  CONTACT,
  FOOTER_SERVICE_LINKS,
  FOOTER_COMPANY_LINKS,
} from "@/lib/constants";
import Image from "next/image";

const handleNav = (href) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wave" />

      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-bo">
                  <Image
                    src="/images/logo.jpg"
                    alt="Company Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="footer-logo-text">
                  <span className="fl-name">NATIVE</span>
                  <span className="fl-sub">Builders</span>
                </div>
              </div>
              <p className="footer-tagline-text">{COMPANY.shortDesc}</p>
              <div className="footer-phones">
                {CONTACT.phones.map((p, i) => (
                  <a href={`tel:${p.number}`} className="fp-chip" key={i}>
                    📞 {p.display}
                  </a>
                ))}
              </div>
              <div className="footer-socials">
                {[
                  {
                    icon: "📘",
                    label: "Facebook",
                    href: CONTACT.socialMedia.facebook,
                  },
                  {
                    icon: "📸",
                    label: "Instagram",
                    href: CONTACT.socialMedia.instagram,
                  },
                  {
                    icon: "💼",
                    label: "LinkedIn",
                    href: CONTACT.socialMedia.linkedin,
                  },
                  {
                    icon: "▶️",
                    label: "YouTube",
                    href: CONTACT.socialMedia.youtube,
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="social-icon"
                    aria-label={s.label}
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                {FOOTER_SERVICE_LINKS.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav("#services");
                      }}
                    >
                      <span className="fl-arrow">→</span>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                {FOOTER_COMPANY_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(l.href);
                      }}
                    >
                      <span className="fl-arrow">→</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Contact Us</h4>
              <div className="footer-contact-items">
                {[
                  { icon: "📍", text: COMPANY.officeAddress },
                  { icon: "✉️", text: CONTACT.email },
                  {
                    icon: "🕐",
                    text: `${CONTACT.workingHours.weekdays}\n${CONTACT.workingHours.weekend}`,
                  },
                ].map((c, i) => (
                  <div className="fci" key={i}>
                    <span className="fci-icon">{c.icon}</span>
                    <span
                      className="fci-text"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {c.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* <a
                href="#contact"
                className="btn-primary footer-cta"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#contact");
                }}
              >
                Get Free Quote →
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>
              © {year} <strong>{COMPANY.name}</strong>. All Rights Reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
            {/* <p className="footer-made">🇮🇳 Proudly serving {COMPANY.location}</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
