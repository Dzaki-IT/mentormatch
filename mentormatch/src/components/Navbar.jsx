import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo dibuat lebih bold dan profesional */}
      <Link to="/" className="logo-brand">
        MENTOR<span>MATCH</span>
      </Link>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Person</Link>
        {/* Halaman Lisensi Baru */}
        <Link to="/license" className="license-link">Verified License</Link>
      </div>

      <div className="nav-auth">
        {/* Tombol lama dihapus sesuai perintah */}
      </div>
    </nav>
  );
};

export default Navbar;