import { useState } from "react";
import { PROJECTS } from "../../data";
import SectionTitle from "../ui/SectionTitle";

const ALL_CATEGORIES = ["All", ...new Set(PROJECTS.map((p) => p.category))];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" style={{ padding: "80px clamp(16px,8vw,120px)" }}>
      <SectionTitle eyebrow="My Work" title="Portfolio" />

      {/* Filter buttons */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
        {ALL_CATEGORIES.map((c) => (
          <button
            key={c}
            className={`filter-btn${filter === c ? " active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: 24,
        }}
      >
        {filtered.map((p) => (
          <div key={p.title} className="card" style={{ overflow: "hidden" }}>
            {/* Thumbnail */}
            <div
              style={{
                height: 160,
                background: `linear-gradient(135deg,${p.color}22,${p.color}11)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 64,
                borderBottom: `1px solid ${p.color}22`,
              }}
            >
              {p.emoji}
            </div>

            {/* Content */}
            <div style={{ padding: "20px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: "#f1f5f9" }}>
                  {p.title}
                </h3>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "'Space Mono', monospace",
                    color: p.color,
                    background: `${p.color}18`,
                    padding: "3px 10px",
                    borderRadius: 99,
                  }}
                >
                  {p.category}
                </span>
              </div>

              <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>
                {p.description}
              </p>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>

              <a href={p.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn-primary" style={{ width: "100%", padding: "10px" }}>
                  View Project →
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
