import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];

    const particleCount = Math.min(Math.floor(width / 20), 80);
    const connectionDistance = 180;
    const moveSpeed = 0.4;

    canvas.width = width;
    canvas.height = height;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * moveSpeed;
        this.vy = (Math.random() - 0.5) * moveSpeed;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(41, 151, 255, 0.4)';
        ctx.fill();
      }
    }

    const init = () => {
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const drawAurora = () => {
      if (!ctx) return;
      const time = Date.now() * 0.0005;
      
      const drawBlob = (x: number, y: number, radius: number, color: string) => {
        const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
        grad.addColorStop(0, color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      };

      ctx.globalCompositeOperation = 'screen';
      
      drawBlob(
        width * 0.2 + Math.sin(time) * 100, 
        height * 0.3 + Math.cos(time) * 100, 
        width * 0.6, 
        'rgba(29, 38, 113, 0.15)'
      );
      drawBlob(
        width * 0.8 + Math.cos(time * 0.8) * 150, 
        height * 0.7 + Math.sin(time * 0.8) * 150, 
        width * 0.5, 
        'rgba(78, 38, 113, 0.1)'
      );
      
      ctx.globalCompositeOperation = 'source-over';
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#020205');
      bgGrad.addColorStop(1, '#0a0a1a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      drawAurora();

      ctx.lineWidth = 0.5;
      particles.forEach((p, i) => {
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < connectionDistance) {
            ctx.beginPath();
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(41, 151, 255, ${alpha})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default Background;