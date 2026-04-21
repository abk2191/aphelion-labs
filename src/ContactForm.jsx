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
        <h1>Contact.</h1>
      </div>
    </>
  );
}

export default ContactForm;
