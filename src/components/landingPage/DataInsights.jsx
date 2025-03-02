import React, { useState } from 'react';
import "../../assets/css/DataInsights.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Factory, Users, Lightbulb } from 'lucide-react';

export default function DataInsights() {
    const [hovered, setHovered] = useState(null);

    const cards = [
        { id: 1, title: "Industry Distribution", description: "Analyzing which sectors are leading AI adoption in Morocco and identifying growth opportunities.", icon: <Factory color="#C12026" size={20} />, borderColor: "#C12026", bgColor: "rgba(193, 32, 38, 0.2)" },
        { id: 2, title: "Talent Distribution", description: "Mapping the concentration of AI and data science professionals across Moroccan cities.", icon: <Users color="#1D7A63" size={20} />, borderColor: "#23977a", bgColor: "rgba(35, 151, 122, 0.2)" },
        { id: 3, title: "Technology Adoption", description: "Tracking which AI technologies and frameworks are most widely used across Moroccan companies.", icon: <Lightbulb color="#C12026" size={20} />, borderColor: "#C12026", bgColor: "rgba(193, 32, 38, 0.2)" }
    ];

    return (
        <div className="Insights-content">
            <div className="Badge">Data Driven Insights</div>
            <div className="Title">Mapping Morocco's AI Landscape</div>
            <div className="specifications description">Our initiative collects and analyzes key metrics about the state of artificial intelligence and data science across Morocco.</div>
            <div className="Cards" style={{ display: "flex", gap: "20px" }}>
                {cards.map((card) => (
                    <Box key={card.id} style={{ width: "31%" }}>
                        <Card
                            variant="outlined"
                            style={{
                                padding: "10px",
                                borderRadius: "12px",
                                border: hovered === card.id ? `1px solid ${card.borderColor}` : "1px solid transparent",
                                transition: "border 0.3s ease-in-out",
                                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)" 
                            }}
                            onMouseEnter={() => setHovered(card.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <CardContent style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <div style={{
                                    backgroundColor: card.bgColor,
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    {card.icon}
                                </div>
                                <Typography gutterBottom sx={{ fontSize: 18 }} style={{ color: "#5D1725", fontWeight: "bold" }}>
                                    {card.title}
                                </Typography>
                                <div className="specifications" style={{ fontSize: "16px" }}>{card.description}</div>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </div>
        </div>
    );
}
