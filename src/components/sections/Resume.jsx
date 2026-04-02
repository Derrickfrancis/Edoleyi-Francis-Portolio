import { TIMELINE } from "../../data";
import SectionTitle from "../ui/SectionTitle";

export default function Resume() {
  return (
    <section
      id="resume"
      style={{ background: "#0a0c18", padding: "80px clamp(16px,8vw,120px)" }}
    >
      <SectionTitle eyebrow="My Journey" title="Experience & Education" />

      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {TIMELINE.map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: 24, marginBottom: 40, alignItems: "flex-start" }}
          >
            {/* Left: dot + line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="timeline-dot" />
              {i < TIMELINE.length - 1 && (
                <div style={{ width: 2, flex: 1, background: "#1e2140", marginTop: 8, minHeight: 60 }} />
              )}
            </div>

            {/* Right: card */}
            <div className="card" style={{ flex: 1, padding: "22px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#f1f5f9" }}>
                    {item.title}
                  </div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#a78bfa", letterSpacing: 1 }}>
                    {item.place} · {item.year}
                  </div>
                </div>
              </div>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
