import { useState, useEffect, useRef } from "react";
import CardStats from "./CardStats";
import "../../assets/css/CardStats.css";

// Composant Canvas pour l'arrière-plan animé dans .landing-content
function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Ajuster la taille du canvas à .landing-content
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();

    // Configuration des particules
    const particles = [];
    const particleCount = 200;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: i % 2 === 0 ? '#C12026' : '#1D7A63' // Alternance entre rouge et vert
      });
    }

    // Animation
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connexions améliorées
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = otherParticle.x - particle.x;
          const dy = otherParticle.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const weight = 1 - distance / 150;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(80, 30, 30, ${0.3 * weight})`;
            ctx.lineWidth = 1.8 * weight;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.6
      }}
    />
  );
}

export default function ContentComp() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 23);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-content">
      {/* Canvas pour l'animation de fond */}
      <AnimatedBackground />

      <div className="info">
        <div className="hero-section">
          <div className="Badge">First of its kind in Morocco</div>
          <div className="title">
            <h1 className="first">State of AI</h1>
            <h1 className="second">in Morocco</h1>
          </div>
          <div className="specifications">
            The first comprehensive data collection initiative mapping the landscape of AI and data science across Morocco.
          </div>
        </div>

        <div className="Countdown">
          <div className="title">Version 2.0 Launches In</div>
          <div className="date">
            <div className="time">
              <div className="card">{timeLeft.days}</div>
              <div className="text">Days</div>
            </div>
            <div className="time">
              <div className="card">{timeLeft.hours}</div>
              <div className="text">Hours</div>
            </div>
            <div className="time">
              <div className="card">{timeLeft.minutes}</div>
              <div className="text">Minutes</div>
            </div>
            <div className="time">
              <div className="card">{timeLeft.seconds}</div>
              <div className="text">Seconds</div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <img
          src="/public/images/morocco-data-science__6_-removebg-preview.png"
          alt="Morocco AI Stats"
          style={{ width: "300px" }}
        />
        <CardStats />
      </div>
    </div>
  );
}
