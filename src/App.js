import React from 'react';
import Header from './components/Header'; // Import the Header component
import Hero from './components/Hero'; // Import the Hero Section
import MemeGallery2 from './components/MemeGallery2'; // Import the About Meme Coin Section
import MemeGallery from './components/MemeGallery'; // Import the Meme Gallery
import CommunityLinks from './components/CommunityLinks'; // Import the Community Links
import Footer from './components/Footer'; // Import the Header component
import SlidingBanner from './components/SlidingBanner'; // Import the Header component


function App() {
  return (
    <div>
      <Header />  

      <Hero /> 
      <SlidingBanner /> 

      <CommunityLinks /> 


      <MemeGallery /> 
      <MemeGallery2 /> 

      <Footer />



    </div>
  );
}

export default App;
