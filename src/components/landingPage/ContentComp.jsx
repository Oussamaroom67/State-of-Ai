import { useState, useEffect } from "react";
import CardStats from "./CardStats";
import "../../assets/css/CardStats.css";


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
