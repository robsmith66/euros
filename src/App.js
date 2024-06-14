import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MemeGallery from './components/MemeGallery';
import CommunityLinks from './components/CommunityLinks';
import Footer from './components/Footer';
import SlidingBanner from './components/SlidingBanner';
import StatsDisplayed from './components/StatsDisplayed';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SlidingBanner />
      <CommunityLinks />
      <MemeGallery />
      <StatsDisplayed />
      <Footer />
    </div>
  );
}

export default App;
