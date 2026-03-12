"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const magneticElements = useRef<Map<Element, DOMRect>>(new Map());

  useEffect(() => {
    const match = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(match.matches);
    if (!match.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // Magnetic pull
      magneticElements.current.forEach((rect, el) => {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const dist = Math.sqrt(distX * distX + distY * distY);
        if (dist < 80) {
          const pull = Math.min(8, (80 - dist) / 10);
          const pullX = (distX / dist) * pull;
          const pullY = (distY / dist) * pull;
          (el as HTMLElement).style.transform = `translate(${pullX}px, ${pullY}px)`;
        } else {
          (el as HTMLElement).style.transform = "";
        }
      });
    };

    const updateMagnetics = () => {
      magneticElements.current.clear();
      document
        .querySelectorAll("a, button, .magnetic")
        .forEach((el) => {
          magneticElements.current.set(el, el.getBoundingClientRect());
        });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".magnetic")
      ) {
        setIsHovering(true);
        if (target.closest("[data-cursor-text]")) {
          setHoverText(
            target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text") || ""
          );
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".magnetic")
      ) {
        setIsHovering(false);
        setHoverText("");
        (target.closest("a, button, .magnetic") as HTMLElement)?.style.removeProperty("transform");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    updateMagnetics();
    window.addEventListener("scroll", updateMagnetics, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", updateMagnetics);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full border border-[var(--color-gold)]"
          animate={{
            width: isHovering ? 56 : 32,
            height: isHovering ? 56 : 32,
            backgroundColor: isHovering
              ? "rgba(201, 168, 76, 0.3)"
              : "transparent",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {hoverText && (
            <span className="text-[10px] font-body uppercase tracking-[0.15em] text-[var(--color-gold)]">
              {hoverText}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10001]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-[var(--color-gold)]"
          animate={{
            width: isHovering ? 0 : 6,
            height: isHovering ? 0 : 6,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}
