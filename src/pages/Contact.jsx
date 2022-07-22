import ClickableIcon from "../components/ClickableIcon";

export default function Contact() {
  return (
    <section className="page">
      <div className="info-container">
        <div className="contact-tagline">
          <p className="contact-tagline-1">Stay Connected</p>
          <p className="contact-tagline-2">Feel free to hit me up on any of these !</p>
        </div>
        <div className="contact-links">
          <ClickableIcon link="mailto:asifridwan@gmail.com" icon="far fa-envelope" tooltip="asifridwan@gmail.com" />
          <ClickableIcon link="tel:+8801920251381" icon="fab fa-whatsapp" tooltip="(+880) 1920251381" />
          <ClickableIcon link="https://www.linkedin.com/in/asifridwaan/" icon="fab fa-linkedin" tooltip="Asif Ridwan" />
          <ClickableIcon link="https://github.com/asifridwan" icon="fab fa-github" tooltip="asifridwan" />
          <ClickableIcon link="https://twitter.com/asifridwaan" icon="fab fa-twitter" tooltip="@asifridwaan" />
          <ClickableIcon link="https://www.facebook.com/asifridwan2.0/" icon="fab fa-facebook" tooltip="Asif Ridwan" />
          <ClickableIcon link="https://www.instagram.com/asifridwaan/" icon="fab fa-instagram" tooltip="@asifridwaan" />
        </div>
      </div>
    </section>
  )
}