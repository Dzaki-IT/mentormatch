import React from 'react';

const License = () => {
  return (
    <div className="license-container">
      {/* Header Visual Keamanan */}
      <div style={{ color: '#059669', fontSize: '3.5rem', marginBottom: '15px' }}>🛡️</div>
      <div className="about-badge" style={{ background: '#d1fae5', color: '#065f46' }}>
        Verified Security Platform
      </div>
      
      <h1 style={{ fontSize: '3.2rem', fontWeight: '900', marginTop: '20px' }}>
        Lisensi Keaslian & <span>Keamanan</span>
      </h1>
      
      <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '750px', margin: '20px auto 60px', lineHeight: '1.8' }}>
        MentorMatch berkomitmen untuk menyediakan lingkungan belajar yang transparan dan bebas dari penipuan. 
        Sertifikasi ini merupakan jaminan rekayasa bahwa setiap entitas di platform ini telah melalui proses verifikasi yang ketat.
      </p>

      {/* Grid Poin Keamanan */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '25px', 
        textAlign: 'left' 
      }}>
        <div style={{ padding: '35px', background: '#f0fff4', border: '1px solid #c6f6d5', borderRadius: '25px' }}>
          <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.2rem' }}>✅ Verifikasi Identitas Mentor</h4>
          <p style={{ color: '#374151', fontSize: '0.95rem' }}>
            Setiap mentor wajib melampirkan identitas mahasiswa aktif dan bukti prestasi akademik sebelum dapat menawarkan jasa bimbingan.
          </p>
        </div>

        <div style={{ padding: '35px', background: '#f0fff4', border: '1px solid #c6f6d5', borderRadius: '25px' }}>
          <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.2rem' }}>✅ Perlindungan Anti-Scam</h4>
          <p style={{ color: '#374151', fontSize: '0.95rem' }}>
            Sistem kami menggunakan algoritma pemantauan untuk mendeteksi aktivitas mencurigakan dan memastikan interaksi berjalan sesuai etika akademik.
          </p>
        </div>

        <div style={{ padding: '35px', background: '#f0fff4', border: '1px solid #c6f6d5', borderRadius: '25px' }}>
          <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.2rem' }}>✅ Enkripsi Data Privat</h4>
          <p style={{ color: '#374151', fontSize: '0.95rem' }}>
            Seluruh data kontak dan riwayat booking dilindungi dengan enkripsi end-to-end untuk menjaga privasi antara mentor dan mahasiswa.
          </p>
        </div>
      </div>

      {/* Bagian Cap/Stamp */}
      <div style={{ marginTop: '80px' }}>
        <div className="stamp">
          AUTHENTIC PROJECT<br/>
          <span style={{fontSize: '0.8rem'}}>VERIFIED BY SULTHON 2026</span>
        </div>
        <p style={{ marginTop: '25px', color: '#9ca3af', fontSize: '0.85rem', letterSpacing: '1px' }}>
          DOCUMENT ID: MM-CERT-PROJ-9920-IDX
        </p>
      </div>

      {/* Tombol Kembali */}
      <div style={{ marginTop: '50px' }}>
        <button 
          className="btn-primary" 
          onClick={() => window.history.back()}
          style={{ padding: '12px 30px', fontSize: '0.9rem' }}
        >
          Kembali ke Halaman Sebelumnya
        </button>
      </div>
    </div>
  );
};

export default License;