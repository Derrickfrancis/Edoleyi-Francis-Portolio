import { useInView } from "../../hooks/useInView";

export default function AnimatedBar({ level, color, delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        background: "#1e2030",
        borderRadius: 999,
        height: 8,
        overflow: "hidden",
        marginTop: 6,
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: 999,
          background: `linear-gradient(90deg, ${color}, #a78bfa)`,
          width: inView ? `${level}%` : "0%",
          transition: `width 1.1s cubic-bezier(.4,0,.2,1) ${delay}ms`,
          boxShadow: `0 0 8px ${color}88`,
        }}
      />
    </div>
  );
}
