import { profile } from "../../data/profile";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section__inner contact__inner">
        <h2 className="section__title section__title_contacts">Get in touch</h2>
        <p className="contact__blurb">
          Have a project in mind, an open position, or just want to chat about
          development strategies? Drop a line hereor contact me via my email
          below.
        </p>
        <ul className="contact__list">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="contact__link contact__link_email"
            >
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.locationUrl}
              target="_blank"
              rel="noreferrer"
              className="contact__link contact__link_location"
            >
              {profile.locationText}
            </a>
          </li>
          <li>
            <a
              href="public/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="contact__link contact__link_resume"
            >
              Download my resume (PDF)
            </a>
          </li>
        </ul>
        <ul className="contact__social-list">
          <li>
            <a href="" className="contact__social contact__social_github"></a>
          </li>
          <li>
            <a href="" className="contact__social contact__social_linkedin"></a>
          </li>
          <li>
            <a href="" className="contact__social contact__social_twitter"></a>
          </li>
        </ul>
      </div>
    </section>
  );
}
