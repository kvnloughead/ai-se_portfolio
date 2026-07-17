import { profile } from "../../data/profile";
import "./Hero.css";

export function Hero() {
  return (
    <section id="about" className="hero section">
      <div className="section-inner hero-inner">
        <p className="section-eyebrow">Hi, I'm</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-blurb">{profile.blurb}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View my work
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
