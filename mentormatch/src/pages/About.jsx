import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      {/* SECTION 1: HEADER & VISI */}
      <section className="about-hero">
        <div className="about-badge">Tentang Kami</div>
        <h1>Membangun Jembatan Belajar Antar <span>Mahasiswa</span></h1>
        <p className="about-lead">
          MentorMatch adalah platform peer-to-peer learning yang dirancang khusus untuk memfasilitasi 
          mahasiswa dalam meningkatkan skill teknis dan akademik melalui bimbingan langsung dari senior berpengalaman.
        </p>
      </section>

      {/* SECTION 2: CORE VALUES (Grid Style) */}
      <section className="about-values">
        <div className="value-card">
          <div className="value-icon">🤝</div>
          <h3>Peer-to-Peer</h3>
          <p>Belajar lebih santai dan nyaman karena mentor adalah sesama mahasiswa yang sudah melewati fase tersebut.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">🎯</div>
          <h3>Terfokus</h3>
          <p>Materi bimbingan disesuaikan dengan kurikulum kampus dan kebutuhan industri saat ini.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">🚀</div>
          <h3>Akselerasi</h3>
          <p>Mempercepat pemahaman materi sulit melalui diskusi interaktif 1-on-1.</p>
        </div>
      </section>

      {/* SECTION 3: HARAPAN (The Vision) */}
      <section className="about-vision">
        <div className="vision-content">
          <h2>Harapan Kami <span>Kedepannya</span></h2>
          <p>
            Kami percaya bahwa ilmu akan lebih bermanfaat ketika dibagikan. MentorMatch hadir dengan harapan 
            dapat menekan angka kesenjangan skill di kalangan mahasiswa IT dan menciptakan ekosistem belajar yang suportif.
          </p>
          <div className="vision-stats">
            <div className="stat-item">
              <strong>100%</strong>
              <span>Eksklusif Mahasiswa</span>
            </div>
            <div className="stat-item">
              <strong>24/7</strong>
              <span>Akses Diskusi</span>
            </div>
            <div className="stat-item">
              <strong>∞</strong>
              <span>Jaringan Relasi</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="about-cta">
        <div className="cta-box">
          <h2>Siap memulai perjalanan belajarmu?</h2>
          <p>Temukan mentor yang tepat dan mulai upgrade skill-mu hari ini.</p>
          <button className="btn-primary" onClick={() => window.location.href='/explore'}>Cari Mentor Sekarang</button>
        </div>
      </section>
    </div>
  );
};

export default About;