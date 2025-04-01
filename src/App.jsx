// import { useState } from 'react';
import './App.css';
import ContentComp from './components/landingPage/ContentComp';
import { StatsProvider } from './StatsContext';
import ContributionPage from './pages/ContributionPage';
import LandingPage from './pages/LandingPage';
import DataInsights from './components/landingPage/DataInsights';
import Footer from './pages/footer';
import PartnerWithUs from './components/landingPage/PartnerWithUs';
import AnimatedBackground from './components/back_ground/AnimatedBackground';


function App() {
  return (
    <StatsProvider>
      {/* Canvas pour l'animation de fond */}
      <AnimatedBackground />
      <LandingPage/>
      <DataInsights/>
      <ContributionPage/>
      <PartnerWithUs/>
      <Footer/>
    </StatsProvider>
  )
}

export default App;
