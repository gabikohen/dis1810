import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx - 6 + "px";
        dot.current.style.top = my - 6 + "px";
      }
    };

    const lerp = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring.current) {
        ring.current.style.left = rx - 18 + "px";
        ring.current.style.top = ry - 18 + "px";
      }
      raf = requestAnimationFrame(lerp);
    };

    const over = () => {
      if (dot.current) dot.current.style.transform = "scale(2.5)";
      if (ring.current) ring.current.style.transform = "scale(1.8)";
    };
    const out = () => {
      if (dot.current) dot.current.style.transform = "scale(1)";
      if (ring.current) ring.current.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,[data-hover]").forEach(el => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });
    raf = requestAnimationFrame(lerp);

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="custom-cursor hidden lg:block" />
      <div ref={ring} className="custom-cursor-ring hidden lg:block" />
    </>
  );
}
