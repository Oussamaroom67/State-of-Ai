// import { useState } from 'react';
import './App.css';
import ContentComp from './components/landingPage/ContentComp';
import { StatsProvider } from './StatsContext';
import ContributionPage from './pages/ContributionPage';
import LandingPage from './pages/LandingPage';
import DataInsights from './components/landingPage/DataInsights';
import Footer from './pages/footer';
import PartnerWithUs from './components/landingPage/PartnerWithUs';


function App() {
  return (
    <StatsProvider>
      <LandingPage/>
      <DataInsights/>
      <ContributionPage/>
      <PartnerWithUs/>
      <Footer/>
    </StatsProvider>
  )
}

export default App;
