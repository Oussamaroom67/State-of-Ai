import "../../assets/css/DataInsights.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Snackbar, Alert } from "@mui/material";
import React, { useState } from 'react';
import { Zap,  Globe, Check } from 'lucide-react';

import supabase from "../../supabaseClient";
export default function PartnerWithUs(){
    //states
    const [hovered, setHovered] = useState(null);
    const [open, setOpen] = useState(false);
    const [formsData, setFormsData] = useState({ name: '', email: '', expertise: '' });
    //handlers
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [message, setMessage] = useState({ text: "", type: "" });
    const [messageOpen, setMessageOpen] = useState(false);

    const messageHandleClose = () => setMessageOpen(false);

    const cards = [
        { id: 1, title: "Exclusive Insights", description: "Partner companies receive detailed reports and analysis about the state of AI in Morocco before public release.", icon: <Zap color="#C12026" size={20} />, borderColor: "rgba(193, 32, 37, 0.44)", bgColor: "rgba(193, 32, 38, 0.2)",checked:["Custom data analysis","Industry benchmarking","Competitive positioning","Talent landscape mapping"],hoverback:"rgba(193, 32, 37, 0.06)"},
        { id: 2, title: "Brand Visibility", description: "Showcase your company's commitment to innovation and AI advancement in Morocco.", icon: < Globe color="#1D7A63" size={20} />, borderColor: "rgba(29, 122, 99, 0.46)", bgColor: "rgba(35, 151, 122, 0.2)" ,checked:["Logo placement on reports","Feature in case studies","Speaking opportunities","Media mentions"],hoverback:"rgba(29, 122, 99, 0.05)"}
    ];
    const addPartner = async () => {
        console.log("Button clicked"); // Debugging log
    
        if (!formsData.name || !formsData.email || !formsData.expertise) {
            console.error("Please fill in all fields.");
            setMessage({ text: "Please fill in all fields!", type: "error" });
            setMessageOpen(true);
            return;
        }
    
        const { data, error } = await supabase.from("state_ai_partner").insert([
            { name: formsData.name, email: formsData.email, area_of_expertise: formsData.expertise}
        ]);
    
        if (error) {
            console.error("Error adding partner:", error.message);
            setMessage({ text: `Error: ${error.message}`, type: "error" });
        } else {
            console.log("Partner added successfully:", data);
            setMessage({ text: "Partner added successfully!", type: "success" });
            setFormsData({ name: '', email: '', expertise: ''}); // Reset form after submission
            handleClose()
        }
        setMessageOpen(true);
    };
    return (
        <>
            <div className="Insights-content wthbck">
                <div className="Badge">For Organizations</div>
                <div className="Title">Partner With Us</div>
                <div className="specifications description">Join leading Moroccan companies in shaping the future of AI in our country. Become a partner and gain exclusive insights.</div>
                <div className="Cards PartnerCards" style={{ display: "flex", gap: "0%" }}>
                    {cards.map((card) => (
                        <Box key={card.id} style={{ width: "47%" }} className="card">
                            <Card
                                variant="outlined"
                                style={{
                                    padding: "10px",
                                    borderRadius: "12px",
                                    border: hovered === card.id ? `1px solid ${card.borderColor}` : "1px solid transparent",
                                    transition: "border 0.3s ease-in-out",
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)", 
                                    backgroundColor:hovered == card.id ? `${card.hoverback}` : "transparent",
                                    height:"345px"
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
                onClick={handleOpen}
                >
                    Become a Partner
                </Button>  
                <div className="specifications" style={{ fontSize: "16px" ,textAlign:"center"}}>
                    For partnership inquiries, contact us at{" "}
                    <a
                        href="mailto:partners@stateofai.ma"
                        style={{ color: "rgba(29, 122, 99, 0.98)", textDecoration: "none" }}
                    >
                        partners@stateofai.ma
                    </a>
                </div>               
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" 
                sx={{
                    "& .MuiPaper-root": {
                    borderRadius: "18px",
                    },
                }}
            >
                <DialogTitle sx={{ fontWeight: "700", textAlign:"center",color:"#5D1725",fontSize:"30px",paddingBottom:"0px"}}>Become a Partner</DialogTitle>
                <DialogTitle className="specifications" sx={{ textAlign:"center",fontSize:"16px",paddingTop:"0px"}}>Join us in shaping the future of AI in Morocco. Fill out the form below to start the partnership process.</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                        <TextField  label="Full Name" variant="outlined" 
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: "#A01B20",
                                }
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                color: "#A01B20",
                                },
                            }}
                            value={formsData.name} onChange={(e) => {
                                setFormsData({ ...formsData, name: e.target.value });
                            }}
                        />
                        <TextField label="Email" type="Email" variant="outlined" fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: "#A01B20",
                                }
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                color: "#A01B20",
                                },
                            }} 
                            value={formsData.email} onChange={(e) => {
                                setFormsData({ ...formsData, email: e.target.value });
                            }}                       
                        />
                        <FormControl fullWidth 
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: "#A01B20",
                                }
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                color: "#A01B20",
                                },
                            }}                          
                        >
                            <InputLabel>Area of Expertise</InputLabel>
                            <Select value={formsData.expertise} onChange={(e) => {
                                setFormsData({ ...formsData, expertise: e.target.value });
                            }} label="Area of Expertise">
                                <MenuItem value="">Select your area of expertise</MenuItem>
                                <MenuItem value="AI Research">AI Research</MenuItem>
                                <MenuItem value="Industry Application">Industry Application</MenuItem>
                                <MenuItem value="AI Policy">AI Policy</MenuItem>
                                <MenuItem value="AI Ethics">AI Ethics</MenuItem>
                                <MenuItem value="AI Education">AI Education</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
                            <Button onClick={handleClose} variant="outlined" sx={{ borderColor: "#C12026", color: "#C12026",borderRadius: "28px" }}>
                                Cancel
                            </Button>
                            <Button onClick={addPartner} variant="contained" sx={{ backgroundColor: "#C12026", "&:hover": { backgroundColor: "#A01B20" },borderRadius: "28px",padding:"9px 17px" }}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
                
            </Dialog>
            <Snackbar open={messageOpen} autoHideDuration={4000} onClose={messageHandleClose}>
                <Alert onClose={messageHandleClose} severity={message.type} variant="filled">
                    {message.text}
                </Alert>
            </Snackbar>
        </>
    );
}