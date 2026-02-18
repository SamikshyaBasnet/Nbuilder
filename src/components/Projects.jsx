'use client';
import { useState, useEffect, useRef } from 'react';
import { PROJECTS, PROJECT_CATEGORIES, PROJECT_STATUS_COLORS } from '@/lib/constants';

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  const r = (i) => (el) => { refs.current[i] = el; };

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Header */}
        <div className="projects-header fade-up" ref={r(0)}>
          <div>
            <div className="section-tag">Our Work</div>
            <h2 className="section-title">Featured <em>Projects</em></h2>
            <div className="divider" />
          </div>
          <p className="section-subtitle" style={{ maxWidth: 440 }}>
            A selection of projects that define our commitment to craftsmanship, quality, and innovation.
          </p>
        </div>

        {/* Filter */}
        <div className="projects-filter fade-up" ref={r(1)} style={{ transitionDelay: '0.1s' }}>
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="project-card fade-up"
              ref={r(i + 2)}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="pc-img" style={{ background: p.gradient }}>
                <div className="pc-emoji">{p.emoji}</div>
                <div className="pc-status" style={{ background: PROJECT_STATUS_COLORS[p.status] || '#666' }}>
                  {p.status}
                </div>
              </div>
              <div className="pc-body">
                <div className="pc-cat">{p.category}</div>
                <h3 className="pc-title">{p.title}</h3>
                <div className="pc-loc">📍 {p.location}</div>
              </div>
              <div className="pc-hover-overlay">
                <div className="pc-hover-content">
                  <div className="pc-big-emoji">{p.emoji}</div>
                  <div className="pc-hover-cat">{p.category}</div>
                  <div className="pc-hover-title">{p.title}</div>
                  <div className="pc-hover-loc">📍 {p.location}</div>
                  <button className="pc-view-btn">View Details →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta fade-up" ref={r(filtered.length + 2)}>
          <p>Want to see more of our work?</p>
          <a href="#contact" className="btn-teal"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }); }}>
            Discuss Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
