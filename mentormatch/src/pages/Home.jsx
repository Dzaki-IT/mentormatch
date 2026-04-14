import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Data untuk subjects yang akan bergerak
  const subjects = [
    { i: 'π', n: 'Math' }, { i: '🧪', n: 'Chemistry' }, { i: '💻', n: 'Coding' },
    { i: '📝', n: 'SAT' }, { i: 'ض', n: 'Arabic' }, { i: '🗣️', n: 'Public Speaking' },
    { i: '🌍', n: 'Social Science' }, { i: '🧬', n: 'Biology' }
  ];

  return (
    <div className="home-wrapper">
      {/* SECTION 1: HERO */}
<header className="hero">
  <h1>Find your perfect <span>Mentor Match.</span></h1>
  <p>Hubungkan dirimu dengan bimbingan satu-lawan-satu yang dipersonalisasi.</p>
  <div className="hero-btns">
    {/* Link langsung ke Explore */}
    <Link to="/explore" className="btn-primary">Get Started</Link>
  </div>
</header>

      {/* SECTION 2: MOVING SUBJECTS (Infinite Scroll) */}
      <section className="scroll-container">
        <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Get help with all your school subjects</h2>
        <div className="scroll-track">
          {/* Kita duplikasi agar looping tidak terputus */}
          {[...subjects, ...subjects].map((s, index) => (
            <div key={index} className="subj-item">
              <i>{s.i}</i>
              <p>{s.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: 3-STEP FORMULA (Gambar 1) */}
      <section className="formula-section">
        <h2>Our 3-Step Formula for A+ Success!</h2>
        <div className="formula-grid">
          <FormulaCard step="1" icon="📊" title="Personalized Plan" bg="#dbeafe" />
          <FormulaCard step="2" icon="👨‍🏫" title="High-Impact 1:1" bg="#dcfce7" />
          <FormulaCard step="3" icon="📈" title="Stay Involved" bg="#fef9c3" />
        </div>
      </section>

      {/* SECTION 4: EDUCATORS (Gambar 5 - Video Cards) */}
      <section className="educators-section">
        <h2>Educators Committed to Your Growth</h2>
        <div className="video-grid">
          <VideoCard name="Ravisha Gudwani" info="Math Educator, 10+ Years" />
          <VideoCard name="Kritika Sharma" info="English Educator, 6+ Years" />
          <VideoCard name="Jagrat Savita" info="Math Educator, 7+ Years" />
        </div>
      </section>

      {/* SECTION 5: REVIEWS (Gambar 3) */}
      <section className="review-section">
        <h2>Here's What Parents Are Saying</h2>
        <div style={{marginBottom: '30px'}}>
          <strong>4.9 ⭐⭐⭐⭐⭐</strong> <span>171 reviews on Google</span>
          <br />
          <a href="https://maps.app.goo.gl/j41B96xuBk5Z3sdS6" target="_blank" style={{color: '#2563eb', fontWeight: 'bold'}}>📍 View on map</a>
        </div>
        <div className="review-grid">
          <ReviewCard text="Ms. Harshita is a fantastic teacher. She strikes the perfect balance." author="Mrs. Ahmed" />
          <ReviewCard text="Great teaching, I definitely recommend Muskan for physics." author="Shamma Alfa" />
          <ReviewCard text="The 1:1 sessions helped my child gain so much confidence." author="Salamah Alsh..." />
        </div>
      </section>

      {/* SECTION 6: SUCCESS STORIES (Gambar 4 - WA Style) */}
      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="wa-grid">
          <div className="wa-bubble">💬 "She got an A-! ❤️❤️❤️"</div>
          <div className="wa-bubble">💬 "First time she got full marks!"</div>
          <div className="wa-bubble">💬 "I got the highest mark in class! 😍"</div>
        </div>
      </section>
    </div>
  );
};

// Komponen Pembantu
const FormulaCard = ({ step, icon, title, bg }) => (
  <div className="formula-card">
    <span className="step-tag">{step}</span>
    <div className="formula-img" style={{ background: bg }}>{icon}</div>
    <h3>{title}</h3>
    <p>Identify learning gaps with AI and tackle them with a personalized plan.</p>
  </div>
);

const VideoCard = ({ name, info }) => (
  <div className="v-card">
    <div className="v-thumb">▶ Play Video</div>
    <h4>{name}</h4>
    <p style={{color: '#6b7280', fontSize: '0.9rem'}}>{info}</p>
  </div>
);

const ReviewCard = ({ text, author }) => (
  <div className="r-card">
    <p style={{fontStyle: 'italic', marginBottom: '15px'}}>"{text}"</p>
    <strong>- {author}</strong>
  </div>
);

export default Home;