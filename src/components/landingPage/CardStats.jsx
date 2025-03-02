import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardStats() {
  return (
    <Card sx={{ maxWidth: 340, padding: 1 }} style={{boxShadow:"0 10px 15px -3px rgb(0 0 0 / 0.1)",borderRadius:"12px"}}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography gutterBottom sx={{ fontSize: 18,  }} style={{color:"#5D1725",fontWeight:"bold"}}>
        Join the Initiative
      </Typography>
      <Typography gutterBottom sx={{ color: '#64748B', fontSize: 14,  }}>
        Help us collect comprehensive data on AI and data science in Morocco.
      </Typography>
      <div className="stat" style={{ display: 'flex', gap: '16px' }}>
        <div className="first">
          <div className="number">200+</div>
          <h5>Companies</h5>
        </div>
        <div className="second">
          <div className="number">1,500+</div>
          <h5>Professionals</h5>
        </div>
      </div>
    </CardContent>
  </Card>
  
  );
}
