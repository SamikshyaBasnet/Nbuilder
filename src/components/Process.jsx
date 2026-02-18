"use client";
import { useEffect, useRef } from "react";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
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
      { threshold: 0.12 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const r = (i) => (el) => {
    refs.current[i] = el;
  };

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="process-header fade-up" ref={r(0)}>
          <div className="section-tag">How We Work</div>
          <h2 className="section-title">
            Our <em>Process</em>
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ maxWidth: 560 }}>
            A clear, transparent, and proven 5-step process that keeps you
            informed and in control at every stage.
          </p>
        </div>

        <div className="process-steps">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`process-step fade-up${
                i % 2 !== 0 ? " step-alt" : ""
              }`}
              ref={r(i + 1)}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {i < PROCESS_STEPS.length - 1 && (
                <div className="step-connector" />
              )}

              <div className="step-badge">{step.num}</div>
              <div className="step-card">
                <div className="step-icon-wrap">
                  <span className="step-icon">{step.icon}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-cta fade-up" ref={r(PROCESS_STEPS.length + 1)}>
          <div className="process-cta-inner">
            <div>
              <h3>Ready to Start Your Project?</h3>
              <p>
                Get in touch today and let&apos;s begin your journey with a free
                consultation.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
