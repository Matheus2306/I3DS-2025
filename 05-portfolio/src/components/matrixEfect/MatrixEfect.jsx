import React from "react";
import { useEffect, useRef } from "react";
import styles from "./MatrixEfect.module.css";

const MatrixEfect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const textArray = "0123456789abcdefghijklmnopqrstuvwxyz@#$%&*!?".split("");
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px Arial`;

      for (let i = 0; i < drops.length; i++) {
        let text = textArray[Math.floor(Math.random() * textArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas ref={canvasRef} className="canvas" id={styles.canvas}></canvas>
  );
};

export default MatrixEfect;
