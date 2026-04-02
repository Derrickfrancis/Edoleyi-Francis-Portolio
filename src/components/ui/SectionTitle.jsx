export default function SectionTitle({ eyebrow, title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <span
        style={{
          fontSize: 13,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#a78bfa",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {eyebrow}
      </span>
      <h2
        style={{
          fontSize: "clamp(28px,5vw,42px)",
          fontWeight: 700,
          color: "#f1f5f9",
          marginTop: 8,
          fontFamily: "'Syne', sans-serif",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: 48,
          height: 3,
          background: "linear-gradient(90deg,#6c63ff,#a78bfa)",
          borderRadius: 99,
          margin: "16px auto 0",
        }}
      />
    </div>
  );
}
