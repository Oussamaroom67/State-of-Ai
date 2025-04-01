export default function Navigation() { 
    const handleScroll = (e, sectionId) => {
        e.preventDefault();  // Prevent default anchor behavior
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return ( 
        <nav> 
            <div className="logo"> 
                <img src="../../public/images/imageLogo-removebg-preview (1).png" alt="Logo" /> 
                <h1>State Of AI</h1> 
            </div> 
            <div className="links"> 
                <ul> 
                    <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li> 
                    <li><a href="#statistics" onClick={(e) => handleScroll(e, "statistics")}>Statistics</a></li> 
                    <li><a href="#participate" onClick={(e) => handleScroll(e, "participate")}>Participate</a></li> 
                    <li><a href="#for_companies" onClick={(e) => handleScroll(e, "for_companies")}>For Companies</a></li> 
                </ul> 
            </div> 
            <div className="join"> 
                <button>Join Now</button> 
            </div> 
        </nav> 
    ); 
}
