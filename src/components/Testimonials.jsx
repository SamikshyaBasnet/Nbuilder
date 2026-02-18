"use client";
import { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAuto = () => {
    intervalRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % TESTIMONIALS.length),
      5000
    );
  };
  const stopAuto = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const handleDot = (i) => {
    stopAuto();
    setCurrent(i);
    startAuto();
  };
  const handlePrev = () => {
    stopAuto();
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    startAuto();
  };
  const handleNext = () => {
    stopAuto();
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    startAuto();
  };

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
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        {/* Header */}
        <div className="test-header fade-up" ref={r(0)}>
          <div>
            <div className="section-tag">Client Stories</div>
            <h2 className="section-title">
              What Our Clients <em>Say</em>
            </h2>
            <div className="divider" />
          </div>
          <div className="test-nav-btns">
            <button
              className="test-nav-btn"
              onClick={handlePrev}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              className="test-nav-btn"
              onClick={handleNext}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Featured testimonial */}
        <div
          className="test-featured fade-up"
          ref={r(1)}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="test-quote-mark">&ldquo;</div>
          <p className="test-featured-text">{TESTIMONIALS[current].text}</p>
          <div className="test-author">
            <div className="test-avatar">{TESTIMONIALS[current].avatar}</div>
            <div>
              <div className="test-name">{TESTIMONIALS[current].name}</div>
              <div className="test-role">{TESTIMONIALS[current].role}</div>
            </div>
            <div className="test-stars">
              {"★".repeat(TESTIMONIALS[current].rating)}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div
          className="test-thumbs fade-up"
          ref={r(2)}
          style={{ transitionDelay: "0.2s" }}
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              className={`test-thumb${current === i ? " active" : ""}`}
              onClick={() => handleDot(i)}
            >
              <span className="thumb-avatar">{t.avatar}</span>
              <span className="thumb-name">{t.name}</span>
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="test-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`test-dot${current === i ? " active" : ""}`}
              onClick={() => handleDot(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
