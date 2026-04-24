import React, { useState } from "react";

const Contact = ({ currentTheme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      alert("Please enter a valid email address");
      return;
    }

    try {
      // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
      // Sign up at https://formspree.io/ to get your form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _to: "abhishek.kabi.21@gmail.com",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
      } else {
        setStatus("error");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className="Contact-wrapper">
      <p>Get in Touch</p>

      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <div style={{ marginBottom: "20px", textAlign: "left" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "8px",
              fontFamily: '"Smooch Sans", sans-serif',
              fontSize: "18px",
              color: "var(--text-secondary)",
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              fontFamily: '"Inter", sans-serif',
              backgroundColor: "var(--bg-tertiary)",
              color: "var(--text-primary)",
              border: `1px solid var(--border-primary)`,
              borderRadius: "8px",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "midnightblue")}
            onBlur={(e) =>
              (e.target.style.borderColor = "var(--border-primary)")
            }
          />
        </div>

        <div style={{ marginBottom: "20px", textAlign: "left" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "8px",
              fontFamily: '"Smooch Sans", sans-serif',
              fontSize: "18px",
              color: "var(--text-secondary)",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              fontFamily: '"Inter", sans-serif',
              backgroundColor: "var(--bg-tertiary)",
              color: "var(--text-primary)",
              border: `1px solid var(--border-primary)`,
              borderRadius: "8px",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "midnightblue")}
            onBlur={(e) =>
              (e.target.style.borderColor = "var(--border-primary)")
            }
          />
        </div>

        <div style={{ marginBottom: "25px", textAlign: "left" }}>
          <label
            htmlFor="message"
            style={{
              display: "block",
              marginBottom: "8px",
              fontFamily: '"Smooch Sans", sans-serif',
              fontSize: "18px",
              color: "var(--text-secondary)",
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              fontFamily: '"Inter", sans-serif',
              backgroundColor: "var(--bg-tertiary)",
              color: "var(--text-primary)",
              border: `1px solid var(--border-primary)`,
              borderRadius: "8px",
              outline: "none",
              resize: "vertical",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "midnightblue")}
            onBlur={(e) =>
              (e.target.style.borderColor = "var(--border-primary)")
            }
          />
        </div>

        <button
          type="submit"
          className="contactButton"
          disabled={status === "sending"}
          style={{
            width: "100%",
            justifyContent: "center",
            opacity: status === "sending" ? 0.7 : 1,
            cursor: status === "sending" ? "not-allowed" : "pointer",
          }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <div className="iconButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="midnightblue"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
        </button>
      </form>

      <div
        className="divider-line"
        style={{ margin: "30px 0", width: "100%" }}
      ></div>
    </div>
  );
};

export default Contact;
