export default function Navigation(){
    return(
        <nav>
                <div className="logo">
                    <img src="../../public/images/imageLogo-removebg-preview (1).png" alt="Logo" />
                    <h1>State Of AI </h1>
                </div>
                <div className="links">
                    <ul >
                        <li><a href="/">About</a></li>
                        <li><a href="/about">Statistics</a></li>
                        <li><a href="/contact">Participate</a></li>
                        <li><a href="/contact">For Companies</a></li>
                    </ul>
                </div>
                <div className="join">
                    <button>Join Now</button>
                </div>
        </nav>
    );
}


