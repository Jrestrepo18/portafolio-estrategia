import React, { useRef, useEffect } from 'react';

const CorporateWavesCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle flowing waves
      for (let w = 0; w < 4; w++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(197, 166, 124, ${0.04 - w * 0.008})`;
        ctx.lineWidth = 1;

        for (let x = 0; x <= canvas.width; x += 4) {
          const y =
            canvas.height * 0.5 +
            Math.sin(x * 0.002 + time + w * 0.8) * 80 +
            Math.sin(x * 0.005 + time * 1.5 + w) * 40 +
            w * 60;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Subtle floating particles
      for (let i = 0; i < 30; i++) {
        const px = (Math.sin(time * 0.5 + i * 2.1) * 0.5 + 0.5) * canvas.width;
        const py = (Math.cos(time * 0.3 + i * 1.7) * 0.5 + 0.5) * canvas.height;
        const size = 1 + Math.sin(time + i) * 0.5;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 166, 124, ${0.08 + Math.sin(time + i) * 0.04})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default CorporateWavesCanvas;
