import "../../assets/css/DataInsights.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Zap,  Globe, Check } from 'lucide-react';
export default function PartnerWithUs(){
    const [hovered, setHovered] = useState(null);

    const cards = [
        { id: 1, title: "Exclusive Insights", description: "Partner companies receive detailed reports and analysis about the state of AI in Morocco before public release.", icon: <Zap color="#C12026" size={20} />, borderColor: "rgba(193, 32, 37, 0.44)", bgColor: "rgba(193, 32, 38, 0.2)",checked:["Custom data analysis","Industry benchmarking","Competitive positioning","Talent landscape mapping"],hoverback:"rgba(193, 32, 37, 0.06)"},
        { id: 2, title: "Brand Visibility", description: "Showcase your company's commitment to innovation and AI advancement in Morocco.", icon: < Globe color="#1D7A63" size={20} />, borderColor: "rgba(29, 122, 99, 0.46)", bgColor: "rgba(35, 151, 122, 0.2)" ,checked:["Logo placement on reports","Feature in case studies","Speaking opportunities","Media mentions"],hoverback:"rgba(29, 122, 99, 0.05)"}
    ];
    return (
        <>
            <div className="Insights-content wthbck">
                <div className="Badge">For Organizations</div>
                <div className="Title">Partner With Us</div>
                <div className="specifications description">Join leading Moroccan companies in shaping the future of AI in our country. Become a partner and gain exclusive insights.</div>
                <div className="Cards" style={{ display: "flex", gap: "0%" }}>
                    {cards.map((card) => (
                        <Box key={card.id} style={{ width: "47%" }}>
                            <Card
                                variant="outlined"
                                style={{
                                    padding: "10px",
                                    borderRadius: "12px",
                                    border: hovered === card.id ? `1px solid ${card.borderColor}` : "1px solid transparent",
                                    transition: "border 0.3s ease-in-out",
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)", 
                                    backgroundColor:hovered == card.id ? `${card.hoverback}` : "transparent"
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
                                    <ul>
                                        {card.checked.map((check)=>(
                                            <li style={{display:"flex",gap:"2%",padding:"6px 0px"}}>
                                                <Check size={18} color={card.borderColor}/>
                                                <div className="specifications" style={{ fontSize: "16px" }}> {check}</div>
                                            </li>                                           
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Box>
                    ))
                    }  
                </div>
                <Button 
                variant="contained" 
                sx={{
                    height: "55px",
                    borderRadius: "28px",
                    backgroundColor: "#C12026",
                    marginTop: "28px",
                    padding: "0px 40px",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": { 
                    backgroundColor: "#A01B20",
                    transform: "translateY(-3px)"
                    },
                    fontWeight:"500",
                    textTransform: "none" ,
                    fontSize:"20px"
                }}
                >
                    Become a Partner
                </Button>  
                <div className="specifications" style={{ fontSize: "16px" }}>
                    For partnership inquiries, contact us at{" "}
                    <a
                        href="mailto:partners@stateofai.ma"
                        style={{ color: "rgba(29, 122, 99, 0.98)", textDecoration: "none" }}
                    >
                        partners@stateofai.ma
                    </a>
                </div>               
            </div>
        </>
    );
}