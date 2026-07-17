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
      <div className="navbar-inner">
        <a className="navbar-brand" href="#about" onClick={() => setIsOpen(false)}>
          {profile.name}
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={isOpen}
          aria-controls="navbar-links"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="navbar-links"
          className={`navbar-links${isOpen ? " navbar-links-open" : ""}`}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
