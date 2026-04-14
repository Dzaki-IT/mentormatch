import React from 'react';

export default function Booking() {
  return (
    <div style={{padding: '50px', textAlign: 'center'}}>
      <h2>Book a Free Trial</h2>
      <form style={{maxWidth: '400px', margin: '20px auto'}}>
        <input type="text" placeholder="Nama" style={{width: '100%', padding: '10px', marginBottom: '10px'}} />
        <button className="btn-primary" style={{width: '100%'}} onClick={(e) => {e.preventDefault(); alert('Terkirim!')}}>Kirim</button>
      </form>
    </div>
  );
}