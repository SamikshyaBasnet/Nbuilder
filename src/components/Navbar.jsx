"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = NAV_LINKS.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
          >
            {/* <div className="nav-logo-box"><span className="logo-icon">🏗</span></div> */}
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={50}
              height={50}
            />
            <div className="nav-logo-text">
              <span className="logo-name">NATIVE</span>
              <span className="logo-sub">Builders</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link${active === id ? " active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.href);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#contact");
            }}
          >
            Get Free Quote
          </a>

          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        className={`mobile-drawer${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-header">
          <div className="nav-logo">
            <div className="nav-logo-box">
              <span className="logo-icon">🏗</span>
            </div>
            <div className="nav-logo-text">
              <span className="logo-name">NATIVE</span>
              <span className="logo-sub">Builders</span>
            </div>
          </div>
          <button
            className="drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-links">
          {NAV_LINKS.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                className={`mobile-link${active === id ? " active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
              >
                <span>{item.label}</span>
                <span className="mobile-link-arrow">→</span>
              </a>
            );
          })}
        </div>

        <div className="mobile-contact">
          <p>Call us anytime</p>
          <a href="tel:9843369116" className="mobile-phone">
            📞 98433 69116
          </a>
          <a href="tel:9812898151" className="mobile-phone">
            📞 98128 98151
          </a>
          <a
            href="#contact"
            className="btn-primary"
            style={{ marginTop: 20, justifyContent: "center" }}
            onClick={(e) => {
              e.preventDefault();
              handleNav("#contact");
            }}
          >
            Get Free Quote →
          </a>
        </div>
      </nav>
    </>
  );
}
