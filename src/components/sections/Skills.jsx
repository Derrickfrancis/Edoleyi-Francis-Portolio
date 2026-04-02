import { useInView } from "../../hooks/useInView";
import { SKILLS } from "../../data";
import SectionTitle from "../ui/SectionTitle";
import AnimatedBar from "../ui/AnimatedBar";

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" style={{ padding: "80px clamp(16px,8vw,120px)" }}>
      <SectionTitle eyebrow="What I know" title="Skills & Technologies" />

      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
          gap: 18,
        }}
      >
        {SKILLS.map((s, i) => (
          <div
            key={s.name}
            className={`skill-card fade-up${inView ? " in" : ""}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, color: "#f1f5f9", fontSize: 14 }}>
                  {s.name}
                </span>
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#a78bfa" }}>
                {s.level}%
              </span>
            </div>

            <AnimatedBar level={s.level} color="#6c63ff" delay={i * 60} />
          </div>
        ))}
      </div>
    </section>
  );
}
