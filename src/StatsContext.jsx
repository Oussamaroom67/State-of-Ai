// StatsContext.js
import { createContext, useState, useEffect } from 'react';
import { fetchRowCount } from './utils/supabaseUtils';
import supabase from './supabaseClient';

// Create a context
export const StatsContext = createContext();

// Create a provider component
export const StatsProvider = ({ children }) => {
  const [companies, setCompanies] = useState(0);
  const [professionals, setProfessionals] = useState(0);

  useEffect(() => {
    // Fetch initial counts
    const fetchData = async () => {
      setCompanies(await fetchRowCount("state_ai_partner"));
      setProfessionals(await fetchRowCount("state_ai_participant"));
    };

    fetchData();

    // Subscribe to realtime changes for state_ai_partner
    const partnerSubscription = supabase
      .channel('custom-partner-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'state_ai_partner' },
        async () => {
          setCompanies(await fetchRowCount("state_ai_partner"));
        }
      )
      .subscribe();

    // Subscribe to realtime changes for state_ai_participant
    const participantSubscription = supabase
      .channel('custom-participant-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'state_ai_participant' },
        async () => {
          setProfessionals(await fetchRowCount("state_ai_participant"));
        }
      )
      .subscribe();

    // Cleanup subscriptions on unmount
    return () => {
      partnerSubscription.unsubscribe();
      participantSubscription.unsubscribe();
    };
  }, []);

  return (
    <StatsContext.Provider value={{ companies, professionals }}>
      {children}
    </StatsContext.Provider>
  );
};