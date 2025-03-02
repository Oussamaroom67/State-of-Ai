import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer(){
    const Day = new Date().getFullYear();

    return(
        <div className="footer">
            <div className="head">
                <div className="info">
                    <div className="logo">
                        <img src="public/images/imageLogo-removebg-preview (1).png" alt="Logo" />
                        <h1>State Of AI </h1>
                    </div>
                    <div className="description" style={{textAlign:"start"}}>
                        The first comprehensive data collection initiative mapping the landscape of AI and data science across Morocco.
                    </div>
                    <div className="social-media">
                        <a href="https://www.youtube.com/@MoroccanDS" className="" target='blank'><YouTubeIcon/></a>
                        <a href="https://www.linkedin.com/company/moroccands/" className="" target='blank'><LinkedInIcon /></a>
                        <a href="https://github.com/Moroccan-Data-Scientists" className=""target='blank'><GitHubIcon/></a>
                    </div>
                </div>
                <div className="links">
                    <div className="title">Quick Links</div>
                    <div className="list">
                        <a href="">About</a>
                        <a href="">Statistics</a>
                        <a href="">Participate</a>
                        <a href="">For Companies</a>
                    </div>
                </div>
                <div className="contact">
                    <div className="title">Contact Us</div>
                    <div className="infos">
                        <div className="email">
                        contact@stateofai.me
                        </div>

                        <div className="phone">
                            +212 6 457 733
                        </div>   

                        <div className="address">
                            Morocco, Rabat
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{width:"100%"}} />
            <div className="copyright">
                    <div className="date">
                        © {Day} State of AI Morocco. All rights reserved.
                    </div>
                    <div className="policy">
                        <div>Privacy Policy</div> 
                         <div>Terms of Service</div>
                    </div>
            </div>
        </div>
    )
}