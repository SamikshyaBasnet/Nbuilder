'use client';
import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/constants';

function Counter({ target, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-bg" />
      <div className="container">
        <div className="stats-inner">
          <div className="stats-text">
            <div className="section-tag">By The Numbers</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>
              15 Years of <em>Excellence</em>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: 400, marginTop: 12 }}>
              Every number tells a story of trust, hard work, and commitment to building better.
            </p>
          </div>
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-card-icon">{s.icon}</div>
                <div className="stat-card-num">
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <div className="stat-card-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
