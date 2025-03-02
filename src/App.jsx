// import { useState } from 'react';
import './App.css';
import ContentComp from './components/landingPage/ContentComp';
import ContributionPage from './pages/ContributionPage';
import LandingPage from './pages/LandingPage';
import DataInsights from './components/landingPage/DataInsights';
import CardStats from './components/landingPage/CardStats';
import PartnerWithUs from './components/landingPage/PartnerWithUs';
function App() {

  return (
    <>
      <LandingPage/>
      <PartnerWithUs/>
    </>
  )
}

export default App;
