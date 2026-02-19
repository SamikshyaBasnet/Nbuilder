"use client";
import { useEffect, useRef } from "react";
import { COMPANY, ABOUT_FEATURES, MILESTONES } from "@/lib/constants";

export default function About() {
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
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const r = (i) => (el) => {
    refs.current[i] = el;
  };

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual fade-left" ref={r(0)}>
            <div className="about-img-box">
              <div className="about-img-placeholder">
                <span className="about-big-emoji">🏢</span>
                <div className="about-img-overlay" />
              </div>
              <div className="about-exp-badge">
                <span className="exp-num">5+</span>
                <span className="exp-label">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
            </div>

            <div className="about-timeline">
              {MILESTONES.map((m, i) => (
                <div className="timeline-item" key={i}>
                  <div className="tl-year">{m.year}</div>
                  <div className="tl-dot" />
                  <div className="tl-event">{m.event}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="about-content fade-right"
            ref={r(1)}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">
              Native <em>Builders</em>
            </h2>
            <div className="divider" />

            <p className="about-para">{COMPANY.fullDesc}</p>
            <p className="about-para">
              Our multidisciplinary team of architects, engineers, designers,
              and project managers work in complete synergy — giving clients a
              single point of contact for their entire construction journey,
              from first sketch to final handover.
            </p>

            <div className="about-features">
              {ABOUT_FEATURES.map((f, i) => (
                <div className="about-feat" key={i}>
                  <div className="feat-icon">{f.icon}</div>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Talk to an Expert →
              </a>
              <a
                href="#services"
                className="btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                View Services →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
