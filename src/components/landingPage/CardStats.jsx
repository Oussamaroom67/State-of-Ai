import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

import { fetchRowCount } from "../../utils/supabaseUtils";

export default function CardStats() {
  const [companies, setCompanies] = useState(0);
  const [professionals, setProfessionals] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setCompanies(await fetchRowCount("state_ai_partner"));
      setProfessionals(await fetchRowCount("state_ai_participant"));
    };

    fetchData();
  }, []);


  return (
    <Card sx={{ maxWidth: 340, padding: 1 }} style={{ boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)", borderRadius: "12px" }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography gutterBottom sx={{ fontSize: 18 }} style={{ color: "#5D1725", fontWeight: "bold" }}>
          Join the Initiative
        </Typography>
        <Typography gutterBottom sx={{ color: '#64748B', fontSize: 14 }}>
          Help us collect comprehensive data on AI and data science in Morocco.
        </Typography>
        <div className="stat" style={{ display: 'flex', gap: '16px' }}>
          <div className="first">
            <div className="number">{companies}+</div>
            <h5>Companies</h5>
          </div>
          <div className="second">
            <div className="number">{professionals}+</div>
            <h5>Professionals</h5>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
