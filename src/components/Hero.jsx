"use client";
import { HERO_STATS, COMPANY, CONTACT } from "@/lib/constants";

const handleNav = (href) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid-overlay" />
      <div className="hero-diagonal" />

      <div className="container hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Est. {COMPANY.founded} — Kathmandu&apos;s Trusted Builders
          </div>

          <h1 className="hero-title">
            <span className="hero-line1">Building</span>
            <span className="hero-line2">Dreams Into</span>
            <span className="hero-line3">Reality</span>
          </h1>
          <p className="hero-desc">
            Native Builders delivers end-to-end construction, design, and
            municipal services across Delhi NCR. Over 500 projects. 5+ years.
            One trusted name.
          </p>

          <div className="hero-phones">
            {CONTACT.phones.map((phone, i) => (
              <a href={`tel:${phone.number}`} className="phone-chip" key={i}>
                <span className="phone-icon">📞</span>
                <span>{phone.display}</span>
              </a>
            ))}
          </div>

          <div className="hero-actions">
            {/* <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
            >
              Get Free Quote <span className="btn-arrow">→</span>
            </a> */}
            <a
              href="#projects"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#projects");
              }}
            >
              View Projects <span className="btn-arrow">↗</span>
            </a>
          </div>

          <div className="hero-stats">
            {HERO_STATS.map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual-grid">
            <div className="vis-card vis-main">
              <div className="vis-inner">
                <div className="vis-emoji">🏗️</div>
                <div className="vis-caption">
                  <span className="vis-tag">Premium Construction</span>
                  <span className="vis-name">Residential Builds</span>
                </div>
              </div>
            </div>

            <div className="vis-card vis-sm1">
              <div className="vis-inner">
                <div className="vis-emoji sm">🏛️</div>
                <div className="vis-caption small">
                  <span className="vis-tag">Architecture</span>
                </div>
              </div>
            </div>

            <div className="vis-card vis-sm2">
              <div className="vis-inner">
                <div className="vis-emoji sm">🎨</div>
                <div className="vis-caption small">
                  <span className="vis-tag">Interior Design</span>
                </div>
              </div>
            </div>

            <div className="vis-card vis-sm3">
              <div className="vis-inner">
                <div className="vis-emoji sm">📐</div>
                <div className="vis-caption small">
                  <span className="vis-tag">Municipal Approvals</span>
                </div>
              </div>
            </div>

            <div className="vis-float-badge">
              <div className="float-num">100+</div>
              <div className="float-label">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-bar">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
