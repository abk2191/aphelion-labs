import Contact from "./Contact";

function ContactForm({ currentTheme }) {
  const handleClick = () => {
    window.open(
      "https://abk2191.github.io/andromeda/notes",
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <>
      <div className="Contact-wrapper">
        <p>We are your one stop web solution.</p>

        <span className="about">
          We design and implement cutting-edge web presence (Websites and apps)
          for individuals and businesses.
        </span>

        {/* <img src="./contact-banner.png" className="contact-banner" alt="" /> */}
        <div className="contact-banner"></div>

        <span className="about" style={{ marginTop: "50px" }}>
          "Reach out to us to take your business online today. We deliver
          trust."
        </span>

        <span className="about" style={{ marginTop: "50px", fontSize: "40px" }}>
          We Design
        </span>

        <div className="about-services">
          <div className="services-one">
            <ul>
              <li>Websites</li>
              <li>Native Apps</li>
              <li>Progressive Web Apps (PWAs)</li>
            </ul>
            <ul>
              <li>Logos</li>
              <li>Vector Graphic</li>
              <li>Portfolios</li>
            </ul>
          </div>
        </div>

        <span className="about" style={{ marginTop: "30px", fontSize: "40px" }}>
          Our mission is to serve.
        </span>
        <span className="about" style={{ marginTop: "30px", fontSize: "30px" }}>
          Contact us using the form below.
        </span>
        <div className="placeholder"></div>
        <Contact />
      </div>
    </>
  );
}

export default ContactForm;
