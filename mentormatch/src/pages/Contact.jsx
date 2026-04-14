import React from 'react';

const Contact = () => {
  const customerServices = [
    {
      name: "Muhammad Sulthon Dzaki",
      role: "Head of Support",
      whatsapp: "6289634250920",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sulthon"
    },
    {
      name: "Muhammad Kadafi Naufalla",
      role: "Technical Consultant",
      whatsapp: "628975700332",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kadafi"
    },
    {
      name: "Leksa Alfiyora",
      role: "Student Coordinator",
      whatsapp: "6285367303503",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leksa"
    }
  ];

  const defaultMsg = encodeURIComponent("Halo, saya butuh bantuan!");

  return (
    <div className="contact-container">
      {/* HEADER SECTION */}
      <section className="contact-hero">
        <div className="about-badge">Contact Us</div>
        <h1>Butuh Bantuan <span>Cepat?</span></h1>
        <p>Tim Customer Service kami siap menjawab pertanyaanmu seputar MentorMatch dan proses bimbingan.</p>
      </section>

      {/* CS GRID SECTION */}
      <section className="cs-section">
        <div className="cs-grid">
          {customerServices.map((cs, index) => (
            <div key={index} className="cs-card">
              <div className="cs-avatar">
                <img src={cs.image} alt={cs.name} />
              </div>
              <div className="cs-info">
                <h3>{cs.name}</h3>
                <span>{cs.role}</span>
                <p>Aktif Senin - Jumat (09:00 - 17:00)</p>
                
                <a 
                  href={`https://wa.me/${cs.whatsapp}?text=${defaultMsg}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-wa-cs"
                >
                  <span className="wa-icon">💬</span> Hubungi via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL INFO */}
      <section className="contact-footer-info">
        <div className="info-box">
          <h4>Email Support</h4>
          <p>support@mentormatch.id</p>
        </div>
        <div className="info-box">
          <h4>Alamat Kantor</h4>
          <p>Gedung Teknik Informatika, Kampus Utama.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;