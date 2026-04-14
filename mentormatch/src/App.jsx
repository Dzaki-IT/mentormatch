import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import './App.css';
import License from './pages/License';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content" style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/license" element={<License />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;