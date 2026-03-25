import React from 'react';
import './App.css';

function App() {
  return (
    <div className="hero-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <span className="icon">🏆</span>
          <span className="logo-text">WNS <span className="yellow-text">Sports</span></span>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <button className="portal-login-btn">
            <span className="user-icon">👤</span> Portal Login
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="badge">
          <span className="star">★</span> Walasmulla National School
        </div>
        
        <h1>
          Smart Sports <br />
          <span className="yellow-text">Management System</span>
        </h1>
        
        <p className="description">
          Digitalizing school athletics. Manage teams, track attendance, monitor 
          player performance, and schedule tournaments from one centralized, 
          intelligent platform.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary">
            Enter Portal <span className="arrow">→</span>
          </button>
          <button className="btn-secondary">
            <span className="play-icon">▶</span> Explore Features
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;                             
