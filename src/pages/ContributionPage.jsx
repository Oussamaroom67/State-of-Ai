import '../assets/css/ContributionPage.css';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect, useRef, useContext } from 'react';
import { StatsContext } from '../StatsContext';

import supabase from "../supabaseClient";


function AIBackgroundCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const updateCanvasSize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        window.addEventListener("resize", updateCanvasSize);
        updateCanvasSize();

        const colors = ["#C1272D", "#006233"]; // Rouge et vert du drapeau marocain

        const nodes = Array.from({ length: 40 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 2,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = "rgba(151, 148, 148, 0.3)"; // Lignes en rouge semi-transparent
            ctx.lineWidth = 1;
            nodes.forEach((node, i) => {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            });

            nodes.forEach((node) => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = node.color;
                ctx.fill();
            });

            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            });

            requestAnimationFrame(draw);
        }

        draw();

        return () => window.removeEventListener("resize", updateCanvasSize);
    }, []);

    return <canvas ref={canvasRef} className="ai-background-canvas" />;
}


  

export default function ContributionPage() {
    const [formsData, setFormsData] = useState({ name: '', email: '' });
    const [message, setMessage] = useState({ text: "", type: "" });
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const addUser = async () => {
        console.log("Button clicked"); // Debugging log
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the email is valid

        if (!formsData.name || !formsData.email) {
            console.error("Please fill in all fields.");
            setMessage({ text: "Please fill in all fields!", type: "error" });
            setOpen(true);
            setTimeout(() => setOpen(false), 3000);

            return;
        }
        if (!emailRegex.test(formsData.email)) {
            console.error("Invalid email format.");
            setMessage({ text: "Invalid email format.", type: "error" });
            setOpen(true);
            setTimeout(() => setOpen(false), 3000);
            return;
        }
    
        const { data, error } = await supabase.from("state_ai_participant").insert([
            { name: formsData.name, email: formsData.email }
        ]);
    
        if (error) {
            setMessage({ text: `Error: ${error.message}`, type: "error" });
        } else {
            console.log("User added successfully:", data);
            setMessage({ text: "User added successfully!", type: "success" });
            setFormsData({ name: "", email: "" }); // Reset form
        }

        setOpen(true);
    };
    const { professionals } = useContext(StatsContext);
    
    return (
        <>
            <div className="contribution" id="participate">
                <div className="inscription">
                    <div className="description" style={{textAlign:"start"}}>
                        <div className="title">
                            Be Part of Morocco's AI Revolution
                        </div>
                        <div className="information">
                            Help us map the landscape of AI and data science in Morocco. Your contribution will shape the future of technology in our country.
                        </div>
                    </div>
                    <div className="form">
                        <div className="head">
                            <Diversity3Icon 
                                style={{
                                    backgroundColor: "rgba(29, 122, 99, 0.1)", 
                                    borderRadius: "50%", 
                                    padding: "10px", 
                                    fontWeight: "bold", 
                                    fontSize: "30px"
                                }} 
                            />
                            <div className="count">
                                <h4>{professionals}<span>+</span></h4>
                                <span>People already participating</span>
                            </div>
                        </div>
                        <div className="inputs">
                            <div className="field">
                                <label>Name</label>
                                <input type="text" required placeholder='your_name' value={formsData.name} onChange={(e) => {
                                    setFormsData({ ...formsData, name: e.target.value });
                                }}/>
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input type="email" required placeholder='your_email@example.com' value={formsData.email} onChange={(e) => {
                                    setFormsData({ ...formsData, email: e.target.value });
                                }}/>
                            </div>
                            <button onClick={addUser}>Join The Initiative</button>
                            <div className="agree">By submitting, you agree to receive updates about the State of AI Morocco project and to participate in 1vs1 interviews.</div>
                        </div>
                    </div>
                </div>

                <div className="design-card">
                    <AIBackgroundCanvas />
                </div>
            </div>
            {/* Snackbar for Notifications */}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message.type} variant="filled">
                    {message.text}
                </Alert>
            </Snackbar>
        </>
    );
}