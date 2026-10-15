import React, { useEffect, useRef } from 'react';

export default function FireCanvas({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool
    const particleCount = 45;
    const particles = [];

    const colors = [
      'rgba(255, 69, 0, ',    // Red-Orange
      'rgba(255, 140, 0, ',   // Dark Orange
      'rgba(255, 215, 0, ',   // Gold
      'rgba(249, 115, 22, ',  // Bright Flame Orange
      'rgba(239, 68, 68, ',   // Crimson
    ];

    class EmberParticle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + Math.random() * 20;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1.8 + 0.8;
        this.speedX = (Math.random() - 0.5) * 1.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.7 + 0.3;
        this.decay = Math.random() * 0.006 + 0.003;
        this.flickerSpeed = Math.random() * 0.08 + 0.02;
        this.flickerOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.02) * 0.5;
        this.alpha -= this.decay;
        if (this.alpha <= 0 || this.y < -10) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        const flicker = Math.sin(Date.now() * 0.005 + this.flickerOffset) * 0.2;
        const currentAlpha = Math.max(0, Math.min(1, this.alpha + flicker));
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${currentAlpha})`;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = 'rgba(255, 120, 0, 0.8)';
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new EmberParticle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
