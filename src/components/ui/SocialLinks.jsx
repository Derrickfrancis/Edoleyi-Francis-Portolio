import { SOCIALS } from "../../data";

export default function SocialLinks() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          title={s.name}
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
