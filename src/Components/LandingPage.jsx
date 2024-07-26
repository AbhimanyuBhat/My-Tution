import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="title">Abhi Ka Tution</h1>
        <p className="tagline">Empowering Your Learning Journey</p>
      </header>
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Interactive Lessons</h3>
            <p>Engage with our interactive and easy-to-follow lessons.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Tutors</h3>
            <p>Learn from industry experts and experienced tutors.</p>
          </div>
          <div className="feature-item">
            <h3>Flexible Scheduling</h3>
            <p>Access courses anytime, anywhere at your convenience.</p>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2>Get Started Today!</h2>
        <p>Join Abhi Ka Tution and take the first step towards a brighter future.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
};

export default LandingPage;
