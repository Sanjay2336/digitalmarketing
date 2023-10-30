import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ContactForm from './ContactForm';
import Services from './Services';
import AboutUs from './AbouUs';
import Header from './Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <footer>
        <p>&copy; 2023 Digital Marketing Agency</p>
      </footer>
    </Router>
  );
}

export default App;