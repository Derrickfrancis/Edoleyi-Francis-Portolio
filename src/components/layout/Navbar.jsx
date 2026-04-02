import { NAV_LINKS } from "../../data";

export default function Navbar({ activeSection, scrollTo }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "#0d0f1acc",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1e2140",
        padding: "0 clamp(16px,5vw,80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 68,
      }}
    >
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 20,
          fontWeight: 800,
          background: "linear-gradient(135deg,#6c63ff,#a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {"<"}DF{"/>"}
      </span>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {NAV_LINKS.map((n) => (
          <span
            key={n}
            className={`nav-link${activeSection === n ? " active" : ""}`}
            onClick={() => scrollTo(n)}
          >
            {n}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        className="btn-primary"
        style={{ padding: "9px 20px", fontSize: 12 }}
        onClick={() => scrollTo("Contact")}
      >
        Hire Me
      </button>
    </nav>
  );
}
