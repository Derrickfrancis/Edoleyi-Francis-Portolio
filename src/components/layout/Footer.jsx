import { NAV_LINKS } from "../../data";

export default function Footer({ scrollTo }) {
  return (
    <footer
      style={{
        background: "#080a14",
        borderTop: "1px solid #1e2140",
        padding: "28px clamp(16px,5vw,80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 18,
          background: "linear-gradient(135deg,#6c63ff,#a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {"<"}DF{"/>"}
      </span>

      <p
        style={{
          color: "#475569",
          fontSize: 13,
          fontFamily: "'Space Mono', monospace",
        }}
      >
        © {new Date().getFullYear()} Derrick Francis. Built with ❤️ in Lagos.
      </p>

      <div style={{ display: "flex", gap: 20 }}>
        {NAV_LINKS.map((n) => (
          <span
            key={n}
            style={{
              cursor: "pointer",
              fontSize: 12,
              color: "#475569",
              fontFamily: "'Space Mono', monospace",
              transition: "color .2s",
            }}
            onClick={() => scrollTo(n)}
            onMouseEnter={(e) => (e.target.style.color = "#a78bfa")}
            onMouseLeave={(e) => (e.target.style.color = "#475569")}
          >
            {n}
          </span>
        ))}
      </div>
    </footer>
  );
}
