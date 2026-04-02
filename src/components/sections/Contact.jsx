import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import SocialLinks from "../ui/SocialLinks";

const CONTACT_INFO = [
  { icon: "📧", label: "Email", val: "ifeanyifrancis2000@gmail.com" },
  { icon: "📍", label: "Location", val: "Lagos, Nigeria" },
  { icon: "💬", label: "LinkdIn", val: "Derrick Francis" },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormState((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{ background: "#0a0c18", padding: "80px clamp(16px,8vw,120px)" }}
    >
      <SectionTitle eyebrow="Let's Talk" title="Contact Me" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 48,
          maxWidth: 940,
          margin: "0 auto",
        }}
      >
        {/* Left: info */}
        <div>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "#f1f5f9",
              marginBottom: 14,
            }}
          >
            Let's build something great together
          </h3>
          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.8,
              marginBottom: 32,
              fontSize: 14,
            }}
          >
            I'm currently open to frontend developer roles, freelance projects,
            and tutoring opportunities. Whether you have a project in mind or
            just want to connect — my inbox is always open!
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 32,
            }}
          >
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", alignItems: "center", gap: 14 }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#6c63ff18",
                    border: "1px solid #6c63ff33",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 11,
                      color: "#a78bfa",
                      letterSpacing: 1,
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ color: "#cbd5e1", fontSize: 14 }}>
                    {item.val}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SocialLinks />
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <input
            className="input-field"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <input
            className="input-field"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="input-field"
            name="message"
            rows={6}
            placeholder="Your Message..."
            value={formState.message}
            onChange={handleChange}
            required
            style={{ resize: "vertical" }}
          />
          <button
            className="btn-primary"
            type="submit"
            style={{ width: "100%" }}
          >
            {sent ? "✅ Message Sent!" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
