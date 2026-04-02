import { useState, useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";
import SocialLinks from "../ui/SocialLinks";

const ROLES = [
  "Frontend Developer",
  "Coding Tutor",
  "Tech Enthusiast",
  "Project Manager",
];

export default function Hero({ scrollTo }) {
  const [typed, setTyped] = useState("");
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);
  const [ref, inView] = useInView(0.05);

  useEffect(() => {
    let timeout;
    const tick = () => {
      const current = ROLES[roleIndex.current];
      if (!deleting.current) {
        setTyped(current.slice(0, charIndex.current + 1));
        charIndex.current++;
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 1600);
          return;
        }
      } else {
        setTyped(current.slice(0, charIndex.current - 1));
        charIndex.current--;
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? 55 : 100);
    };
    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "90px clamp(16px,8vw,120px) 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle,#6c63ff22 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "2%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle,#38bdf822 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Text */}
        <div
          className={`fade-up${inView ? " in" : ""}`}
          style={{ maxWidth: 580 }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              color: "#a78bfa",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            👋 Hello, World!
          </span>

          <h1
            style={{
              fontSize: "clamp(36px,6vw,64px)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: "#f1f5f9",
              lineHeight: 1.1,
              margin: "16px 0 8px",
            }}
          >
            I'm{" "}
            <span className="gradient-text">
              Edoleyi
              <br />
              Francis
            </span>
          </h1>

          <div
            style={{
              fontSize: "clamp(16px,2.5vw,22px)",
              fontFamily: "'Space Mono', monospace",
              color: "#64748b",
              marginBottom: 24,
              minHeight: 34,
            }}
          >
            <span style={{ color: "#a78bfa" }}>{typed}</span>
            <span className="cursor" style={{ color: "#6c63ff" }}>
              |
            </span>
          </div>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.75,
              fontSize: 15,
              marginBottom: 36,
              maxWidth: 480,
            }}
          >
            A dedicated frontend developer from{" "}
            <span style={{ color: "#a78bfa" }}>Lagos, Nigeria</span>. I build
            pixel-perfect, performant web experiences and teach others to do the
            same.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo("Portfolio")}
            >
              View My Work
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("Contact")}>
              Get In Touch
            </button>
          </div>

          <div style={{ marginTop: 32 }}>
            <SocialLinks />
          </div>
        </div>

        {/* Right: Avatar */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div
            style={{
              width: "clamp(220px,28vw,340px)",
              height: "clamp(220px,28vw,340px)",
              borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
              background: "linear-gradient(135deg,#6c63ff,#a78bfa,#38bdf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "float 5s ease-in-out infinite",
              boxShadow: "0 20px 60px #6c63ff44, inset 0 0 40px #ffffff11",
              fontSize: "clamp(80px,12vw,140px)",
            }}
          >
            👨‍💻
          </div>

          {/* Badge: ALX */}
          {/* <div
            style={{
              position: "absolute",
              bottom: 16,
              right: -20,
              background: "#13152b",
              border: "1.5px solid #6c63ff44",
              borderRadius: 12,
              padding: "10px 16px",
            }}
          ></div> */}

          {/* Badge: Open to work */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: -24,
              background: "#13152b",
              border: "1.5px solid #38bdf844",
              borderRadius: 12,
              padding: "10px 16px",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "#38bdf8",
                letterSpacing: 1,
              }}
            >
              Open to Work
            </div>
            <div style={{ fontSize: 18, marginTop: 2 }}>✅</div>
          </div>
        </div>
      </div>
    </section>
  );
}
