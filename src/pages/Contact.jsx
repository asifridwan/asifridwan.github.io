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
          <ClickableIcon link="mailto:asifridwan@gmail.com" icon="fa fa-envelope" tooltip="asifridwan@gmail.com" />
          <ClickableIcon link="tel:+8801920251381" icon="fa fa-whatsapp" tooltip="(+880) 1920251381" />
          <ClickableIcon link="https://www.linkedin.com/in/asifridwaan/" icon="fa fa-linkedin-square" tooltip="Asif Ridwanullah" />
          <ClickableIcon link="https://github.com/asifridwan" icon="fa fa-github" tooltip="asifridwan" />
          <ClickableIcon link="https://twitter.com/asifridwaan" icon="fa fa-twitter" tooltip="@asifridwaan" />
          <ClickableIcon link="https://www.facebook.com/asifridwan2.0/" icon="fa fa-facebook-official" tooltip="Asif Ridwan" />
          <ClickableIcon link="https://www.instagram.com/asifridwaan/" icon="fa fa-instagram" tooltip="@asifridwaan" />
        </div>
      </div>
    </section>
  )
}