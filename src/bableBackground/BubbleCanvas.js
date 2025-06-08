// src/components/BubbleCanvas.jsx
import React, { useRef, useEffect } from 'react';
import './bubbleCanvas.css';

const BubbleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Обновляем размер при ресайзе
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Загружаем картинку пузыря
    const img = new Image();
    img.src = "../images/Mask group.";

    // Конструктор одного пузыря
    class Bubble {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;  // скорость по X
        this.vy = (Math.random() - 0.5) * 0.8;  // скорость по Y
        this.size = 20 + Math.random() * 50;    // размер
        this.angle = Math.random() * 2 * Math.PI;
        this.angularSpeed = (Math.random() - 0.5) * 0.02;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.angularSpeed;
        // перескочить на другой край, если улетели за границу
        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = 0.6;
        ctx.drawImage(img, -this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
      }
    }

    // Создаём «стадо» пузырей
    const bubbles = Array.from({ length: 7 }, () => new Bubble());

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const b of bubbles) {
        b.update();
        b.draw();
      }
      animationId = requestAnimationFrame(animate);
    };

    // Запускаем анимацию после того как картинка загрузилась
    img.onload = () => {
      animate();
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="bubble-canvas" />;
};

export default BubbleCanvas;
