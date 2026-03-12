"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Check for mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    let animationId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      baseOpacity: number;
      pulseSpeed: number;
      glowSize: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles — more, bigger, with glow
    const count = 150;
    for (let i = 0; i < count; i++) {
      const baseOpacity = Math.random() * 0.25 + 0.06;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2.5 + 0.5,
        opacity: baseOpacity,
        baseOpacity,
        pulseSpeed: Math.random() * 0.008 + 0.003,
        glowSize: Math.random() > 0.8 ? Math.random() * 12 + 6 : 0,
      });
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Gentle opacity pulse
        p.opacity = p.baseOpacity + Math.sin(time * p.pulseSpeed) * 0.06;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Soft glow halo for some particles
        if (p.glowSize > 0) {
          const gradient = ctx.createRadialGradient(
            p.x, p.y, 0, p.x, p.y, p.glowSize
          );
          gradient.addColorStop(0, `rgba(201, 168, 76, ${p.opacity * 0.4})`);
          gradient.addColorStop(1, `rgba(201, 168, 76, 0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.glowSize, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
