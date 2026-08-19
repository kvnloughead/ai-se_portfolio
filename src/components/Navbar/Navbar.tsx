import { useState } from "react";
import { profile } from "../../data/profile";
import "./Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a
          className="navbar__brand"
          href="#about"
          onClick={() => setIsOpen(false)}
        >
          {profile.name}
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls="navbar__links"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="navbar__links"
          className={`navbar__links${isOpen ? " navbar__links_open" : ""}`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
