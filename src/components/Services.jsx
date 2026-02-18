'use client';
import { useEffect, useRef } from 'react';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addRef = (i) => (el) => { cardRefs.current[i] = el; };

  return (
    <section className="section services-section" id="services">
      <div className="container">
        {/* Header */}
        <div className="services-header" ref={addRef(0)}>
          <div>
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title">Our <em>Services</em></h2>
            <div className="divider" />
          </div>
          <p className="section-subtitle services-sub">
            Comprehensive building solutions from concept design to project handover — all under one expert roof in Delhi NCR.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className="service-card fade-up"
              ref={addRef(i + 1)}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="sc-top">
                <div className="sc-num">{s.num}</div>
                <div className="sc-icon">{s.icon}</div>
              </div>
              <h3 className="sc-title">{s.title}</h3>
              <p className="sc-desc">{s.desc}</p>
              <div className="sc-tags">
                {s.tags.map((t) => (
                  <span className="sc-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="sc-hover-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
