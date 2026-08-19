import "./Footer.css";
import Contact from "../Contact/Contact";

export function Footer() {
  return (
    <section id="contact" className="footer section">
      <div className="section__inner footer__inner">
        <h2 className="section__title section__title_footer">Get in touch</h2>
        <p className="footer__blurb">
          Have a project in mind, an open position, or just want to chat about
          development strategies? Drop a line hereor contact me via my email
          below.
        </p>
      </div>
      <Contact />
    </section>
  );
}
