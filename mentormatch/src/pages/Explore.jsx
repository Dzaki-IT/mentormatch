import React, { useState } from 'react';
import MentorCard from '../components/MentorCard';

const Explore = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // DATA 12 MENTOR
  // Silakan ganti nomor whatsapp manual di bawah ini (Gunakan format: 628...)
  const mentors = [
    { id: 1, name: "rayyanza queenzy (ADMIN)", skill: "Web Development", price: 2000, image: "mentor1.jpg", whatsapp: "628975700332" },
    { id: 2, name: "bujang gadis mannak", skill: "UI/UX Design", price: 120000, image: "mentor2.jpg", whatsapp: "6281366696007" },
    { id: 3, name: "genderuwo sawit", skill: "Data Science", price: 175000, image: "mentor3.jpg", whatsapp: "6281271415708" },
    { id: 4, name: "ahsan arma suka mbg", skill: "Mobile Apps", price: 160000, image: "mentor4.jpg", whatsapp: "6285341506383" },
    { id: 5, name: "faisal teknisi handal", skill: "Backend Engineering", price: 155000, image: "mentor5.jpg", whatsapp: "62895603599881" },
    { id: 6, name: "moona imut", skill: "Graphic Design", price: 110000, image: "mentor6.jpg", whatsapp: "6289624676749" },
    { id: 7, name: "rafi tombak arma", skill: "Cyber Security", price: 200000, image: "mentor7.jpg", whatsapp: "6282135261738" },
    { id: 8, name: "kevin dicks trivela", skill: "Digital Marketing", price: 100000, image: "mentor8.jpg", whatsapp: "6285789430391" },
    { id: 9, name: "fikrip pekan minggu", skill: "Game Development", price: 180000, image: "mentor9.jpg", whatsapp: "6285142311336" },
    { id: 10, name: "temereks naks dkv RJ45", skill: "Cloud Computing", price: 190000, image: "mentor10.jpg", whatsapp: "6281373200729" },
    { id: 11, name: "sisikumalasisi palak siring", skill: "Content Writing", price: 95000, image: "mentor11.jpg", whatsapp: "6281279491106" },
    { id: 12, name: "sintia suka beras seginim", skill: "AI Specialist", price: 150000, image: "mentor12.jpg", whatsapp: "6285366861536" },
  ];

  const handleOpenModal = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMentor(null);
  };

  return (
    <div className="explore-container">
      <header className="explore-header">
        <div className="about-badge">Our Mentors</div>
        <h2>Temukan Mentor Terbaikmu</h2>
        <p>Belajar langsung dari 12 senior berpengalaman di bidangnya.</p>
      </header>

      <div className="mentor-grid">
        {mentors.map(mentor => (
          <MentorCard 
            key={mentor.id} 
            mentor={mentor} 
            onBookingClick={handleOpenModal} 
          />
        ))}
      </div>

      {/* MODAL BOOKING POP-UP */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>&times;</button>
            <h2>Booking Mentor</h2>
            <p style={{marginBottom: '20px'}}>Anda akan memesan sesi dengan <strong>{selectedMentor.name}</strong></p>
            
            <form className="booking-form" onSubmit={(e) => {
              e.preventDefault();
              alert(`Terima kasih! Pesanan Anda untuk ${selectedMentor.name} telah terkirim.`);
              handleCloseModal();
            }}>
              <label>Nama Lengkap</label>
              <input type="text" placeholder="Masukkan nama Anda" required />
              
              <label>Berapa sesi yang ingin dipesan?</label>
              <input type="number" min="1" placeholder="Contoh: 3" required />
              
              <button type="submit" className="btn-submit">Kirim Permintaan</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;