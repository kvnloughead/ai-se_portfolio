import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "../Icons/Icons";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-inner contact-inner">
        <h2 className="section-title">Get in touch</h2>
        <p className="contact-blurb">
          I'm currently open to new opportunities. Feel free to reach out
          through any of the channels below.
        </p>
        <ul className="contact-list">
          <li>
            <a href={`mailto:${profile.email}`} className="contact-link">
              <MailIcon /> {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <GithubIcon /> GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
