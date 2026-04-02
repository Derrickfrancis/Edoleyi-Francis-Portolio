import { useInView } from "../../hooks/useInView";
import SectionTitle from "../ui/SectionTitle";
import SocialLinks from "../ui/SocialLinks";

const INFO_CARDS = [
  ["📍 Location", "Lagos, Nigeria"],
  ["📧 Email", "ifeanyifrancis2000@gmail.com"],
  ["🎓 Program", "TS Academy CyberSecurity"],
  ["💼 Status", "Open to Opportunities"],
];

export default function About({ scrollTo }) {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      style={{ background: "#0a0c18", padding: "80px clamp(16px,8vw,120px)" }}
    >
      <SectionTitle eyebrow="Get to know me" title="About Me" />

      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Avatar */}
        <div className={`fade-up${inView ? " in" : ""}`}>
          <div
            style={{
              width: 240,
              height: 240,
              margin: "0 auto",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#1e2140,#13152b)",
              border: "3px solid #6c63ff44",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 90,
              boxShadow: "0 0 60px #6c63ff22",
            }}
          >
            👨‍🎓
          </div>
        </div>

        {/* Text */}
        <div
          className={`fade-up${inView ? " in" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 24,
              fontWeight: 700,
              color: "#f1f5f9",
              marginBottom: 16,
            }}
          >
            Frontend Developer
          </h3>

          <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 }}>
            I'm Edoley Francis (Derrick), a graduate of Computer Science based
            in Lagos, Nigeria. My passion lies in crafting beautiful, responsive
            web interfaces that are both functional and delightful to use.
          </p>

          <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 28 }}>
            Currently working as a Frontend Coding Tutor at Settime
            Technologies, where I teach HTML, CSS and JavaScript to the next
            generation of developers. I'm always looking to collaborate on
            exciting frontend projects.
          </p>

          {/* Info grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 28,
            }}
          >
            {INFO_CARDS.map(([label, val]) => (
              <div
                key={label}
                style={{
                  background: "#13152b",
                  border: "1px solid #1e2140",
                  borderRadius: 10,
                  padding: "12px 14px",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: "'Space Mono', monospace",
                    color: "#a78bfa",
                    marginBottom: 3,
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: 13, color: "#cbd5e1" }}>{val}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
            <button className="btn-primary" onClick={() => scrollTo("Contact")}>
              Hire Me
            </button>
            <a
              href="https://docs.google.com/document/d/1UH-WwWttvYg5EWc9SuN5eM-77SPXHLok/edit?usp=sharing&ouid=105482302139642368368&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-ghost">Download CV</button>
            </a>
          </div>

          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
