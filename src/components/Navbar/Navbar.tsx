import { useState } from "react";
import { profile } from "../../data/profile";
import Contact from "../Contact/Contact";
import "./Navbar.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className={`navbar__inner ${isOpen ? "navbar__inner_open" : ""}`}>
        <a
          className="navbar__brand"
          href="#home"
          onClick={() => setIsOpen(false)}
        >
          {profile.name}
        </a>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? "navbar__toggle_close" : ""}`}
          aria-expanded={isOpen}
          aria-controls="navbar__links"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        ></button>

        <nav
          id="navbar__links"
          className={`navbar__links${isOpen ? " navbar__links_open" : ""}`}
        >
          {links.map((link) => (
            <a
              className="navbar__link"
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {isOpen && (
            <div className="navbar__contacts">
              <Contact />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
