'use client';
import { useState, useEffect } from 'react';
import { CONTACT } from '@/lib/constants';

export default function FloatButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="float-cluster">
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20Native%20Builders,%20I'd%20like%20a%20free%20quote%20for%20my%20project.`}
        target="_blank"
        rel="noreferrer"
        className="float-btn whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="float-icon">💬</span>
        <span className="float-label">WhatsApp</span>
      </a>

      <a
        href={`tel:${CONTACT.phones[0].number}`}
        className="float-btn call"
        aria-label="Call Now"
        title="Call Now"
      >
        <span className="float-icon">📞</span>
        <span className="float-label">Call Now</span>
      </a>

      {showTop && (
        <button
          className="float-btn top"
          onClick={scrollTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <span className="float-icon">↑</span>
        </button>
      )}
    </div>
  );
}
